
rpc.IMClient = function(_uid, _callback) {
	this.uid = _uid;
	this.callback = _callback;
	this.lastLoadOfflineTime = 0;
	this.webSocket = null;
	this.status = rpc.IMClient.IMClientStatus_Connecting;
	this.startConnectTime = 0;
	this.reconnectCount = 0;
	this.lastTryLoadOfflineTime = 0;
};

rpc.IMClient.LOAD_OFFLINE_INTERVAL = 900;
rpc.IMClient.LOAD_OFFLINE_PAGESIZE = 100;
rpc.IMClient.IMClientStatus_Connecting = 0;
rpc.IMClient.IMClientStatus_Connected = 1;
rpc.IMClient.IMClientStatus_Closing = 2;
rpc.IMClient.IMClientStatus_Closed = 3;

rpc.IMClient.prototype.start = function() {
	this.doConnect();
	this.doLoadOfflineMsg(0, 0);
	var me = this;
	window.setTimeout(function() {
		me.checkAndLoadOfflineMsg();
	}, rpc.IMClient.LOAD_OFFLINE_INTERVAL * 1000);
};

rpc.IMClient.prototype.checkAndLoadOfflineMsg = function() {
	if(!this.isClientActive())
		return;
	if(new Date().getTime() - this.lastLoadOfflineTime >= ((rpc.IMClient.LOAD_OFFLINE_INTERVAL - 1) * 1000)) {
       	this.doLoadOfflineMsg(0, 0);
    }
    var me = this;
    window.setTimeout(function() {
		me.checkAndLoadOfflineMsg();
	}, rpc.IMClient.LOAD_OFFLINE_INTERVAL * 1000);
};

rpc.IMClient.prototype.processOfflineMsg = function(arr) {
	var len = arr ? arr.length : 0;
	if(len < 1)
		return;
	var maxTime = 0;
	var newArr = [];
	for(var i = 0; i < len; i++) {
		var msg = arr[i];
		var realMsg = rpc.RpcClassMap.createMsg(msg.getMsgType());
		if(!realMsg) {
			newArr.push(msg);
			continue;
		}
		realMsg.convertFrom(msg.getAsObject(true, false), true);
		newArr.push(realMsg);
		var createTime = realMsg.getCreateTime();
		if(createTime < 10) {
			continue;
		}
		if(createTime > maxTime)
			maxTime = createTime;
	}

	if(self.callback && self.callback.dealWithMessage && newArr.length > 0) {
		self.callback.dealWithMessage(newArr);
	}

	if(len >= rpc.IMClient.LOAD_OFFLINE_PAGESIZE) {
		self.doLoadOfflineMsg(maxTime, 0);
	}
};

rpc.IMClient.prototype.doLoadOfflineMsg = function(startTime, retryCount) {
	if(!this.isClientActive())
		return;
	if(retryCount > 5)
		return;
	if(this.isGettingOffline)
		return;

	var now = new Date().getTime();
	if(retryCount != 0 && now  - this.lastLoadOfflineTime < (10 * 1000))
        return;
    var me = this;
    this.lastTryLoadOfflineTime = now;
    this.isGettingOffline = true;
    rpc.IMService.loadOfflineMsg(startTime, rpc.IMClient.LOAD_OFFLINE_PAGESIZE, function(returnCode, obj) {
    	me.isGettingOffline = false;
    	if(isOK(returnCode) && obj) {
    		me.lastLoadOfflineTime = new Date().getTime();
    		me.processOfflineMsg(obj);
    	}
    }, function() {
    	me.isGettingOffline = false;
    	window.setTimeout(function() {
			me.doLoadOfflineMsg(startTime, retryCount + 1);
		}, 60 * 1000);
    });
};

rpc.IMClient.prototype.getSessionId = function() {
    if(!this.uid)
        return null;
    if(rpc.IMClientManager.getClient(this.uid) != this)
        return null;
    var parts = getUidAndSession()
    return parts && parts['session'];
};

rpc.IMClient.prototype.isClientActive = function() {
    if(!this.uid)
        return false;
    var session = this.getSessionId();
    var ret = this.callback && session && session.length > 1;
    return ret;
};

rpc.IMClient.prototype.destroy= function() {
    this.callback = null;
};

