function RpcNamespace(namespaceString) {
	var parts = namespaceString.split('.'), parent = window, currentPart = '';

	for (var i = 0, length = parts.length; i < length; i++) {
		currentPart = parts[i];
		parent[currentPart] = parent[currentPart] || {};
		parent = parent[currentPart];
	}

	return parent;
} 

function deepExtend(destination, source) {
	for (var property in source) {
		if (source[property] && source[property].constructor && source[property].constructor === Object) {
			destination[property] = destination[property] || {};
			arguments.callee(destination[property], source[property]);
		} else {
			destination[property] = source[property];
		}
	}
	return destination;
};

function objectClone(obj) {
	if (null == obj || "object" != typeof obj)
		return obj;
	var copy = obj.constructor();
	for (var attr in obj) {
		if (obj.hasOwnProperty(attr))
			copy[attr] = obj[attr];
	}
	return copy;
}

RpcCall = {};
RpcCall.doInvoke = function(url, method, args, uploads, success, fail) {
	var fullUrl = url + "?v=0&t=4";
	var dId = getDeviceId();
	var parts = getUidAndSession();
	var uid = parts['uid'];
	if (dId) {
		fullUrl += "&" + rpc.HttpRequestConstants.KEY_DEVICE_ID + "=";
		if (uid) {
			var shortId = dId.substring(dId.length - 4);
			fullUrl += shortId;
		} else {
			fullUrl +=  dId;
		}
	}
	if (uid) {
		fullUrl += "&"+ rpc.HttpRequestConstants.KEY_UID +"=" + uid;
	}

	fullUrl += "&" + rpc.HttpRequestConstants.KEY_MODE + "=" + rpc.HttpRequestConstants.MODE_CONFUSION;
	
	var session = parts['session'];
	if(session) {
		fullUrl += "&" + rpc.HttpRequestConstants.KEY_SESSION + "=" + session;
	}

	if (uploads && Object.keys(uploads).length > 0) {
		var key = null;
		for (key in uploads) {
		}
		if(uploads[key] instanceof File) {
			var form = new FormData();
			form.append(key,uploads[key]);
			if (args && Object.keys(args).length > 0) {
				form.append(rpc.HttpRequestConstants.KEY_DATA,  JSON.stringify(args));
			}
			var xhr = new XMLHttpRequest();
			xhr.timeout = 30 * 1000;
			xhr.open("POST", fullUrl, true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						var json = JSON.parse(xhr.responseText);
						var returnCode = json[rpc.HttpRequestConstants.KEY_RETURN_CODE];
						if (returnCode == undefined)
							returnCode = -1;
						if (returnCode == rpc.IReturnCode.SESSION_TIMEOUTED) {
							if(window.onKickout)
								window.onKickout();
							return;
						}
						if (success) {
							success(returnCode, json[rpc.HttpRequestConstants.KEY_RESP]);
						}
					} else {
						if (fail)
							fail(xhr.status);
					}
				}
			};
			xhr.ontimeout = function() {
				if (fail)
					fail(-1);
			};
			xhr.send(form);
			return xhr;
		}
		var params = null;
		if (args && Object.keys(args).length > 0) {
			params = {};
			params[rpc.HttpRequestConstants.KEY_DATA] = JSON.stringify(args);
		}
		var options = new FileUploadOptions();
		options.fileKey = key;
		options.fileName = key;
		options.mimeType = "image/jpeg";
		if (params) {
			options.params = params;
		}
		var fileTransfer = new FileTransfer();
		fileTransfer.upload(uploads[key], encodeURI(fullUrl), function(r) {
			if (r.responseCode == 200) {
				var json = JSON.parse(r.response);
				var returnCode = json[rpc.HttpRequestConstants.KEY_RETURN_CODE];
				if (returnCode == undefined)
					returnCode = -1;
				if (returnCode == rpc.IReturnCode.SESSION_TIMEOUTED) {
					if(window.onKickout)
						window.onKickout();
					return;
				}
				if (success) {
					success(returnCode, json[rpc.HttpRequestConstants.KEY_RESP]);
				}
			} else {
				if (fail)
					fail(r.responseCode);
			}
		}, function(error) {
			if (fail)
				fail(error.code);
		}, options);
		return fileTransfer;
	}

	var data = null;
	if (args && Object.keys(args).length > 0) {
		//data = rpc.HttpRequestConstants.KEY_DATA + "=" + encodeURIComponent(JSON.stringify(args));
		fullUrl += "&" + rpc.HttpRequestConstants.KEY_DATA + "=" + encodeURIComponent(JSON.stringify(args));
	}

	var xhr = new XMLHttpRequest();
	xhr.timeout = 15 * 1000;
	//xhr.withCredentials = true;
	xhr.open("POST", fullUrl, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var json = JSON.parse(xhr.responseText);
				var returnCode = json[rpc.HttpRequestConstants.KEY_RETURN_CODE];
				if (returnCode == undefined)
					returnCode = -1;
				if (returnCode == rpc.IReturnCode.SESSION_TIMEOUTED) {
					if(window.onKickout)
						window.onKickout();
					return;
				}
				if (success) {
					success(returnCode, json[rpc.HttpRequestConstants.KEY_RESP]);
				}
			} else {
				if (fail)
					fail(xhr.status);
			}
		}
	};
	xhr.ontimeout = function() {
		if (fail)
			fail(-1);
	};

	if (data) {
		xhr.send(data);
	} else {
		xhr.send();
	}
	return xhr;
};

function isOK(returnCode) {
	return returnCode === rpc.IReturnCode.OK;
}

function genGuid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

function getDeviceId() {
	if (window._deviceId)
		return window._deviceId;
	window._deviceId = window.localStorage.getItem("__deviceId");
	if (window._deviceId) {
		return window._deviceId;
	}
	window._deviceId = genGuid();
	window.localStorage.setItem("__deviceId", window._deviceId);
	return window._deviceId;
}

function isLogined() {
  	if(window._logined) return window._logined;
	var uid = window.localStorage.getItem("__uid");
	if (!uid || uid.length < 2) {
		return false;
	}
	var session = window.localStorage.getItem("__session");
	window._logined =  session && session.length > 1;
  return window._logined;
}

function getCurrentUid() {
  	if(window._uid) return window._uid;
	var uid = window.localStorage.getItem("__uid");
	if (!uid || uid.length < 2) {
		return null;
	}
	var session = window.localStorage.getItem("__session");
	if (session && session.length > 1) {
    	window._uid = uid;
		return uid;
	}
	return null;
}

function getLastLoginUsername() {
	var uid = window.localStorage.getItem("__uname");
	return uid;
}

function setLastLoginUsername(username) {
  	window.localStorage.setItem("__uname", username);
}

function getUidAndSession() {
	var uid = window.localStorage.getItem("__uid");
	var session = window.localStorage.getItem("__session");
	return {
		'uid' : uid,
		'session' : session
	};
}

function saveUidAndSession(uid, session) {
	window.localStorage.setItem("__uid", uid);
	window.localStorage.setItem("__session", session);
}

function logout() {
	var uid = window.localStorage.getItem("__uid");
	window.localStorage.removeItem("__session");
	if(uid) {
		rpc.IMClientManager.destroyClient(uid);
	}
}

function isString(s) {
    return typeof(s) === 'string' || s instanceof String;
}