rpc.IMClient.prototype.doConnect = function() {
	this.status = rpc.IMClient.IMClientStatus_Connecting;
	this.startConnectTime = new Date().getTime();
	var session = this.getSessionId();
	if(!session || session.length < 2) {
		return;
	}

	if(!window.WebSocket) {
		this.debug("not support websocket");
		return;
	}

	if(this.webSocket) {
		var state = this.webSocket.readyState;
		if(state != WebSocket.CLOSING && state != WebSocket.CLOSED) {
			this.webSocket.close();
		}
		this.webSocket = null;
	}

	this.pipeKey = null;
	var url = rpc.ServerConfig.getUrlPrefix("Long");
	url += "?";
	url += rpc.HttpRequestConstants.KEY_UID;
	url += "=";
	url += encodeURIComponent(this.uid);
	url += "&";
	url += rpc.HttpRequestConstants.KEY_SESSION;
	url += "=";
	url += encodeURIComponent(session);
	url += "&";
	url += rpc.HttpRequestConstants.KEY_DEVICE_TYPE;
	url += "=";
	//url += rpc.DeviceType.HTML_TYPE;
	url += rpc.DeviceType.IOS_TYPE;
	url += "&";
	url += rpc.HttpRequestConstants.KEY_DEVICE_ID;
	url += "=";
	url += encodeURIComponent(getDeviceId());
	url += "&";
	url += rpc.HttpRequestConstants.KEY_MODE;
	url += "=";
	url += rpc.HttpRequestConstants.MODE_NOZIP;
	this.debug(url);
	this.webSocket = new WebSocket(url);
	var me = this;
	this.webSocket.onopen = function() {
		me.debug("onopen");
		// if(this != me.webSocket) {
		// 	me.debug("not self, this=" + (typeof this));
		// 	return;
		// }
		me.status = rpc.IMClient.IMClientStatus_Connected;
		me.reconnecting = false;
		me.reconnectCount = 0;
		var socket = this;
		window.setTimeout(function() {
			me.checkPipeKeyInit(socket);
		}, 15 * 1000);
	};
	this.webSocket.onmessage = function(msg) {
		me.debug("onmessage");
		// if(this != me.webSocket) {
		// 	me.debug("not self");
		// 	return;
		// }
		if(!msg.data)
			return;
		if(!me.isClientActive())
			return;
		if(!isString(msg.data)) {
			me.debug("onmessage no string, type=" + (typeof msg.data));
			return;
		}
		if(msg.data.length < 3)
			return;
		me.parserMessage(msg.data);
	};
	this.webSocket.onerror = function(error) {
		me.debug("onerror");
		// if(this != me.webSocket) {
		// 	me.debug("not self");
		// 	return;
		// }
		if(!me.isClientActive())
			return;
		me.status = rpc.IMClient.IMClientStatus_Connected;
		me.checkAndReconnect();
	};
	this.webSocket.onclose = function() {
		me.debug("onclose");
		// if(this != me.webSocket) {
		// 	me.debug("not self");
		// 	return;
		// }
		if(!me.isClientActive())
			return;
		me.status = rpc.IMClient.IMClientStatus_Connected;
		me.checkAndReconnect();
	};
};



rpc.IMClient.prototype.getPipeKey = function() {
	return this.pipeKey;
};

rpc.IMClient.prototype.getDeviceToken = function() {
	return getDeviceId();
};

rpc.IMClient.prototype.enterBackground = function() {
	var token = this.getDeviceToken();
	var me = this;
	rpc.IMService.enterBackgroudMode(true, token, new Date().getTime(), function(returnCode, obj){
		me.debug('enterBackground ret=' + returnCode);
	}, function() {
		me.debug('enterBackground failed');
	});
};

rpc.IMClient.prototype.enterForeground = function() {
	var token = this.getDeviceToken();
	var me = this;
	rpc.IMService.enterBackgroudMode(false, token, new Date().getTime(), function(returnCode, obj){
		me.debug('enterForeground ret=' + returnCode);
	}, function() {
		me.debug('enterForeground failed');
	});

	this.doLoadOfflineMsg(0, 0);
	this.reconnectNow();
};


rpc.IMClient.prototype.reconnectNow = function() {
	if(this.isConnected())
		return;
	if(!this.isClientActive())
		return ;
	this.doConnect();
};

rpc.IMClient.prototype.isConnected = function() {
	if(!this.isClientActive())
		return false;
	return self.status == rpc.IMClient.IMClientStatus_Connected;
};

rpc.IMClient.prototype.isReconnecting = function() {
    if(!this.isClientActive())
		return false;
    return this.reconnecting && !this.isConnected();
};

rpc.IMClient.prototype.doReconnect = function() {
	this.isFiringReconnect = false;
	if(!this.isClientActive())
		return;
	if(this.isConnected())
		return;
	if(this.status == rpc.IMClient.IMClientStatus_Connecting && new Date().getTime() - this.startConnectTime < 45000) {
		this.checkAndReconnect();
		return;
	}
	this.doConnect();
};

rpc.IMClient.prototype.getRandomNumber = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

rpc.IMClient.prototype.checkAndReconnect = function() {
	if(!this.isClientActive())
		return;
	if(this.isConnected())
		return;
	if(this.isFiringReconnect)
		return;
	this.isFiringReconnect = true;
	var offset = 5000; //ms
	this.reconnecting = true;
	if(this.reconnectCount < 3) {
		offset = this.getRandomNumber(2000, 5000);
	} else if(this.reconnectCount < 8) {
		offset = this.getRandomNumber(6000, 10000);
	} else if(this.reconnectCount < 15) {
		offset = this.getRandomNumber(12000, 15000);
	} else {
		offset = this.getRandomNumber(15000, 30000);
	}
	this.reconnectCount++;
	var me = this;
	window.setTimeout(function() {
		me.doReconnect();
	}, offset);
};

rpc.IMClient.prototype.checkPipeKeyInit = function(socket) {
	if(socket != this.webSocket) {
		return;
	}
	if(this.pipeKey)
		return;
	this.reconnectCount = 5;
	socket.close();
	this.debug('checkPipeKeyInit close websocket');
};

rpc.IMClient.prototype.toMessage = function(aMessage) {
	var len = aMessage.length;
    var jsonData = {};
    var isKey = true;
    var key = "";
    var value = "";
    var i = 0;
    var flag = 0;
    for (; i < len; i++)
    {
        var c = aMessage.charAt(i);
        if (c == ':' && isKey)
        {
            isKey = false;
        }
        else if (c == '\n')
        {
            if (key.length < 1)
            {
                break;
            }
            if (rpc.RpcMessageBase.FIELD_FLAG_CONFUSION === key)
            {
                flag = parseInt(value);
            }
            else
            {
                jsonData[key] = value;
            }
            value = "";
            key = "";
            isKey = true;
        }
        else
        {
            if (isKey)
            {
                key += c;
            }
            
            else
            {
                value += c;
            }
            
        }
    }
    if (i + 1 < len)
    {
        var jsonStr = aMessage.substring(i + 1);
        var jsonObj = JSON.parse(jsonStr);
        if (jsonObj)
        {
            for(var jsonKey in jsonObj)
            {
                var jsonValue = jsonObj[jsonKey];
                jsonData[jsonKey] = jsonValue;
            }
        }
    }
    var type = jsonData[rpc.RpcMessageBase.FIELD_MSGTYPE_CONFUSION];
    var msg = rpc.RpcClassMap.createMsg(type);
    if (!msg)
    {
        this.debug("unkown msg=" + type);
        return null;
    }
    msg.convertFrom(jsonData, true);
    return msg;
};

rpc.IMClient.prototype.parserMessage = function(msgStr) {
	this.debug(msgStr);
	var msg = this.toMessage(msgStr);
	if(!msg) {
		return;
	}
	var type = msg.getMsgType();
    var flag = msg.getFlag();

    if((flag & rpc.MessageFlag.Event) != 0 ) {
    	if (type == rpc.PipeInitedMessage.TYPE) {
    		var _pipeKey = msg.getPipeKey();
    		if(!_pipeKey) {
    			if (rpc.IReturnCode.SESSION_TIMEOUTED == msg.getReturnCode())
                {
                	rpc.IMClientManager.destroyClient(this.uid);
                	if(window.onKickout) {
						window.onKickout();
                	}
                }
    			return;
    		}
    		this.lastPongTime = new Date().getTime();
            this.pipeKey = _pipeKey;
            this.debug("pipeKey: " + _pipeKey);
            if (this.callback && this.callback.onPipeCreated)
            {
                this.callback.onPipeCreated(_pipeKey);
            }
            
            if (new Date().getTime() - this.lastTryLoadOfflineTime > 5000)
            {
                this.doLoadOfflineMsg(0, 0);
            }
    		return;
    	}

    	if (type == rpc.LoadOfflineEvent.TYPE)
        {
            this.doLoadOfflineMsg(0, 0);
            return;
        }
        
        if (type == rpc.KickOut.TYPE) {
            this.debug("received kickout message");
            rpc.IMClientManager.destroyClient(this.uid);
            if(window.onKickout) {
				window.onKickout();
            }
            return;
        }
    }

    if (this.callback && this.callback.dealWithMessage)
    {
        this.callback.dealWithMessage([msg]);
    }
};

rpc.IMClient.prototype.debug = function(str) {
	console.log(str);
};

