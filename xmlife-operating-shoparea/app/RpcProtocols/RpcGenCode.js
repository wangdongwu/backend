RpcNamespace("rpc");

rpc.UserAuthInfo = function() {};
rpc.UserAuthInfo.prototype.getAccname = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["accname"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["accname"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["accname"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.UserAuthInfo.prototype.setAccname = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["accname"];
	else
		this.mObj["accname"] = _value_value0;

	if(value) {
		this.mValueCache["accname"] = value;
	} else {
		delete this.mValueCache["accname"];
	}
	return this;
};

rpc.UserAuthInfo.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.UserAuthInfo.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.UserAuthInfo.prototype.getIsNew = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isNew"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isNew"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isNew"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.UserAuthInfo.prototype.setIsNew = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isNew"];
	else
		this.mObj["isNew"] = _value_value0;

	if(value) {
		this.mValueCache["isNew"] = value;
	} else {
		delete this.mValueCache["isNew"];
	}
	return this;
};

rpc.UserAuthInfo.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.UserAuthInfo.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.UserAuthInfo.prototype.getSessionId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["sessionId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["sessionId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["sessionId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.UserAuthInfo.prototype.setSessionId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["sessionId"];
	else
		this.mObj["sessionId"] = _value_value0;

	if(value) {
		this.mValueCache["sessionId"] = value;
	} else {
		delete this.mValueCache["sessionId"];
	}
	return this;
};

rpc.UserAuthInfo.prototype.getUid = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.UserAuthInfo.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.UserAuthInfo.FIELD_UID="uid";
rpc.UserAuthInfo.FIELD_UID_CONFUSION="uid";
rpc.UserAuthInfo.FIELD_SESSIONID="sessionId";
rpc.UserAuthInfo.FIELD_SESSIONID_CONFUSION="sessionId";
rpc.UserAuthInfo.FIELD_CREATED="created";
rpc.UserAuthInfo.FIELD_CREATED_CONFUSION="created";
rpc.UserAuthInfo.FIELD_ISNEW="isNew";
rpc.UserAuthInfo.FIELD_ISNEW_CONFUSION="isNew";
rpc.UserAuthInfo.FIELD_ACCNAME="accname";
rpc.UserAuthInfo.FIELD_ACCNAME_CONFUSION="accname";
rpc.UserAuthInfo.FIELD_NAME="name";
rpc.UserAuthInfo.FIELD_NAME_CONFUSION="name";

rpc.UserAuthInfo.checkAndInitial = function() {
    if(rpc.UserAuthInfo.mFieldToConfusionMap)
        return;
	
	rpc.UserAuthInfo.mHasConfusionField = false;
	rpc.UserAuthInfo.mFieldToConfusionMap = {
		"uid":"uid", 
		"sessionId":"sessionId", 
		"created":"created", 
		"isNew":"isNew", 
		"accname":"accname", 
		"name":"name"
	};
	rpc.UserAuthInfo.mConfusionToFieldMap = {
		"uid":"uid", 
		"sessionId":"sessionId", 
		"created":"created", 
		"isNew":"isNew", 
		"accname":"accname", 
		"name":"name"
	};

};

rpc.UserAuthInfo.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.UserAuthInfo.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.UserAuthInfo.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.UserAuthInfo.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.UserAuthInfo.toConfusionObject(this.mObj, clone);
};

rpc.UserAuthInfo.getConfusionName = function(name) {
    rpc.UserAuthInfo.checkAndInitial();
    var value = rpc.UserAuthInfo.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.UserAuthInfo.getRawName = function(confusionName) {
    rpc.UserAuthInfo.checkAndInitial();
    var value = rpc.UserAuthInfo.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.UserAuthInfo.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.UserAuthInfo.checkAndInitial();
    if (!rpc.UserAuthInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.UserAuthInfo.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.UserAuthInfo.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.UserAuthInfo.checkAndInitial();
    if (!rpc.UserAuthInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.UserAuthInfo.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.UserAuthInfo.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.UserAuthInfo.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.UserAuthInfo.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.UserAuthInfo.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.WeiboUser = function() {};
rpc.WeiboUser.prototype.getAvatar = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["avatar"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["avatar"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["avatar"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WeiboUser.prototype.setAvatar = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["avatar"];
	else
		this.mObj["avatar"] = _value_value0;

	if(value) {
		this.mValueCache["avatar"] = value;
	} else {
		delete this.mValueCache["avatar"];
	}
	return this;
};

rpc.WeiboUser.prototype.getGender = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["gender"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["gender"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["gender"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WeiboUser.prototype.setGender = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["gender"];
	else
		this.mObj["gender"] = _value_value0;

	if(value) {
		this.mValueCache["gender"] = value;
	} else {
		delete this.mValueCache["gender"];
	}
	return this;
};

rpc.WeiboUser.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WeiboUser.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.WeiboUser.prototype.getWeiboid = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["weiboid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["weiboid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["weiboid"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WeiboUser.prototype.setWeiboid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["weiboid"];
	else
		this.mObj["weiboid"] = _value_value0;

	if(value) {
		this.mValueCache["weiboid"] = value;
	} else {
		delete this.mValueCache["weiboid"];
	}
	return this;
};

rpc.WeiboUser.FIELD_WEIBOID="weiboid";
rpc.WeiboUser.FIELD_WEIBOID_CONFUSION="weiboid";
rpc.WeiboUser.FIELD_NAME="name";
rpc.WeiboUser.FIELD_NAME_CONFUSION="name";
rpc.WeiboUser.FIELD_GENDER="gender";
rpc.WeiboUser.FIELD_GENDER_CONFUSION="gender";
rpc.WeiboUser.FIELD_AVATAR="avatar";
rpc.WeiboUser.FIELD_AVATAR_CONFUSION="avatar";

rpc.WeiboUser.checkAndInitial = function() {
    if(rpc.WeiboUser.mFieldToConfusionMap)
        return;
	
	rpc.WeiboUser.mHasConfusionField = false;
	rpc.WeiboUser.mFieldToConfusionMap = {
		"weiboid":"weiboid", 
		"name":"name", 
		"gender":"gender", 
		"avatar":"avatar"
	};
	rpc.WeiboUser.mConfusionToFieldMap = {
		"weiboid":"weiboid", 
		"name":"name", 
		"gender":"gender", 
		"avatar":"avatar"
	};

};

rpc.WeiboUser.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.WeiboUser.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.WeiboUser.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.WeiboUser.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.WeiboUser.toConfusionObject(this.mObj, clone);
};

rpc.WeiboUser.getConfusionName = function(name) {
    rpc.WeiboUser.checkAndInitial();
    var value = rpc.WeiboUser.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.WeiboUser.getRawName = function(confusionName) {
    rpc.WeiboUser.checkAndInitial();
    var value = rpc.WeiboUser.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.WeiboUser.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.WeiboUser.checkAndInitial();
    if (!rpc.WeiboUser.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.WeiboUser.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.WeiboUser.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.WeiboUser.checkAndInitial();
    if (!rpc.WeiboUser.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.WeiboUser.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.WeiboUser.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.WeiboUser.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.WeiboUser.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.WeiboUser.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.WeiboFriend = function() {this.checkAndCreate();};
deepExtend(rpc.WeiboFriend.prototype, rpc.WeiboUser.prototype);
rpc.WeiboFriend.prototype.getRegistered = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["registered"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["registered"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["registered"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WeiboFriend.prototype.setRegistered = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["registered"];
	else
		this.mObj["registered"] = _value_value0;

	if(value) {
		this.mValueCache["registered"] = value;
	} else {
		delete this.mValueCache["registered"];
	}
	return this;
};

rpc.WeiboFriend.FIELD_REGISTERED="registered";
rpc.WeiboFriend.FIELD_REGISTERED_CONFUSION="registered";

rpc.WeiboFriend.checkAndInitial = function() {
    if(rpc.WeiboFriend.mFieldToConfusionMap)
        return;
	
	rpc.WeiboFriend.mHasConfusionField = false;
	rpc.WeiboFriend.mFieldToConfusionMap = {
		"registered":"registered"
	};
	rpc.WeiboFriend.mConfusionToFieldMap = {
		"registered":"registered"
	};

};

rpc.WeiboFriend.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.WeiboFriend.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.WeiboFriend.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.WeiboFriend.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.WeiboFriend.toConfusionObject(this.mObj, clone);
};

rpc.WeiboFriend.getConfusionName = function(name) {
    rpc.WeiboFriend.checkAndInitial();
    var value = rpc.WeiboFriend.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.WeiboUser.getConfusionName(name);
};
    
rpc.WeiboFriend.getRawName = function(confusionName) {
    rpc.WeiboFriend.checkAndInitial();
    var value = rpc.WeiboFriend.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.WeiboUser.getRawName(confusionName);
};

rpc.WeiboFriend.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.WeiboFriend.checkAndInitial();
    if (!rpc.WeiboFriend.mHasConfusionField) {
        return rpc.WeiboUser.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.WeiboFriend.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.WeiboFriend.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.WeiboFriend.checkAndInitial();
    if (!rpc.WeiboFriend.mHasConfusionField) {
        return rpc.WeiboUser.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.WeiboFriend.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.WeiboFriend.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.WeiboFriend.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.WeiboFriend.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.WeiboFriend.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.WeiboUser = function() {};
rpc.WeiboUser.prototype.getAvatar = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["avatar"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["avatar"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["avatar"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WeiboUser.prototype.setAvatar = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["avatar"];
	else
		this.mObj["avatar"] = _value_value0;

	if(value) {
		this.mValueCache["avatar"] = value;
	} else {
		delete this.mValueCache["avatar"];
	}
	return this;
};

rpc.WeiboUser.prototype.getGender = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["gender"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["gender"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["gender"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WeiboUser.prototype.setGender = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["gender"];
	else
		this.mObj["gender"] = _value_value0;

	if(value) {
		this.mValueCache["gender"] = value;
	} else {
		delete this.mValueCache["gender"];
	}
	return this;
};

rpc.WeiboUser.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WeiboUser.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.WeiboUser.prototype.getWeiboid = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["weiboid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["weiboid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["weiboid"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WeiboUser.prototype.setWeiboid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["weiboid"];
	else
		this.mObj["weiboid"] = _value_value0;

	if(value) {
		this.mValueCache["weiboid"] = value;
	} else {
		delete this.mValueCache["weiboid"];
	}
	return this;
};

rpc.WeiboUser.FIELD_WEIBOID="weiboid";
rpc.WeiboUser.FIELD_WEIBOID_CONFUSION="weiboid";
rpc.WeiboUser.FIELD_NAME="name";
rpc.WeiboUser.FIELD_NAME_CONFUSION="name";
rpc.WeiboUser.FIELD_GENDER="gender";
rpc.WeiboUser.FIELD_GENDER_CONFUSION="gender";
rpc.WeiboUser.FIELD_AVATAR="avatar";
rpc.WeiboUser.FIELD_AVATAR_CONFUSION="avatar";

rpc.WeiboUser.checkAndInitial = function() {
    if(rpc.WeiboUser.mFieldToConfusionMap)
        return;
	
	rpc.WeiboUser.mHasConfusionField = false;
	rpc.WeiboUser.mFieldToConfusionMap = {
		"weiboid":"weiboid", 
		"name":"name", 
		"gender":"gender", 
		"avatar":"avatar"
	};
	rpc.WeiboUser.mConfusionToFieldMap = {
		"weiboid":"weiboid", 
		"name":"name", 
		"gender":"gender", 
		"avatar":"avatar"
	};

};

rpc.WeiboUser.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.WeiboUser.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.WeiboUser.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.WeiboUser.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.WeiboUser.toConfusionObject(this.mObj, clone);
};

rpc.WeiboUser.getConfusionName = function(name) {
    rpc.WeiboUser.checkAndInitial();
    var value = rpc.WeiboUser.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.WeiboUser.getRawName = function(confusionName) {
    rpc.WeiboUser.checkAndInitial();
    var value = rpc.WeiboUser.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.WeiboUser.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.WeiboUser.checkAndInitial();
    if (!rpc.WeiboUser.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.WeiboUser.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.WeiboUser.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.WeiboUser.checkAndInitial();
    if (!rpc.WeiboUser.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.WeiboUser.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.WeiboUser.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.WeiboUser.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.WeiboUser.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.WeiboUser.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.RpcMessageBase = function() {};
rpc.RpcMessageBase.prototype.getCreateTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["createTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["createTime"];
	if(!value){
		value = this.mObj["c"];
		if(value) {
			delete this.mObj["c"];
			this.mObj["createTime"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["createTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.RpcMessageBase.prototype.setCreateTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["c"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["createTime"];
	else
		this.mObj["createTime"] = _value_value0;

	if(value) {
		this.mValueCache["createTime"] = value;
	} else {
		delete this.mValueCache["createTime"];
	}
	return this;
};

rpc.RpcMessageBase.prototype.getExpireTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["expireTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["expireTime"];
	if(!value){
		value = this.mObj["e"];
		if(value) {
			delete this.mObj["e"];
			this.mObj["expireTime"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["expireTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.RpcMessageBase.prototype.setExpireTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["e"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["expireTime"];
	else
		this.mObj["expireTime"] = _value_value0;

	if(value) {
		this.mValueCache["expireTime"] = value;
	} else {
		delete this.mValueCache["expireTime"];
	}
	return this;
};

rpc.RpcMessageBase.prototype.getFlag = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["flag"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["flag"];
	if(!value){
		value = this.mObj["g"];
		if(value) {
			delete this.mObj["g"];
			this.mObj["flag"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["flag"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.RpcMessageBase.prototype.setFlag = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["g"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["flag"];
	else
		this.mObj["flag"] = _value_value0;

	if(value) {
		this.mValueCache["flag"] = value;
	} else {
		delete this.mValueCache["flag"];
	}
	return this;
};

rpc.RpcMessageBase.prototype.getFromId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["fromId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["fromId"];
	if(!value){
		value = this.mObj["f"];
		if(value) {
			delete this.mObj["f"];
			this.mObj["fromId"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["fromId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.RpcMessageBase.prototype.setFromId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["f"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["fromId"];
	else
		this.mObj["fromId"] = _value_value0;

	if(value) {
		this.mValueCache["fromId"] = value;
	} else {
		delete this.mValueCache["fromId"];
	}
	return this;
};

rpc.RpcMessageBase.prototype.getMsgId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["msgId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["msgId"];
	if(!value){
		value = this.mObj["i"];
		if(value) {
			delete this.mObj["i"];
			this.mObj["msgId"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["msgId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.RpcMessageBase.prototype.setMsgId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["i"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["msgId"];
	else
		this.mObj["msgId"] = _value_value0;

	if(value) {
		this.mValueCache["msgId"] = value;
	} else {
		delete this.mValueCache["msgId"];
	}
	return this;
};

rpc.RpcMessageBase.prototype.getMsgType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["msgType"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["msgType"];
	if(!value){
		value = this.mObj["y"];
		if(value) {
			delete this.mObj["y"];
			this.mObj["msgType"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["msgType"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.RpcMessageBase.prototype.setMsgType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["y"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["msgType"];
	else
		this.mObj["msgType"] = _value_value0;

	if(value) {
		this.mValueCache["msgType"] = value;
	} else {
		delete this.mValueCache["msgType"];
	}
	return this;
};

rpc.RpcMessageBase.prototype.getSessionId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["sessionId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["sessionId"];
	if(!value){
		value = this.mObj["n"];
		if(value) {
			delete this.mObj["n"];
			this.mObj["sessionId"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["sessionId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.RpcMessageBase.prototype.setSessionId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["n"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["sessionId"];
	else
		this.mObj["sessionId"] = _value_value0;

	if(value) {
		this.mValueCache["sessionId"] = value;
	} else {
		delete this.mValueCache["sessionId"];
	}
	return this;
};

rpc.RpcMessageBase.prototype.getToId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["toId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["toId"];
	if(!value){
		value = this.mObj["t"];
		if(value) {
			delete this.mObj["t"];
			this.mObj["toId"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["toId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.RpcMessageBase.prototype.setToId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["t"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["toId"];
	else
		this.mObj["toId"] = _value_value0;

	if(value) {
		this.mValueCache["toId"] = value;
	} else {
		delete this.mValueCache["toId"];
	}
	return this;
};

rpc.RpcMessageBase.FIELD_EXPIRETIME="expireTime";
rpc.RpcMessageBase.FIELD_EXPIRETIME_CONFUSION="e";
rpc.RpcMessageBase.FIELD_FROMID="fromId";
rpc.RpcMessageBase.FIELD_FROMID_CONFUSION="f";
rpc.RpcMessageBase.FIELD_CREATETIME="createTime";
rpc.RpcMessageBase.FIELD_CREATETIME_CONFUSION="c";
rpc.RpcMessageBase.FIELD_FLAG="flag";
rpc.RpcMessageBase.FIELD_FLAG_CONFUSION="g";
rpc.RpcMessageBase.FIELD_TOID="toId";
rpc.RpcMessageBase.FIELD_TOID_CONFUSION="t";
rpc.RpcMessageBase.FIELD_SESSIONID="sessionId";
rpc.RpcMessageBase.FIELD_SESSIONID_CONFUSION="n";
rpc.RpcMessageBase.FIELD_MSGID="msgId";
rpc.RpcMessageBase.FIELD_MSGID_CONFUSION="i";
rpc.RpcMessageBase.FIELD_MSGTYPE="msgType";
rpc.RpcMessageBase.FIELD_MSGTYPE_CONFUSION="y";

rpc.RpcMessageBase.checkAndInitial = function() {
    if(rpc.RpcMessageBase.mFieldToConfusionMap)
        return;
	
	rpc.RpcMessageBase.mHasConfusionField = true;
	rpc.RpcMessageBase.mFieldToConfusionMap = {
		"expireTime":"e", 
		"fromId":"f", 
		"createTime":"c", 
		"flag":"g", 
		"toId":"t", 
		"sessionId":"n", 
		"msgId":"i", 
		"msgType":"y"
	};
	rpc.RpcMessageBase.mConfusionToFieldMap = {
		"e":"expireTime", 
		"f":"fromId", 
		"c":"createTime", 
		"g":"flag", 
		"t":"toId", 
		"n":"sessionId", 
		"i":"msgId", 
		"y":"msgType"
	};

};

rpc.RpcMessageBase.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.RpcMessageBase.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.RpcMessageBase.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.RpcMessageBase.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.RpcMessageBase.toConfusionObject(this.mObj, clone);
};

rpc.RpcMessageBase.getConfusionName = function(name) {
    rpc.RpcMessageBase.checkAndInitial();
    var value = rpc.RpcMessageBase.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.RpcMessageBase.getRawName = function(confusionName) {
    rpc.RpcMessageBase.checkAndInitial();
    var value = rpc.RpcMessageBase.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.RpcMessageBase.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.RpcMessageBase.checkAndInitial();
    if (!rpc.RpcMessageBase.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.RpcMessageBase.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.RpcMessageBase.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.RpcMessageBase.checkAndInitial();
    if (!rpc.RpcMessageBase.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.RpcMessageBase.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.RpcMessageBase.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.RpcMessageBase.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.RpcMessageBase.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.RpcMessageBase.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.LogReportRespose = function() {};
rpc.LogReportRespose.prototype.getInterval = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["interval"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["interval"];
	if(!value){
		value = this.mObj["i"];
		if(value) {
			delete this.mObj["i"];
			this.mObj["interval"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["interval"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.LogReportRespose.prototype.setInterval = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["i"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["interval"];
	else
		this.mObj["interval"] = _value_value0;

	if(value) {
		this.mValueCache["interval"] = value;
	} else {
		delete this.mValueCache["interval"];
	}
	return this;
};

rpc.LogReportRespose.FIELD_INTERVAL="interval";
rpc.LogReportRespose.FIELD_INTERVAL_CONFUSION="i";

rpc.LogReportRespose.checkAndInitial = function() {
    if(rpc.LogReportRespose.mFieldToConfusionMap)
        return;
	
	rpc.LogReportRespose.mHasConfusionField = true;
	rpc.LogReportRespose.mFieldToConfusionMap = {
		"interval":"i"
	};
	rpc.LogReportRespose.mConfusionToFieldMap = {
		"i":"interval"
	};

};

rpc.LogReportRespose.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.LogReportRespose.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.LogReportRespose.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.LogReportRespose.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.LogReportRespose.toConfusionObject(this.mObj, clone);
};

rpc.LogReportRespose.getConfusionName = function(name) {
    rpc.LogReportRespose.checkAndInitial();
    var value = rpc.LogReportRespose.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.LogReportRespose.getRawName = function(confusionName) {
    rpc.LogReportRespose.checkAndInitial();
    var value = rpc.LogReportRespose.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.LogReportRespose.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.LogReportRespose.checkAndInitial();
    if (!rpc.LogReportRespose.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.LogReportRespose.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.LogReportRespose.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.LogReportRespose.checkAndInitial();
    if (!rpc.LogReportRespose.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.LogReportRespose.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.LogReportRespose.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.LogReportRespose.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.LogReportRespose.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.LogReportRespose.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.SendMsgRespose = function() {};
rpc.SendMsgRespose.prototype.getMsgId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["msgId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["msgId"];
	if(!value){
		value = this.mObj["mi"];
		if(value) {
			delete this.mObj["mi"];
			this.mObj["msgId"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["msgId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.SendMsgRespose.prototype.setMsgId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["mi"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["msgId"];
	else
		this.mObj["msgId"] = _value_value0;

	if(value) {
		this.mValueCache["msgId"] = value;
	} else {
		delete this.mValueCache["msgId"];
	}
	return this;
};

rpc.SendMsgRespose.prototype.getResUrl = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["resUrl"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["resUrl"];
	if(!value){
		value = this.mObj["ru"];
		if(value) {
			delete this.mObj["ru"];
			this.mObj["resUrl"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["resUrl"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.SendMsgRespose.prototype.setResUrl = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["ru"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["resUrl"];
	else
		this.mObj["resUrl"] = _value_value0;

	if(value) {
		this.mValueCache["resUrl"] = value;
	} else {
		delete this.mValueCache["resUrl"];
	}
	return this;
};

rpc.SendMsgRespose.FIELD_RESURL="resUrl";
rpc.SendMsgRespose.FIELD_RESURL_CONFUSION="ru";
rpc.SendMsgRespose.FIELD_MSGID="msgId";
rpc.SendMsgRespose.FIELD_MSGID_CONFUSION="mi";

rpc.SendMsgRespose.checkAndInitial = function() {
    if(rpc.SendMsgRespose.mFieldToConfusionMap)
        return;
	
	rpc.SendMsgRespose.mHasConfusionField = true;
	rpc.SendMsgRespose.mFieldToConfusionMap = {
		"resUrl":"ru", 
		"msgId":"mi"
	};
	rpc.SendMsgRespose.mConfusionToFieldMap = {
		"ru":"resUrl", 
		"mi":"msgId"
	};

};

rpc.SendMsgRespose.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.SendMsgRespose.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.SendMsgRespose.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.SendMsgRespose.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.SendMsgRespose.toConfusionObject(this.mObj, clone);
};

rpc.SendMsgRespose.getConfusionName = function(name) {
    rpc.SendMsgRespose.checkAndInitial();
    var value = rpc.SendMsgRespose.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.SendMsgRespose.getRawName = function(confusionName) {
    rpc.SendMsgRespose.checkAndInitial();
    var value = rpc.SendMsgRespose.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.SendMsgRespose.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.SendMsgRespose.checkAndInitial();
    if (!rpc.SendMsgRespose.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.SendMsgRespose.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.SendMsgRespose.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.SendMsgRespose.checkAndInitial();
    if (!rpc.SendMsgRespose.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.SendMsgRespose.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.SendMsgRespose.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.SendMsgRespose.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.SendMsgRespose.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.SendMsgRespose.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ServerConfigs = function() {};
rpc.ServerConfigs.prototype.getUrls = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["urls"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["urls"];
	if(!value){
		value = this.mObj["u"];
		if(value) {
			delete this.mObj["u"];
			this.mObj["urls"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Object, [String, Array], false);
	
	if(objRet) {
		this.mValueCache["urls"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ServerConfigs.prototype.setUrls = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["u"];
	
	var _obj_0 = (!value) ? null : {};
	if(value) {
		for(var _k0 in value) {
			var _v_0 = value[_k0];
			var _arr_2 = (!_v_0) ? null : [];
			if(_v_0) {
				var _len_2 = _v_0.length;
				for(var _i_2 = 0; _i_2 < _len_2; _i_2++) {
					var _l_2 = _v_0[_i_2];
					var _value__l_24 = _l_2;
					_arr_2.push(_value__l_24);
				}
			}
			var _value__v_02 = _arr_2;
			if(!_value__v_02) 
				delete _obj_0[_k0];
			else
				_obj_0[_k0] = _value__v_02;
		}
	}
	var _value_value0 = _obj_0;
	if(!_value_value0) 
		delete this.mObj["urls"];
	else
		this.mObj["urls"] = _value_value0;

	if(value) {
		this.mValueCache["urls"] = value;
	} else {
		delete this.mValueCache["urls"];
	}
	return this;
};

rpc.ServerConfigs.prototype.getVersion = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["version"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["version"];
	if(!value){
		value = this.mObj["v"];
		if(value) {
			delete this.mObj["v"];
			this.mObj["version"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.VersionInfo, null, false);
	
	if(objRet) {
		this.mValueCache["version"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ServerConfigs.prototype.setVersion = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["v"];
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["version"];
	else
		this.mObj["version"] = _value_value0;

	if(value) {
		this.mValueCache["version"] = value;
	} else {
		delete this.mValueCache["version"];
	}
	return this;
};

rpc.ServerConfigs.FIELD_URLS="urls";
rpc.ServerConfigs.FIELD_URLS_CONFUSION="u";
rpc.ServerConfigs.FIELD_VERSION="version";
rpc.ServerConfigs.FIELD_VERSION_CONFUSION="v";

rpc.ServerConfigs.checkAndInitial = function() {
    if(rpc.ServerConfigs.mFieldToConfusionMap)
        return;
	
	rpc.ServerConfigs.mHasConfusionField = true;
	rpc.ServerConfigs.mFieldToConfusionMap = {
		"urls":"u", 
		"version":"v"
	};
	rpc.ServerConfigs.mConfusionToFieldMap = {
		"u":"urls", 
		"v":"version"
	};

};

rpc.ServerConfigs.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ServerConfigs.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ServerConfigs.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ServerConfigs.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ServerConfigs.toConfusionObject(this.mObj, clone);
};

rpc.ServerConfigs.getConfusionName = function(name) {
    rpc.ServerConfigs.checkAndInitial();
    var value = rpc.ServerConfigs.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ServerConfigs.getRawName = function(confusionName) {
    rpc.ServerConfigs.checkAndInitial();
    var value = rpc.ServerConfigs.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ServerConfigs.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ServerConfigs.checkAndInitial();
    if (!rpc.ServerConfigs.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ServerConfigs.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ServerConfigs.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ServerConfigs.checkAndInitial();
    if (!rpc.ServerConfigs.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ServerConfigs.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ServerConfigs.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ServerConfigs.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ServerConfigs.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ServerConfigs.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.VersionInfo = function() {};
rpc.VersionInfo.STRATEGY_UPDATE_ALLREADY_LATEST=1;
rpc.VersionInfo.STRATEGY_UPDATE_FORCE=2;
rpc.VersionInfo.STRATEGY_UPDATE_REMIND=3;
rpc.VersionInfo.prototype.getDesc = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["desc"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["desc"];
	if(!value){
		value = this.mObj["dc"];
		if(value) {
			delete this.mObj["dc"];
			this.mObj["desc"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["desc"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.VersionInfo.prototype.setDesc = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["dc"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["desc"];
	else
		this.mObj["desc"] = _value_value0;

	if(value) {
		this.mValueCache["desc"] = value;
	} else {
		delete this.mValueCache["desc"];
	}
	return this;
};

rpc.VersionInfo.prototype.getDownloadUrl = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["downloadUrl"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["downloadUrl"];
	if(!value){
		value = this.mObj["d"];
		if(value) {
			delete this.mObj["d"];
			this.mObj["downloadUrl"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["downloadUrl"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.VersionInfo.prototype.setDownloadUrl = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["d"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["downloadUrl"];
	else
		this.mObj["downloadUrl"] = _value_value0;

	if(value) {
		this.mValueCache["downloadUrl"] = value;
	} else {
		delete this.mValueCache["downloadUrl"];
	}
	return this;
};

rpc.VersionInfo.prototype.getMarketUrl = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["marketUrl"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["marketUrl"];
	if(!value){
		value = this.mObj["m"];
		if(value) {
			delete this.mObj["m"];
			this.mObj["marketUrl"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["marketUrl"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.VersionInfo.prototype.setMarketUrl = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["m"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["marketUrl"];
	else
		this.mObj["marketUrl"] = _value_value0;

	if(value) {
		this.mValueCache["marketUrl"] = value;
	} else {
		delete this.mValueCache["marketUrl"];
	}
	return this;
};

rpc.VersionInfo.prototype.getStrategy = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["strategy"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["strategy"];
	if(!value){
		value = this.mObj["s"];
		if(value) {
			delete this.mObj["s"];
			this.mObj["strategy"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["strategy"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.VersionInfo.prototype.setStrategy = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["s"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["strategy"];
	else
		this.mObj["strategy"] = _value_value0;

	if(value) {
		this.mValueCache["strategy"] = value;
	} else {
		delete this.mValueCache["strategy"];
	}
	return this;
};

rpc.VersionInfo.prototype.getVersionStr = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["versionStr"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["versionStr"];
	if(!value){
		value = this.mObj["v"];
		if(value) {
			delete this.mObj["v"];
			this.mObj["versionStr"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["versionStr"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.VersionInfo.prototype.setVersionStr = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["v"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["versionStr"];
	else
		this.mObj["versionStr"] = _value_value0;

	if(value) {
		this.mValueCache["versionStr"] = value;
	} else {
		delete this.mValueCache["versionStr"];
	}
	return this;
};

rpc.VersionInfo.FIELD_DESC="desc";
rpc.VersionInfo.FIELD_DESC_CONFUSION="dc";
rpc.VersionInfo.FIELD_VERSIONSTR="versionStr";
rpc.VersionInfo.FIELD_VERSIONSTR_CONFUSION="v";
rpc.VersionInfo.FIELD_STRATEGY="strategy";
rpc.VersionInfo.FIELD_STRATEGY_CONFUSION="s";
rpc.VersionInfo.FIELD_DOWNLOADURL="downloadUrl";
rpc.VersionInfo.FIELD_DOWNLOADURL_CONFUSION="d";
rpc.VersionInfo.FIELD_MARKETURL="marketUrl";
rpc.VersionInfo.FIELD_MARKETURL_CONFUSION="m";

rpc.VersionInfo.checkAndInitial = function() {
    if(rpc.VersionInfo.mFieldToConfusionMap)
        return;
	
	rpc.VersionInfo.mHasConfusionField = true;
	rpc.VersionInfo.mFieldToConfusionMap = {
		"desc":"dc", 
		"versionStr":"v", 
		"strategy":"s", 
		"downloadUrl":"d", 
		"marketUrl":"m"
	};
	rpc.VersionInfo.mConfusionToFieldMap = {
		"dc":"desc", 
		"v":"versionStr", 
		"s":"strategy", 
		"d":"downloadUrl", 
		"m":"marketUrl"
	};

};

rpc.VersionInfo.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.VersionInfo.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.VersionInfo.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.VersionInfo.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.VersionInfo.toConfusionObject(this.mObj, clone);
};

rpc.VersionInfo.getConfusionName = function(name) {
    rpc.VersionInfo.checkAndInitial();
    var value = rpc.VersionInfo.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.VersionInfo.getRawName = function(confusionName) {
    rpc.VersionInfo.checkAndInitial();
    var value = rpc.VersionInfo.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.VersionInfo.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.VersionInfo.checkAndInitial();
    if (!rpc.VersionInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.VersionInfo.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.VersionInfo.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.VersionInfo.checkAndInitial();
    if (!rpc.VersionInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.VersionInfo.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.VersionInfo.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.VersionInfo.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.VersionInfo.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.VersionInfo.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DebugMessage = function() {this.checkAndCreate();};
deepExtend(rpc.DebugMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.DebugMessage.prototype.getCheck = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["check"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["check"];
	if(!value){
		value = this.mObj["ck"];
		if(value) {
			delete this.mObj["ck"];
			this.mObj["check"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["check"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DebugMessage.prototype.setCheck = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["ck"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["check"];
	else
		this.mObj["check"] = _value_value0;

	if(value) {
		this.mValueCache["check"] = value;
	} else {
		delete this.mValueCache["check"];
	}
	return this;
};

rpc.DebugMessage.prototype.getFiles = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["files"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["files"];
	if(!value){
		value = this.mObj["fi"];
		if(value) {
			delete this.mObj["fi"];
			this.mObj["files"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Object, [String, Number], false);
	
	if(objRet) {
		this.mValueCache["files"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DebugMessage.prototype.setFiles = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["fi"];
	
	var _obj_0 = (!value) ? null : {};
	if(value) {
		for(var _k0 in value) {
			var _v_0 = value[_k0];
			var _value__v_02 = _v_0;
			if(!_value__v_02) 
				delete _obj_0[_k0];
			else
				_obj_0[_k0] = _value__v_02;
		}
	}
	var _value_value0 = _obj_0;
	if(!_value_value0) 
		delete this.mObj["files"];
	else
		this.mObj["files"] = _value_value0;

	if(value) {
		this.mValueCache["files"] = value;
	} else {
		delete this.mValueCache["files"];
	}
	return this;
};

rpc.DebugMessage.prototype.getLevel = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["level"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["level"];
	if(!value){
		value = this.mObj["lv"];
		if(value) {
			delete this.mObj["lv"];
			this.mObj["level"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["level"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DebugMessage.prototype.setLevel = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["lv"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["level"];
	else
		this.mObj["level"] = _value_value0;

	if(value) {
		this.mValueCache["level"] = value;
	} else {
		delete this.mValueCache["level"];
	}
	return this;
};

rpc.DebugMessage.FIELD_FILES="files";
rpc.DebugMessage.FIELD_FILES_CONFUSION="fi";
rpc.DebugMessage.FIELD_LEVEL="level";
rpc.DebugMessage.FIELD_LEVEL_CONFUSION="lv";
rpc.DebugMessage.FIELD_CHECK="check";
rpc.DebugMessage.FIELD_CHECK_CONFUSION="ck";

rpc.DebugMessage.checkAndInitial = function() {
    if(rpc.DebugMessage.mFieldToConfusionMap)
        return;
	
	rpc.DebugMessage.mHasConfusionField = true;
	rpc.DebugMessage.mFieldToConfusionMap = {
		"files":"fi", 
		"level":"lv", 
		"check":"ck"
	};
	rpc.DebugMessage.mConfusionToFieldMap = {
		"fi":"files", 
		"lv":"level", 
		"ck":"check"
	};

};

rpc.DebugMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DebugMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DebugMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 1;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 1;
    }
};

rpc.DebugMessage.TYPE = 1;
rpc.DebugMessage.prototype.getMsgType = function() {
	return 1;
};

rpc.DebugMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DebugMessage.toConfusionObject(this.mObj, clone);
};

rpc.DebugMessage.getConfusionName = function(name) {
    rpc.DebugMessage.checkAndInitial();
    var value = rpc.DebugMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.DebugMessage.getRawName = function(confusionName) {
    rpc.DebugMessage.checkAndInitial();
    var value = rpc.DebugMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.DebugMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DebugMessage.checkAndInitial();
    if (!rpc.DebugMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DebugMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DebugMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DebugMessage.checkAndInitial();
    if (!rpc.DebugMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DebugMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DebugMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DebugMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DebugMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DebugMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.KickOut = function() {this.checkAndCreate();};
deepExtend(rpc.KickOut.prototype, rpc.RpcMessageBase.prototype);
rpc.KickOut.prototype.getFromDeviceId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["fromDeviceId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["fromDeviceId"];
	if(!value){
		value = this.mObj["fi"];
		if(value) {
			delete this.mObj["fi"];
			this.mObj["fromDeviceId"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["fromDeviceId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.KickOut.prototype.setFromDeviceId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["fi"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["fromDeviceId"];
	else
		this.mObj["fromDeviceId"] = _value_value0;

	if(value) {
		this.mValueCache["fromDeviceId"] = value;
	} else {
		delete this.mValueCache["fromDeviceId"];
	}
	return this;
};

rpc.KickOut.prototype.getFromDeviceType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["fromDeviceType"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["fromDeviceType"];
	if(!value){
		value = this.mObj["ft"];
		if(value) {
			delete this.mObj["ft"];
			this.mObj["fromDeviceType"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["fromDeviceType"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.KickOut.prototype.setFromDeviceType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["ft"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["fromDeviceType"];
	else
		this.mObj["fromDeviceType"] = _value_value0;

	if(value) {
		this.mValueCache["fromDeviceType"] = value;
	} else {
		delete this.mValueCache["fromDeviceType"];
	}
	return this;
};

rpc.KickOut.FIELD_FROMDEVICETYPE="fromDeviceType";
rpc.KickOut.FIELD_FROMDEVICETYPE_CONFUSION="ft";
rpc.KickOut.FIELD_FROMDEVICEID="fromDeviceId";
rpc.KickOut.FIELD_FROMDEVICEID_CONFUSION="fi";

rpc.KickOut.checkAndInitial = function() {
    if(rpc.KickOut.mFieldToConfusionMap)
        return;
	
	rpc.KickOut.mHasConfusionField = true;
	rpc.KickOut.mFieldToConfusionMap = {
		"fromDeviceType":"ft", 
		"fromDeviceId":"fi"
	};
	rpc.KickOut.mConfusionToFieldMap = {
		"ft":"fromDeviceType", 
		"fi":"fromDeviceId"
	};

};

rpc.KickOut.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.KickOut.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.KickOut.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 2;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 1;
    }
};

rpc.KickOut.TYPE = 2;
rpc.KickOut.prototype.getMsgType = function() {
	return 2;
};

rpc.KickOut.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.KickOut.toConfusionObject(this.mObj, clone);
};

rpc.KickOut.getConfusionName = function(name) {
    rpc.KickOut.checkAndInitial();
    var value = rpc.KickOut.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.KickOut.getRawName = function(confusionName) {
    rpc.KickOut.checkAndInitial();
    var value = rpc.KickOut.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.KickOut.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.KickOut.checkAndInitial();
    if (!rpc.KickOut.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.KickOut.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.KickOut.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.KickOut.checkAndInitial();
    if (!rpc.KickOut.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.KickOut.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.KickOut.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.KickOut.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.KickOut.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.KickOut.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.LoadOfflineEvent = function() {this.checkAndCreate();};
deepExtend(rpc.LoadOfflineEvent.prototype, rpc.RpcMessageBase.prototype);

rpc.LoadOfflineEvent.checkAndInitial = function() {
    if(rpc.LoadOfflineEvent.mFieldToConfusionMap)
        return;
	
	rpc.LoadOfflineEvent.mHasConfusionField = false;
	rpc.LoadOfflineEvent.mFieldToConfusionMap = {
	};
	rpc.LoadOfflineEvent.mConfusionToFieldMap = {
	};

};

rpc.LoadOfflineEvent.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.LoadOfflineEvent.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.LoadOfflineEvent.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 3;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 33;
    }
};

rpc.LoadOfflineEvent.TYPE = 3;
rpc.LoadOfflineEvent.prototype.getMsgType = function() {
	return 3;
};

rpc.LoadOfflineEvent.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.LoadOfflineEvent.toConfusionObject(this.mObj, clone);
};

rpc.LoadOfflineEvent.getConfusionName = function(name) {
    rpc.LoadOfflineEvent.checkAndInitial();
    var value = rpc.LoadOfflineEvent.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.LoadOfflineEvent.getRawName = function(confusionName) {
    rpc.LoadOfflineEvent.checkAndInitial();
    var value = rpc.LoadOfflineEvent.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.LoadOfflineEvent.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.LoadOfflineEvent.checkAndInitial();
    if (!rpc.LoadOfflineEvent.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.LoadOfflineEvent.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.LoadOfflineEvent.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.LoadOfflineEvent.checkAndInitial();
    if (!rpc.LoadOfflineEvent.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.LoadOfflineEvent.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.LoadOfflineEvent.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.LoadOfflineEvent.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.LoadOfflineEvent.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.LoadOfflineEvent.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.PingMessage = function() {this.checkAndCreate();};
deepExtend(rpc.PingMessage.prototype, rpc.RpcMessageBase.prototype);

rpc.PingMessage.checkAndInitial = function() {
    if(rpc.PingMessage.mFieldToConfusionMap)
        return;
	
	rpc.PingMessage.mHasConfusionField = false;
	rpc.PingMessage.mFieldToConfusionMap = {
	};
	rpc.PingMessage.mConfusionToFieldMap = {
	};

};

rpc.PingMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.PingMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.PingMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 4;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 1;
    }
};

rpc.PingMessage.TYPE = 4;
rpc.PingMessage.prototype.getMsgType = function() {
	return 4;
};

rpc.PingMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.PingMessage.toConfusionObject(this.mObj, clone);
};

rpc.PingMessage.getConfusionName = function(name) {
    rpc.PingMessage.checkAndInitial();
    var value = rpc.PingMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.PingMessage.getRawName = function(confusionName) {
    rpc.PingMessage.checkAndInitial();
    var value = rpc.PingMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.PingMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.PingMessage.checkAndInitial();
    if (!rpc.PingMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.PingMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.PingMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.PingMessage.checkAndInitial();
    if (!rpc.PingMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.PingMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.PingMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.PingMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.PingMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.PingMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.PipeInitMessage = function() {this.checkAndCreate();};
deepExtend(rpc.PipeInitMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.PipeInitMessage.prototype.getDeviceId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deviceId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deviceId"];
	if(!value){
		value = this.mObj["di"];
		if(value) {
			delete this.mObj["di"];
			this.mObj["deviceId"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["deviceId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.PipeInitMessage.prototype.setDeviceId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["di"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["deviceId"];
	else
		this.mObj["deviceId"] = _value_value0;

	if(value) {
		this.mValueCache["deviceId"] = value;
	} else {
		delete this.mValueCache["deviceId"];
	}
	return this;
};

rpc.PipeInitMessage.prototype.getSession = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["session"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["session"];
	if(!value){
		value = this.mObj["se"];
		if(value) {
			delete this.mObj["se"];
			this.mObj["session"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["session"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.PipeInitMessage.prototype.setSession = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["se"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["session"];
	else
		this.mObj["session"] = _value_value0;

	if(value) {
		this.mValueCache["session"] = value;
	} else {
		delete this.mValueCache["session"];
	}
	return this;
};

rpc.PipeInitMessage.prototype.getUid = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	if(!value){
		value = this.mObj["id"];
		if(value) {
			delete this.mObj["id"];
			this.mObj["uid"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.PipeInitMessage.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["id"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.PipeInitMessage.FIELD_UID="uid";
rpc.PipeInitMessage.FIELD_UID_CONFUSION="id";
rpc.PipeInitMessage.FIELD_SESSION="session";
rpc.PipeInitMessage.FIELD_SESSION_CONFUSION="se";
rpc.PipeInitMessage.FIELD_DEVICEID="deviceId";
rpc.PipeInitMessage.FIELD_DEVICEID_CONFUSION="di";

rpc.PipeInitMessage.checkAndInitial = function() {
    if(rpc.PipeInitMessage.mFieldToConfusionMap)
        return;
	
	rpc.PipeInitMessage.mHasConfusionField = true;
	rpc.PipeInitMessage.mFieldToConfusionMap = {
		"uid":"id", 
		"session":"se", 
		"deviceId":"di"
	};
	rpc.PipeInitMessage.mConfusionToFieldMap = {
		"id":"uid", 
		"se":"session", 
		"di":"deviceId"
	};

};

rpc.PipeInitMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.PipeInitMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.PipeInitMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 7;
    }
};

rpc.PipeInitMessage.TYPE = 7;
rpc.PipeInitMessage.prototype.getMsgType = function() {
	return 7;
};

rpc.PipeInitMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.PipeInitMessage.toConfusionObject(this.mObj, clone);
};

rpc.PipeInitMessage.getConfusionName = function(name) {
    rpc.PipeInitMessage.checkAndInitial();
    var value = rpc.PipeInitMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.PipeInitMessage.getRawName = function(confusionName) {
    rpc.PipeInitMessage.checkAndInitial();
    var value = rpc.PipeInitMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.PipeInitMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.PipeInitMessage.checkAndInitial();
    if (!rpc.PipeInitMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.PipeInitMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.PipeInitMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.PipeInitMessage.checkAndInitial();
    if (!rpc.PipeInitMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.PipeInitMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.PipeInitMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.PipeInitMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.PipeInitMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.PipeInitMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.PipeInitedMessage = function() {this.checkAndCreate();};
deepExtend(rpc.PipeInitedMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.PipeInitedMessage.prototype.getLoadOfflineInterval = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["loadOfflineInterval"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["loadOfflineInterval"];
	if(!value){
		value = this.mObj["li"];
		if(value) {
			delete this.mObj["li"];
			this.mObj["loadOfflineInterval"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["loadOfflineInterval"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PipeInitedMessage.prototype.setLoadOfflineInterval = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["li"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["loadOfflineInterval"];
	else
		this.mObj["loadOfflineInterval"] = _value_value0;

	if(value) {
		this.mValueCache["loadOfflineInterval"] = value;
	} else {
		delete this.mValueCache["loadOfflineInterval"];
	}
	return this;
};

rpc.PipeInitedMessage.prototype.getPingInterval = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pingInterval"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pingInterval"];
	if(!value){
		value = this.mObj["pi"];
		if(value) {
			delete this.mObj["pi"];
			this.mObj["pingInterval"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["pingInterval"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PipeInitedMessage.prototype.setPingInterval = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["pi"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["pingInterval"];
	else
		this.mObj["pingInterval"] = _value_value0;

	if(value) {
		this.mValueCache["pingInterval"] = value;
	} else {
		delete this.mValueCache["pingInterval"];
	}
	return this;
};

rpc.PipeInitedMessage.prototype.getPipeKey = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pipeKey"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pipeKey"];
	if(!value){
		value = this.mObj["pk"];
		if(value) {
			delete this.mObj["pk"];
			this.mObj["pipeKey"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["pipeKey"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.PipeInitedMessage.prototype.setPipeKey = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["pk"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["pipeKey"];
	else
		this.mObj["pipeKey"] = _value_value0;

	if(value) {
		this.mValueCache["pipeKey"] = value;
	} else {
		delete this.mValueCache["pipeKey"];
	}
	return this;
};

rpc.PipeInitedMessage.prototype.getReturnCode = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["returnCode"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["returnCode"];
	if(!value){
		value = this.mObj["rc"];
		if(value) {
			delete this.mObj["rc"];
			this.mObj["returnCode"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["returnCode"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PipeInitedMessage.prototype.setReturnCode = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["rc"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["returnCode"];
	else
		this.mObj["returnCode"] = _value_value0;

	if(value) {
		this.mValueCache["returnCode"] = value;
	} else {
		delete this.mValueCache["returnCode"];
	}
	return this;
};

rpc.PipeInitedMessage.FIELD_RETURNCODE="returnCode";
rpc.PipeInitedMessage.FIELD_RETURNCODE_CONFUSION="rc";
rpc.PipeInitedMessage.FIELD_PINGINTERVAL="pingInterval";
rpc.PipeInitedMessage.FIELD_PINGINTERVAL_CONFUSION="pi";
rpc.PipeInitedMessage.FIELD_LOADOFFLINEINTERVAL="loadOfflineInterval";
rpc.PipeInitedMessage.FIELD_LOADOFFLINEINTERVAL_CONFUSION="li";
rpc.PipeInitedMessage.FIELD_PIPEKEY="pipeKey";
rpc.PipeInitedMessage.FIELD_PIPEKEY_CONFUSION="pk";

rpc.PipeInitedMessage.checkAndInitial = function() {
    if(rpc.PipeInitedMessage.mFieldToConfusionMap)
        return;
	
	rpc.PipeInitedMessage.mHasConfusionField = true;
	rpc.PipeInitedMessage.mFieldToConfusionMap = {
		"returnCode":"rc", 
		"pingInterval":"pi", 
		"loadOfflineInterval":"li", 
		"pipeKey":"pk"
	};
	rpc.PipeInitedMessage.mConfusionToFieldMap = {
		"rc":"returnCode", 
		"pi":"pingInterval", 
		"li":"loadOfflineInterval", 
		"pk":"pipeKey"
	};

};

rpc.PipeInitedMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.PipeInitedMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.PipeInitedMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 5;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 1;
    }
};

rpc.PipeInitedMessage.TYPE = 5;
rpc.PipeInitedMessage.prototype.getMsgType = function() {
	return 5;
};

rpc.PipeInitedMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.PipeInitedMessage.toConfusionObject(this.mObj, clone);
};

rpc.PipeInitedMessage.getConfusionName = function(name) {
    rpc.PipeInitedMessage.checkAndInitial();
    var value = rpc.PipeInitedMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.PipeInitedMessage.getRawName = function(confusionName) {
    rpc.PipeInitedMessage.checkAndInitial();
    var value = rpc.PipeInitedMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.PipeInitedMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.PipeInitedMessage.checkAndInitial();
    if (!rpc.PipeInitedMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.PipeInitedMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.PipeInitedMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.PipeInitedMessage.checkAndInitial();
    if (!rpc.PipeInitedMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.PipeInitedMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.PipeInitedMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.PipeInitedMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.PipeInitedMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.PipeInitedMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.RecvConfirmMessage = function() {this.checkAndCreate();};
deepExtend(rpc.RecvConfirmMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.RecvConfirmMessage.prototype.getConfirmMsgId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["confirmMsgId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["confirmMsgId"];
	if(!value){
		value = this.mObj["m"];
		if(value) {
			delete this.mObj["m"];
			this.mObj["confirmMsgId"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["confirmMsgId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.RecvConfirmMessage.prototype.setConfirmMsgId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["m"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["confirmMsgId"];
	else
		this.mObj["confirmMsgId"] = _value_value0;

	if(value) {
		this.mValueCache["confirmMsgId"] = value;
	} else {
		delete this.mValueCache["confirmMsgId"];
	}
	return this;
};

rpc.RecvConfirmMessage.FIELD_CONFIRMMSGID="confirmMsgId";
rpc.RecvConfirmMessage.FIELD_CONFIRMMSGID_CONFUSION="m";

rpc.RecvConfirmMessage.checkAndInitial = function() {
    if(rpc.RecvConfirmMessage.mFieldToConfusionMap)
        return;
	
	rpc.RecvConfirmMessage.mHasConfusionField = true;
	rpc.RecvConfirmMessage.mFieldToConfusionMap = {
		"confirmMsgId":"m"
	};
	rpc.RecvConfirmMessage.mConfusionToFieldMap = {
		"m":"confirmMsgId"
	};

};

rpc.RecvConfirmMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.RecvConfirmMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.RecvConfirmMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 6;
    }
};

rpc.RecvConfirmMessage.TYPE = 6;
rpc.RecvConfirmMessage.prototype.getMsgType = function() {
	return 6;
};

rpc.RecvConfirmMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.RecvConfirmMessage.toConfusionObject(this.mObj, clone);
};

rpc.RecvConfirmMessage.getConfusionName = function(name) {
    rpc.RecvConfirmMessage.checkAndInitial();
    var value = rpc.RecvConfirmMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.RecvConfirmMessage.getRawName = function(confusionName) {
    rpc.RecvConfirmMessage.checkAndInitial();
    var value = rpc.RecvConfirmMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.RecvConfirmMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.RecvConfirmMessage.checkAndInitial();
    if (!rpc.RecvConfirmMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.RecvConfirmMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.RecvConfirmMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.RecvConfirmMessage.checkAndInitial();
    if (!rpc.RecvConfirmMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.RecvConfirmMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.RecvConfirmMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.RecvConfirmMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.RecvConfirmMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.RecvConfirmMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.BackAmountMessage = function() {this.checkAndCreate();};
deepExtend(rpc.BackAmountMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.BackAmountMessage.prototype.getContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["content"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["content"];
	if(!value){
		value = this.mObj["ct"];
		if(value) {
			delete this.mObj["ct"];
			this.mObj["content"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["content"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.BackAmountMessage.prototype.setContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["ct"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["content"];
	else
		this.mObj["content"] = _value_value0;

	if(value) {
		this.mValueCache["content"] = value;
	} else {
		delete this.mValueCache["content"];
	}
	return this;
};

rpc.BackAmountMessage.FIELD_CONTENT="content";
rpc.BackAmountMessage.FIELD_CONTENT_CONFUSION="ct";

rpc.BackAmountMessage.checkAndInitial = function() {
    if(rpc.BackAmountMessage.mFieldToConfusionMap)
        return;
	
	rpc.BackAmountMessage.mHasConfusionField = true;
	rpc.BackAmountMessage.mFieldToConfusionMap = {
		"content":"ct"
	};
	rpc.BackAmountMessage.mConfusionToFieldMap = {
		"ct":"content"
	};

};

rpc.BackAmountMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.BackAmountMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.BackAmountMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 109;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.BackAmountMessage.TYPE = 109;
rpc.BackAmountMessage.prototype.getMsgType = function() {
	return 109;
};

rpc.BackAmountMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.BackAmountMessage.toConfusionObject(this.mObj, clone);
};

rpc.BackAmountMessage.getConfusionName = function(name) {
    rpc.BackAmountMessage.checkAndInitial();
    var value = rpc.BackAmountMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.BackAmountMessage.getRawName = function(confusionName) {
    rpc.BackAmountMessage.checkAndInitial();
    var value = rpc.BackAmountMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.BackAmountMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.BackAmountMessage.checkAndInitial();
    if (!rpc.BackAmountMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.BackAmountMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.BackAmountMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.BackAmountMessage.checkAndInitial();
    if (!rpc.BackAmountMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.BackAmountMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.BackAmountMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.BackAmountMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.BackAmountMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.BackAmountMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ChargeMessage = function() {this.checkAndCreate();};
deepExtend(rpc.ChargeMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.ChargeMessage.prototype.getContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["content"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["content"];
	if(!value){
		value = this.mObj["ct"];
		if(value) {
			delete this.mObj["ct"];
			this.mObj["content"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["content"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeMessage.prototype.setContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["ct"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["content"];
	else
		this.mObj["content"] = _value_value0;

	if(value) {
		this.mValueCache["content"] = value;
	} else {
		delete this.mValueCache["content"];
	}
	return this;
};

rpc.ChargeMessage.FIELD_CONTENT="content";
rpc.ChargeMessage.FIELD_CONTENT_CONFUSION="ct";

rpc.ChargeMessage.checkAndInitial = function() {
    if(rpc.ChargeMessage.mFieldToConfusionMap)
        return;
	
	rpc.ChargeMessage.mHasConfusionField = true;
	rpc.ChargeMessage.mFieldToConfusionMap = {
		"content":"ct"
	};
	rpc.ChargeMessage.mConfusionToFieldMap = {
		"ct":"content"
	};

};

rpc.ChargeMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ChargeMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ChargeMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 111;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.ChargeMessage.TYPE = 111;
rpc.ChargeMessage.prototype.getMsgType = function() {
	return 111;
};

rpc.ChargeMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ChargeMessage.toConfusionObject(this.mObj, clone);
};

rpc.ChargeMessage.getConfusionName = function(name) {
    rpc.ChargeMessage.checkAndInitial();
    var value = rpc.ChargeMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.ChargeMessage.getRawName = function(confusionName) {
    rpc.ChargeMessage.checkAndInitial();
    var value = rpc.ChargeMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.ChargeMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ChargeMessage.checkAndInitial();
    if (!rpc.ChargeMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ChargeMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ChargeMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ChargeMessage.checkAndInitial();
    if (!rpc.ChargeMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ChargeMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ChargeMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ChargeMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ChargeMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ChargeMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DealNotificationMessage = function() {this.checkAndCreate();};
deepExtend(rpc.DealNotificationMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.DealNotificationMessage.prototype.getContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["content"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["content"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["content"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DealNotificationMessage.prototype.setContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["content"];
	else
		this.mObj["content"] = _value_value0;

	if(value) {
		this.mValueCache["content"] = value;
	} else {
		delete this.mValueCache["content"];
	}
	return this;
};

rpc.DealNotificationMessage.prototype.getDealId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealNotificationMessage.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.DealNotificationMessage.prototype.getDealStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealStatus"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealStatus"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealStatus"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealNotificationMessage.prototype.setDealStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealStatus"];
	else
		this.mObj["dealStatus"] = _value_value0;

	if(value) {
		this.mValueCache["dealStatus"] = value;
	} else {
		delete this.mValueCache["dealStatus"];
	}
	return this;
};

rpc.DealNotificationMessage.FIELD_CONTENT="content";
rpc.DealNotificationMessage.FIELD_CONTENT_CONFUSION="content";
rpc.DealNotificationMessage.FIELD_DEALID="dealId";
rpc.DealNotificationMessage.FIELD_DEALID_CONFUSION="dealId";
rpc.DealNotificationMessage.FIELD_DEALSTATUS="dealStatus";
rpc.DealNotificationMessage.FIELD_DEALSTATUS_CONFUSION="dealStatus";

rpc.DealNotificationMessage.checkAndInitial = function() {
    if(rpc.DealNotificationMessage.mFieldToConfusionMap)
        return;
	
	rpc.DealNotificationMessage.mHasConfusionField = false;
	rpc.DealNotificationMessage.mFieldToConfusionMap = {
		"content":"content", 
		"dealId":"dealId", 
		"dealStatus":"dealStatus"
	};
	rpc.DealNotificationMessage.mConfusionToFieldMap = {
		"content":"content", 
		"dealId":"dealId", 
		"dealStatus":"dealStatus"
	};

};

rpc.DealNotificationMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DealNotificationMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DealNotificationMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 107;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.DealNotificationMessage.TYPE = 107;
rpc.DealNotificationMessage.prototype.getMsgType = function() {
	return 107;
};

rpc.DealNotificationMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DealNotificationMessage.toConfusionObject(this.mObj, clone);
};

rpc.DealNotificationMessage.getConfusionName = function(name) {
    rpc.DealNotificationMessage.checkAndInitial();
    var value = rpc.DealNotificationMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.DealNotificationMessage.getRawName = function(confusionName) {
    rpc.DealNotificationMessage.checkAndInitial();
    var value = rpc.DealNotificationMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.DealNotificationMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DealNotificationMessage.checkAndInitial();
    if (!rpc.DealNotificationMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DealNotificationMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DealNotificationMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DealNotificationMessage.checkAndInitial();
    if (!rpc.DealNotificationMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DealNotificationMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DealNotificationMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DealNotificationMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DealNotificationMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DealNotificationMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DeliverBeginMessage = function() {this.checkAndCreate();};
deepExtend(rpc.DeliverBeginMessage.prototype, rpc.RpcMessageBase.prototype);

rpc.DeliverBeginMessage.checkAndInitial = function() {
    if(rpc.DeliverBeginMessage.mFieldToConfusionMap)
        return;
	
	rpc.DeliverBeginMessage.mHasConfusionField = false;
	rpc.DeliverBeginMessage.mFieldToConfusionMap = {
	};
	rpc.DeliverBeginMessage.mConfusionToFieldMap = {
	};

};

rpc.DeliverBeginMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DeliverBeginMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DeliverBeginMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 108;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.DeliverBeginMessage.TYPE = 108;
rpc.DeliverBeginMessage.prototype.getMsgType = function() {
	return 108;
};

rpc.DeliverBeginMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DeliverBeginMessage.toConfusionObject(this.mObj, clone);
};

rpc.DeliverBeginMessage.getConfusionName = function(name) {
    rpc.DeliverBeginMessage.checkAndInitial();
    var value = rpc.DeliverBeginMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.DeliverBeginMessage.getRawName = function(confusionName) {
    rpc.DeliverBeginMessage.checkAndInitial();
    var value = rpc.DeliverBeginMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.DeliverBeginMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DeliverBeginMessage.checkAndInitial();
    if (!rpc.DeliverBeginMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DeliverBeginMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DeliverBeginMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DeliverBeginMessage.checkAndInitial();
    if (!rpc.DeliverBeginMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DeliverBeginMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DeliverBeginMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DeliverBeginMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DeliverBeginMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DeliverBeginMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DelivererNewTaskMessage = function() {this.checkAndCreate();};
deepExtend(rpc.DelivererNewTaskMessage.prototype, rpc.RpcMessageBase.prototype);

rpc.DelivererNewTaskMessage.checkAndInitial = function() {
    if(rpc.DelivererNewTaskMessage.mFieldToConfusionMap)
        return;
	
	rpc.DelivererNewTaskMessage.mHasConfusionField = false;
	rpc.DelivererNewTaskMessage.mFieldToConfusionMap = {
	};
	rpc.DelivererNewTaskMessage.mConfusionToFieldMap = {
	};

};

rpc.DelivererNewTaskMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DelivererNewTaskMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DelivererNewTaskMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 105;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.DelivererNewTaskMessage.TYPE = 105;
rpc.DelivererNewTaskMessage.prototype.getMsgType = function() {
	return 105;
};

rpc.DelivererNewTaskMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DelivererNewTaskMessage.toConfusionObject(this.mObj, clone);
};

rpc.DelivererNewTaskMessage.getConfusionName = function(name) {
    rpc.DelivererNewTaskMessage.checkAndInitial();
    var value = rpc.DelivererNewTaskMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.DelivererNewTaskMessage.getRawName = function(confusionName) {
    rpc.DelivererNewTaskMessage.checkAndInitial();
    var value = rpc.DelivererNewTaskMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.DelivererNewTaskMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DelivererNewTaskMessage.checkAndInitial();
    if (!rpc.DelivererNewTaskMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DelivererNewTaskMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DelivererNewTaskMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DelivererNewTaskMessage.checkAndInitial();
    if (!rpc.DelivererNewTaskMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DelivererNewTaskMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DelivererNewTaskMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DelivererNewTaskMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DelivererNewTaskMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DelivererNewTaskMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DelivererPickupMessage = function() {this.checkAndCreate();};
deepExtend(rpc.DelivererPickupMessage.prototype, rpc.RpcMessageBase.prototype);

rpc.DelivererPickupMessage.checkAndInitial = function() {
    if(rpc.DelivererPickupMessage.mFieldToConfusionMap)
        return;
	
	rpc.DelivererPickupMessage.mHasConfusionField = false;
	rpc.DelivererPickupMessage.mFieldToConfusionMap = {
	};
	rpc.DelivererPickupMessage.mConfusionToFieldMap = {
	};

};

rpc.DelivererPickupMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DelivererPickupMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DelivererPickupMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 106;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.DelivererPickupMessage.TYPE = 106;
rpc.DelivererPickupMessage.prototype.getMsgType = function() {
	return 106;
};

rpc.DelivererPickupMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DelivererPickupMessage.toConfusionObject(this.mObj, clone);
};

rpc.DelivererPickupMessage.getConfusionName = function(name) {
    rpc.DelivererPickupMessage.checkAndInitial();
    var value = rpc.DelivererPickupMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.DelivererPickupMessage.getRawName = function(confusionName) {
    rpc.DelivererPickupMessage.checkAndInitial();
    var value = rpc.DelivererPickupMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.DelivererPickupMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DelivererPickupMessage.checkAndInitial();
    if (!rpc.DelivererPickupMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DelivererPickupMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DelivererPickupMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DelivererPickupMessage.checkAndInitial();
    if (!rpc.DelivererPickupMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DelivererPickupMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DelivererPickupMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DelivererPickupMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DelivererPickupMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DelivererPickupMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.PaymentRefundNotificationMessgae = function() {this.checkAndCreate();};
deepExtend(rpc.PaymentRefundNotificationMessgae.prototype, rpc.RpcMessageBase.prototype);
rpc.PaymentRefundNotificationMessgae.prototype.getCanClick = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["canClick"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["canClick"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["canClick"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PaymentRefundNotificationMessgae.prototype.setCanClick = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["canClick"];
	else
		this.mObj["canClick"] = _value_value0;

	if(value) {
		this.mValueCache["canClick"] = value;
	} else {
		delete this.mValueCache["canClick"];
	}
	return this;
};

rpc.PaymentRefundNotificationMessgae.prototype.getContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["content"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["content"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["content"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.PaymentRefundNotificationMessgae.prototype.setContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["content"];
	else
		this.mObj["content"] = _value_value0;

	if(value) {
		this.mValueCache["content"] = value;
	} else {
		delete this.mValueCache["content"];
	}
	return this;
};

rpc.PaymentRefundNotificationMessgae.prototype.getDealId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PaymentRefundNotificationMessgae.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.PaymentRefundNotificationMessgae.FIELD_CONTENT="content";
rpc.PaymentRefundNotificationMessgae.FIELD_CONTENT_CONFUSION="content";
rpc.PaymentRefundNotificationMessgae.FIELD_CANCLICK="canClick";
rpc.PaymentRefundNotificationMessgae.FIELD_CANCLICK_CONFUSION="canClick";
rpc.PaymentRefundNotificationMessgae.FIELD_DEALID="dealId";
rpc.PaymentRefundNotificationMessgae.FIELD_DEALID_CONFUSION="dealId";

rpc.PaymentRefundNotificationMessgae.checkAndInitial = function() {
    if(rpc.PaymentRefundNotificationMessgae.mFieldToConfusionMap)
        return;
	
	rpc.PaymentRefundNotificationMessgae.mHasConfusionField = false;
	rpc.PaymentRefundNotificationMessgae.mFieldToConfusionMap = {
		"content":"content", 
		"canClick":"canClick", 
		"dealId":"dealId"
	};
	rpc.PaymentRefundNotificationMessgae.mConfusionToFieldMap = {
		"content":"content", 
		"canClick":"canClick", 
		"dealId":"dealId"
	};

};

rpc.PaymentRefundNotificationMessgae.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.PaymentRefundNotificationMessgae.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.PaymentRefundNotificationMessgae.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 110;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.PaymentRefundNotificationMessgae.TYPE = 110;
rpc.PaymentRefundNotificationMessgae.prototype.getMsgType = function() {
	return 110;
};

rpc.PaymentRefundNotificationMessgae.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.PaymentRefundNotificationMessgae.toConfusionObject(this.mObj, clone);
};

rpc.PaymentRefundNotificationMessgae.getConfusionName = function(name) {
    rpc.PaymentRefundNotificationMessgae.checkAndInitial();
    var value = rpc.PaymentRefundNotificationMessgae.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.PaymentRefundNotificationMessgae.getRawName = function(confusionName) {
    rpc.PaymentRefundNotificationMessgae.checkAndInitial();
    var value = rpc.PaymentRefundNotificationMessgae.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.PaymentRefundNotificationMessgae.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.PaymentRefundNotificationMessgae.checkAndInitial();
    if (!rpc.PaymentRefundNotificationMessgae.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.PaymentRefundNotificationMessgae.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.PaymentRefundNotificationMessgae.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.PaymentRefundNotificationMessgae.checkAndInitial();
    if (!rpc.PaymentRefundNotificationMessgae.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.PaymentRefundNotificationMessgae.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.PaymentRefundNotificationMessgae.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.PaymentRefundNotificationMessgae.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.PaymentRefundNotificationMessgae.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.PaymentRefundNotificationMessgae.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.PictureMessage = function() {this.checkAndCreate();};
deepExtend(rpc.PictureMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.PictureMessage.prototype.getHeight = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["height"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["height"];
	if(!value){
		value = this.mObj["hi"];
		if(value) {
			delete this.mObj["hi"];
			this.mObj["height"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["height"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PictureMessage.prototype.setHeight = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["hi"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["height"];
	else
		this.mObj["height"] = _value_value0;

	if(value) {
		this.mValueCache["height"] = value;
	} else {
		delete this.mValueCache["height"];
	}
	return this;
};

rpc.PictureMessage.prototype.getResource = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["resource"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["resource"];
	if(!value){
		value = this.mObj["re"];
		if(value) {
			delete this.mObj["re"];
			this.mObj["resource"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["resource"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.PictureMessage.prototype.setResource = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["re"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["resource"];
	else
		this.mObj["resource"] = _value_value0;

	if(value) {
		this.mValueCache["resource"] = value;
	} else {
		delete this.mValueCache["resource"];
	}
	return this;
};

rpc.PictureMessage.prototype.getWidth = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["width"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["width"];
	if(!value){
		value = this.mObj["wd"];
		if(value) {
			delete this.mObj["wd"];
			this.mObj["width"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["width"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PictureMessage.prototype.setWidth = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["wd"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["width"];
	else
		this.mObj["width"] = _value_value0;

	if(value) {
		this.mValueCache["width"] = value;
	} else {
		delete this.mValueCache["width"];
	}
	return this;
};

rpc.PictureMessage.FIELD_HEIGHT="height";
rpc.PictureMessage.FIELD_HEIGHT_CONFUSION="hi";
rpc.PictureMessage.FIELD_WIDTH="width";
rpc.PictureMessage.FIELD_WIDTH_CONFUSION="wd";
rpc.PictureMessage.FIELD_RESOURCE="resource";
rpc.PictureMessage.FIELD_RESOURCE_CONFUSION="re";

rpc.PictureMessage.checkAndInitial = function() {
    if(rpc.PictureMessage.mFieldToConfusionMap)
        return;
	
	rpc.PictureMessage.mHasConfusionField = true;
	rpc.PictureMessage.mFieldToConfusionMap = {
		"height":"hi", 
		"width":"wd", 
		"resource":"re"
	};
	rpc.PictureMessage.mConfusionToFieldMap = {
		"hi":"height", 
		"wd":"width", 
		"re":"resource"
	};

};

rpc.PictureMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.PictureMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.PictureMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 100;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 12;
    }
};

rpc.PictureMessage.TYPE = 100;
rpc.PictureMessage.prototype.getMsgType = function() {
	return 100;
};

rpc.PictureMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.PictureMessage.toConfusionObject(this.mObj, clone);
};

rpc.PictureMessage.getConfusionName = function(name) {
    rpc.PictureMessage.checkAndInitial();
    var value = rpc.PictureMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.PictureMessage.getRawName = function(confusionName) {
    rpc.PictureMessage.checkAndInitial();
    var value = rpc.PictureMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.PictureMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.PictureMessage.checkAndInitial();
    if (!rpc.PictureMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.PictureMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.PictureMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.PictureMessage.checkAndInitial();
    if (!rpc.PictureMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.PictureMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.PictureMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.PictureMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.PictureMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.PictureMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopperBuyDoneMessage = function() {this.checkAndCreate();};
deepExtend(rpc.ShopperBuyDoneMessage.prototype, rpc.RpcMessageBase.prototype);

rpc.ShopperBuyDoneMessage.checkAndInitial = function() {
    if(rpc.ShopperBuyDoneMessage.mFieldToConfusionMap)
        return;
	
	rpc.ShopperBuyDoneMessage.mHasConfusionField = false;
	rpc.ShopperBuyDoneMessage.mFieldToConfusionMap = {
	};
	rpc.ShopperBuyDoneMessage.mConfusionToFieldMap = {
	};

};

rpc.ShopperBuyDoneMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopperBuyDoneMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopperBuyDoneMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 104;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.ShopperBuyDoneMessage.TYPE = 104;
rpc.ShopperBuyDoneMessage.prototype.getMsgType = function() {
	return 104;
};

rpc.ShopperBuyDoneMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopperBuyDoneMessage.toConfusionObject(this.mObj, clone);
};

rpc.ShopperBuyDoneMessage.getConfusionName = function(name) {
    rpc.ShopperBuyDoneMessage.checkAndInitial();
    var value = rpc.ShopperBuyDoneMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.ShopperBuyDoneMessage.getRawName = function(confusionName) {
    rpc.ShopperBuyDoneMessage.checkAndInitial();
    var value = rpc.ShopperBuyDoneMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.ShopperBuyDoneMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopperBuyDoneMessage.checkAndInitial();
    if (!rpc.ShopperBuyDoneMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopperBuyDoneMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopperBuyDoneMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopperBuyDoneMessage.checkAndInitial();
    if (!rpc.ShopperBuyDoneMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopperBuyDoneMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopperBuyDoneMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopperBuyDoneMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopperBuyDoneMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopperBuyDoneMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopperNewTaskMessage = function() {this.checkAndCreate();};
deepExtend(rpc.ShopperNewTaskMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.ShopperNewTaskMessage.prototype.getShopName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopperNewTaskMessage.prototype.setShopName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopName"];
	else
		this.mObj["shopName"] = _value_value0;

	if(value) {
		this.mValueCache["shopName"] = value;
	} else {
		delete this.mValueCache["shopName"];
	}
	return this;
};

rpc.ShopperNewTaskMessage.prototype.getTaskNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["taskNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["taskNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["taskNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopperNewTaskMessage.prototype.setTaskNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["taskNum"];
	else
		this.mObj["taskNum"] = _value_value0;

	if(value) {
		this.mValueCache["taskNum"] = value;
	} else {
		delete this.mValueCache["taskNum"];
	}
	return this;
};

rpc.ShopperNewTaskMessage.FIELD_SHOPNAME="shopName";
rpc.ShopperNewTaskMessage.FIELD_SHOPNAME_CONFUSION="shopName";
rpc.ShopperNewTaskMessage.FIELD_TASKNUM="taskNum";
rpc.ShopperNewTaskMessage.FIELD_TASKNUM_CONFUSION="taskNum";

rpc.ShopperNewTaskMessage.checkAndInitial = function() {
    if(rpc.ShopperNewTaskMessage.mFieldToConfusionMap)
        return;
	
	rpc.ShopperNewTaskMessage.mHasConfusionField = false;
	rpc.ShopperNewTaskMessage.mFieldToConfusionMap = {
		"shopName":"shopName", 
		"taskNum":"taskNum"
	};
	rpc.ShopperNewTaskMessage.mConfusionToFieldMap = {
		"shopName":"shopName", 
		"taskNum":"taskNum"
	};

};

rpc.ShopperNewTaskMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopperNewTaskMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopperNewTaskMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 103;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.ShopperNewTaskMessage.TYPE = 103;
rpc.ShopperNewTaskMessage.prototype.getMsgType = function() {
	return 103;
};

rpc.ShopperNewTaskMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopperNewTaskMessage.toConfusionObject(this.mObj, clone);
};

rpc.ShopperNewTaskMessage.getConfusionName = function(name) {
    rpc.ShopperNewTaskMessage.checkAndInitial();
    var value = rpc.ShopperNewTaskMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.ShopperNewTaskMessage.getRawName = function(confusionName) {
    rpc.ShopperNewTaskMessage.checkAndInitial();
    var value = rpc.ShopperNewTaskMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.ShopperNewTaskMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopperNewTaskMessage.checkAndInitial();
    if (!rpc.ShopperNewTaskMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopperNewTaskMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopperNewTaskMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopperNewTaskMessage.checkAndInitial();
    if (!rpc.ShopperNewTaskMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopperNewTaskMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopperNewTaskMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopperNewTaskMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopperNewTaskMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopperNewTaskMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.TextMessage = function() {this.checkAndCreate();};
deepExtend(rpc.TextMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.TextMessage.prototype.getContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["content"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["content"];
	if(!value){
		value = this.mObj["ct"];
		if(value) {
			delete this.mObj["ct"];
			this.mObj["content"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["content"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.TextMessage.prototype.setContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["ct"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["content"];
	else
		this.mObj["content"] = _value_value0;

	if(value) {
		this.mValueCache["content"] = value;
	} else {
		delete this.mValueCache["content"];
	}
	return this;
};

rpc.TextMessage.FIELD_CONTENT="content";
rpc.TextMessage.FIELD_CONTENT_CONFUSION="ct";

rpc.TextMessage.checkAndInitial = function() {
    if(rpc.TextMessage.mFieldToConfusionMap)
        return;
	
	rpc.TextMessage.mHasConfusionField = true;
	rpc.TextMessage.mFieldToConfusionMap = {
		"content":"ct"
	};
	rpc.TextMessage.mConfusionToFieldMap = {
		"ct":"content"
	};

};

rpc.TextMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.TextMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.TextMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 101;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.TextMessage.TYPE = 101;
rpc.TextMessage.prototype.getMsgType = function() {
	return 101;
};

rpc.TextMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.TextMessage.toConfusionObject(this.mObj, clone);
};

rpc.TextMessage.getConfusionName = function(name) {
    rpc.TextMessage.checkAndInitial();
    var value = rpc.TextMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.TextMessage.getRawName = function(confusionName) {
    rpc.TextMessage.checkAndInitial();
    var value = rpc.TextMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.TextMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.TextMessage.checkAndInitial();
    if (!rpc.TextMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.TextMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.TextMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.TextMessage.checkAndInitial();
    if (!rpc.TextMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.TextMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.TextMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.TextMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.TextMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.TextMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.UserBlockNotification = function() {this.checkAndCreate();};
deepExtend(rpc.UserBlockNotification.prototype, rpc.RpcMessageBase.prototype);
rpc.UserBlockNotification.prototype.getContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["content"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["content"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["content"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.UserBlockNotification.prototype.setContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["content"];
	else
		this.mObj["content"] = _value_value0;

	if(value) {
		this.mValueCache["content"] = value;
	} else {
		delete this.mValueCache["content"];
	}
	return this;
};

rpc.UserBlockNotification.prototype.getUid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.UserBlockNotification.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.UserBlockNotification.FIELD_UID="uid";
rpc.UserBlockNotification.FIELD_UID_CONFUSION="uid";
rpc.UserBlockNotification.FIELD_CONTENT="content";
rpc.UserBlockNotification.FIELD_CONTENT_CONFUSION="content";

rpc.UserBlockNotification.checkAndInitial = function() {
    if(rpc.UserBlockNotification.mFieldToConfusionMap)
        return;
	
	rpc.UserBlockNotification.mHasConfusionField = false;
	rpc.UserBlockNotification.mFieldToConfusionMap = {
		"uid":"uid", 
		"content":"content"
	};
	rpc.UserBlockNotification.mConfusionToFieldMap = {
		"uid":"uid", 
		"content":"content"
	};

};

rpc.UserBlockNotification.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.UserBlockNotification.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.UserBlockNotification.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 112;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 4;
    }
};

rpc.UserBlockNotification.TYPE = 112;
rpc.UserBlockNotification.prototype.getMsgType = function() {
	return 112;
};

rpc.UserBlockNotification.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.UserBlockNotification.toConfusionObject(this.mObj, clone);
};

rpc.UserBlockNotification.getConfusionName = function(name) {
    rpc.UserBlockNotification.checkAndInitial();
    var value = rpc.UserBlockNotification.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.UserBlockNotification.getRawName = function(confusionName) {
    rpc.UserBlockNotification.checkAndInitial();
    var value = rpc.UserBlockNotification.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.UserBlockNotification.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.UserBlockNotification.checkAndInitial();
    if (!rpc.UserBlockNotification.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.UserBlockNotification.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.UserBlockNotification.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.UserBlockNotification.checkAndInitial();
    if (!rpc.UserBlockNotification.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.UserBlockNotification.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.UserBlockNotification.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.UserBlockNotification.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.UserBlockNotification.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.UserBlockNotification.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.VoiceMessage = function() {this.checkAndCreate();};
deepExtend(rpc.VoiceMessage.prototype, rpc.RpcMessageBase.prototype);
rpc.VoiceMessage.prototype.getResource = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["resource"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["resource"];
	if(!value){
		value = this.mObj["re"];
		if(value) {
			delete this.mObj["re"];
			this.mObj["resource"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["resource"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.VoiceMessage.prototype.setResource = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["re"];
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["resource"];
	else
		this.mObj["resource"] = _value_value0;

	if(value) {
		this.mValueCache["resource"] = value;
	} else {
		delete this.mValueCache["resource"];
	}
	return this;
};

rpc.VoiceMessage.prototype.getVoiceLen = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["voiceLen"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["voiceLen"];
	if(!value){
		value = this.mObj["vl"];
		if(value) {
			delete this.mObj["vl"];
			this.mObj["voiceLen"] = value;
		}
	}
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["voiceLen"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.VoiceMessage.prototype.setVoiceLen = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	delete this.mObj["vl"];
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["voiceLen"];
	else
		this.mObj["voiceLen"] = _value_value0;

	if(value) {
		this.mValueCache["voiceLen"] = value;
	} else {
		delete this.mValueCache["voiceLen"];
	}
	return this;
};

rpc.VoiceMessage.FIELD_VOICELEN="voiceLen";
rpc.VoiceMessage.FIELD_VOICELEN_CONFUSION="vl";
rpc.VoiceMessage.FIELD_RESOURCE="resource";
rpc.VoiceMessage.FIELD_RESOURCE_CONFUSION="re";

rpc.VoiceMessage.checkAndInitial = function() {
    if(rpc.VoiceMessage.mFieldToConfusionMap)
        return;
	
	rpc.VoiceMessage.mHasConfusionField = true;
	rpc.VoiceMessage.mFieldToConfusionMap = {
		"voiceLen":"vl", 
		"resource":"re"
	};
	rpc.VoiceMessage.mConfusionToFieldMap = {
		"vl":"voiceLen", 
		"re":"resource"
	};

};

rpc.VoiceMessage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.VoiceMessage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.VoiceMessage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
        this.mObj[rpc.RpcMessageBase.FIELD_MSGTYPE] = 102;
        this.mObj[rpc.RpcMessageBase.FIELD_FLAG] = 12;
    }
};

rpc.VoiceMessage.TYPE = 102;
rpc.VoiceMessage.prototype.getMsgType = function() {
	return 102;
};

rpc.VoiceMessage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.VoiceMessage.toConfusionObject(this.mObj, clone);
};

rpc.VoiceMessage.getConfusionName = function(name) {
    rpc.VoiceMessage.checkAndInitial();
    var value = rpc.VoiceMessage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return rpc.RpcMessageBase.getConfusionName(name);
};
    
rpc.VoiceMessage.getRawName = function(confusionName) {
    rpc.VoiceMessage.checkAndInitial();
    var value = rpc.VoiceMessage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return rpc.RpcMessageBase.getRawName(confusionName);
};

rpc.VoiceMessage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.VoiceMessage.checkAndInitial();
    if (!rpc.VoiceMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.toConfusionObject(from);
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.VoiceMessage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.VoiceMessage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.VoiceMessage.checkAndInitial();
    if (!rpc.VoiceMessage.mHasConfusionField) {
        return rpc.RpcMessageBase.confusionToRawObject(from);
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.VoiceMessage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.VoiceMessage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.VoiceMessage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.VoiceMessage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.VoiceMessage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.City = function() {};
rpc.City.prototype.getCode = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["code"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["code"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["code"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.City.prototype.setCode = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["code"];
	else
		this.mObj["code"] = _value_value0;

	if(value) {
		this.mValueCache["code"] = value;
	} else {
		delete this.mValueCache["code"];
	}
	return this;
};

rpc.City.prototype.getDeductd = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deductd"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deductd"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deductd"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.City.prototype.setDeductd = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deductd"];
	else
		this.mObj["deductd"] = _value_value0;

	if(value) {
		this.mValueCache["deductd"] = value;
	} else {
		delete this.mValueCache["deductd"];
	}
	return this;
};

rpc.City.prototype.getId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.City.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.City.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.City.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.City.prototype.getParent = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["parent"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["parent"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["parent"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.City.prototype.setParent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["parent"];
	else
		this.mObj["parent"] = _value_value0;

	if(value) {
		this.mValueCache["parent"] = value;
	} else {
		delete this.mValueCache["parent"];
	}
	return this;
};

rpc.City.prototype.getShipfee = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shipfee"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shipfee"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shipfee"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.City.prototype.setShipfee = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shipfee"];
	else
		this.mObj["shipfee"] = _value_value0;

	if(value) {
		this.mValueCache["shipfee"] = value;
	} else {
		delete this.mValueCache["shipfee"];
	}
	return this;
};

rpc.City.prototype.getStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["status"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["status"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["status"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.City.prototype.setStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["status"];
	else
		this.mObj["status"] = _value_value0;

	if(value) {
		this.mValueCache["status"] = value;
	} else {
		delete this.mValueCache["status"];
	}
	return this;
};

rpc.City.FIELD_ID="id";
rpc.City.FIELD_ID_CONFUSION="id";
rpc.City.FIELD_STATUS="status";
rpc.City.FIELD_STATUS_CONFUSION="status";
rpc.City.FIELD_SHIPFEE="shipfee";
rpc.City.FIELD_SHIPFEE_CONFUSION="shipfee";
rpc.City.FIELD_NAME="name";
rpc.City.FIELD_NAME_CONFUSION="name";
rpc.City.FIELD_PARENT="parent";
rpc.City.FIELD_PARENT_CONFUSION="parent";
rpc.City.FIELD_DEDUCTD="deductd";
rpc.City.FIELD_DEDUCTD_CONFUSION="deductd";
rpc.City.FIELD_CODE="code";
rpc.City.FIELD_CODE_CONFUSION="code";

rpc.City.checkAndInitial = function() {
    if(rpc.City.mFieldToConfusionMap)
        return;
	
	rpc.City.mHasConfusionField = false;
	rpc.City.mFieldToConfusionMap = {
		"id":"id", 
		"status":"status", 
		"shipfee":"shipfee", 
		"name":"name", 
		"parent":"parent", 
		"deductd":"deductd", 
		"code":"code"
	};
	rpc.City.mConfusionToFieldMap = {
		"id":"id", 
		"status":"status", 
		"shipfee":"shipfee", 
		"name":"name", 
		"parent":"parent", 
		"deductd":"deductd", 
		"code":"code"
	};

};

rpc.City.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.City.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.City.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.City.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.City.toConfusionObject(this.mObj, clone);
};

rpc.City.getConfusionName = function(name) {
    rpc.City.checkAndInitial();
    var value = rpc.City.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.City.getRawName = function(confusionName) {
    rpc.City.checkAndInitial();
    var value = rpc.City.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.City.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.City.checkAndInitial();
    if (!rpc.City.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.City.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.City.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.City.checkAndInitial();
    if (!rpc.City.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.City.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.City.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.City.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.City.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.City.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DeliveryZone = function() {};
rpc.DeliveryZone.prototype.getAreaId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["areaId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["areaId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["areaId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DeliveryZone.prototype.setAreaId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["areaId"];
	else
		this.mObj["areaId"] = _value_value0;

	if(value) {
		this.mValueCache["areaId"] = value;
	} else {
		delete this.mValueCache["areaId"];
	}
	return this;
};

rpc.DeliveryZone.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DeliveryZone.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.DeliveryZone.prototype.getId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DeliveryZone.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.DeliveryZone.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DeliveryZone.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.DeliveryZone.prototype.getShopAreaName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopAreaName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopAreaName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopAreaName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DeliveryZone.prototype.setShopAreaName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopAreaName"];
	else
		this.mObj["shopAreaName"] = _value_value0;

	if(value) {
		this.mValueCache["shopAreaName"] = value;
	} else {
		delete this.mValueCache["shopAreaName"];
	}
	return this;
};

rpc.DeliveryZone.FIELD_ID="id";
rpc.DeliveryZone.FIELD_ID_CONFUSION="id";
rpc.DeliveryZone.FIELD_CREATED="created";
rpc.DeliveryZone.FIELD_CREATED_CONFUSION="created";
rpc.DeliveryZone.FIELD_NAME="name";
rpc.DeliveryZone.FIELD_NAME_CONFUSION="name";
rpc.DeliveryZone.FIELD_SHOPAREANAME="shopAreaName";
rpc.DeliveryZone.FIELD_SHOPAREANAME_CONFUSION="shopAreaName";
rpc.DeliveryZone.FIELD_AREAID="areaId";
rpc.DeliveryZone.FIELD_AREAID_CONFUSION="areaId";

rpc.DeliveryZone.checkAndInitial = function() {
    if(rpc.DeliveryZone.mFieldToConfusionMap)
        return;
	
	rpc.DeliveryZone.mHasConfusionField = false;
	rpc.DeliveryZone.mFieldToConfusionMap = {
		"id":"id", 
		"created":"created", 
		"name":"name", 
		"shopAreaName":"shopAreaName", 
		"areaId":"areaId"
	};
	rpc.DeliveryZone.mConfusionToFieldMap = {
		"id":"id", 
		"created":"created", 
		"name":"name", 
		"shopAreaName":"shopAreaName", 
		"areaId":"areaId"
	};

};

rpc.DeliveryZone.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DeliveryZone.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DeliveryZone.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.DeliveryZone.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DeliveryZone.toConfusionObject(this.mObj, clone);
};

rpc.DeliveryZone.getConfusionName = function(name) {
    rpc.DeliveryZone.checkAndInitial();
    var value = rpc.DeliveryZone.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.DeliveryZone.getRawName = function(confusionName) {
    rpc.DeliveryZone.checkAndInitial();
    var value = rpc.DeliveryZone.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.DeliveryZone.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DeliveryZone.checkAndInitial();
    if (!rpc.DeliveryZone.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DeliveryZone.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DeliveryZone.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DeliveryZone.checkAndInitial();
    if (!rpc.DeliveryZone.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DeliveryZone.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DeliveryZone.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DeliveryZone.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DeliveryZone.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DeliveryZone.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ResidentalDistrict = function() {};
rpc.ResidentalDistrict.prototype.getAddress = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["address"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["address"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["address"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ResidentalDistrict.prototype.setAddress = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["address"];
	else
		this.mObj["address"] = _value_value0;

	if(value) {
		this.mValueCache["address"] = value;
	} else {
		delete this.mValueCache["address"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getAreaId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["areaId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["areaId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["areaId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ResidentalDistrict.prototype.setAreaId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["areaId"];
	else
		this.mObj["areaId"] = _value_value0;

	if(value) {
		this.mValueCache["areaId"] = value;
	} else {
		delete this.mValueCache["areaId"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getAreaName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["areaName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["areaName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["areaName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ResidentalDistrict.prototype.setAreaName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["areaName"];
	else
		this.mObj["areaName"] = _value_value0;

	if(value) {
		this.mValueCache["areaName"] = value;
	} else {
		delete this.mValueCache["areaName"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ResidentalDistrict.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ResidentalDistrict.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getIsActive = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isActive"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isActive"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isActive"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ResidentalDistrict.prototype.setIsActive = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isActive"];
	else
		this.mObj["isActive"] = _value_value0;

	if(value) {
		this.mValueCache["isActive"] = value;
	} else {
		delete this.mValueCache["isActive"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getLat = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["lat"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["lat"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["lat"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ResidentalDistrict.prototype.setLat = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["lat"];
	else
		this.mObj["lat"] = _value_value0;

	if(value) {
		this.mValueCache["lat"] = value;
	} else {
		delete this.mValueCache["lat"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getLng = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["lng"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["lng"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["lng"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ResidentalDistrict.prototype.setLng = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["lng"];
	else
		this.mObj["lng"] = _value_value0;

	if(value) {
		this.mValueCache["lng"] = value;
	} else {
		delete this.mValueCache["lng"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ResidentalDistrict.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getZoneId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["zoneId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["zoneId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["zoneId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ResidentalDistrict.prototype.setZoneId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["zoneId"];
	else
		this.mObj["zoneId"] = _value_value0;

	if(value) {
		this.mValueCache["zoneId"] = value;
	} else {
		delete this.mValueCache["zoneId"];
	}
	return this;
};

rpc.ResidentalDistrict.prototype.getZoneName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["zoneName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["zoneName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["zoneName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ResidentalDistrict.prototype.setZoneName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["zoneName"];
	else
		this.mObj["zoneName"] = _value_value0;

	if(value) {
		this.mValueCache["zoneName"] = value;
	} else {
		delete this.mValueCache["zoneName"];
	}
	return this;
};

rpc.ResidentalDistrict.FIELD_ISACTIVE="isActive";
rpc.ResidentalDistrict.FIELD_ISACTIVE_CONFUSION="isActive";
rpc.ResidentalDistrict.FIELD_ID="id";
rpc.ResidentalDistrict.FIELD_ID_CONFUSION="id";
rpc.ResidentalDistrict.FIELD_AREANAME="areaName";
rpc.ResidentalDistrict.FIELD_AREANAME_CONFUSION="areaName";
rpc.ResidentalDistrict.FIELD_CREATED="created";
rpc.ResidentalDistrict.FIELD_CREATED_CONFUSION="created";
rpc.ResidentalDistrict.FIELD_ADDRESS="address";
rpc.ResidentalDistrict.FIELD_ADDRESS_CONFUSION="address";
rpc.ResidentalDistrict.FIELD_NAME="name";
rpc.ResidentalDistrict.FIELD_NAME_CONFUSION="name";
rpc.ResidentalDistrict.FIELD_LNG="lng";
rpc.ResidentalDistrict.FIELD_LNG_CONFUSION="lng";
rpc.ResidentalDistrict.FIELD_ZONENAME="zoneName";
rpc.ResidentalDistrict.FIELD_ZONENAME_CONFUSION="zoneName";
rpc.ResidentalDistrict.FIELD_LAT="lat";
rpc.ResidentalDistrict.FIELD_LAT_CONFUSION="lat";
rpc.ResidentalDistrict.FIELD_AREAID="areaId";
rpc.ResidentalDistrict.FIELD_AREAID_CONFUSION="areaId";
rpc.ResidentalDistrict.FIELD_ZONEID="zoneId";
rpc.ResidentalDistrict.FIELD_ZONEID_CONFUSION="zoneId";

rpc.ResidentalDistrict.checkAndInitial = function() {
    if(rpc.ResidentalDistrict.mFieldToConfusionMap)
        return;
	
	rpc.ResidentalDistrict.mHasConfusionField = false;
	rpc.ResidentalDistrict.mFieldToConfusionMap = {
		"isActive":"isActive", 
		"id":"id", 
		"areaName":"areaName", 
		"created":"created", 
		"address":"address", 
		"name":"name", 
		"lng":"lng", 
		"zoneName":"zoneName", 
		"lat":"lat", 
		"areaId":"areaId", 
		"zoneId":"zoneId"
	};
	rpc.ResidentalDistrict.mConfusionToFieldMap = {
		"isActive":"isActive", 
		"id":"id", 
		"areaName":"areaName", 
		"created":"created", 
		"address":"address", 
		"name":"name", 
		"lng":"lng", 
		"zoneName":"zoneName", 
		"lat":"lat", 
		"areaId":"areaId", 
		"zoneId":"zoneId"
	};

};

rpc.ResidentalDistrict.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ResidentalDistrict.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ResidentalDistrict.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ResidentalDistrict.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ResidentalDistrict.toConfusionObject(this.mObj, clone);
};

rpc.ResidentalDistrict.getConfusionName = function(name) {
    rpc.ResidentalDistrict.checkAndInitial();
    var value = rpc.ResidentalDistrict.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ResidentalDistrict.getRawName = function(confusionName) {
    rpc.ResidentalDistrict.checkAndInitial();
    var value = rpc.ResidentalDistrict.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ResidentalDistrict.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ResidentalDistrict.checkAndInitial();
    if (!rpc.ResidentalDistrict.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ResidentalDistrict.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ResidentalDistrict.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ResidentalDistrict.checkAndInitial();
    if (!rpc.ResidentalDistrict.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ResidentalDistrict.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ResidentalDistrict.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ResidentalDistrict.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ResidentalDistrict.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ResidentalDistrict.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopArea = function() {};
rpc.ShopArea.prototype.getAddress = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["address"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["address"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["address"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopArea.prototype.setAddress = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["address"];
	else
		this.mObj["address"] = _value_value0;

	if(value) {
		this.mValueCache["address"] = value;
	} else {
		delete this.mValueCache["address"];
	}
	return this;
};

rpc.ShopArea.prototype.getCity = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["city"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["city"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["city"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopArea.prototype.setCity = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["city"];
	else
		this.mObj["city"] = _value_value0;

	if(value) {
		this.mValueCache["city"] = value;
	} else {
		delete this.mValueCache["city"];
	}
	return this;
};

rpc.ShopArea.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopArea.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.ShopArea.prototype.getId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopArea.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.ShopArea.prototype.getIsActive = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isActive"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isActive"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isActive"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopArea.prototype.setIsActive = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isActive"];
	else
		this.mObj["isActive"] = _value_value0;

	if(value) {
		this.mValueCache["isActive"] = value;
	} else {
		delete this.mValueCache["isActive"];
	}
	return this;
};

rpc.ShopArea.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopArea.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.ShopArea.FIELD_ISACTIVE="isActive";
rpc.ShopArea.FIELD_ISACTIVE_CONFUSION="isActive";
rpc.ShopArea.FIELD_ID="id";
rpc.ShopArea.FIELD_ID_CONFUSION="id";
rpc.ShopArea.FIELD_CREATED="created";
rpc.ShopArea.FIELD_CREATED_CONFUSION="created";
rpc.ShopArea.FIELD_ADDRESS="address";
rpc.ShopArea.FIELD_ADDRESS_CONFUSION="address";
rpc.ShopArea.FIELD_NAME="name";
rpc.ShopArea.FIELD_NAME_CONFUSION="name";
rpc.ShopArea.FIELD_CITY="city";
rpc.ShopArea.FIELD_CITY_CONFUSION="city";

rpc.ShopArea.checkAndInitial = function() {
    if(rpc.ShopArea.mFieldToConfusionMap)
        return;
	
	rpc.ShopArea.mHasConfusionField = false;
	rpc.ShopArea.mFieldToConfusionMap = {
		"isActive":"isActive", 
		"id":"id", 
		"created":"created", 
		"address":"address", 
		"name":"name", 
		"city":"city"
	};
	rpc.ShopArea.mConfusionToFieldMap = {
		"isActive":"isActive", 
		"id":"id", 
		"created":"created", 
		"address":"address", 
		"name":"name", 
		"city":"city"
	};

};

rpc.ShopArea.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopArea.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopArea.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ShopArea.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopArea.toConfusionObject(this.mObj, clone);
};

rpc.ShopArea.getConfusionName = function(name) {
    rpc.ShopArea.checkAndInitial();
    var value = rpc.ShopArea.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ShopArea.getRawName = function(confusionName) {
    rpc.ShopArea.checkAndInitial();
    var value = rpc.ShopArea.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ShopArea.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopArea.checkAndInitial();
    if (!rpc.ShopArea.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopArea.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopArea.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopArea.checkAndInitial();
    if (!rpc.ShopArea.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopArea.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopArea.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopArea.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopArea.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopArea.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Customer = function() {};
rpc.Customer.prototype.getAvatar = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["avatar"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["avatar"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["avatar"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Customer.prototype.setAvatar = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["avatar"];
	else
		this.mObj["avatar"] = _value_value0;

	if(value) {
		this.mValueCache["avatar"] = value;
	} else {
		delete this.mValueCache["avatar"];
	}
	return this;
};

rpc.Customer.prototype.getBalance = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["balance"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["balance"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["balance"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Customer.prototype.setBalance = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["balance"];
	else
		this.mObj["balance"] = _value_value0;

	if(value) {
		this.mValueCache["balance"] = value;
	} else {
		delete this.mValueCache["balance"];
	}
	return this;
};

rpc.Customer.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Customer.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.Customer.prototype.getDeals = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deals"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deals"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deals"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Customer.prototype.setDeals = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deals"];
	else
		this.mObj["deals"] = _value_value0;

	if(value) {
		this.mValueCache["deals"] = value;
	} else {
		delete this.mValueCache["deals"];
	}
	return this;
};

rpc.Customer.prototype.getEnable = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["enable"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["enable"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["enable"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Customer.prototype.setEnable = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["enable"];
	else
		this.mObj["enable"] = _value_value0;

	if(value) {
		this.mValueCache["enable"] = value;
	} else {
		delete this.mValueCache["enable"];
	}
	return this;
};

rpc.Customer.prototype.getId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Customer.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.Customer.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Customer.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.Customer.prototype.getPhone = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["phone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["phone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["phone"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Customer.prototype.setPhone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["phone"];
	else
		this.mObj["phone"] = _value_value0;

	if(value) {
		this.mValueCache["phone"] = value;
	} else {
		delete this.mValueCache["phone"];
	}
	return this;
};

rpc.Customer.prototype.getUid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Customer.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.Customer.FIELD_UID="uid";
rpc.Customer.FIELD_UID_CONFUSION="uid";
rpc.Customer.FIELD_ID="id";
rpc.Customer.FIELD_ID_CONFUSION="id";
rpc.Customer.FIELD_BALANCE="balance";
rpc.Customer.FIELD_BALANCE_CONFUSION="balance";
rpc.Customer.FIELD_PHONE="phone";
rpc.Customer.FIELD_PHONE_CONFUSION="phone";
rpc.Customer.FIELD_CREATED="created";
rpc.Customer.FIELD_CREATED_CONFUSION="created";
rpc.Customer.FIELD_NAME="name";
rpc.Customer.FIELD_NAME_CONFUSION="name";
rpc.Customer.FIELD_ENABLE="enable";
rpc.Customer.FIELD_ENABLE_CONFUSION="enable";
rpc.Customer.FIELD_AVATAR="avatar";
rpc.Customer.FIELD_AVATAR_CONFUSION="avatar";
rpc.Customer.FIELD_DEALS="deals";
rpc.Customer.FIELD_DEALS_CONFUSION="deals";

rpc.Customer.checkAndInitial = function() {
    if(rpc.Customer.mFieldToConfusionMap)
        return;
	
	rpc.Customer.mHasConfusionField = false;
	rpc.Customer.mFieldToConfusionMap = {
		"uid":"uid", 
		"id":"id", 
		"balance":"balance", 
		"phone":"phone", 
		"created":"created", 
		"name":"name", 
		"enable":"enable", 
		"avatar":"avatar", 
		"deals":"deals"
	};
	rpc.Customer.mConfusionToFieldMap = {
		"uid":"uid", 
		"id":"id", 
		"balance":"balance", 
		"phone":"phone", 
		"created":"created", 
		"name":"name", 
		"enable":"enable", 
		"avatar":"avatar", 
		"deals":"deals"
	};

};

rpc.Customer.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Customer.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Customer.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Customer.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Customer.toConfusionObject(this.mObj, clone);
};

rpc.Customer.getConfusionName = function(name) {
    rpc.Customer.checkAndInitial();
    var value = rpc.Customer.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Customer.getRawName = function(confusionName) {
    rpc.Customer.checkAndInitial();
    var value = rpc.Customer.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Customer.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Customer.checkAndInitial();
    if (!rpc.Customer.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Customer.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Customer.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Customer.checkAndInitial();
    if (!rpc.Customer.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Customer.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Customer.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Customer.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Customer.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Customer.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.CheckResult = function() {};
rpc.CheckResult.prototype.getAddress = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["address"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["address"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.Address, null, false);
	
	if(objRet) {
		this.mValueCache["address"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CheckResult.prototype.setAddress = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["address"];
	else
		this.mObj["address"] = _value_value0;

	if(value) {
		this.mValueCache["address"] = value;
	} else {
		delete this.mValueCache["address"];
	}
	return this;
};

rpc.CheckResult.prototype.getCheckCode = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["checkCode"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["checkCode"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["checkCode"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CheckResult.prototype.setCheckCode = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["checkCode"];
	else
		this.mObj["checkCode"] = _value_value0;

	if(value) {
		this.mValueCache["checkCode"] = value;
	} else {
		delete this.mValueCache["checkCode"];
	}
	return this;
};

rpc.CheckResult.prototype.getDealPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealPrice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealPrice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealPrice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CheckResult.prototype.setDealPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealPrice"];
	else
		this.mObj["dealPrice"] = _value_value0;

	if(value) {
		this.mValueCache["dealPrice"] = value;
	} else {
		delete this.mValueCache["dealPrice"];
	}
	return this;
};

rpc.CheckResult.prototype.getFreeShipfee = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["freeShipfee"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["freeShipfee"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["freeShipfee"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CheckResult.prototype.setFreeShipfee = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["freeShipfee"];
	else
		this.mObj["freeShipfee"] = _value_value0;

	if(value) {
		this.mValueCache["freeShipfee"] = value;
	} else {
		delete this.mValueCache["freeShipfee"];
	}
	return this;
};

rpc.CheckResult.prototype.getIsDealPaid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isDealPaid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isDealPaid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isDealPaid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CheckResult.prototype.setIsDealPaid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isDealPaid"];
	else
		this.mObj["isDealPaid"] = _value_value0;

	if(value) {
		this.mValueCache["isDealPaid"] = value;
	} else {
		delete this.mValueCache["isDealPaid"];
	}
	return this;
};

rpc.CheckResult.prototype.getIsProductLimit = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isProductLimit"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isProductLimit"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isProductLimit"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CheckResult.prototype.setIsProductLimit = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isProductLimit"];
	else
		this.mObj["isProductLimit"] = _value_value0;

	if(value) {
		this.mValueCache["isProductLimit"] = value;
	} else {
		delete this.mValueCache["isProductLimit"];
	}
	return this;
};

rpc.CheckResult.prototype.getProductLimitNote = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productLimitNote"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productLimitNote"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["productLimitNote"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CheckResult.prototype.setProductLimitNote = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["productLimitNote"];
	else
		this.mObj["productLimitNote"] = _value_value0;

	if(value) {
		this.mValueCache["productLimitNote"] = value;
	} else {
		delete this.mValueCache["productLimitNote"];
	}
	return this;
};

rpc.CheckResult.prototype.getResults = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["results"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["results"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.CheckResultPerShop], false);
	
	if(objRet) {
		this.mValueCache["results"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CheckResult.prototype.setResults = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["results"];
	else
		this.mObj["results"] = _value_value0;

	if(value) {
		this.mValueCache["results"] = value;
	} else {
		delete this.mValueCache["results"];
	}
	return this;
};

rpc.CheckResult.prototype.getShipfee = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shipfee"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shipfee"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shipfee"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CheckResult.prototype.setShipfee = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shipfee"];
	else
		this.mObj["shipfee"] = _value_value0;

	if(value) {
		this.mValueCache["shipfee"] = value;
	} else {
		delete this.mValueCache["shipfee"];
	}
	return this;
};

rpc.CheckResult.FIELD_FREESHIPFEE="freeShipfee";
rpc.CheckResult.FIELD_FREESHIPFEE_CONFUSION="freeShipfee";
rpc.CheckResult.FIELD_ISDEALPAID="isDealPaid";
rpc.CheckResult.FIELD_ISDEALPAID_CONFUSION="isDealPaid";
rpc.CheckResult.FIELD_RESULTS="results";
rpc.CheckResult.FIELD_RESULTS_CONFUSION="results";
rpc.CheckResult.FIELD_ISPRODUCTLIMIT="isProductLimit";
rpc.CheckResult.FIELD_ISPRODUCTLIMIT_CONFUSION="isProductLimit";
rpc.CheckResult.FIELD_DEALPRICE="dealPrice";
rpc.CheckResult.FIELD_DEALPRICE_CONFUSION="dealPrice";
rpc.CheckResult.FIELD_SHIPFEE="shipfee";
rpc.CheckResult.FIELD_SHIPFEE_CONFUSION="shipfee";
rpc.CheckResult.FIELD_CHECKCODE="checkCode";
rpc.CheckResult.FIELD_CHECKCODE_CONFUSION="checkCode";
rpc.CheckResult.FIELD_ADDRESS="address";
rpc.CheckResult.FIELD_ADDRESS_CONFUSION="address";
rpc.CheckResult.FIELD_PRODUCTLIMITNOTE="productLimitNote";
rpc.CheckResult.FIELD_PRODUCTLIMITNOTE_CONFUSION="productLimitNote";

rpc.CheckResult.checkAndInitial = function() {
    if(rpc.CheckResult.mFieldToConfusionMap)
        return;
	
	rpc.CheckResult.mHasConfusionField = false;
	rpc.CheckResult.mFieldToConfusionMap = {
		"freeShipfee":"freeShipfee", 
		"isDealPaid":"isDealPaid", 
		"results":"results", 
		"isProductLimit":"isProductLimit", 
		"dealPrice":"dealPrice", 
		"shipfee":"shipfee", 
		"checkCode":"checkCode", 
		"address":"address", 
		"productLimitNote":"productLimitNote"
	};
	rpc.CheckResult.mConfusionToFieldMap = {
		"freeShipfee":"freeShipfee", 
		"isDealPaid":"isDealPaid", 
		"results":"results", 
		"isProductLimit":"isProductLimit", 
		"dealPrice":"dealPrice", 
		"shipfee":"shipfee", 
		"checkCode":"checkCode", 
		"address":"address", 
		"productLimitNote":"productLimitNote"
	};

};

rpc.CheckResult.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.CheckResult.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.CheckResult.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.CheckResult.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.CheckResult.toConfusionObject(this.mObj, clone);
};

rpc.CheckResult.getConfusionName = function(name) {
    rpc.CheckResult.checkAndInitial();
    var value = rpc.CheckResult.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.CheckResult.getRawName = function(confusionName) {
    rpc.CheckResult.checkAndInitial();
    var value = rpc.CheckResult.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.CheckResult.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.CheckResult.checkAndInitial();
    if (!rpc.CheckResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.CheckResult.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.CheckResult.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.CheckResult.checkAndInitial();
    if (!rpc.CheckResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.CheckResult.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.CheckResult.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.CheckResult.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.CheckResult.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.CheckResult.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.CheckResultPerShop = function() {};
rpc.CheckResultPerShop.prototype.getDealItems = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealItems"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealItems"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.DealItem], false);
	
	if(objRet) {
		this.mValueCache["dealItems"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CheckResultPerShop.prototype.setDealItems = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["dealItems"];
	else
		this.mObj["dealItems"] = _value_value0;

	if(value) {
		this.mValueCache["dealItems"] = value;
	} else {
		delete this.mValueCache["dealItems"];
	}
	return this;
};

rpc.CheckResultPerShop.prototype.getProducts = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["products"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["products"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Product], false);
	
	if(objRet) {
		this.mValueCache["products"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CheckResultPerShop.prototype.setProducts = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["products"];
	else
		this.mObj["products"] = _value_value0;

	if(value) {
		this.mValueCache["products"] = value;
	} else {
		delete this.mValueCache["products"];
	}
	return this;
};

rpc.CheckResultPerShop.prototype.getShop = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shop"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shop"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.Shop, null, false);
	
	if(objRet) {
		this.mValueCache["shop"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CheckResultPerShop.prototype.setShop = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["shop"];
	else
		this.mObj["shop"] = _value_value0;

	if(value) {
		this.mValueCache["shop"] = value;
	} else {
		delete this.mValueCache["shop"];
	}
	return this;
};

rpc.CheckResultPerShop.FIELD_SHOP="shop";
rpc.CheckResultPerShop.FIELD_SHOP_CONFUSION="shop";
rpc.CheckResultPerShop.FIELD_PRODUCTS="products";
rpc.CheckResultPerShop.FIELD_PRODUCTS_CONFUSION="products";
rpc.CheckResultPerShop.FIELD_DEALITEMS="dealItems";
rpc.CheckResultPerShop.FIELD_DEALITEMS_CONFUSION="dealItems";

rpc.CheckResultPerShop.checkAndInitial = function() {
    if(rpc.CheckResultPerShop.mFieldToConfusionMap)
        return;
	
	rpc.CheckResultPerShop.mHasConfusionField = false;
	rpc.CheckResultPerShop.mFieldToConfusionMap = {
		"shop":"shop", 
		"products":"products", 
		"dealItems":"dealItems"
	};
	rpc.CheckResultPerShop.mConfusionToFieldMap = {
		"shop":"shop", 
		"products":"products", 
		"dealItems":"dealItems"
	};

};

rpc.CheckResultPerShop.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.CheckResultPerShop.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.CheckResultPerShop.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.CheckResultPerShop.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.CheckResultPerShop.toConfusionObject(this.mObj, clone);
};

rpc.CheckResultPerShop.getConfusionName = function(name) {
    rpc.CheckResultPerShop.checkAndInitial();
    var value = rpc.CheckResultPerShop.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.CheckResultPerShop.getRawName = function(confusionName) {
    rpc.CheckResultPerShop.checkAndInitial();
    var value = rpc.CheckResultPerShop.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.CheckResultPerShop.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.CheckResultPerShop.checkAndInitial();
    if (!rpc.CheckResultPerShop.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.CheckResultPerShop.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.CheckResultPerShop.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.CheckResultPerShop.checkAndInitial();
    if (!rpc.CheckResultPerShop.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.CheckResultPerShop.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.CheckResultPerShop.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.CheckResultPerShop.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.CheckResultPerShop.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.CheckResultPerShop.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.CreateDealResult = function() {};
rpc.CreateDealResult.prototype.getBalance = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["balance"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["balance"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["balance"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CreateDealResult.prototype.setBalance = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["balance"];
	else
		this.mObj["balance"] = _value_value0;

	if(value) {
		this.mValueCache["balance"] = value;
	} else {
		delete this.mValueCache["balance"];
	}
	return this;
};

rpc.CreateDealResult.prototype.getCheckResult = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["checkResult"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["checkResult"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.CheckResult, null, false);
	
	if(objRet) {
		this.mValueCache["checkResult"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CreateDealResult.prototype.setCheckResult = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["checkResult"];
	else
		this.mObj["checkResult"] = _value_value0;

	if(value) {
		this.mValueCache["checkResult"] = value;
	} else {
		delete this.mValueCache["checkResult"];
	}
	return this;
};

rpc.CreateDealResult.prototype.getDealId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CreateDealResult.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.CreateDealResult.FIELD_BALANCE="balance";
rpc.CreateDealResult.FIELD_BALANCE_CONFUSION="balance";
rpc.CreateDealResult.FIELD_CHECKRESULT="checkResult";
rpc.CreateDealResult.FIELD_CHECKRESULT_CONFUSION="checkResult";
rpc.CreateDealResult.FIELD_DEALID="dealId";
rpc.CreateDealResult.FIELD_DEALID_CONFUSION="dealId";

rpc.CreateDealResult.checkAndInitial = function() {
    if(rpc.CreateDealResult.mFieldToConfusionMap)
        return;
	
	rpc.CreateDealResult.mHasConfusionField = false;
	rpc.CreateDealResult.mFieldToConfusionMap = {
		"balance":"balance", 
		"checkResult":"checkResult", 
		"dealId":"dealId"
	};
	rpc.CreateDealResult.mConfusionToFieldMap = {
		"balance":"balance", 
		"checkResult":"checkResult", 
		"dealId":"dealId"
	};

};

rpc.CreateDealResult.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.CreateDealResult.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.CreateDealResult.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.CreateDealResult.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.CreateDealResult.toConfusionObject(this.mObj, clone);
};

rpc.CreateDealResult.getConfusionName = function(name) {
    rpc.CreateDealResult.checkAndInitial();
    var value = rpc.CreateDealResult.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.CreateDealResult.getRawName = function(confusionName) {
    rpc.CreateDealResult.checkAndInitial();
    var value = rpc.CreateDealResult.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.CreateDealResult.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.CreateDealResult.checkAndInitial();
    if (!rpc.CreateDealResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.CreateDealResult.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.CreateDealResult.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.CreateDealResult.checkAndInitial();
    if (!rpc.CreateDealResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.CreateDealResult.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.CreateDealResult.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.CreateDealResult.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.CreateDealResult.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.CreateDealResult.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Deal = function() {};
rpc.Deal.prototype.getAreaId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["areaId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["areaId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["areaId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setAreaId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["areaId"];
	else
		this.mObj["areaId"] = _value_value0;

	if(value) {
		this.mValueCache["areaId"] = value;
	} else {
		delete this.mValueCache["areaId"];
	}
	return this;
};

rpc.Deal.prototype.getBeginBuyTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["beginBuyTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["beginBuyTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["beginBuyTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setBeginBuyTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["beginBuyTime"];
	else
		this.mObj["beginBuyTime"] = _value_value0;

	if(value) {
		this.mValueCache["beginBuyTime"] = value;
	} else {
		delete this.mValueCache["beginBuyTime"];
	}
	return this;
};

rpc.Deal.prototype.getBeginDeliverTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["beginDeliverTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["beginDeliverTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["beginDeliverTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setBeginDeliverTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["beginDeliverTime"];
	else
		this.mObj["beginDeliverTime"] = _value_value0;

	if(value) {
		this.mValueCache["beginDeliverTime"] = value;
	} else {
		delete this.mValueCache["beginDeliverTime"];
	}
	return this;
};

rpc.Deal.prototype.getCityId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["cityId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["cityId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["cityId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setCityId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["cityId"];
	else
		this.mObj["cityId"] = _value_value0;

	if(value) {
		this.mValueCache["cityId"] = value;
	} else {
		delete this.mValueCache["cityId"];
	}
	return this;
};

rpc.Deal.prototype.getCodAmt = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["codAmt"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["codAmt"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["codAmt"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setCodAmt = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["codAmt"];
	else
		this.mObj["codAmt"] = _value_value0;

	if(value) {
		this.mValueCache["codAmt"] = value;
	} else {
		delete this.mValueCache["codAmt"];
	}
	return this;
};

rpc.Deal.prototype.getCompleteTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["completeTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["completeTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["completeTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setCompleteTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["completeTime"];
	else
		this.mObj["completeTime"] = _value_value0;

	if(value) {
		this.mValueCache["completeTime"] = value;
	} else {
		delete this.mValueCache["completeTime"];
	}
	return this;
};

rpc.Deal.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.Deal.prototype.getCustomId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["customId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["customId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["customId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setCustomId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["customId"];
	else
		this.mObj["customId"] = _value_value0;

	if(value) {
		this.mValueCache["customId"] = value;
	} else {
		delete this.mValueCache["customId"];
	}
	return this;
};

rpc.Deal.prototype.getDealId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.Deal.prototype.getDealStrId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealStrId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealStrId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["dealStrId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deal.prototype.setDealStrId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["dealStrId"];
	else
		this.mObj["dealStrId"] = _value_value0;

	if(value) {
		this.mValueCache["dealStrId"] = value;
	} else {
		delete this.mValueCache["dealStrId"];
	}
	return this;
};

rpc.Deal.prototype.getDeliverTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deliverTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deliverTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deliverTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setDeliverTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deliverTime"];
	else
		this.mObj["deliverTime"] = _value_value0;

	if(value) {
		this.mValueCache["deliverTime"] = value;
	} else {
		delete this.mValueCache["deliverTime"];
	}
	return this;
};

rpc.Deal.prototype.getDeliverType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deliverType"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deliverType"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deliverType"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setDeliverType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deliverType"];
	else
		this.mObj["deliverType"] = _value_value0;

	if(value) {
		this.mValueCache["deliverType"] = value;
	} else {
		delete this.mValueCache["deliverType"];
	}
	return this;
};

rpc.Deal.prototype.getDelivererId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["delivererId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["delivererId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["delivererId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setDelivererId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["delivererId"];
	else
		this.mObj["delivererId"] = _value_value0;

	if(value) {
		this.mValueCache["delivererId"] = value;
	} else {
		delete this.mValueCache["delivererId"];
	}
	return this;
};

rpc.Deal.prototype.getDistrictId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["districtId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["districtId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["districtId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deal.prototype.setDistrictId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["districtId"];
	else
		this.mObj["districtId"] = _value_value0;

	if(value) {
		this.mValueCache["districtId"] = value;
	} else {
		delete this.mValueCache["districtId"];
	}
	return this;
};

rpc.Deal.prototype.getHasAppraised = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasAppraised"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasAppraised"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasAppraised"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setHasAppraised = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasAppraised"];
	else
		this.mObj["hasAppraised"] = _value_value0;

	if(value) {
		this.mValueCache["hasAppraised"] = value;
	} else {
		delete this.mValueCache["hasAppraised"];
	}
	return this;
};

rpc.Deal.prototype.getHasCancel = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasCancel"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasCancel"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasCancel"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setHasCancel = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasCancel"];
	else
		this.mObj["hasCancel"] = _value_value0;

	if(value) {
		this.mValueCache["hasCancel"] = value;
	} else {
		delete this.mValueCache["hasCancel"];
	}
	return this;
};

rpc.Deal.prototype.getHasReturn = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasReturn"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasReturn"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasReturn"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setHasReturn = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasReturn"];
	else
		this.mObj["hasReturn"] = _value_value0;

	if(value) {
		this.mValueCache["hasReturn"] = value;
	} else {
		delete this.mValueCache["hasReturn"];
	}
	return this;
};

rpc.Deal.prototype.getIsCOD = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isCOD"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isCOD"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isCOD"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setIsCOD = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isCOD"];
	else
		this.mObj["isCOD"] = _value_value0;

	if(value) {
		this.mValueCache["isCOD"] = value;
	} else {
		delete this.mValueCache["isCOD"];
	}
	return this;
};

rpc.Deal.prototype.getIsGoodReview = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isGoodReview"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isGoodReview"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isGoodReview"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setIsGoodReview = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isGoodReview"];
	else
		this.mObj["isGoodReview"] = _value_value0;

	if(value) {
		this.mValueCache["isGoodReview"] = value;
	} else {
		delete this.mValueCache["isGoodReview"];
	}
	return this;
};

rpc.Deal.prototype.getNote = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["note"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["note"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["note"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deal.prototype.setNote = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["note"];
	else
		this.mObj["note"] = _value_value0;

	if(value) {
		this.mValueCache["note"] = value;
	} else {
		delete this.mValueCache["note"];
	}
	return this;
};

rpc.Deal.prototype.getPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["price"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["price"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["price"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["price"];
	else
		this.mObj["price"] = _value_value0;

	if(value) {
		this.mValueCache["price"] = value;
	} else {
		delete this.mValueCache["price"];
	}
	return this;
};

rpc.Deal.prototype.getReturnAmt = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["returnAmt"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["returnAmt"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["returnAmt"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setReturnAmt = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["returnAmt"];
	else
		this.mObj["returnAmt"] = _value_value0;

	if(value) {
		this.mValueCache["returnAmt"] = value;
	} else {
		delete this.mValueCache["returnAmt"];
	}
	return this;
};

rpc.Deal.prototype.getReturnStr = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["returnStr"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["returnStr"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["returnStr"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deal.prototype.setReturnStr = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["returnStr"];
	else
		this.mObj["returnStr"] = _value_value0;

	if(value) {
		this.mValueCache["returnStr"] = value;
	} else {
		delete this.mValueCache["returnStr"];
	}
	return this;
};

rpc.Deal.prototype.getReview = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["review"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["review"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["review"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deal.prototype.setReview = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["review"];
	else
		this.mObj["review"] = _value_value0;

	if(value) {
		this.mValueCache["review"] = value;
	} else {
		delete this.mValueCache["review"];
	}
	return this;
};

rpc.Deal.prototype.getShipfee = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shipfee"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shipfee"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shipfee"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setShipfee = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shipfee"];
	else
		this.mObj["shipfee"] = _value_value0;

	if(value) {
		this.mValueCache["shipfee"] = value;
	} else {
		delete this.mValueCache["shipfee"];
	}
	return this;
};

rpc.Deal.prototype.getStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["status"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["status"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["status"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deal.prototype.setStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["status"];
	else
		this.mObj["status"] = _value_value0;

	if(value) {
		this.mValueCache["status"] = value;
	} else {
		delete this.mValueCache["status"];
	}
	return this;
};

rpc.Deal.prototype.getTasks = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["tasks"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["tasks"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Task], false);
	
	if(objRet) {
		this.mValueCache["tasks"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deal.prototype.setTasks = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["tasks"];
	else
		this.mObj["tasks"] = _value_value0;

	if(value) {
		this.mValueCache["tasks"] = value;
	} else {
		delete this.mValueCache["tasks"];
	}
	return this;
};

rpc.Deal.FIELD_CUSTOMID="customId";
rpc.Deal.FIELD_CUSTOMID_CONFUSION="customId";
rpc.Deal.FIELD_RETURNAMT="returnAmt";
rpc.Deal.FIELD_RETURNAMT_CONFUSION="returnAmt";
rpc.Deal.FIELD_CITYID="cityId";
rpc.Deal.FIELD_CITYID_CONFUSION="cityId";
rpc.Deal.FIELD_BEGINDELIVERTIME="beginDeliverTime";
rpc.Deal.FIELD_BEGINDELIVERTIME_CONFUSION="beginDeliverTime";
rpc.Deal.FIELD_RETURNSTR="returnStr";
rpc.Deal.FIELD_RETURNSTR_CONFUSION="returnStr";
rpc.Deal.FIELD_CODAMT="codAmt";
rpc.Deal.FIELD_CODAMT_CONFUSION="codAmt";
rpc.Deal.FIELD_AREAID="areaId";
rpc.Deal.FIELD_AREAID_CONFUSION="areaId";
rpc.Deal.FIELD_DISTRICTID="districtId";
rpc.Deal.FIELD_DISTRICTID_CONFUSION="districtId";
rpc.Deal.FIELD_BEGINBUYTIME="beginBuyTime";
rpc.Deal.FIELD_BEGINBUYTIME_CONFUSION="beginBuyTime";
rpc.Deal.FIELD_CREATED="created";
rpc.Deal.FIELD_CREATED_CONFUSION="created";
rpc.Deal.FIELD_ISCOD="isCOD";
rpc.Deal.FIELD_ISCOD_CONFUSION="isCOD";
rpc.Deal.FIELD_DEALSTRID="dealStrId";
rpc.Deal.FIELD_DEALSTRID_CONFUSION="dealStrId";
rpc.Deal.FIELD_HASCANCEL="hasCancel";
rpc.Deal.FIELD_HASCANCEL_CONFUSION="hasCancel";
rpc.Deal.FIELD_DELIVERTIME="deliverTime";
rpc.Deal.FIELD_DELIVERTIME_CONFUSION="deliverTime";
rpc.Deal.FIELD_NOTE="note";
rpc.Deal.FIELD_NOTE_CONFUSION="note";
rpc.Deal.FIELD_HASAPPRAISED="hasAppraised";
rpc.Deal.FIELD_HASAPPRAISED_CONFUSION="hasAppraised";
rpc.Deal.FIELD_STATUS="status";
rpc.Deal.FIELD_STATUS_CONFUSION="status";
rpc.Deal.FIELD_ISGOODREVIEW="isGoodReview";
rpc.Deal.FIELD_ISGOODREVIEW_CONFUSION="isGoodReview";
rpc.Deal.FIELD_TASKS="tasks";
rpc.Deal.FIELD_TASKS_CONFUSION="tasks";
rpc.Deal.FIELD_DEALID="dealId";
rpc.Deal.FIELD_DEALID_CONFUSION="dealId";
rpc.Deal.FIELD_PRICE="price";
rpc.Deal.FIELD_PRICE_CONFUSION="price";
rpc.Deal.FIELD_DELIVERERID="delivererId";
rpc.Deal.FIELD_DELIVERERID_CONFUSION="delivererId";
rpc.Deal.FIELD_SHIPFEE="shipfee";
rpc.Deal.FIELD_SHIPFEE_CONFUSION="shipfee";
rpc.Deal.FIELD_HASRETURN="hasReturn";
rpc.Deal.FIELD_HASRETURN_CONFUSION="hasReturn";
rpc.Deal.FIELD_DELIVERTYPE="deliverType";
rpc.Deal.FIELD_DELIVERTYPE_CONFUSION="deliverType";
rpc.Deal.FIELD_COMPLETETIME="completeTime";
rpc.Deal.FIELD_COMPLETETIME_CONFUSION="completeTime";
rpc.Deal.FIELD_REVIEW="review";
rpc.Deal.FIELD_REVIEW_CONFUSION="review";

rpc.Deal.checkAndInitial = function() {
    if(rpc.Deal.mFieldToConfusionMap)
        return;
	
	rpc.Deal.mHasConfusionField = false;
	rpc.Deal.mFieldToConfusionMap = {
		"customId":"customId", 
		"returnAmt":"returnAmt", 
		"cityId":"cityId", 
		"beginDeliverTime":"beginDeliverTime", 
		"returnStr":"returnStr", 
		"codAmt":"codAmt", 
		"areaId":"areaId", 
		"districtId":"districtId", 
		"beginBuyTime":"beginBuyTime", 
		"created":"created", 
		"isCOD":"isCOD", 
		"dealStrId":"dealStrId", 
		"hasCancel":"hasCancel", 
		"deliverTime":"deliverTime", 
		"note":"note", 
		"hasAppraised":"hasAppraised", 
		"status":"status", 
		"isGoodReview":"isGoodReview", 
		"tasks":"tasks", 
		"dealId":"dealId", 
		"price":"price", 
		"delivererId":"delivererId", 
		"shipfee":"shipfee", 
		"hasReturn":"hasReturn", 
		"deliverType":"deliverType", 
		"completeTime":"completeTime", 
		"review":"review"
	};
	rpc.Deal.mConfusionToFieldMap = {
		"customId":"customId", 
		"returnAmt":"returnAmt", 
		"cityId":"cityId", 
		"beginDeliverTime":"beginDeliverTime", 
		"returnStr":"returnStr", 
		"codAmt":"codAmt", 
		"areaId":"areaId", 
		"districtId":"districtId", 
		"beginBuyTime":"beginBuyTime", 
		"created":"created", 
		"isCOD":"isCOD", 
		"dealStrId":"dealStrId", 
		"hasCancel":"hasCancel", 
		"deliverTime":"deliverTime", 
		"note":"note", 
		"hasAppraised":"hasAppraised", 
		"status":"status", 
		"isGoodReview":"isGoodReview", 
		"tasks":"tasks", 
		"dealId":"dealId", 
		"price":"price", 
		"delivererId":"delivererId", 
		"shipfee":"shipfee", 
		"hasReturn":"hasReturn", 
		"deliverType":"deliverType", 
		"completeTime":"completeTime", 
		"review":"review"
	};

};

rpc.Deal.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Deal.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Deal.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Deal.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Deal.toConfusionObject(this.mObj, clone);
};

rpc.Deal.getConfusionName = function(name) {
    rpc.Deal.checkAndInitial();
    var value = rpc.Deal.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Deal.getRawName = function(confusionName) {
    rpc.Deal.checkAndInitial();
    var value = rpc.Deal.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Deal.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Deal.checkAndInitial();
    if (!rpc.Deal.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Deal.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Deal.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Deal.checkAndInitial();
    if (!rpc.Deal.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Deal.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Deal.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Deal.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Deal.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Deal.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DealComfiredResult = function() {};
rpc.DealComfiredResult.prototype.getIsAssignShopper = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isAssignShopper"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isAssignShopper"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isAssignShopper"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealComfiredResult.prototype.setIsAssignShopper = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isAssignShopper"];
	else
		this.mObj["isAssignShopper"] = _value_value0;

	if(value) {
		this.mValueCache["isAssignShopper"] = value;
	} else {
		delete this.mValueCache["isAssignShopper"];
	}
	return this;
};

rpc.DealComfiredResult.prototype.getIsDealComfired = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isDealComfired"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isDealComfired"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isDealComfired"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealComfiredResult.prototype.setIsDealComfired = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isDealComfired"];
	else
		this.mObj["isDealComfired"] = _value_value0;

	if(value) {
		this.mValueCache["isDealComfired"] = value;
	} else {
		delete this.mValueCache["isDealComfired"];
	}
	return this;
};

rpc.DealComfiredResult.FIELD_ISASSIGNSHOPPER="isAssignShopper";
rpc.DealComfiredResult.FIELD_ISASSIGNSHOPPER_CONFUSION="isAssignShopper";
rpc.DealComfiredResult.FIELD_ISDEALCOMFIRED="isDealComfired";
rpc.DealComfiredResult.FIELD_ISDEALCOMFIRED_CONFUSION="isDealComfired";

rpc.DealComfiredResult.checkAndInitial = function() {
    if(rpc.DealComfiredResult.mFieldToConfusionMap)
        return;
	
	rpc.DealComfiredResult.mHasConfusionField = false;
	rpc.DealComfiredResult.mFieldToConfusionMap = {
		"isAssignShopper":"isAssignShopper", 
		"isDealComfired":"isDealComfired"
	};
	rpc.DealComfiredResult.mConfusionToFieldMap = {
		"isAssignShopper":"isAssignShopper", 
		"isDealComfired":"isDealComfired"
	};

};

rpc.DealComfiredResult.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DealComfiredResult.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DealComfiredResult.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.DealComfiredResult.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DealComfiredResult.toConfusionObject(this.mObj, clone);
};

rpc.DealComfiredResult.getConfusionName = function(name) {
    rpc.DealComfiredResult.checkAndInitial();
    var value = rpc.DealComfiredResult.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.DealComfiredResult.getRawName = function(confusionName) {
    rpc.DealComfiredResult.checkAndInitial();
    var value = rpc.DealComfiredResult.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.DealComfiredResult.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DealComfiredResult.checkAndInitial();
    if (!rpc.DealComfiredResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DealComfiredResult.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DealComfiredResult.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DealComfiredResult.checkAndInitial();
    if (!rpc.DealComfiredResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DealComfiredResult.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DealComfiredResult.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DealComfiredResult.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DealComfiredResult.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DealComfiredResult.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DealDeliverTime = function() {};
rpc.DealDeliverTime.prototype.getAvailable = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["available"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["available"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["available"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealDeliverTime.prototype.setAvailable = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["available"];
	else
		this.mObj["available"] = _value_value0;

	if(value) {
		this.mValueCache["available"] = value;
	} else {
		delete this.mValueCache["available"];
	}
	return this;
};

rpc.DealDeliverTime.prototype.getDeliverTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deliverTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deliverTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deliverTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealDeliverTime.prototype.setDeliverTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deliverTime"];
	else
		this.mObj["deliverTime"] = _value_value0;

	if(value) {
		this.mValueCache["deliverTime"] = value;
	} else {
		delete this.mValueCache["deliverTime"];
	}
	return this;
};

rpc.DealDeliverTime.FIELD_AVAILABLE="available";
rpc.DealDeliverTime.FIELD_AVAILABLE_CONFUSION="available";
rpc.DealDeliverTime.FIELD_DELIVERTIME="deliverTime";
rpc.DealDeliverTime.FIELD_DELIVERTIME_CONFUSION="deliverTime";

rpc.DealDeliverTime.checkAndInitial = function() {
    if(rpc.DealDeliverTime.mFieldToConfusionMap)
        return;
	
	rpc.DealDeliverTime.mHasConfusionField = false;
	rpc.DealDeliverTime.mFieldToConfusionMap = {
		"available":"available", 
		"deliverTime":"deliverTime"
	};
	rpc.DealDeliverTime.mConfusionToFieldMap = {
		"available":"available", 
		"deliverTime":"deliverTime"
	};

};

rpc.DealDeliverTime.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DealDeliverTime.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DealDeliverTime.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.DealDeliverTime.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DealDeliverTime.toConfusionObject(this.mObj, clone);
};

rpc.DealDeliverTime.getConfusionName = function(name) {
    rpc.DealDeliverTime.checkAndInitial();
    var value = rpc.DealDeliverTime.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.DealDeliverTime.getRawName = function(confusionName) {
    rpc.DealDeliverTime.checkAndInitial();
    var value = rpc.DealDeliverTime.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.DealDeliverTime.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DealDeliverTime.checkAndInitial();
    if (!rpc.DealDeliverTime.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DealDeliverTime.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DealDeliverTime.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DealDeliverTime.checkAndInitial();
    if (!rpc.DealDeliverTime.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DealDeliverTime.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DealDeliverTime.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DealDeliverTime.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DealDeliverTime.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DealDeliverTime.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DealDeliverTimeResult = function() {};
rpc.DealDeliverTimeResult.prototype.getTodayDeliverTime = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["todayDeliverTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["todayDeliverTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.DealDeliverTime], false);
	
	if(objRet) {
		this.mValueCache["todayDeliverTime"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DealDeliverTimeResult.prototype.setTodayDeliverTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["todayDeliverTime"];
	else
		this.mObj["todayDeliverTime"] = _value_value0;

	if(value) {
		this.mValueCache["todayDeliverTime"] = value;
	} else {
		delete this.mValueCache["todayDeliverTime"];
	}
	return this;
};

rpc.DealDeliverTimeResult.prototype.getTomorrowDeliverTime = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["tomorrowDeliverTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["tomorrowDeliverTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.DealDeliverTime], false);
	
	if(objRet) {
		this.mValueCache["tomorrowDeliverTime"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DealDeliverTimeResult.prototype.setTomorrowDeliverTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["tomorrowDeliverTime"];
	else
		this.mObj["tomorrowDeliverTime"] = _value_value0;

	if(value) {
		this.mValueCache["tomorrowDeliverTime"] = value;
	} else {
		delete this.mValueCache["tomorrowDeliverTime"];
	}
	return this;
};

rpc.DealDeliverTimeResult.FIELD_TOMORROWDELIVERTIME="tomorrowDeliverTime";
rpc.DealDeliverTimeResult.FIELD_TOMORROWDELIVERTIME_CONFUSION="tomorrowDeliverTime";
rpc.DealDeliverTimeResult.FIELD_TODAYDELIVERTIME="todayDeliverTime";
rpc.DealDeliverTimeResult.FIELD_TODAYDELIVERTIME_CONFUSION="todayDeliverTime";

rpc.DealDeliverTimeResult.checkAndInitial = function() {
    if(rpc.DealDeliverTimeResult.mFieldToConfusionMap)
        return;
	
	rpc.DealDeliverTimeResult.mHasConfusionField = false;
	rpc.DealDeliverTimeResult.mFieldToConfusionMap = {
		"tomorrowDeliverTime":"tomorrowDeliverTime", 
		"todayDeliverTime":"todayDeliverTime"
	};
	rpc.DealDeliverTimeResult.mConfusionToFieldMap = {
		"tomorrowDeliverTime":"tomorrowDeliverTime", 
		"todayDeliverTime":"todayDeliverTime"
	};

};

rpc.DealDeliverTimeResult.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DealDeliverTimeResult.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DealDeliverTimeResult.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.DealDeliverTimeResult.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DealDeliverTimeResult.toConfusionObject(this.mObj, clone);
};

rpc.DealDeliverTimeResult.getConfusionName = function(name) {
    rpc.DealDeliverTimeResult.checkAndInitial();
    var value = rpc.DealDeliverTimeResult.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.DealDeliverTimeResult.getRawName = function(confusionName) {
    rpc.DealDeliverTimeResult.checkAndInitial();
    var value = rpc.DealDeliverTimeResult.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.DealDeliverTimeResult.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DealDeliverTimeResult.checkAndInitial();
    if (!rpc.DealDeliverTimeResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DealDeliverTimeResult.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DealDeliverTimeResult.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DealDeliverTimeResult.checkAndInitial();
    if (!rpc.DealDeliverTimeResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DealDeliverTimeResult.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DealDeliverTimeResult.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DealDeliverTimeResult.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DealDeliverTimeResult.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DealDeliverTimeResult.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DealItem = function() {};
rpc.DealItem.prototype.getBarCode = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["barCode"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["barCode"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["barCode"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DealItem.prototype.setBarCode = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["barCode"];
	else
		this.mObj["barCode"] = _value_value0;

	if(value) {
		this.mValueCache["barCode"] = value;
	} else {
		delete this.mValueCache["barCode"];
	}
	return this;
};

rpc.DealItem.prototype.getCanPartiallyReturn = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["canPartiallyReturn"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["canPartiallyReturn"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["canPartiallyReturn"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealItem.prototype.setCanPartiallyReturn = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["canPartiallyReturn"];
	else
		this.mObj["canPartiallyReturn"] = _value_value0;

	if(value) {
		this.mValueCache["canPartiallyReturn"] = value;
	} else {
		delete this.mValueCache["canPartiallyReturn"];
	}
	return this;
};

rpc.DealItem.prototype.getIsProductLimit = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isProductLimit"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isProductLimit"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isProductLimit"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealItem.prototype.setIsProductLimit = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isProductLimit"];
	else
		this.mObj["isProductLimit"] = _value_value0;

	if(value) {
		this.mValueCache["isProductLimit"] = value;
	} else {
		delete this.mValueCache["isProductLimit"];
	}
	return this;
};

rpc.DealItem.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DealItem.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.DealItem.prototype.getNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["num"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["num"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["num"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealItem.prototype.setNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["num"];
	else
		this.mObj["num"] = _value_value0;

	if(value) {
		this.mValueCache["num"] = value;
	} else {
		delete this.mValueCache["num"];
	}
	return this;
};

rpc.DealItem.prototype.getOrderNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["orderNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["orderNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["orderNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealItem.prototype.setOrderNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["orderNum"];
	else
		this.mObj["orderNum"] = _value_value0;

	if(value) {
		this.mValueCache["orderNum"] = value;
	} else {
		delete this.mValueCache["orderNum"];
	}
	return this;
};

rpc.DealItem.prototype.getPic = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pic"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pic"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["pic"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DealItem.prototype.setPic = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["pic"];
	else
		this.mObj["pic"] = _value_value0;

	if(value) {
		this.mValueCache["pic"] = value;
	} else {
		delete this.mValueCache["pic"];
	}
	return this;
};

rpc.DealItem.prototype.getPnum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pnum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pnum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["pnum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealItem.prototype.setPnum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["pnum"];
	else
		this.mObj["pnum"] = _value_value0;

	if(value) {
		this.mValueCache["pnum"] = value;
	} else {
		delete this.mValueCache["pnum"];
	}
	return this;
};

rpc.DealItem.prototype.getPprice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pprice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pprice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["pprice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealItem.prototype.setPprice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["pprice"];
	else
		this.mObj["pprice"] = _value_value0;

	if(value) {
		this.mValueCache["pprice"] = value;
	} else {
		delete this.mValueCache["pprice"];
	}
	return this;
};

rpc.DealItem.prototype.getPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["price"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["price"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["price"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealItem.prototype.setPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["price"];
	else
		this.mObj["price"] = _value_value0;

	if(value) {
		this.mValueCache["price"] = value;
	} else {
		delete this.mValueCache["price"];
	}
	return this;
};

rpc.DealItem.prototype.getProductId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["productId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DealItem.prototype.setProductId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["productId"];
	else
		this.mObj["productId"] = _value_value0;

	if(value) {
		this.mValueCache["productId"] = value;
	} else {
		delete this.mValueCache["productId"];
	}
	return this;
};

rpc.DealItem.prototype.getStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["status"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["status"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["status"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealItem.prototype.setStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["status"];
	else
		this.mObj["status"] = _value_value0;

	if(value) {
		this.mValueCache["status"] = value;
	} else {
		delete this.mValueCache["status"];
	}
	return this;
};

rpc.DealItem.prototype.getUnit = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["unit"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["unit"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["unit"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DealItem.prototype.setUnit = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["unit"];
	else
		this.mObj["unit"] = _value_value0;

	if(value) {
		this.mValueCache["unit"] = value;
	} else {
		delete this.mValueCache["unit"];
	}
	return this;
};

rpc.DealItem.FIELD_UNIT="unit";
rpc.DealItem.FIELD_UNIT_CONFUSION="unit";
rpc.DealItem.FIELD_NUM="num";
rpc.DealItem.FIELD_NUM_CONFUSION="num";
rpc.DealItem.FIELD_PRICE="price";
rpc.DealItem.FIELD_PRICE_CONFUSION="price";
rpc.DealItem.FIELD_ISPRODUCTLIMIT="isProductLimit";
rpc.DealItem.FIELD_ISPRODUCTLIMIT_CONFUSION="isProductLimit";
rpc.DealItem.FIELD_STATUS="status";
rpc.DealItem.FIELD_STATUS_CONFUSION="status";
rpc.DealItem.FIELD_PPRICE="pprice";
rpc.DealItem.FIELD_PPRICE_CONFUSION="pprice";
rpc.DealItem.FIELD_PNUM="pnum";
rpc.DealItem.FIELD_PNUM_CONFUSION="pnum";
rpc.DealItem.FIELD_NAME="name";
rpc.DealItem.FIELD_NAME_CONFUSION="name";
rpc.DealItem.FIELD_ORDERNUM="orderNum";
rpc.DealItem.FIELD_ORDERNUM_CONFUSION="orderNum";
rpc.DealItem.FIELD_BARCODE="barCode";
rpc.DealItem.FIELD_BARCODE_CONFUSION="barCode";
rpc.DealItem.FIELD_CANPARTIALLYRETURN="canPartiallyReturn";
rpc.DealItem.FIELD_CANPARTIALLYRETURN_CONFUSION="canPartiallyReturn";
rpc.DealItem.FIELD_PIC="pic";
rpc.DealItem.FIELD_PIC_CONFUSION="pic";
rpc.DealItem.FIELD_PRODUCTID="productId";
rpc.DealItem.FIELD_PRODUCTID_CONFUSION="productId";

rpc.DealItem.checkAndInitial = function() {
    if(rpc.DealItem.mFieldToConfusionMap)
        return;
	
	rpc.DealItem.mHasConfusionField = false;
	rpc.DealItem.mFieldToConfusionMap = {
		"unit":"unit", 
		"num":"num", 
		"price":"price", 
		"isProductLimit":"isProductLimit", 
		"status":"status", 
		"pprice":"pprice", 
		"pnum":"pnum", 
		"name":"name", 
		"orderNum":"orderNum", 
		"barCode":"barCode", 
		"canPartiallyReturn":"canPartiallyReturn", 
		"pic":"pic", 
		"productId":"productId"
	};
	rpc.DealItem.mConfusionToFieldMap = {
		"unit":"unit", 
		"num":"num", 
		"price":"price", 
		"isProductLimit":"isProductLimit", 
		"status":"status", 
		"pprice":"pprice", 
		"pnum":"pnum", 
		"name":"name", 
		"orderNum":"orderNum", 
		"barCode":"barCode", 
		"canPartiallyReturn":"canPartiallyReturn", 
		"pic":"pic", 
		"productId":"productId"
	};

};

rpc.DealItem.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DealItem.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DealItem.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.DealItem.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DealItem.toConfusionObject(this.mObj, clone);
};

rpc.DealItem.getConfusionName = function(name) {
    rpc.DealItem.checkAndInitial();
    var value = rpc.DealItem.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.DealItem.getRawName = function(confusionName) {
    rpc.DealItem.checkAndInitial();
    var value = rpc.DealItem.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.DealItem.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DealItem.checkAndInitial();
    if (!rpc.DealItem.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DealItem.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DealItem.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DealItem.checkAndInitial();
    if (!rpc.DealItem.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DealItem.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DealItem.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DealItem.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DealItem.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DealItem.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DelivererCODHistory = function() {};
rpc.DelivererCODHistory.prototype.getCodCount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["codCount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["codCount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["codCount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DelivererCODHistory.prototype.setCodCount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["codCount"];
	else
		this.mObj["codCount"] = _value_value0;

	if(value) {
		this.mValueCache["codCount"] = value;
	} else {
		delete this.mValueCache["codCount"];
	}
	return this;
};

rpc.DelivererCODHistory.prototype.getDeals = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deals"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deals"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Deal], false);
	
	if(objRet) {
		this.mValueCache["deals"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DelivererCODHistory.prototype.setDeals = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["deals"];
	else
		this.mObj["deals"] = _value_value0;

	if(value) {
		this.mValueCache["deals"] = value;
	} else {
		delete this.mValueCache["deals"];
	}
	return this;
};

rpc.DelivererCODHistory.FIELD_DEALS="deals";
rpc.DelivererCODHistory.FIELD_DEALS_CONFUSION="deals";
rpc.DelivererCODHistory.FIELD_CODCOUNT="codCount";
rpc.DelivererCODHistory.FIELD_CODCOUNT_CONFUSION="codCount";

rpc.DelivererCODHistory.checkAndInitial = function() {
    if(rpc.DelivererCODHistory.mFieldToConfusionMap)
        return;
	
	rpc.DelivererCODHistory.mHasConfusionField = false;
	rpc.DelivererCODHistory.mFieldToConfusionMap = {
		"deals":"deals", 
		"codCount":"codCount"
	};
	rpc.DelivererCODHistory.mConfusionToFieldMap = {
		"deals":"deals", 
		"codCount":"codCount"
	};

};

rpc.DelivererCODHistory.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DelivererCODHistory.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DelivererCODHistory.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.DelivererCODHistory.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DelivererCODHistory.toConfusionObject(this.mObj, clone);
};

rpc.DelivererCODHistory.getConfusionName = function(name) {
    rpc.DelivererCODHistory.checkAndInitial();
    var value = rpc.DelivererCODHistory.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.DelivererCODHistory.getRawName = function(confusionName) {
    rpc.DelivererCODHistory.checkAndInitial();
    var value = rpc.DelivererCODHistory.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.DelivererCODHistory.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DelivererCODHistory.checkAndInitial();
    if (!rpc.DelivererCODHistory.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DelivererCODHistory.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DelivererCODHistory.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DelivererCODHistory.checkAndInitial();
    if (!rpc.DelivererCODHistory.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DelivererCODHistory.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DelivererCODHistory.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DelivererCODHistory.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DelivererCODHistory.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DelivererCODHistory.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.PayResult = function() {};
rpc.PayResult.prototype.getAmtBy3rdParty = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["amtBy3rdParty"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["amtBy3rdParty"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["amtBy3rdParty"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PayResult.prototype.setAmtBy3rdParty = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["amtBy3rdParty"];
	else
		this.mObj["amtBy3rdParty"] = _value_value0;

	if(value) {
		this.mValueCache["amtBy3rdParty"] = value;
	} else {
		delete this.mValueCache["amtBy3rdParty"];
	}
	return this;
};

rpc.PayResult.prototype.getBalance = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["balance"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["balance"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["balance"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PayResult.prototype.setBalance = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["balance"];
	else
		this.mObj["balance"] = _value_value0;

	if(value) {
		this.mValueCache["balance"] = value;
	} else {
		delete this.mValueCache["balance"];
	}
	return this;
};

rpc.PayResult.prototype.getCode = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["code"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["code"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["code"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PayResult.prototype.setCode = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["code"];
	else
		this.mObj["code"] = _value_value0;

	if(value) {
		this.mValueCache["code"] = value;
	} else {
		delete this.mValueCache["code"];
	}
	return this;
};

rpc.PayResult.prototype.getIsAssignShopper = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isAssignShopper"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isAssignShopper"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isAssignShopper"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PayResult.prototype.setIsAssignShopper = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isAssignShopper"];
	else
		this.mObj["isAssignShopper"] = _value_value0;

	if(value) {
		this.mValueCache["isAssignShopper"] = value;
	} else {
		delete this.mValueCache["isAssignShopper"];
	}
	return this;
};

rpc.PayResult.prototype.getIsCOD = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isCOD"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isCOD"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isCOD"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PayResult.prototype.setIsCOD = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isCOD"];
	else
		this.mObj["isCOD"] = _value_value0;

	if(value) {
		this.mValueCache["isCOD"] = value;
	} else {
		delete this.mValueCache["isCOD"];
	}
	return this;
};

rpc.PayResult.prototype.getIsNeedToSetPaid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isNeedToSetPaid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isNeedToSetPaid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isNeedToSetPaid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PayResult.prototype.setIsNeedToSetPaid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isNeedToSetPaid"];
	else
		this.mObj["isNeedToSetPaid"] = _value_value0;

	if(value) {
		this.mValueCache["isNeedToSetPaid"] = value;
	} else {
		delete this.mValueCache["isNeedToSetPaid"];
	}
	return this;
};

rpc.PayResult.prototype.getIsStatistical = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isStatistical"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isStatistical"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isStatistical"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.PayResult.prototype.setIsStatistical = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isStatistical"];
	else
		this.mObj["isStatistical"] = _value_value0;

	if(value) {
		this.mValueCache["isStatistical"] = value;
	} else {
		delete this.mValueCache["isStatistical"];
	}
	return this;
};

rpc.PayResult.prototype.getThirdpartPayResult = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["thirdpartPayResult"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["thirdpartPayResult"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["thirdpartPayResult"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.PayResult.prototype.setThirdpartPayResult = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["thirdpartPayResult"];
	else
		this.mObj["thirdpartPayResult"] = _value_value0;

	if(value) {
		this.mValueCache["thirdpartPayResult"] = value;
	} else {
		delete this.mValueCache["thirdpartPayResult"];
	}
	return this;
};

rpc.PayResult.FIELD_ISASSIGNSHOPPER="isAssignShopper";
rpc.PayResult.FIELD_ISASSIGNSHOPPER_CONFUSION="isAssignShopper";
rpc.PayResult.FIELD_BALANCE="balance";
rpc.PayResult.FIELD_BALANCE_CONFUSION="balance";
rpc.PayResult.FIELD_ISNEEDTOSETPAID="isNeedToSetPaid";
rpc.PayResult.FIELD_ISNEEDTOSETPAID_CONFUSION="isNeedToSetPaid";
rpc.PayResult.FIELD_THIRDPARTPAYRESULT="thirdpartPayResult";
rpc.PayResult.FIELD_THIRDPARTPAYRESULT_CONFUSION="thirdpartPayResult";
rpc.PayResult.FIELD_ISCOD="isCOD";
rpc.PayResult.FIELD_ISCOD_CONFUSION="isCOD";
rpc.PayResult.FIELD_CODE="code";
rpc.PayResult.FIELD_CODE_CONFUSION="code";
rpc.PayResult.FIELD_AMTBY3RDPARTY="amtBy3rdParty";
rpc.PayResult.FIELD_AMTBY3RDPARTY_CONFUSION="amtBy3rdParty";
rpc.PayResult.FIELD_ISSTATISTICAL="isStatistical";
rpc.PayResult.FIELD_ISSTATISTICAL_CONFUSION="isStatistical";

rpc.PayResult.checkAndInitial = function() {
    if(rpc.PayResult.mFieldToConfusionMap)
        return;
	
	rpc.PayResult.mHasConfusionField = false;
	rpc.PayResult.mFieldToConfusionMap = {
		"isAssignShopper":"isAssignShopper", 
		"balance":"balance", 
		"isNeedToSetPaid":"isNeedToSetPaid", 
		"thirdpartPayResult":"thirdpartPayResult", 
		"isCOD":"isCOD", 
		"code":"code", 
		"amtBy3rdParty":"amtBy3rdParty", 
		"isStatistical":"isStatistical"
	};
	rpc.PayResult.mConfusionToFieldMap = {
		"isAssignShopper":"isAssignShopper", 
		"balance":"balance", 
		"isNeedToSetPaid":"isNeedToSetPaid", 
		"thirdpartPayResult":"thirdpartPayResult", 
		"isCOD":"isCOD", 
		"code":"code", 
		"amtBy3rdParty":"amtBy3rdParty", 
		"isStatistical":"isStatistical"
	};

};

rpc.PayResult.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.PayResult.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.PayResult.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.PayResult.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.PayResult.toConfusionObject(this.mObj, clone);
};

rpc.PayResult.getConfusionName = function(name) {
    rpc.PayResult.checkAndInitial();
    var value = rpc.PayResult.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.PayResult.getRawName = function(confusionName) {
    rpc.PayResult.checkAndInitial();
    var value = rpc.PayResult.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.PayResult.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.PayResult.checkAndInitial();
    if (!rpc.PayResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.PayResult.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.PayResult.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.PayResult.checkAndInitial();
    if (!rpc.PayResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.PayResult.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.PayResult.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.PayResult.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.PayResult.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.PayResult.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ReturnInventory = function() {};
rpc.ReturnInventory.prototype.getInfos = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["infos"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["infos"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [Array], false);
	
	if(objRet) {
		this.mValueCache["infos"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnInventory.prototype.setInfos = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _arr_2 = (!_l_0) ? null : [];
			if(_l_0) {
				var _len_2 = _l_0.length;
				for(var _i_2 = 0; _i_2 < _len_2; _i_2++) {
					var _l_2 = _l_0[_i_2];
					var _value__l_24 = _l_2.getAsObject(false);
					_arr_2.push(_value__l_24);
				}
			}
			var _value__l_02 = _arr_2;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["infos"];
	else
		this.mObj["infos"] = _value_value0;

	if(value) {
		this.mValueCache["infos"] = value;
	} else {
		delete this.mValueCache["infos"];
	}
	return this;
};

rpc.ReturnInventory.prototype.getShopNames = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopNames"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopNames"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["shopNames"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnInventory.prototype.setShopNames = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["shopNames"];
	else
		this.mObj["shopNames"] = _value_value0;

	if(value) {
		this.mValueCache["shopNames"] = value;
	} else {
		delete this.mValueCache["shopNames"];
	}
	return this;
};

rpc.ReturnInventory.FIELD_INFOS="infos";
rpc.ReturnInventory.FIELD_INFOS_CONFUSION="infos";
rpc.ReturnInventory.FIELD_SHOPNAMES="shopNames";
rpc.ReturnInventory.FIELD_SHOPNAMES_CONFUSION="shopNames";

rpc.ReturnInventory.checkAndInitial = function() {
    if(rpc.ReturnInventory.mFieldToConfusionMap)
        return;
	
	rpc.ReturnInventory.mHasConfusionField = false;
	rpc.ReturnInventory.mFieldToConfusionMap = {
		"infos":"infos", 
		"shopNames":"shopNames"
	};
	rpc.ReturnInventory.mConfusionToFieldMap = {
		"infos":"infos", 
		"shopNames":"shopNames"
	};

};

rpc.ReturnInventory.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ReturnInventory.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ReturnInventory.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ReturnInventory.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ReturnInventory.toConfusionObject(this.mObj, clone);
};

rpc.ReturnInventory.getConfusionName = function(name) {
    rpc.ReturnInventory.checkAndInitial();
    var value = rpc.ReturnInventory.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ReturnInventory.getRawName = function(confusionName) {
    rpc.ReturnInventory.checkAndInitial();
    var value = rpc.ReturnInventory.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ReturnInventory.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ReturnInventory.checkAndInitial();
    if (!rpc.ReturnInventory.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ReturnInventory.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ReturnInventory.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ReturnInventory.checkAndInitial();
    if (!rpc.ReturnInventory.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ReturnInventory.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ReturnInventory.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ReturnInventory.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ReturnInventory.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ReturnInventory.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ReturnProductInfo = function() {};
rpc.ReturnProductInfo.prototype.getAddress = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["address"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["address"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["address"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnProductInfo.prototype.setAddress = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["address"];
	else
		this.mObj["address"] = _value_value0;

	if(value) {
		this.mValueCache["address"] = value;
	} else {
		delete this.mValueCache["address"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getCustomName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["customName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["customName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["customName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnProductInfo.prototype.setCustomName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["customName"];
	else
		this.mObj["customName"] = _value_value0;

	if(value) {
		this.mValueCache["customName"] = value;
	} else {
		delete this.mValueCache["customName"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getDeliververName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deliververName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deliververName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["deliververName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnProductInfo.prototype.setDeliververName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["deliververName"];
	else
		this.mObj["deliververName"] = _value_value0;

	if(value) {
		this.mValueCache["deliververName"] = value;
	} else {
		delete this.mValueCache["deliververName"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getDistrictName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["districtName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["districtName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["districtName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnProductInfo.prototype.setDistrictName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["districtName"];
	else
		this.mObj["districtName"] = _value_value0;

	if(value) {
		this.mValueCache["districtName"] = value;
	} else {
		delete this.mValueCache["districtName"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getProductName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["productName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnProductInfo.prototype.setProductName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["productName"];
	else
		this.mObj["productName"] = _value_value0;

	if(value) {
		this.mValueCache["productName"] = value;
	} else {
		delete this.mValueCache["productName"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getProductNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["productNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ReturnProductInfo.prototype.setProductNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["productNum"];
	else
		this.mObj["productNum"] = _value_value0;

	if(value) {
		this.mValueCache["productNum"] = value;
	} else {
		delete this.mValueCache["productNum"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getProductPPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productPPrice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productPPrice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["productPPrice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ReturnProductInfo.prototype.setProductPPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["productPPrice"];
	else
		this.mObj["productPPrice"] = _value_value0;

	if(value) {
		this.mValueCache["productPPrice"] = value;
	} else {
		delete this.mValueCache["productPPrice"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getProductPicture = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productPicture"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productPicture"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["productPicture"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnProductInfo.prototype.setProductPicture = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["productPicture"];
	else
		this.mObj["productPicture"] = _value_value0;

	if(value) {
		this.mValueCache["productPicture"] = value;
	} else {
		delete this.mValueCache["productPicture"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getProductPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productPrice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productPrice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["productPrice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ReturnProductInfo.prototype.setProductPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["productPrice"];
	else
		this.mObj["productPrice"] = _value_value0;

	if(value) {
		this.mValueCache["productPrice"] = value;
	} else {
		delete this.mValueCache["productPrice"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getProductUnit = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productUnit"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productUnit"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["productUnit"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnProductInfo.prototype.setProductUnit = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["productUnit"];
	else
		this.mObj["productUnit"] = _value_value0;

	if(value) {
		this.mValueCache["productUnit"] = value;
	} else {
		delete this.mValueCache["productUnit"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getShopperName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopperName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopperName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopperName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ReturnProductInfo.prototype.setShopperName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopperName"];
	else
		this.mObj["shopperName"] = _value_value0;

	if(value) {
		this.mValueCache["shopperName"] = value;
	} else {
		delete this.mValueCache["shopperName"];
	}
	return this;
};

rpc.ReturnProductInfo.prototype.getShortId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shortId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shortId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shortId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ReturnProductInfo.prototype.setShortId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shortId"];
	else
		this.mObj["shortId"] = _value_value0;

	if(value) {
		this.mValueCache["shortId"] = value;
	} else {
		delete this.mValueCache["shortId"];
	}
	return this;
};

rpc.ReturnProductInfo.FIELD_SHOPPERNAME="shopperName";
rpc.ReturnProductInfo.FIELD_SHOPPERNAME_CONFUSION="shopperName";
rpc.ReturnProductInfo.FIELD_DISTRICTNAME="districtName";
rpc.ReturnProductInfo.FIELD_DISTRICTNAME_CONFUSION="districtName";
rpc.ReturnProductInfo.FIELD_DELIVERVERNAME="deliververName";
rpc.ReturnProductInfo.FIELD_DELIVERVERNAME_CONFUSION="deliververName";
rpc.ReturnProductInfo.FIELD_SHORTID="shortId";
rpc.ReturnProductInfo.FIELD_SHORTID_CONFUSION="shortId";
rpc.ReturnProductInfo.FIELD_ADDRESS="address";
rpc.ReturnProductInfo.FIELD_ADDRESS_CONFUSION="address";
rpc.ReturnProductInfo.FIELD_PRODUCTNUM="productNum";
rpc.ReturnProductInfo.FIELD_PRODUCTNUM_CONFUSION="productNum";
rpc.ReturnProductInfo.FIELD_PRODUCTPPRICE="productPPrice";
rpc.ReturnProductInfo.FIELD_PRODUCTPPRICE_CONFUSION="productPPrice";
rpc.ReturnProductInfo.FIELD_PRODUCTUNIT="productUnit";
rpc.ReturnProductInfo.FIELD_PRODUCTUNIT_CONFUSION="productUnit";
rpc.ReturnProductInfo.FIELD_PRODUCTPRICE="productPrice";
rpc.ReturnProductInfo.FIELD_PRODUCTPRICE_CONFUSION="productPrice";
rpc.ReturnProductInfo.FIELD_PRODUCTNAME="productName";
rpc.ReturnProductInfo.FIELD_PRODUCTNAME_CONFUSION="productName";
rpc.ReturnProductInfo.FIELD_CUSTOMNAME="customName";
rpc.ReturnProductInfo.FIELD_CUSTOMNAME_CONFUSION="customName";
rpc.ReturnProductInfo.FIELD_PRODUCTPICTURE="productPicture";
rpc.ReturnProductInfo.FIELD_PRODUCTPICTURE_CONFUSION="productPicture";

rpc.ReturnProductInfo.checkAndInitial = function() {
    if(rpc.ReturnProductInfo.mFieldToConfusionMap)
        return;
	
	rpc.ReturnProductInfo.mHasConfusionField = false;
	rpc.ReturnProductInfo.mFieldToConfusionMap = {
		"shopperName":"shopperName", 
		"districtName":"districtName", 
		"deliververName":"deliververName", 
		"shortId":"shortId", 
		"address":"address", 
		"productNum":"productNum", 
		"productPPrice":"productPPrice", 
		"productUnit":"productUnit", 
		"productPrice":"productPrice", 
		"productName":"productName", 
		"customName":"customName", 
		"productPicture":"productPicture"
	};
	rpc.ReturnProductInfo.mConfusionToFieldMap = {
		"shopperName":"shopperName", 
		"districtName":"districtName", 
		"deliververName":"deliververName", 
		"shortId":"shortId", 
		"address":"address", 
		"productNum":"productNum", 
		"productPPrice":"productPPrice", 
		"productUnit":"productUnit", 
		"productPrice":"productPrice", 
		"productName":"productName", 
		"customName":"customName", 
		"productPicture":"productPicture"
	};

};

rpc.ReturnProductInfo.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ReturnProductInfo.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ReturnProductInfo.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ReturnProductInfo.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ReturnProductInfo.toConfusionObject(this.mObj, clone);
};

rpc.ReturnProductInfo.getConfusionName = function(name) {
    rpc.ReturnProductInfo.checkAndInitial();
    var value = rpc.ReturnProductInfo.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ReturnProductInfo.getRawName = function(confusionName) {
    rpc.ReturnProductInfo.checkAndInitial();
    var value = rpc.ReturnProductInfo.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ReturnProductInfo.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ReturnProductInfo.checkAndInitial();
    if (!rpc.ReturnProductInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ReturnProductInfo.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ReturnProductInfo.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ReturnProductInfo.checkAndInitial();
    if (!rpc.ReturnProductInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ReturnProductInfo.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ReturnProductInfo.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ReturnProductInfo.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ReturnProductInfo.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ReturnProductInfo.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopTask = function() {};
rpc.ShopTask.prototype.getShop = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shop"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shop"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.Shop, null, false);
	
	if(objRet) {
		this.mValueCache["shop"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopTask.prototype.setShop = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["shop"];
	else
		this.mObj["shop"] = _value_value0;

	if(value) {
		this.mValueCache["shop"] = value;
	} else {
		delete this.mValueCache["shop"];
	}
	return this;
};

rpc.ShopTask.prototype.getTasks = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["tasks"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["tasks"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Task], false);
	
	if(objRet) {
		this.mValueCache["tasks"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopTask.prototype.setTasks = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["tasks"];
	else
		this.mObj["tasks"] = _value_value0;

	if(value) {
		this.mValueCache["tasks"] = value;
	} else {
		delete this.mValueCache["tasks"];
	}
	return this;
};

rpc.ShopTask.FIELD_SHOP="shop";
rpc.ShopTask.FIELD_SHOP_CONFUSION="shop";
rpc.ShopTask.FIELD_TASKS="tasks";
rpc.ShopTask.FIELD_TASKS_CONFUSION="tasks";

rpc.ShopTask.checkAndInitial = function() {
    if(rpc.ShopTask.mFieldToConfusionMap)
        return;
	
	rpc.ShopTask.mHasConfusionField = false;
	rpc.ShopTask.mFieldToConfusionMap = {
		"shop":"shop", 
		"tasks":"tasks"
	};
	rpc.ShopTask.mConfusionToFieldMap = {
		"shop":"shop", 
		"tasks":"tasks"
	};

};

rpc.ShopTask.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopTask.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopTask.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ShopTask.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopTask.toConfusionObject(this.mObj, clone);
};

rpc.ShopTask.getConfusionName = function(name) {
    rpc.ShopTask.checkAndInitial();
    var value = rpc.ShopTask.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ShopTask.getRawName = function(confusionName) {
    rpc.ShopTask.checkAndInitial();
    var value = rpc.ShopTask.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ShopTask.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopTask.checkAndInitial();
    if (!rpc.ShopTask.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopTask.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopTask.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopTask.checkAndInitial();
    if (!rpc.ShopTask.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopTask.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopTask.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopTask.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopTask.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopTask.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.SimpleDeal = function() {};
rpc.SimpleDeal.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.SimpleDeal.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getDealId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.SimpleDeal.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getHasAppraised = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasAppraised"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasAppraised"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasAppraised"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.SimpleDeal.prototype.setHasAppraised = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasAppraised"];
	else
		this.mObj["hasAppraised"] = _value_value0;

	if(value) {
		this.mValueCache["hasAppraised"] = value;
	} else {
		delete this.mValueCache["hasAppraised"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getHasCancel = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasCancel"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasCancel"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasCancel"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.SimpleDeal.prototype.setHasCancel = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasCancel"];
	else
		this.mObj["hasCancel"] = _value_value0;

	if(value) {
		this.mValueCache["hasCancel"] = value;
	} else {
		delete this.mValueCache["hasCancel"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getHasReturn = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasReturn"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasReturn"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasReturn"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.SimpleDeal.prototype.setHasReturn = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasReturn"];
	else
		this.mObj["hasReturn"] = _value_value0;

	if(value) {
		this.mValueCache["hasReturn"] = value;
	} else {
		delete this.mValueCache["hasReturn"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getPcount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pcount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pcount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["pcount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.SimpleDeal.prototype.setPcount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["pcount"];
	else
		this.mObj["pcount"] = _value_value0;

	if(value) {
		this.mValueCache["pcount"] = value;
	} else {
		delete this.mValueCache["pcount"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getPname = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pname"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pname"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["pname"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.SimpleDeal.prototype.setPname = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["pname"];
	else
		this.mObj["pname"] = _value_value0;

	if(value) {
		this.mValueCache["pname"] = value;
	} else {
		delete this.mValueCache["pname"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getPpicture = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["ppicture"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["ppicture"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["ppicture"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.SimpleDeal.prototype.setPpicture = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["ppicture"];
	else
		this.mObj["ppicture"] = _value_value0;

	if(value) {
		this.mValueCache["ppicture"] = value;
	} else {
		delete this.mValueCache["ppicture"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["status"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["status"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["status"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.SimpleDeal.prototype.setStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["status"];
	else
		this.mObj["status"] = _value_value0;

	if(value) {
		this.mValueCache["status"] = value;
	} else {
		delete this.mValueCache["status"];
	}
	return this;
};

rpc.SimpleDeal.prototype.getTotalPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["totalPrice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["totalPrice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["totalPrice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.SimpleDeal.prototype.setTotalPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["totalPrice"];
	else
		this.mObj["totalPrice"] = _value_value0;

	if(value) {
		this.mValueCache["totalPrice"] = value;
	} else {
		delete this.mValueCache["totalPrice"];
	}
	return this;
};

rpc.SimpleDeal.FIELD_PCOUNT="pcount";
rpc.SimpleDeal.FIELD_PCOUNT_CONFUSION="pcount";
rpc.SimpleDeal.FIELD_STATUS="status";
rpc.SimpleDeal.FIELD_STATUS_CONFUSION="status";
rpc.SimpleDeal.FIELD_CREATED="created";
rpc.SimpleDeal.FIELD_CREATED_CONFUSION="created";
rpc.SimpleDeal.FIELD_PNAME="pname";
rpc.SimpleDeal.FIELD_PNAME_CONFUSION="pname";
rpc.SimpleDeal.FIELD_HASRETURN="hasReturn";
rpc.SimpleDeal.FIELD_HASRETURN_CONFUSION="hasReturn";
rpc.SimpleDeal.FIELD_HASCANCEL="hasCancel";
rpc.SimpleDeal.FIELD_HASCANCEL_CONFUSION="hasCancel";
rpc.SimpleDeal.FIELD_DEALID="dealId";
rpc.SimpleDeal.FIELD_DEALID_CONFUSION="dealId";
rpc.SimpleDeal.FIELD_PPICTURE="ppicture";
rpc.SimpleDeal.FIELD_PPICTURE_CONFUSION="ppicture";
rpc.SimpleDeal.FIELD_TOTALPRICE="totalPrice";
rpc.SimpleDeal.FIELD_TOTALPRICE_CONFUSION="totalPrice";
rpc.SimpleDeal.FIELD_HASAPPRAISED="hasAppraised";
rpc.SimpleDeal.FIELD_HASAPPRAISED_CONFUSION="hasAppraised";

rpc.SimpleDeal.checkAndInitial = function() {
    if(rpc.SimpleDeal.mFieldToConfusionMap)
        return;
	
	rpc.SimpleDeal.mHasConfusionField = false;
	rpc.SimpleDeal.mFieldToConfusionMap = {
		"pcount":"pcount", 
		"status":"status", 
		"created":"created", 
		"pname":"pname", 
		"hasReturn":"hasReturn", 
		"hasCancel":"hasCancel", 
		"dealId":"dealId", 
		"ppicture":"ppicture", 
		"totalPrice":"totalPrice", 
		"hasAppraised":"hasAppraised"
	};
	rpc.SimpleDeal.mConfusionToFieldMap = {
		"pcount":"pcount", 
		"status":"status", 
		"created":"created", 
		"pname":"pname", 
		"hasReturn":"hasReturn", 
		"hasCancel":"hasCancel", 
		"dealId":"dealId", 
		"ppicture":"ppicture", 
		"totalPrice":"totalPrice", 
		"hasAppraised":"hasAppraised"
	};

};

rpc.SimpleDeal.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.SimpleDeal.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.SimpleDeal.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.SimpleDeal.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.SimpleDeal.toConfusionObject(this.mObj, clone);
};

rpc.SimpleDeal.getConfusionName = function(name) {
    rpc.SimpleDeal.checkAndInitial();
    var value = rpc.SimpleDeal.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.SimpleDeal.getRawName = function(confusionName) {
    rpc.SimpleDeal.checkAndInitial();
    var value = rpc.SimpleDeal.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.SimpleDeal.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.SimpleDeal.checkAndInitial();
    if (!rpc.SimpleDeal.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.SimpleDeal.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.SimpleDeal.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.SimpleDeal.checkAndInitial();
    if (!rpc.SimpleDeal.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.SimpleDeal.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.SimpleDeal.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.SimpleDeal.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.SimpleDeal.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.SimpleDeal.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Task = function() {};
rpc.Task.prototype.getAddress = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["address"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["address"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.Address, null, false);
	
	if(objRet) {
		this.mValueCache["address"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setAddress = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["address"];
	else
		this.mObj["address"] = _value_value0;

	if(value) {
		this.mValueCache["address"] = value;
	} else {
		delete this.mValueCache["address"];
	}
	return this;
};

rpc.Task.prototype.getBeginDeliverTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["beginDeliverTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["beginDeliverTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["beginDeliverTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setBeginDeliverTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["beginDeliverTime"];
	else
		this.mObj["beginDeliverTime"] = _value_value0;

	if(value) {
		this.mValueCache["beginDeliverTime"] = value;
	} else {
		delete this.mValueCache["beginDeliverTime"];
	}
	return this;
};

rpc.Task.prototype.getCodAmt = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["codAmt"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["codAmt"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["codAmt"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setCodAmt = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["codAmt"];
	else
		this.mObj["codAmt"] = _value_value0;

	if(value) {
		this.mValueCache["codAmt"] = value;
	} else {
		delete this.mValueCache["codAmt"];
	}
	return this;
};

rpc.Task.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.Task.prototype.getCustomId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["customId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["customId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["customId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setCustomId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["customId"];
	else
		this.mObj["customId"] = _value_value0;

	if(value) {
		this.mValueCache["customId"] = value;
	} else {
		delete this.mValueCache["customId"];
	}
	return this;
};

rpc.Task.prototype.getCustomName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["customName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["customName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["customName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setCustomName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["customName"];
	else
		this.mObj["customName"] = _value_value0;

	if(value) {
		this.mValueCache["customName"] = value;
	} else {
		delete this.mValueCache["customName"];
	}
	return this;
};

rpc.Task.prototype.getCustomPhone = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["customPhone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["customPhone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["customPhone"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setCustomPhone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["customPhone"];
	else
		this.mObj["customPhone"] = _value_value0;

	if(value) {
		this.mValueCache["customPhone"] = value;
	} else {
		delete this.mValueCache["customPhone"];
	}
	return this;
};

rpc.Task.prototype.getDealDone = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealDone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealDone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealDone"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setDealDone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealDone"];
	else
		this.mObj["dealDone"] = _value_value0;

	if(value) {
		this.mValueCache["dealDone"] = value;
	} else {
		delete this.mValueCache["dealDone"];
	}
	return this;
};

rpc.Task.prototype.getDealId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.Task.prototype.getDealPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealPrice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealPrice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealPrice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setDealPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealPrice"];
	else
		this.mObj["dealPrice"] = _value_value0;

	if(value) {
		this.mValueCache["dealPrice"] = value;
	} else {
		delete this.mValueCache["dealPrice"];
	}
	return this;
};

rpc.Task.prototype.getDeliTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deliTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deliTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deliTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setDeliTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deliTime"];
	else
		this.mObj["deliTime"] = _value_value0;

	if(value) {
		this.mValueCache["deliTime"] = value;
	} else {
		delete this.mValueCache["deliTime"];
	}
	return this;
};

rpc.Task.prototype.getDelivererAvatar = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["delivererAvatar"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["delivererAvatar"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["delivererAvatar"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setDelivererAvatar = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["delivererAvatar"];
	else
		this.mObj["delivererAvatar"] = _value_value0;

	if(value) {
		this.mValueCache["delivererAvatar"] = value;
	} else {
		delete this.mValueCache["delivererAvatar"];
	}
	return this;
};

rpc.Task.prototype.getDelivererId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["delivererId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["delivererId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["delivererId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setDelivererId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["delivererId"];
	else
		this.mObj["delivererId"] = _value_value0;

	if(value) {
		this.mValueCache["delivererId"] = value;
	} else {
		delete this.mValueCache["delivererId"];
	}
	return this;
};

rpc.Task.prototype.getDelivererName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["delivererName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["delivererName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["delivererName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setDelivererName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["delivererName"];
	else
		this.mObj["delivererName"] = _value_value0;

	if(value) {
		this.mValueCache["delivererName"] = value;
	} else {
		delete this.mValueCache["delivererName"];
	}
	return this;
};

rpc.Task.prototype.getDelivererPhone = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["delivererPhone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["delivererPhone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["delivererPhone"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setDelivererPhone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["delivererPhone"];
	else
		this.mObj["delivererPhone"] = _value_value0;

	if(value) {
		this.mValueCache["delivererPhone"] = value;
	} else {
		delete this.mValueCache["delivererPhone"];
	}
	return this;
};

rpc.Task.prototype.getDesc = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["desc"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["desc"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["desc"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setDesc = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["desc"];
	else
		this.mObj["desc"] = _value_value0;

	if(value) {
		this.mValueCache["desc"] = value;
	} else {
		delete this.mValueCache["desc"];
	}
	return this;
};

rpc.Task.prototype.getHasAppraised = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasAppraised"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasAppraised"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasAppraised"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setHasAppraised = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasAppraised"];
	else
		this.mObj["hasAppraised"] = _value_value0;

	if(value) {
		this.mValueCache["hasAppraised"] = value;
	} else {
		delete this.mValueCache["hasAppraised"];
	}
	return this;
};

rpc.Task.prototype.getHasReturn = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasReturn"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasReturn"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasReturn"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setHasReturn = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasReturn"];
	else
		this.mObj["hasReturn"] = _value_value0;

	if(value) {
		this.mValueCache["hasReturn"] = value;
	} else {
		delete this.mValueCache["hasReturn"];
	}
	return this;
};

rpc.Task.prototype.getIsCOD = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isCOD"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isCOD"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isCOD"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setIsCOD = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isCOD"];
	else
		this.mObj["isCOD"] = _value_value0;

	if(value) {
		this.mValueCache["isCOD"] = value;
	} else {
		delete this.mValueCache["isCOD"];
	}
	return this;
};

rpc.Task.prototype.getItems = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["items"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["items"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.DealItem], false);
	
	if(objRet) {
		this.mValueCache["items"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setItems = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["items"];
	else
		this.mObj["items"] = _value_value0;

	if(value) {
		this.mValueCache["items"] = value;
	} else {
		delete this.mValueCache["items"];
	}
	return this;
};

rpc.Task.prototype.getOriginalPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["originalPrice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["originalPrice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["originalPrice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setOriginalPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["originalPrice"];
	else
		this.mObj["originalPrice"] = _value_value0;

	if(value) {
		this.mValueCache["originalPrice"] = value;
	} else {
		delete this.mValueCache["originalPrice"];
	}
	return this;
};

rpc.Task.prototype.getOtherTaskDoneNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["otherTaskDoneNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["otherTaskDoneNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["otherTaskDoneNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setOtherTaskDoneNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["otherTaskDoneNum"];
	else
		this.mObj["otherTaskDoneNum"] = _value_value0;

	if(value) {
		this.mValueCache["otherTaskDoneNum"] = value;
	} else {
		delete this.mValueCache["otherTaskDoneNum"];
	}
	return this;
};

rpc.Task.prototype.getPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["price"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["price"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["price"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["price"];
	else
		this.mObj["price"] = _value_value0;

	if(value) {
		this.mValueCache["price"] = value;
	} else {
		delete this.mValueCache["price"];
	}
	return this;
};

rpc.Task.prototype.getReview = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["review"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["review"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["review"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setReview = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["review"];
	else
		this.mObj["review"] = _value_value0;

	if(value) {
		this.mValueCache["review"] = value;
	} else {
		delete this.mValueCache["review"];
	}
	return this;
};

rpc.Task.prototype.getShipaddrid = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shipaddrid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shipaddrid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shipaddrid"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setShipaddrid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shipaddrid"];
	else
		this.mObj["shipaddrid"] = _value_value0;

	if(value) {
		this.mValueCache["shipaddrid"] = value;
	} else {
		delete this.mValueCache["shipaddrid"];
	}
	return this;
};

rpc.Task.prototype.getShopId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setShopId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopId"];
	else
		this.mObj["shopId"] = _value_value0;

	if(value) {
		this.mValueCache["shopId"] = value;
	} else {
		delete this.mValueCache["shopId"];
	}
	return this;
};

rpc.Task.prototype.getShopLat = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopLat"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopLat"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shopLat"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setShopLat = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shopLat"];
	else
		this.mObj["shopLat"] = _value_value0;

	if(value) {
		this.mValueCache["shopLat"] = value;
	} else {
		delete this.mValueCache["shopLat"];
	}
	return this;
};

rpc.Task.prototype.getShopLng = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopLng"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopLng"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shopLng"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setShopLng = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shopLng"];
	else
		this.mObj["shopLng"] = _value_value0;

	if(value) {
		this.mValueCache["shopLng"] = value;
	} else {
		delete this.mValueCache["shopLng"];
	}
	return this;
};

rpc.Task.prototype.getShopName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setShopName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopName"];
	else
		this.mObj["shopName"] = _value_value0;

	if(value) {
		this.mValueCache["shopName"] = value;
	} else {
		delete this.mValueCache["shopName"];
	}
	return this;
};

rpc.Task.prototype.getShopperAvatar = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopperAvatar"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopperAvatar"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopperAvatar"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setShopperAvatar = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopperAvatar"];
	else
		this.mObj["shopperAvatar"] = _value_value0;

	if(value) {
		this.mValueCache["shopperAvatar"] = value;
	} else {
		delete this.mValueCache["shopperAvatar"];
	}
	return this;
};

rpc.Task.prototype.getShopperBuyDone = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopperBuyDone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopperBuyDone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shopperBuyDone"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setShopperBuyDone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shopperBuyDone"];
	else
		this.mObj["shopperBuyDone"] = _value_value0;

	if(value) {
		this.mValueCache["shopperBuyDone"] = value;
	} else {
		delete this.mValueCache["shopperBuyDone"];
	}
	return this;
};

rpc.Task.prototype.getShopperId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopperId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopperId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shopperId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setShopperId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shopperId"];
	else
		this.mObj["shopperId"] = _value_value0;

	if(value) {
		this.mValueCache["shopperId"] = value;
	} else {
		delete this.mValueCache["shopperId"];
	}
	return this;
};

rpc.Task.prototype.getShopperName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopperName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopperName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopperName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setShopperName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopperName"];
	else
		this.mObj["shopperName"] = _value_value0;

	if(value) {
		this.mValueCache["shopperName"] = value;
	} else {
		delete this.mValueCache["shopperName"];
	}
	return this;
};

rpc.Task.prototype.getShopperPhone = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopperPhone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopperPhone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopperPhone"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Task.prototype.setShopperPhone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopperPhone"];
	else
		this.mObj["shopperPhone"] = _value_value0;

	if(value) {
		this.mValueCache["shopperPhone"] = value;
	} else {
		delete this.mValueCache["shopperPhone"];
	}
	return this;
};

rpc.Task.prototype.getShopperReadTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopperReadTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopperReadTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shopperReadTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setShopperReadTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shopperReadTime"];
	else
		this.mObj["shopperReadTime"] = _value_value0;

	if(value) {
		this.mValueCache["shopperReadTime"] = value;
	} else {
		delete this.mValueCache["shopperReadTime"];
	}
	return this;
};

rpc.Task.prototype.getShortId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shortId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shortId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shortId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setShortId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shortId"];
	else
		this.mObj["shortId"] = _value_value0;

	if(value) {
		this.mValueCache["shortId"] = value;
	} else {
		delete this.mValueCache["shortId"];
	}
	return this;
};

rpc.Task.prototype.getStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["status"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["status"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["status"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["status"];
	else
		this.mObj["status"] = _value_value0;

	if(value) {
		this.mValueCache["status"] = value;
	} else {
		delete this.mValueCache["status"];
	}
	return this;
};

rpc.Task.prototype.getTaskDone = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["taskDone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["taskDone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["taskDone"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setTaskDone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["taskDone"];
	else
		this.mObj["taskDone"] = _value_value0;

	if(value) {
		this.mValueCache["taskDone"] = value;
	} else {
		delete this.mValueCache["taskDone"];
	}
	return this;
};

rpc.Task.prototype.getTaskId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["taskId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["taskId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["taskId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setTaskId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["taskId"];
	else
		this.mObj["taskId"] = _value_value0;

	if(value) {
		this.mValueCache["taskId"] = value;
	} else {
		delete this.mValueCache["taskId"];
	}
	return this;
};

rpc.Task.prototype.getTaskNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["taskNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["taskNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["taskNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Task.prototype.setTaskNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["taskNum"];
	else
		this.mObj["taskNum"] = _value_value0;

	if(value) {
		this.mValueCache["taskNum"] = value;
	} else {
		delete this.mValueCache["taskNum"];
	}
	return this;
};

rpc.Task.FIELD_CUSTOMID="customId";
rpc.Task.FIELD_CUSTOMID_CONFUSION="customId";
rpc.Task.FIELD_DELITIME="deliTime";
rpc.Task.FIELD_DELITIME_CONFUSION="deliTime";
rpc.Task.FIELD_DESC="desc";
rpc.Task.FIELD_DESC_CONFUSION="desc";
rpc.Task.FIELD_DELIVERERAVATAR="delivererAvatar";
rpc.Task.FIELD_DELIVERERAVATAR_CONFUSION="delivererAvatar";
rpc.Task.FIELD_OTHERTASKDONENUM="otherTaskDoneNum";
rpc.Task.FIELD_OTHERTASKDONENUM_CONFUSION="otherTaskDoneNum";
rpc.Task.FIELD_BEGINDELIVERTIME="beginDeliverTime";
rpc.Task.FIELD_BEGINDELIVERTIME_CONFUSION="beginDeliverTime";
rpc.Task.FIELD_DELIVERERPHONE="delivererPhone";
rpc.Task.FIELD_DELIVERERPHONE_CONFUSION="delivererPhone";
rpc.Task.FIELD_CODAMT="codAmt";
rpc.Task.FIELD_CODAMT_CONFUSION="codAmt";
rpc.Task.FIELD_TASKNUM="taskNum";
rpc.Task.FIELD_TASKNUM_CONFUSION="taskNum";
rpc.Task.FIELD_SHOPPERID="shopperId";
rpc.Task.FIELD_SHOPPERID_CONFUSION="shopperId";
rpc.Task.FIELD_SHOPPERPHONE="shopperPhone";
rpc.Task.FIELD_SHOPPERPHONE_CONFUSION="shopperPhone";
rpc.Task.FIELD_SHORTID="shortId";
rpc.Task.FIELD_SHORTID_CONFUSION="shortId";
rpc.Task.FIELD_TASKDONE="taskDone";
rpc.Task.FIELD_TASKDONE_CONFUSION="taskDone";
rpc.Task.FIELD_CREATED="created";
rpc.Task.FIELD_CREATED_CONFUSION="created";
rpc.Task.FIELD_SHOPID="shopId";
rpc.Task.FIELD_SHOPID_CONFUSION="shopId";
rpc.Task.FIELD_SHOPLNG="shopLng";
rpc.Task.FIELD_SHOPLNG_CONFUSION="shopLng";
rpc.Task.FIELD_ISCOD="isCOD";
rpc.Task.FIELD_ISCOD_CONFUSION="isCOD";
rpc.Task.FIELD_HASAPPRAISED="hasAppraised";
rpc.Task.FIELD_HASAPPRAISED_CONFUSION="hasAppraised";
rpc.Task.FIELD_TASKID="taskId";
rpc.Task.FIELD_TASKID_CONFUSION="taskId";
rpc.Task.FIELD_SHIPADDRID="shipaddrid";
rpc.Task.FIELD_SHIPADDRID_CONFUSION="shipaddrid";
rpc.Task.FIELD_STATUS="status";
rpc.Task.FIELD_STATUS_CONFUSION="status";
rpc.Task.FIELD_DEALID="dealId";
rpc.Task.FIELD_DEALID_CONFUSION="dealId";
rpc.Task.FIELD_DELIVERERNAME="delivererName";
rpc.Task.FIELD_DELIVERERNAME_CONFUSION="delivererName";
rpc.Task.FIELD_DEALDONE="dealDone";
rpc.Task.FIELD_DEALDONE_CONFUSION="dealDone";
rpc.Task.FIELD_SHOPPERNAME="shopperName";
rpc.Task.FIELD_SHOPPERNAME_CONFUSION="shopperName";
rpc.Task.FIELD_SHOPPERBUYDONE="shopperBuyDone";
rpc.Task.FIELD_SHOPPERBUYDONE_CONFUSION="shopperBuyDone";
rpc.Task.FIELD_SHOPPERAVATAR="shopperAvatar";
rpc.Task.FIELD_SHOPPERAVATAR_CONFUSION="shopperAvatar";
rpc.Task.FIELD_PRICE="price";
rpc.Task.FIELD_PRICE_CONFUSION="price";
rpc.Task.FIELD_DEALPRICE="dealPrice";
rpc.Task.FIELD_DEALPRICE_CONFUSION="dealPrice";
rpc.Task.FIELD_DELIVERERID="delivererId";
rpc.Task.FIELD_DELIVERERID_CONFUSION="delivererId";
rpc.Task.FIELD_ORIGINALPRICE="originalPrice";
rpc.Task.FIELD_ORIGINALPRICE_CONFUSION="originalPrice";
rpc.Task.FIELD_ADDRESS="address";
rpc.Task.FIELD_ADDRESS_CONFUSION="address";
rpc.Task.FIELD_ITEMS="items";
rpc.Task.FIELD_ITEMS_CONFUSION="items";
rpc.Task.FIELD_SHOPNAME="shopName";
rpc.Task.FIELD_SHOPNAME_CONFUSION="shopName";
rpc.Task.FIELD_SHOPPERREADTIME="shopperReadTime";
rpc.Task.FIELD_SHOPPERREADTIME_CONFUSION="shopperReadTime";
rpc.Task.FIELD_CUSTOMPHONE="customPhone";
rpc.Task.FIELD_CUSTOMPHONE_CONFUSION="customPhone";
rpc.Task.FIELD_HASRETURN="hasReturn";
rpc.Task.FIELD_HASRETURN_CONFUSION="hasReturn";
rpc.Task.FIELD_SHOPLAT="shopLat";
rpc.Task.FIELD_SHOPLAT_CONFUSION="shopLat";
rpc.Task.FIELD_CUSTOMNAME="customName";
rpc.Task.FIELD_CUSTOMNAME_CONFUSION="customName";
rpc.Task.FIELD_REVIEW="review";
rpc.Task.FIELD_REVIEW_CONFUSION="review";

rpc.Task.checkAndInitial = function() {
    if(rpc.Task.mFieldToConfusionMap)
        return;
	
	rpc.Task.mHasConfusionField = false;
	rpc.Task.mFieldToConfusionMap = {
		"customId":"customId", 
		"deliTime":"deliTime", 
		"desc":"desc", 
		"delivererAvatar":"delivererAvatar", 
		"otherTaskDoneNum":"otherTaskDoneNum", 
		"beginDeliverTime":"beginDeliverTime", 
		"delivererPhone":"delivererPhone", 
		"codAmt":"codAmt", 
		"taskNum":"taskNum", 
		"shopperId":"shopperId", 
		"shopperPhone":"shopperPhone", 
		"shortId":"shortId", 
		"taskDone":"taskDone", 
		"created":"created", 
		"shopId":"shopId", 
		"shopLng":"shopLng", 
		"isCOD":"isCOD", 
		"hasAppraised":"hasAppraised", 
		"taskId":"taskId", 
		"shipaddrid":"shipaddrid", 
		"status":"status", 
		"dealId":"dealId", 
		"delivererName":"delivererName", 
		"dealDone":"dealDone", 
		"shopperName":"shopperName", 
		"shopperBuyDone":"shopperBuyDone", 
		"shopperAvatar":"shopperAvatar", 
		"price":"price", 
		"dealPrice":"dealPrice", 
		"delivererId":"delivererId", 
		"originalPrice":"originalPrice", 
		"address":"address", 
		"items":"items", 
		"shopName":"shopName", 
		"shopperReadTime":"shopperReadTime", 
		"customPhone":"customPhone", 
		"hasReturn":"hasReturn", 
		"shopLat":"shopLat", 
		"customName":"customName", 
		"review":"review"
	};
	rpc.Task.mConfusionToFieldMap = {
		"customId":"customId", 
		"deliTime":"deliTime", 
		"desc":"desc", 
		"delivererAvatar":"delivererAvatar", 
		"otherTaskDoneNum":"otherTaskDoneNum", 
		"beginDeliverTime":"beginDeliverTime", 
		"delivererPhone":"delivererPhone", 
		"codAmt":"codAmt", 
		"taskNum":"taskNum", 
		"shopperId":"shopperId", 
		"shopperPhone":"shopperPhone", 
		"shortId":"shortId", 
		"taskDone":"taskDone", 
		"created":"created", 
		"shopId":"shopId", 
		"shopLng":"shopLng", 
		"isCOD":"isCOD", 
		"hasAppraised":"hasAppraised", 
		"taskId":"taskId", 
		"shipaddrid":"shipaddrid", 
		"status":"status", 
		"dealId":"dealId", 
		"delivererName":"delivererName", 
		"dealDone":"dealDone", 
		"shopperName":"shopperName", 
		"shopperBuyDone":"shopperBuyDone", 
		"shopperAvatar":"shopperAvatar", 
		"price":"price", 
		"dealPrice":"dealPrice", 
		"delivererId":"delivererId", 
		"originalPrice":"originalPrice", 
		"address":"address", 
		"items":"items", 
		"shopName":"shopName", 
		"shopperReadTime":"shopperReadTime", 
		"customPhone":"customPhone", 
		"hasReturn":"hasReturn", 
		"shopLat":"shopLat", 
		"customName":"customName", 
		"review":"review"
	};

};

rpc.Task.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Task.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Task.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Task.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Task.toConfusionObject(this.mObj, clone);
};

rpc.Task.getConfusionName = function(name) {
    rpc.Task.checkAndInitial();
    var value = rpc.Task.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Task.getRawName = function(confusionName) {
    rpc.Task.checkAndInitial();
    var value = rpc.Task.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Task.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Task.checkAndInitial();
    if (!rpc.Task.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Task.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Task.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Task.checkAndInitial();
    if (!rpc.Task.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Task.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Task.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Task.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Task.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Task.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.WebDeal = function() {};
rpc.WebDeal.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WebDeal.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.WebDeal.prototype.getDealId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WebDeal.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.WebDeal.prototype.getDistrictName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["districtName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["districtName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["districtName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WebDeal.prototype.setDistrictName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["districtName"];
	else
		this.mObj["districtName"] = _value_value0;

	if(value) {
		this.mValueCache["districtName"] = value;
	} else {
		delete this.mValueCache["districtName"];
	}
	return this;
};

rpc.WebDeal.prototype.getPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["price"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["price"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["price"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WebDeal.prototype.setPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["price"];
	else
		this.mObj["price"] = _value_value0;

	if(value) {
		this.mValueCache["price"] = value;
	} else {
		delete this.mValueCache["price"];
	}
	return this;
};

rpc.WebDeal.prototype.getShipfee = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shipfee"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shipfee"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shipfee"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WebDeal.prototype.setShipfee = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shipfee"];
	else
		this.mObj["shipfee"] = _value_value0;

	if(value) {
		this.mValueCache["shipfee"] = value;
	} else {
		delete this.mValueCache["shipfee"];
	}
	return this;
};

rpc.WebDeal.prototype.getStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["status"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["status"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["status"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WebDeal.prototype.setStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["status"];
	else
		this.mObj["status"] = _value_value0;

	if(value) {
		this.mValueCache["status"] = value;
	} else {
		delete this.mValueCache["status"];
	}
	return this;
};

rpc.WebDeal.prototype.getTasks = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["tasks"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["tasks"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.WebTask], false);
	
	if(objRet) {
		this.mValueCache["tasks"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WebDeal.prototype.setTasks = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["tasks"];
	else
		this.mObj["tasks"] = _value_value0;

	if(value) {
		this.mValueCache["tasks"] = value;
	} else {
		delete this.mValueCache["tasks"];
	}
	return this;
};

rpc.WebDeal.FIELD_DISTRICTNAME="districtName";
rpc.WebDeal.FIELD_DISTRICTNAME_CONFUSION="districtName";
rpc.WebDeal.FIELD_PRICE="price";
rpc.WebDeal.FIELD_PRICE_CONFUSION="price";
rpc.WebDeal.FIELD_STATUS="status";
rpc.WebDeal.FIELD_STATUS_CONFUSION="status";
rpc.WebDeal.FIELD_SHIPFEE="shipfee";
rpc.WebDeal.FIELD_SHIPFEE_CONFUSION="shipfee";
rpc.WebDeal.FIELD_CREATED="created";
rpc.WebDeal.FIELD_CREATED_CONFUSION="created";
rpc.WebDeal.FIELD_TASKS="tasks";
rpc.WebDeal.FIELD_TASKS_CONFUSION="tasks";
rpc.WebDeal.FIELD_DEALID="dealId";
rpc.WebDeal.FIELD_DEALID_CONFUSION="dealId";

rpc.WebDeal.checkAndInitial = function() {
    if(rpc.WebDeal.mFieldToConfusionMap)
        return;
	
	rpc.WebDeal.mHasConfusionField = false;
	rpc.WebDeal.mFieldToConfusionMap = {
		"districtName":"districtName", 
		"price":"price", 
		"status":"status", 
		"shipfee":"shipfee", 
		"created":"created", 
		"tasks":"tasks", 
		"dealId":"dealId"
	};
	rpc.WebDeal.mConfusionToFieldMap = {
		"districtName":"districtName", 
		"price":"price", 
		"status":"status", 
		"shipfee":"shipfee", 
		"created":"created", 
		"tasks":"tasks", 
		"dealId":"dealId"
	};

};

rpc.WebDeal.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.WebDeal.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.WebDeal.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.WebDeal.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.WebDeal.toConfusionObject(this.mObj, clone);
};

rpc.WebDeal.getConfusionName = function(name) {
    rpc.WebDeal.checkAndInitial();
    var value = rpc.WebDeal.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.WebDeal.getRawName = function(confusionName) {
    rpc.WebDeal.checkAndInitial();
    var value = rpc.WebDeal.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.WebDeal.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.WebDeal.checkAndInitial();
    if (!rpc.WebDeal.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.WebDeal.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.WebDeal.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.WebDeal.checkAndInitial();
    if (!rpc.WebDeal.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.WebDeal.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.WebDeal.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.WebDeal.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.WebDeal.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.WebDeal.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.WebTask = function() {};
rpc.WebTask.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WebTask.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.WebTask.prototype.getDealId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WebTask.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.WebTask.prototype.getPname = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pname"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pname"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["pname"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WebTask.prototype.setPname = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["pname"];
	else
		this.mObj["pname"] = _value_value0;

	if(value) {
		this.mValueCache["pname"] = value;
	} else {
		delete this.mValueCache["pname"];
	}
	return this;
};

rpc.WebTask.prototype.getPpicture = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["ppicture"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["ppicture"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["ppicture"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WebTask.prototype.setPpicture = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["ppicture"];
	else
		this.mObj["ppicture"] = _value_value0;

	if(value) {
		this.mValueCache["ppicture"] = value;
	} else {
		delete this.mValueCache["ppicture"];
	}
	return this;
};

rpc.WebTask.prototype.getShopId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WebTask.prototype.setShopId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopId"];
	else
		this.mObj["shopId"] = _value_value0;

	if(value) {
		this.mValueCache["shopId"] = value;
	} else {
		delete this.mValueCache["shopId"];
	}
	return this;
};

rpc.WebTask.prototype.getShopName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.WebTask.prototype.setShopName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopName"];
	else
		this.mObj["shopName"] = _value_value0;

	if(value) {
		this.mValueCache["shopName"] = value;
	} else {
		delete this.mValueCache["shopName"];
	}
	return this;
};

rpc.WebTask.prototype.getShortId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shortId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shortId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["shortId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WebTask.prototype.setShortId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["shortId"];
	else
		this.mObj["shortId"] = _value_value0;

	if(value) {
		this.mValueCache["shortId"] = value;
	} else {
		delete this.mValueCache["shortId"];
	}
	return this;
};

rpc.WebTask.prototype.getTaskId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["taskId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["taskId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["taskId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WebTask.prototype.setTaskId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["taskId"];
	else
		this.mObj["taskId"] = _value_value0;

	if(value) {
		this.mValueCache["taskId"] = value;
	} else {
		delete this.mValueCache["taskId"];
	}
	return this;
};

rpc.WebTask.prototype.getTotalCount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["totalCount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["totalCount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["totalCount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.WebTask.prototype.setTotalCount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["totalCount"];
	else
		this.mObj["totalCount"] = _value_value0;

	if(value) {
		this.mValueCache["totalCount"] = value;
	} else {
		delete this.mValueCache["totalCount"];
	}
	return this;
};

rpc.WebTask.FIELD_TASKID="taskId";
rpc.WebTask.FIELD_TASKID_CONFUSION="taskId";
rpc.WebTask.FIELD_SHORTID="shortId";
rpc.WebTask.FIELD_SHORTID_CONFUSION="shortId";
rpc.WebTask.FIELD_TOTALCOUNT="totalCount";
rpc.WebTask.FIELD_TOTALCOUNT_CONFUSION="totalCount";
rpc.WebTask.FIELD_CREATED="created";
rpc.WebTask.FIELD_CREATED_CONFUSION="created";
rpc.WebTask.FIELD_SHOPNAME="shopName";
rpc.WebTask.FIELD_SHOPNAME_CONFUSION="shopName";
rpc.WebTask.FIELD_SHOPID="shopId";
rpc.WebTask.FIELD_SHOPID_CONFUSION="shopId";
rpc.WebTask.FIELD_PNAME="pname";
rpc.WebTask.FIELD_PNAME_CONFUSION="pname";
rpc.WebTask.FIELD_DEALID="dealId";
rpc.WebTask.FIELD_DEALID_CONFUSION="dealId";
rpc.WebTask.FIELD_PPICTURE="ppicture";
rpc.WebTask.FIELD_PPICTURE_CONFUSION="ppicture";

rpc.WebTask.checkAndInitial = function() {
    if(rpc.WebTask.mFieldToConfusionMap)
        return;
	
	rpc.WebTask.mHasConfusionField = false;
	rpc.WebTask.mFieldToConfusionMap = {
		"taskId":"taskId", 
		"shortId":"shortId", 
		"totalCount":"totalCount", 
		"created":"created", 
		"shopName":"shopName", 
		"shopId":"shopId", 
		"pname":"pname", 
		"dealId":"dealId", 
		"ppicture":"ppicture"
	};
	rpc.WebTask.mConfusionToFieldMap = {
		"taskId":"taskId", 
		"shortId":"shortId", 
		"totalCount":"totalCount", 
		"created":"created", 
		"shopName":"shopName", 
		"shopId":"shopId", 
		"pname":"pname", 
		"dealId":"dealId", 
		"ppicture":"ppicture"
	};

};

rpc.WebTask.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.WebTask.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.WebTask.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.WebTask.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.WebTask.toConfusionObject(this.mObj, clone);
};

rpc.WebTask.getConfusionName = function(name) {
    rpc.WebTask.checkAndInitial();
    var value = rpc.WebTask.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.WebTask.getRawName = function(confusionName) {
    rpc.WebTask.checkAndInitial();
    var value = rpc.WebTask.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.WebTask.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.WebTask.checkAndInitial();
    if (!rpc.WebTask.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.WebTask.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.WebTask.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.WebTask.checkAndInitial();
    if (!rpc.WebTask.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.WebTask.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.WebTask.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.WebTask.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.WebTask.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.WebTask.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Deliverer = function() {};
rpc.Deliverer.prototype.getAreaNames = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["areaNames"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["areaNames"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["areaNames"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deliverer.prototype.setAreaNames = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["areaNames"];
	else
		this.mObj["areaNames"] = _value_value0;

	if(value) {
		this.mValueCache["areaNames"] = value;
	} else {
		delete this.mValueCache["areaNames"];
	}
	return this;
};

rpc.Deliverer.prototype.getAvatar = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["avatar"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["avatar"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["avatar"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deliverer.prototype.setAvatar = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["avatar"];
	else
		this.mObj["avatar"] = _value_value0;

	if(value) {
		this.mValueCache["avatar"] = value;
	} else {
		delete this.mValueCache["avatar"];
	}
	return this;
};

rpc.Deliverer.prototype.getBads = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["bads"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["bads"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["bads"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setBads = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["bads"];
	else
		this.mObj["bads"] = _value_value0;

	if(value) {
		this.mValueCache["bads"] = value;
	} else {
		delete this.mValueCache["bads"];
	}
	return this;
};

rpc.Deliverer.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.Deliverer.prototype.getDeals = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deals"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deals"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deals"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setDeals = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deals"];
	else
		this.mObj["deals"] = _value_value0;

	if(value) {
		this.mValueCache["deals"] = value;
	} else {
		delete this.mValueCache["deals"];
	}
	return this;
};

rpc.Deliverer.prototype.getGoods = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["goods"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["goods"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["goods"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setGoods = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["goods"];
	else
		this.mObj["goods"] = _value_value0;

	if(value) {
		this.mValueCache["goods"] = value;
	} else {
		delete this.mValueCache["goods"];
	}
	return this;
};

rpc.Deliverer.prototype.getId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deliverer.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.Deliverer.prototype.getIdcard = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["idcard"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["idcard"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["idcard"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deliverer.prototype.setIdcard = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["idcard"];
	else
		this.mObj["idcard"] = _value_value0;

	if(value) {
		this.mValueCache["idcard"] = value;
	} else {
		delete this.mValueCache["idcard"];
	}
	return this;
};

rpc.Deliverer.prototype.getIsActive = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isActive"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isActive"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isActive"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setIsActive = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isActive"];
	else
		this.mObj["isActive"] = _value_value0;

	if(value) {
		this.mValueCache["isActive"] = value;
	} else {
		delete this.mValueCache["isActive"];
	}
	return this;
};

rpc.Deliverer.prototype.getMediums = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["mediums"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["mediums"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["mediums"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setMediums = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["mediums"];
	else
		this.mObj["mediums"] = _value_value0;

	if(value) {
		this.mValueCache["mediums"] = value;
	} else {
		delete this.mValueCache["mediums"];
	}
	return this;
};

rpc.Deliverer.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deliverer.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.Deliverer.prototype.getOfflineTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["offlineTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["offlineTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["offlineTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setOfflineTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["offlineTime"];
	else
		this.mObj["offlineTime"] = _value_value0;

	if(value) {
		this.mValueCache["offlineTime"] = value;
	} else {
		delete this.mValueCache["offlineTime"];
	}
	return this;
};

rpc.Deliverer.prototype.getOnline = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["online"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["online"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["online"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setOnline = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["online"];
	else
		this.mObj["online"] = _value_value0;

	if(value) {
		this.mValueCache["online"] = value;
	} else {
		delete this.mValueCache["online"];
	}
	return this;
};

rpc.Deliverer.prototype.getOnlineTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["onlineTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["onlineTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["onlineTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setOnlineTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["onlineTime"];
	else
		this.mObj["onlineTime"] = _value_value0;

	if(value) {
		this.mValueCache["onlineTime"] = value;
	} else {
		delete this.mValueCache["onlineTime"];
	}
	return this;
};

rpc.Deliverer.prototype.getPhone = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["phone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["phone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["phone"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deliverer.prototype.setPhone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["phone"];
	else
		this.mObj["phone"] = _value_value0;

	if(value) {
		this.mValueCache["phone"] = value;
	} else {
		delete this.mValueCache["phone"];
	}
	return this;
};

rpc.Deliverer.prototype.getReturnDealNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["returnDealNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["returnDealNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["returnDealNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setReturnDealNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["returnDealNum"];
	else
		this.mObj["returnDealNum"] = _value_value0;

	if(value) {
		this.mValueCache["returnDealNum"] = value;
	} else {
		delete this.mValueCache["returnDealNum"];
	}
	return this;
};

rpc.Deliverer.prototype.getTitle = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["title"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["title"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["title"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Deliverer.prototype.setTitle = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["title"];
	else
		this.mObj["title"] = _value_value0;

	if(value) {
		this.mValueCache["title"] = value;
	} else {
		delete this.mValueCache["title"];
	}
	return this;
};

rpc.Deliverer.prototype.getTodayReturnDealNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["todayReturnDealNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["todayReturnDealNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["todayReturnDealNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setTodayReturnDealNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["todayReturnDealNum"];
	else
		this.mObj["todayReturnDealNum"] = _value_value0;

	if(value) {
		this.mValueCache["todayReturnDealNum"] = value;
	} else {
		delete this.mValueCache["todayReturnDealNum"];
	}
	return this;
};

rpc.Deliverer.prototype.getUid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.Deliverer.prototype.getZoneId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["zoneId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["zoneId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["zoneId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Deliverer.prototype.setZoneId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["zoneId"];
	else
		this.mObj["zoneId"] = _value_value0;

	if(value) {
		this.mValueCache["zoneId"] = value;
	} else {
		delete this.mValueCache["zoneId"];
	}
	return this;
};

rpc.Deliverer.FIELD_UID="uid";
rpc.Deliverer.FIELD_UID_CONFUSION="uid";
rpc.Deliverer.FIELD_PHONE="phone";
rpc.Deliverer.FIELD_PHONE_CONFUSION="phone";
rpc.Deliverer.FIELD_MEDIUMS="mediums";
rpc.Deliverer.FIELD_MEDIUMS_CONFUSION="mediums";
rpc.Deliverer.FIELD_AREANAMES="areaNames";
rpc.Deliverer.FIELD_AREANAMES_CONFUSION="areaNames";
rpc.Deliverer.FIELD_GOODS="goods";
rpc.Deliverer.FIELD_GOODS_CONFUSION="goods";
rpc.Deliverer.FIELD_TODAYRETURNDEALNUM="todayReturnDealNum";
rpc.Deliverer.FIELD_TODAYRETURNDEALNUM_CONFUSION="todayReturnDealNum";
rpc.Deliverer.FIELD_IDCARD="idcard";
rpc.Deliverer.FIELD_IDCARD_CONFUSION="idcard";
rpc.Deliverer.FIELD_AVATAR="avatar";
rpc.Deliverer.FIELD_AVATAR_CONFUSION="avatar";
rpc.Deliverer.FIELD_DEALS="deals";
rpc.Deliverer.FIELD_DEALS_CONFUSION="deals";
rpc.Deliverer.FIELD_ZONEID="zoneId";
rpc.Deliverer.FIELD_ZONEID_CONFUSION="zoneId";
rpc.Deliverer.FIELD_ONLINE="online";
rpc.Deliverer.FIELD_ONLINE_CONFUSION="online";
rpc.Deliverer.FIELD_ID="id";
rpc.Deliverer.FIELD_ID_CONFUSION="id";
rpc.Deliverer.FIELD_ISACTIVE="isActive";
rpc.Deliverer.FIELD_ISACTIVE_CONFUSION="isActive";
rpc.Deliverer.FIELD_TITLE="title";
rpc.Deliverer.FIELD_TITLE_CONFUSION="title";
rpc.Deliverer.FIELD_RETURNDEALNUM="returnDealNum";
rpc.Deliverer.FIELD_RETURNDEALNUM_CONFUSION="returnDealNum";
rpc.Deliverer.FIELD_ONLINETIME="onlineTime";
rpc.Deliverer.FIELD_ONLINETIME_CONFUSION="onlineTime";
rpc.Deliverer.FIELD_CREATED="created";
rpc.Deliverer.FIELD_CREATED_CONFUSION="created";
rpc.Deliverer.FIELD_NAME="name";
rpc.Deliverer.FIELD_NAME_CONFUSION="name";
rpc.Deliverer.FIELD_OFFLINETIME="offlineTime";
rpc.Deliverer.FIELD_OFFLINETIME_CONFUSION="offlineTime";
rpc.Deliverer.FIELD_BADS="bads";
rpc.Deliverer.FIELD_BADS_CONFUSION="bads";

rpc.Deliverer.checkAndInitial = function() {
    if(rpc.Deliverer.mFieldToConfusionMap)
        return;
	
	rpc.Deliverer.mHasConfusionField = false;
	rpc.Deliverer.mFieldToConfusionMap = {
		"uid":"uid", 
		"phone":"phone", 
		"mediums":"mediums", 
		"areaNames":"areaNames", 
		"goods":"goods", 
		"todayReturnDealNum":"todayReturnDealNum", 
		"idcard":"idcard", 
		"avatar":"avatar", 
		"deals":"deals", 
		"zoneId":"zoneId", 
		"online":"online", 
		"id":"id", 
		"isActive":"isActive", 
		"title":"title", 
		"returnDealNum":"returnDealNum", 
		"onlineTime":"onlineTime", 
		"created":"created", 
		"name":"name", 
		"offlineTime":"offlineTime", 
		"bads":"bads"
	};
	rpc.Deliverer.mConfusionToFieldMap = {
		"uid":"uid", 
		"phone":"phone", 
		"mediums":"mediums", 
		"areaNames":"areaNames", 
		"goods":"goods", 
		"todayReturnDealNum":"todayReturnDealNum", 
		"idcard":"idcard", 
		"avatar":"avatar", 
		"deals":"deals", 
		"zoneId":"zoneId", 
		"online":"online", 
		"id":"id", 
		"isActive":"isActive", 
		"title":"title", 
		"returnDealNum":"returnDealNum", 
		"onlineTime":"onlineTime", 
		"created":"created", 
		"name":"name", 
		"offlineTime":"offlineTime", 
		"bads":"bads"
	};

};

rpc.Deliverer.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Deliverer.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Deliverer.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Deliverer.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Deliverer.toConfusionObject(this.mObj, clone);
};

rpc.Deliverer.getConfusionName = function(name) {
    rpc.Deliverer.checkAndInitial();
    var value = rpc.Deliverer.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Deliverer.getRawName = function(confusionName) {
    rpc.Deliverer.checkAndInitial();
    var value = rpc.Deliverer.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Deliverer.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Deliverer.checkAndInitial();
    if (!rpc.Deliverer.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Deliverer.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Deliverer.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Deliverer.checkAndInitial();
    if (!rpc.Deliverer.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Deliverer.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Deliverer.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Deliverer.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Deliverer.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Deliverer.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DelivererWorkTime = function() {};
rpc.DelivererWorkTime.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DelivererWorkTime.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.DelivererWorkTime.prototype.getDeals = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deals"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deals"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deals"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DelivererWorkTime.prototype.setDeals = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deals"];
	else
		this.mObj["deals"] = _value_value0;

	if(value) {
		this.mValueCache["deals"] = value;
	} else {
		delete this.mValueCache["deals"];
	}
	return this;
};

rpc.DelivererWorkTime.prototype.getId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.DelivererWorkTime.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.DelivererWorkTime.prototype.getOfflineTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["offlineTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["offlineTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["offlineTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DelivererWorkTime.prototype.setOfflineTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["offlineTime"];
	else
		this.mObj["offlineTime"] = _value_value0;

	if(value) {
		this.mValueCache["offlineTime"] = value;
	} else {
		delete this.mValueCache["offlineTime"];
	}
	return this;
};

rpc.DelivererWorkTime.prototype.getOnlineTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["onlineTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["onlineTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["onlineTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DelivererWorkTime.prototype.setOnlineTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["onlineTime"];
	else
		this.mObj["onlineTime"] = _value_value0;

	if(value) {
		this.mValueCache["onlineTime"] = value;
	} else {
		delete this.mValueCache["onlineTime"];
	}
	return this;
};

rpc.DelivererWorkTime.prototype.getUid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DelivererWorkTime.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.DelivererWorkTime.prototype.getWorkTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["workTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["workTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["workTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DelivererWorkTime.prototype.setWorkTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["workTime"];
	else
		this.mObj["workTime"] = _value_value0;

	if(value) {
		this.mValueCache["workTime"] = value;
	} else {
		delete this.mValueCache["workTime"];
	}
	return this;
};

rpc.DelivererWorkTime.FIELD_UID="uid";
rpc.DelivererWorkTime.FIELD_UID_CONFUSION="uid";
rpc.DelivererWorkTime.FIELD_ID="id";
rpc.DelivererWorkTime.FIELD_ID_CONFUSION="id";
rpc.DelivererWorkTime.FIELD_ONLINETIME="onlineTime";
rpc.DelivererWorkTime.FIELD_ONLINETIME_CONFUSION="onlineTime";
rpc.DelivererWorkTime.FIELD_CREATED="created";
rpc.DelivererWorkTime.FIELD_CREATED_CONFUSION="created";
rpc.DelivererWorkTime.FIELD_WORKTIME="workTime";
rpc.DelivererWorkTime.FIELD_WORKTIME_CONFUSION="workTime";
rpc.DelivererWorkTime.FIELD_OFFLINETIME="offlineTime";
rpc.DelivererWorkTime.FIELD_OFFLINETIME_CONFUSION="offlineTime";
rpc.DelivererWorkTime.FIELD_DEALS="deals";
rpc.DelivererWorkTime.FIELD_DEALS_CONFUSION="deals";

rpc.DelivererWorkTime.checkAndInitial = function() {
    if(rpc.DelivererWorkTime.mFieldToConfusionMap)
        return;
	
	rpc.DelivererWorkTime.mHasConfusionField = false;
	rpc.DelivererWorkTime.mFieldToConfusionMap = {
		"uid":"uid", 
		"id":"id", 
		"onlineTime":"onlineTime", 
		"created":"created", 
		"workTime":"workTime", 
		"offlineTime":"offlineTime", 
		"deals":"deals"
	};
	rpc.DelivererWorkTime.mConfusionToFieldMap = {
		"uid":"uid", 
		"id":"id", 
		"onlineTime":"onlineTime", 
		"created":"created", 
		"workTime":"workTime", 
		"offlineTime":"offlineTime", 
		"deals":"deals"
	};

};

rpc.DelivererWorkTime.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DelivererWorkTime.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DelivererWorkTime.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.DelivererWorkTime.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DelivererWorkTime.toConfusionObject(this.mObj, clone);
};

rpc.DelivererWorkTime.getConfusionName = function(name) {
    rpc.DelivererWorkTime.checkAndInitial();
    var value = rpc.DelivererWorkTime.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.DelivererWorkTime.getRawName = function(confusionName) {
    rpc.DelivererWorkTime.checkAndInitial();
    var value = rpc.DelivererWorkTime.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.DelivererWorkTime.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DelivererWorkTime.checkAndInitial();
    if (!rpc.DelivererWorkTime.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DelivererWorkTime.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DelivererWorkTime.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DelivererWorkTime.checkAndInitial();
    if (!rpc.DelivererWorkTime.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DelivererWorkTime.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DelivererWorkTime.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DelivererWorkTime.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DelivererWorkTime.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DelivererWorkTime.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Banner = function() {};
rpc.Banner.prototype.getAreaId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["areaId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["areaId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["areaId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Banner.prototype.setAreaId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["areaId"];
	else
		this.mObj["areaId"] = _value_value0;

	if(value) {
		this.mValueCache["areaId"] = value;
	} else {
		delete this.mValueCache["areaId"];
	}
	return this;
};

rpc.Banner.prototype.getBanners = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["banners"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["banners"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.BannerItem], false);
	
	if(objRet) {
		this.mValueCache["banners"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Banner.prototype.setBanners = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["banners"];
	else
		this.mObj["banners"] = _value_value0;

	if(value) {
		this.mValueCache["banners"] = value;
	} else {
		delete this.mValueCache["banners"];
	}
	return this;
};

rpc.Banner.FIELD_AREAID="areaId";
rpc.Banner.FIELD_AREAID_CONFUSION="areaId";
rpc.Banner.FIELD_BANNERS="banners";
rpc.Banner.FIELD_BANNERS_CONFUSION="banners";

rpc.Banner.checkAndInitial = function() {
    if(rpc.Banner.mFieldToConfusionMap)
        return;
	
	rpc.Banner.mHasConfusionField = false;
	rpc.Banner.mFieldToConfusionMap = {
		"areaId":"areaId", 
		"banners":"banners"
	};
	rpc.Banner.mConfusionToFieldMap = {
		"areaId":"areaId", 
		"banners":"banners"
	};

};

rpc.Banner.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Banner.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Banner.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Banner.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Banner.toConfusionObject(this.mObj, clone);
};

rpc.Banner.getConfusionName = function(name) {
    rpc.Banner.checkAndInitial();
    var value = rpc.Banner.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Banner.getRawName = function(confusionName) {
    rpc.Banner.checkAndInitial();
    var value = rpc.Banner.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Banner.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Banner.checkAndInitial();
    if (!rpc.Banner.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Banner.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Banner.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Banner.checkAndInitial();
    if (!rpc.Banner.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Banner.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Banner.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Banner.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Banner.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Banner.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.BannerItem = function() {};
rpc.BannerItem.prototype.getImage = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["image"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["image"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["image"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.BannerItem.prototype.setImage = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["image"];
	else
		this.mObj["image"] = _value_value0;

	if(value) {
		this.mValueCache["image"] = value;
	} else {
		delete this.mValueCache["image"];
	}
	return this;
};

rpc.BannerItem.prototype.getOrder = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["order"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["order"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["order"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.BannerItem.prototype.setOrder = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["order"];
	else
		this.mObj["order"] = _value_value0;

	if(value) {
		this.mValueCache["order"] = value;
	} else {
		delete this.mValueCache["order"];
	}
	return this;
};

rpc.BannerItem.prototype.getTitle = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["title"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["title"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["title"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.BannerItem.prototype.setTitle = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["title"];
	else
		this.mObj["title"] = _value_value0;

	if(value) {
		this.mValueCache["title"] = value;
	} else {
		delete this.mValueCache["title"];
	}
	return this;
};

rpc.BannerItem.prototype.getUrl = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["url"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["url"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["url"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.BannerItem.prototype.setUrl = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["url"];
	else
		this.mObj["url"] = _value_value0;

	if(value) {
		this.mValueCache["url"] = value;
	} else {
		delete this.mValueCache["url"];
	}
	return this;
};

rpc.BannerItem.FIELD_TITLE="title";
rpc.BannerItem.FIELD_TITLE_CONFUSION="title";
rpc.BannerItem.FIELD_ORDER="order";
rpc.BannerItem.FIELD_ORDER_CONFUSION="order";
rpc.BannerItem.FIELD_IMAGE="image";
rpc.BannerItem.FIELD_IMAGE_CONFUSION="image";
rpc.BannerItem.FIELD_URL="url";
rpc.BannerItem.FIELD_URL_CONFUSION="url";

rpc.BannerItem.checkAndInitial = function() {
    if(rpc.BannerItem.mFieldToConfusionMap)
        return;
	
	rpc.BannerItem.mHasConfusionField = false;
	rpc.BannerItem.mFieldToConfusionMap = {
		"title":"title", 
		"order":"order", 
		"image":"image", 
		"url":"url"
	};
	rpc.BannerItem.mConfusionToFieldMap = {
		"title":"title", 
		"order":"order", 
		"image":"image", 
		"url":"url"
	};

};

rpc.BannerItem.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.BannerItem.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.BannerItem.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.BannerItem.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.BannerItem.toConfusionObject(this.mObj, clone);
};

rpc.BannerItem.getConfusionName = function(name) {
    rpc.BannerItem.checkAndInitial();
    var value = rpc.BannerItem.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.BannerItem.getRawName = function(confusionName) {
    rpc.BannerItem.checkAndInitial();
    var value = rpc.BannerItem.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.BannerItem.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.BannerItem.checkAndInitial();
    if (!rpc.BannerItem.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.BannerItem.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.BannerItem.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.BannerItem.checkAndInitial();
    if (!rpc.BannerItem.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.BannerItem.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.BannerItem.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.BannerItem.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.BannerItem.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.BannerItem.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Homepage = function() {};
rpc.Homepage.prototype.getItems = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["items"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["items"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.BannerItem], false);
	
	if(objRet) {
		this.mValueCache["items"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Homepage.prototype.setItems = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["items"];
	else
		this.mObj["items"] = _value_value0;

	if(value) {
		this.mValueCache["items"] = value;
	} else {
		delete this.mValueCache["items"];
	}
	return this;
};

rpc.Homepage.prototype.getShopGroup = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopGroup"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopGroup"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.ShopGroup, null, false);
	
	if(objRet) {
		this.mValueCache["shopGroup"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Homepage.prototype.setShopGroup = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["shopGroup"];
	else
		this.mObj["shopGroup"] = _value_value0;

	if(value) {
		this.mValueCache["shopGroup"] = value;
	} else {
		delete this.mValueCache["shopGroup"];
	}
	return this;
};

rpc.Homepage.prototype.getShops = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shops"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shops"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Shop], false);
	
	if(objRet) {
		this.mValueCache["shops"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Homepage.prototype.setShops = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["shops"];
	else
		this.mObj["shops"] = _value_value0;

	if(value) {
		this.mValueCache["shops"] = value;
	} else {
		delete this.mValueCache["shops"];
	}
	return this;
};

rpc.Homepage.FIELD_SHOPS="shops";
rpc.Homepage.FIELD_SHOPS_CONFUSION="shops";
rpc.Homepage.FIELD_ITEMS="items";
rpc.Homepage.FIELD_ITEMS_CONFUSION="items";
rpc.Homepage.FIELD_SHOPGROUP="shopGroup";
rpc.Homepage.FIELD_SHOPGROUP_CONFUSION="shopGroup";

rpc.Homepage.checkAndInitial = function() {
    if(rpc.Homepage.mFieldToConfusionMap)
        return;
	
	rpc.Homepage.mHasConfusionField = false;
	rpc.Homepage.mFieldToConfusionMap = {
		"shops":"shops", 
		"items":"items", 
		"shopGroup":"shopGroup"
	};
	rpc.Homepage.mConfusionToFieldMap = {
		"shops":"shops", 
		"items":"items", 
		"shopGroup":"shopGroup"
	};

};

rpc.Homepage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Homepage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Homepage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Homepage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Homepage.toConfusionObject(this.mObj, clone);
};

rpc.Homepage.getConfusionName = function(name) {
    rpc.Homepage.checkAndInitial();
    var value = rpc.Homepage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Homepage.getRawName = function(confusionName) {
    rpc.Homepage.checkAndInitial();
    var value = rpc.Homepage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Homepage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Homepage.checkAndInitial();
    if (!rpc.Homepage.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Homepage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Homepage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Homepage.checkAndInitial();
    if (!rpc.Homepage.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Homepage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Homepage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Homepage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Homepage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Homepage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.AccountInfo = function() {};
rpc.AccountInfo.prototype.getBalance = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["balance"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["balance"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["balance"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.AccountInfo.prototype.setBalance = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["balance"];
	else
		this.mObj["balance"] = _value_value0;

	if(value) {
		this.mValueCache["balance"] = value;
	} else {
		delete this.mValueCache["balance"];
	}
	return this;
};

rpc.AccountInfo.prototype.getFirstChargeRecords = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["firstChargeRecords"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["firstChargeRecords"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.ChargeRecord], false);
	
	if(objRet) {
		this.mValueCache["firstChargeRecords"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.AccountInfo.prototype.setFirstChargeRecords = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["firstChargeRecords"];
	else
		this.mObj["firstChargeRecords"] = _value_value0;

	if(value) {
		this.mValueCache["firstChargeRecords"] = value;
	} else {
		delete this.mValueCache["firstChargeRecords"];
	}
	return this;
};

rpc.AccountInfo.FIELD_BALANCE="balance";
rpc.AccountInfo.FIELD_BALANCE_CONFUSION="balance";
rpc.AccountInfo.FIELD_FIRSTCHARGERECORDS="firstChargeRecords";
rpc.AccountInfo.FIELD_FIRSTCHARGERECORDS_CONFUSION="firstChargeRecords";

rpc.AccountInfo.checkAndInitial = function() {
    if(rpc.AccountInfo.mFieldToConfusionMap)
        return;
	
	rpc.AccountInfo.mHasConfusionField = false;
	rpc.AccountInfo.mFieldToConfusionMap = {
		"balance":"balance", 
		"firstChargeRecords":"firstChargeRecords"
	};
	rpc.AccountInfo.mConfusionToFieldMap = {
		"balance":"balance", 
		"firstChargeRecords":"firstChargeRecords"
	};

};

rpc.AccountInfo.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.AccountInfo.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.AccountInfo.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.AccountInfo.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.AccountInfo.toConfusionObject(this.mObj, clone);
};

rpc.AccountInfo.getConfusionName = function(name) {
    rpc.AccountInfo.checkAndInitial();
    var value = rpc.AccountInfo.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.AccountInfo.getRawName = function(confusionName) {
    rpc.AccountInfo.checkAndInitial();
    var value = rpc.AccountInfo.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.AccountInfo.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.AccountInfo.checkAndInitial();
    if (!rpc.AccountInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.AccountInfo.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.AccountInfo.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.AccountInfo.checkAndInitial();
    if (!rpc.AccountInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.AccountInfo.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.AccountInfo.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.AccountInfo.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.AccountInfo.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.AccountInfo.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.CashflowRecord = function() {};
rpc.CashflowRecord.prototype.getAmount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["amount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["amount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["amount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CashflowRecord.prototype.setAmount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["amount"];
	else
		this.mObj["amount"] = _value_value0;

	if(value) {
		this.mValueCache["amount"] = value;
	} else {
		delete this.mValueCache["amount"];
	}
	return this;
};

rpc.CashflowRecord.prototype.getContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["content"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["content"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["content"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CashflowRecord.prototype.setContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["content"];
	else
		this.mObj["content"] = _value_value0;

	if(value) {
		this.mValueCache["content"] = value;
	} else {
		delete this.mValueCache["content"];
	}
	return this;
};

rpc.CashflowRecord.prototype.getDate = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["date"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["date"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["date"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CashflowRecord.prototype.setDate = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["date"];
	else
		this.mObj["date"] = _value_value0;

	if(value) {
		this.mValueCache["date"] = value;
	} else {
		delete this.mValueCache["date"];
	}
	return this;
};

rpc.CashflowRecord.prototype.getDealId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.CashflowRecord.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.CashflowRecord.prototype.getType = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["type"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["type"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["type"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.CashflowRecord.prototype.setType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["type"];
	else
		this.mObj["type"] = _value_value0;

	if(value) {
		this.mValueCache["type"] = value;
	} else {
		delete this.mValueCache["type"];
	}
	return this;
};

rpc.CashflowRecord.FIELD_CONTENT="content";
rpc.CashflowRecord.FIELD_CONTENT_CONFUSION="content";
rpc.CashflowRecord.FIELD_AMOUNT="amount";
rpc.CashflowRecord.FIELD_AMOUNT_CONFUSION="amount";
rpc.CashflowRecord.FIELD_TYPE="type";
rpc.CashflowRecord.FIELD_TYPE_CONFUSION="type";
rpc.CashflowRecord.FIELD_DEALID="dealId";
rpc.CashflowRecord.FIELD_DEALID_CONFUSION="dealId";
rpc.CashflowRecord.FIELD_DATE="date";
rpc.CashflowRecord.FIELD_DATE_CONFUSION="date";

rpc.CashflowRecord.checkAndInitial = function() {
    if(rpc.CashflowRecord.mFieldToConfusionMap)
        return;
	
	rpc.CashflowRecord.mHasConfusionField = false;
	rpc.CashflowRecord.mFieldToConfusionMap = {
		"content":"content", 
		"amount":"amount", 
		"type":"type", 
		"dealId":"dealId", 
		"date":"date"
	};
	rpc.CashflowRecord.mConfusionToFieldMap = {
		"content":"content", 
		"amount":"amount", 
		"type":"type", 
		"dealId":"dealId", 
		"date":"date"
	};

};

rpc.CashflowRecord.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.CashflowRecord.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.CashflowRecord.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.CashflowRecord.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.CashflowRecord.toConfusionObject(this.mObj, clone);
};

rpc.CashflowRecord.getConfusionName = function(name) {
    rpc.CashflowRecord.checkAndInitial();
    var value = rpc.CashflowRecord.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.CashflowRecord.getRawName = function(confusionName) {
    rpc.CashflowRecord.checkAndInitial();
    var value = rpc.CashflowRecord.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.CashflowRecord.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.CashflowRecord.checkAndInitial();
    if (!rpc.CashflowRecord.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.CashflowRecord.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.CashflowRecord.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.CashflowRecord.checkAndInitial();
    if (!rpc.CashflowRecord.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.CashflowRecord.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.CashflowRecord.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.CashflowRecord.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.CashflowRecord.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.CashflowRecord.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ChargeBatchPayResult = function() {};
rpc.ChargeBatchPayResult.prototype.getChargeId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["chargeId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["chargeId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["chargeId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeBatchPayResult.prototype.setChargeId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["chargeId"];
	else
		this.mObj["chargeId"] = _value_value0;

	if(value) {
		this.mValueCache["chargeId"] = value;
	} else {
		delete this.mValueCache["chargeId"];
	}
	return this;
};

rpc.ChargeBatchPayResult.prototype.getErrorCode = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["errorCode"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["errorCode"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["errorCode"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeBatchPayResult.prototype.setErrorCode = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["errorCode"];
	else
		this.mObj["errorCode"] = _value_value0;

	if(value) {
		this.mValueCache["errorCode"] = value;
	} else {
		delete this.mValueCache["errorCode"];
	}
	return this;
};

rpc.ChargeBatchPayResult.prototype.getExtraInfo = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["extraInfo"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["extraInfo"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["extraInfo"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeBatchPayResult.prototype.setExtraInfo = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["extraInfo"];
	else
		this.mObj["extraInfo"] = _value_value0;

	if(value) {
		this.mValueCache["extraInfo"] = value;
	} else {
		delete this.mValueCache["extraInfo"];
	}
	return this;
};

rpc.ChargeBatchPayResult.prototype.getMessage = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["message"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["message"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["message"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeBatchPayResult.prototype.setMessage = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["message"];
	else
		this.mObj["message"] = _value_value0;

	if(value) {
		this.mValueCache["message"] = value;
	} else {
		delete this.mValueCache["message"];
	}
	return this;
};

rpc.ChargeBatchPayResult.prototype.getThirdPartPayUrl = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["thirdPartPayUrl"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["thirdPartPayUrl"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["thirdPartPayUrl"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeBatchPayResult.prototype.setThirdPartPayUrl = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["thirdPartPayUrl"];
	else
		this.mObj["thirdPartPayUrl"] = _value_value0;

	if(value) {
		this.mValueCache["thirdPartPayUrl"] = value;
	} else {
		delete this.mValueCache["thirdPartPayUrl"];
	}
	return this;
};

rpc.ChargeBatchPayResult.FIELD_MESSAGE="message";
rpc.ChargeBatchPayResult.FIELD_MESSAGE_CONFUSION="message";
rpc.ChargeBatchPayResult.FIELD_CHARGEID="chargeId";
rpc.ChargeBatchPayResult.FIELD_CHARGEID_CONFUSION="chargeId";
rpc.ChargeBatchPayResult.FIELD_THIRDPARTPAYURL="thirdPartPayUrl";
rpc.ChargeBatchPayResult.FIELD_THIRDPARTPAYURL_CONFUSION="thirdPartPayUrl";
rpc.ChargeBatchPayResult.FIELD_ERRORCODE="errorCode";
rpc.ChargeBatchPayResult.FIELD_ERRORCODE_CONFUSION="errorCode";
rpc.ChargeBatchPayResult.FIELD_EXTRAINFO="extraInfo";
rpc.ChargeBatchPayResult.FIELD_EXTRAINFO_CONFUSION="extraInfo";

rpc.ChargeBatchPayResult.checkAndInitial = function() {
    if(rpc.ChargeBatchPayResult.mFieldToConfusionMap)
        return;
	
	rpc.ChargeBatchPayResult.mHasConfusionField = false;
	rpc.ChargeBatchPayResult.mFieldToConfusionMap = {
		"message":"message", 
		"chargeId":"chargeId", 
		"thirdPartPayUrl":"thirdPartPayUrl", 
		"errorCode":"errorCode", 
		"extraInfo":"extraInfo"
	};
	rpc.ChargeBatchPayResult.mConfusionToFieldMap = {
		"message":"message", 
		"chargeId":"chargeId", 
		"thirdPartPayUrl":"thirdPartPayUrl", 
		"errorCode":"errorCode", 
		"extraInfo":"extraInfo"
	};

};

rpc.ChargeBatchPayResult.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ChargeBatchPayResult.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ChargeBatchPayResult.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ChargeBatchPayResult.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ChargeBatchPayResult.toConfusionObject(this.mObj, clone);
};

rpc.ChargeBatchPayResult.getConfusionName = function(name) {
    rpc.ChargeBatchPayResult.checkAndInitial();
    var value = rpc.ChargeBatchPayResult.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ChargeBatchPayResult.getRawName = function(confusionName) {
    rpc.ChargeBatchPayResult.checkAndInitial();
    var value = rpc.ChargeBatchPayResult.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ChargeBatchPayResult.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ChargeBatchPayResult.checkAndInitial();
    if (!rpc.ChargeBatchPayResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ChargeBatchPayResult.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ChargeBatchPayResult.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ChargeBatchPayResult.checkAndInitial();
    if (!rpc.ChargeBatchPayResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ChargeBatchPayResult.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ChargeBatchPayResult.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ChargeBatchPayResult.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ChargeBatchPayResult.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ChargeBatchPayResult.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ChargeCardBatch = function() {};
rpc.ChargeCardBatch.prototype.getAcquiredPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["acquiredPrice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["acquiredPrice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["acquiredPrice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardBatch.prototype.setAcquiredPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["acquiredPrice"];
	else
		this.mObj["acquiredPrice"] = _value_value0;

	if(value) {
		this.mValueCache["acquiredPrice"] = value;
	} else {
		delete this.mValueCache["acquiredPrice"];
	}
	return this;
};

rpc.ChargeCardBatch.prototype.getBatchId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["batchId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["batchId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["batchId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardBatch.prototype.setBatchId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["batchId"];
	else
		this.mObj["batchId"] = _value_value0;

	if(value) {
		this.mValueCache["batchId"] = value;
	} else {
		delete this.mValueCache["batchId"];
	}
	return this;
};

rpc.ChargeCardBatch.prototype.getBatchName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["batchName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["batchName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["batchName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardBatch.prototype.setBatchName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["batchName"];
	else
		this.mObj["batchName"] = _value_value0;

	if(value) {
		this.mValueCache["batchName"] = value;
	} else {
		delete this.mValueCache["batchName"];
	}
	return this;
};

rpc.ChargeCardBatch.prototype.getDesc = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["desc"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["desc"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["desc"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardBatch.prototype.setDesc = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["desc"];
	else
		this.mObj["desc"] = _value_value0;

	if(value) {
		this.mValueCache["desc"] = value;
	} else {
		delete this.mValueCache["desc"];
	}
	return this;
};

rpc.ChargeCardBatch.prototype.getSimpleDesc = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["simpleDesc"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["simpleDesc"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["simpleDesc"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardBatch.prototype.setSimpleDesc = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["simpleDesc"];
	else
		this.mObj["simpleDesc"] = _value_value0;

	if(value) {
		this.mValueCache["simpleDesc"] = value;
	} else {
		delete this.mValueCache["simpleDesc"];
	}
	return this;
};

rpc.ChargeCardBatch.prototype.getSoldPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["soldPrice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["soldPrice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["soldPrice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardBatch.prototype.setSoldPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["soldPrice"];
	else
		this.mObj["soldPrice"] = _value_value0;

	if(value) {
		this.mValueCache["soldPrice"] = value;
	} else {
		delete this.mValueCache["soldPrice"];
	}
	return this;
};

rpc.ChargeCardBatch.FIELD_SIMPLEDESC="simpleDesc";
rpc.ChargeCardBatch.FIELD_SIMPLEDESC_CONFUSION="simpleDesc";
rpc.ChargeCardBatch.FIELD_DESC="desc";
rpc.ChargeCardBatch.FIELD_DESC_CONFUSION="desc";
rpc.ChargeCardBatch.FIELD_SOLDPRICE="soldPrice";
rpc.ChargeCardBatch.FIELD_SOLDPRICE_CONFUSION="soldPrice";
rpc.ChargeCardBatch.FIELD_BATCHNAME="batchName";
rpc.ChargeCardBatch.FIELD_BATCHNAME_CONFUSION="batchName";
rpc.ChargeCardBatch.FIELD_BATCHID="batchId";
rpc.ChargeCardBatch.FIELD_BATCHID_CONFUSION="batchId";
rpc.ChargeCardBatch.FIELD_ACQUIREDPRICE="acquiredPrice";
rpc.ChargeCardBatch.FIELD_ACQUIREDPRICE_CONFUSION="acquiredPrice";

rpc.ChargeCardBatch.checkAndInitial = function() {
    if(rpc.ChargeCardBatch.mFieldToConfusionMap)
        return;
	
	rpc.ChargeCardBatch.mHasConfusionField = false;
	rpc.ChargeCardBatch.mFieldToConfusionMap = {
		"simpleDesc":"simpleDesc", 
		"desc":"desc", 
		"soldPrice":"soldPrice", 
		"batchName":"batchName", 
		"batchId":"batchId", 
		"acquiredPrice":"acquiredPrice"
	};
	rpc.ChargeCardBatch.mConfusionToFieldMap = {
		"simpleDesc":"simpleDesc", 
		"desc":"desc", 
		"soldPrice":"soldPrice", 
		"batchName":"batchName", 
		"batchId":"batchId", 
		"acquiredPrice":"acquiredPrice"
	};

};

rpc.ChargeCardBatch.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ChargeCardBatch.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ChargeCardBatch.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ChargeCardBatch.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ChargeCardBatch.toConfusionObject(this.mObj, clone);
};

rpc.ChargeCardBatch.getConfusionName = function(name) {
    rpc.ChargeCardBatch.checkAndInitial();
    var value = rpc.ChargeCardBatch.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ChargeCardBatch.getRawName = function(confusionName) {
    rpc.ChargeCardBatch.checkAndInitial();
    var value = rpc.ChargeCardBatch.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ChargeCardBatch.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ChargeCardBatch.checkAndInitial();
    if (!rpc.ChargeCardBatch.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ChargeCardBatch.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ChargeCardBatch.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ChargeCardBatch.checkAndInitial();
    if (!rpc.ChargeCardBatch.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ChargeCardBatch.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ChargeCardBatch.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ChargeCardBatch.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ChargeCardBatch.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ChargeCardBatch.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ChargeCardResult = function() {};
rpc.ChargeCardResult.prototype.getAmount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["amount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["amount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["amount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardResult.prototype.setAmount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["amount"];
	else
		this.mObj["amount"] = _value_value0;

	if(value) {
		this.mValueCache["amount"] = value;
	} else {
		delete this.mValueCache["amount"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getBatchBackAmount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["batchBackAmount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["batchBackAmount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["batchBackAmount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardResult.prototype.setBatchBackAmount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["batchBackAmount"];
	else
		this.mObj["batchBackAmount"] = _value_value0;

	if(value) {
		this.mValueCache["batchBackAmount"] = value;
	} else {
		delete this.mValueCache["batchBackAmount"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getBatchBackContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["batchBackContent"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["batchBackContent"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["batchBackContent"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardResult.prototype.setBatchBackContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["batchBackContent"];
	else
		this.mObj["batchBackContent"] = _value_value0;

	if(value) {
		this.mValueCache["batchBackContent"] = value;
	} else {
		delete this.mValueCache["batchBackContent"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getBatchBackCount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["batchBackCount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["batchBackCount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["batchBackCount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardResult.prototype.setBatchBackCount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["batchBackCount"];
	else
		this.mObj["batchBackCount"] = _value_value0;

	if(value) {
		this.mValueCache["batchBackCount"] = value;
	} else {
		delete this.mValueCache["batchBackCount"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getBatchId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["batchId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["batchId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["batchId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardResult.prototype.setBatchId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["batchId"];
	else
		this.mObj["batchId"] = _value_value0;

	if(value) {
		this.mValueCache["batchId"] = value;
	} else {
		delete this.mValueCache["batchId"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getBatchName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["batchName"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["batchName"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["batchName"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardResult.prototype.setBatchName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["batchName"];
	else
		this.mObj["batchName"] = _value_value0;

	if(value) {
		this.mValueCache["batchName"] = value;
	} else {
		delete this.mValueCache["batchName"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getCode = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["code"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["code"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["code"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardResult.prototype.setCode = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["code"];
	else
		this.mObj["code"] = _value_value0;

	if(value) {
		this.mValueCache["code"] = value;
	} else {
		delete this.mValueCache["code"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getDesc = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["desc"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["desc"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["desc"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardResult.prototype.setDesc = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["desc"];
	else
		this.mObj["desc"] = _value_value0;

	if(value) {
		this.mValueCache["desc"] = value;
	} else {
		delete this.mValueCache["desc"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getMaxBalanceForCharge = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["maxBalanceForCharge"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["maxBalanceForCharge"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["maxBalanceForCharge"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardResult.prototype.setMaxBalanceForCharge = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["maxBalanceForCharge"];
	else
		this.mObj["maxBalanceForCharge"] = _value_value0;

	if(value) {
		this.mValueCache["maxBalanceForCharge"] = value;
	} else {
		delete this.mValueCache["maxBalanceForCharge"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getMessage = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["message"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["message"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["message"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardResult.prototype.setMessage = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["message"];
	else
		this.mObj["message"] = _value_value0;

	if(value) {
		this.mValueCache["message"] = value;
	} else {
		delete this.mValueCache["message"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getNewAccount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["newAccount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["newAccount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["newAccount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardResult.prototype.setNewAccount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["newAccount"];
	else
		this.mObj["newAccount"] = _value_value0;

	if(value) {
		this.mValueCache["newAccount"] = value;
	} else {
		delete this.mValueCache["newAccount"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getSimpleDesc = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["simpleDesc"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["simpleDesc"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["simpleDesc"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeCardResult.prototype.setSimpleDesc = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["simpleDesc"];
	else
		this.mObj["simpleDesc"] = _value_value0;

	if(value) {
		this.mValueCache["simpleDesc"] = value;
	} else {
		delete this.mValueCache["simpleDesc"];
	}
	return this;
};

rpc.ChargeCardResult.prototype.getType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["type"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["type"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["type"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeCardResult.prototype.setType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["type"];
	else
		this.mObj["type"] = _value_value0;

	if(value) {
		this.mValueCache["type"] = value;
	} else {
		delete this.mValueCache["type"];
	}
	return this;
};

rpc.ChargeCardResult.FIELD_SIMPLEDESC="simpleDesc";
rpc.ChargeCardResult.FIELD_SIMPLEDESC_CONFUSION="simpleDesc";
rpc.ChargeCardResult.FIELD_DESC="desc";
rpc.ChargeCardResult.FIELD_DESC_CONFUSION="desc";
rpc.ChargeCardResult.FIELD_BATCHBACKCONTENT="batchBackContent";
rpc.ChargeCardResult.FIELD_BATCHBACKCONTENT_CONFUSION="batchBackContent";
rpc.ChargeCardResult.FIELD_BATCHBACKCOUNT="batchBackCount";
rpc.ChargeCardResult.FIELD_BATCHBACKCOUNT_CONFUSION="batchBackCount";
rpc.ChargeCardResult.FIELD_BATCHID="batchId";
rpc.ChargeCardResult.FIELD_BATCHID_CONFUSION="batchId";
rpc.ChargeCardResult.FIELD_CODE="code";
rpc.ChargeCardResult.FIELD_CODE_CONFUSION="code";
rpc.ChargeCardResult.FIELD_TYPE="type";
rpc.ChargeCardResult.FIELD_TYPE_CONFUSION="type";
rpc.ChargeCardResult.FIELD_MAXBALANCEFORCHARGE="maxBalanceForCharge";
rpc.ChargeCardResult.FIELD_MAXBALANCEFORCHARGE_CONFUSION="maxBalanceForCharge";
rpc.ChargeCardResult.FIELD_AMOUNT="amount";
rpc.ChargeCardResult.FIELD_AMOUNT_CONFUSION="amount";
rpc.ChargeCardResult.FIELD_MESSAGE="message";
rpc.ChargeCardResult.FIELD_MESSAGE_CONFUSION="message";
rpc.ChargeCardResult.FIELD_BATCHBACKAMOUNT="batchBackAmount";
rpc.ChargeCardResult.FIELD_BATCHBACKAMOUNT_CONFUSION="batchBackAmount";
rpc.ChargeCardResult.FIELD_BATCHNAME="batchName";
rpc.ChargeCardResult.FIELD_BATCHNAME_CONFUSION="batchName";
rpc.ChargeCardResult.FIELD_NEWACCOUNT="newAccount";
rpc.ChargeCardResult.FIELD_NEWACCOUNT_CONFUSION="newAccount";

rpc.ChargeCardResult.checkAndInitial = function() {
    if(rpc.ChargeCardResult.mFieldToConfusionMap)
        return;
	
	rpc.ChargeCardResult.mHasConfusionField = false;
	rpc.ChargeCardResult.mFieldToConfusionMap = {
		"simpleDesc":"simpleDesc", 
		"desc":"desc", 
		"batchBackContent":"batchBackContent", 
		"batchBackCount":"batchBackCount", 
		"batchId":"batchId", 
		"code":"code", 
		"type":"type", 
		"maxBalanceForCharge":"maxBalanceForCharge", 
		"amount":"amount", 
		"message":"message", 
		"batchBackAmount":"batchBackAmount", 
		"batchName":"batchName", 
		"newAccount":"newAccount"
	};
	rpc.ChargeCardResult.mConfusionToFieldMap = {
		"simpleDesc":"simpleDesc", 
		"desc":"desc", 
		"batchBackContent":"batchBackContent", 
		"batchBackCount":"batchBackCount", 
		"batchId":"batchId", 
		"code":"code", 
		"type":"type", 
		"maxBalanceForCharge":"maxBalanceForCharge", 
		"amount":"amount", 
		"message":"message", 
		"batchBackAmount":"batchBackAmount", 
		"batchName":"batchName", 
		"newAccount":"newAccount"
	};

};

rpc.ChargeCardResult.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ChargeCardResult.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ChargeCardResult.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ChargeCardResult.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ChargeCardResult.toConfusionObject(this.mObj, clone);
};

rpc.ChargeCardResult.getConfusionName = function(name) {
    rpc.ChargeCardResult.checkAndInitial();
    var value = rpc.ChargeCardResult.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ChargeCardResult.getRawName = function(confusionName) {
    rpc.ChargeCardResult.checkAndInitial();
    var value = rpc.ChargeCardResult.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ChargeCardResult.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ChargeCardResult.checkAndInitial();
    if (!rpc.ChargeCardResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ChargeCardResult.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ChargeCardResult.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ChargeCardResult.checkAndInitial();
    if (!rpc.ChargeCardResult.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ChargeCardResult.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ChargeCardResult.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ChargeCardResult.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ChargeCardResult.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ChargeCardResult.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ChargeRecord = function() {};
rpc.ChargeRecord.prototype.getContent = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["content"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["content"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["content"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ChargeRecord.prototype.setContent = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["content"];
	else
		this.mObj["content"] = _value_value0;

	if(value) {
		this.mValueCache["content"] = value;
	} else {
		delete this.mValueCache["content"];
	}
	return this;
};

rpc.ChargeRecord.prototype.getDate = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["date"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["date"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["date"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeRecord.prototype.setDate = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["date"];
	else
		this.mObj["date"] = _value_value0;

	if(value) {
		this.mValueCache["date"] = value;
	} else {
		delete this.mValueCache["date"];
	}
	return this;
};

rpc.ChargeRecord.prototype.getHasBacked = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasBacked"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasBacked"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasBacked"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeRecord.prototype.setHasBacked = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasBacked"];
	else
		this.mObj["hasBacked"] = _value_value0;

	if(value) {
		this.mValueCache["hasBacked"] = value;
	} else {
		delete this.mValueCache["hasBacked"];
	}
	return this;
};

rpc.ChargeRecord.prototype.getNewAccount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["newAccount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["newAccount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["newAccount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeRecord.prototype.setNewAccount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["newAccount"];
	else
		this.mObj["newAccount"] = _value_value0;

	if(value) {
		this.mValueCache["newAccount"] = value;
	} else {
		delete this.mValueCache["newAccount"];
	}
	return this;
};

rpc.ChargeRecord.prototype.getType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["type"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["type"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["type"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ChargeRecord.prototype.setType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["type"];
	else
		this.mObj["type"] = _value_value0;

	if(value) {
		this.mValueCache["type"] = value;
	} else {
		delete this.mValueCache["type"];
	}
	return this;
};

rpc.ChargeRecord.FIELD_CONTENT="content";
rpc.ChargeRecord.FIELD_CONTENT_CONFUSION="content";
rpc.ChargeRecord.FIELD_HASBACKED="hasBacked";
rpc.ChargeRecord.FIELD_HASBACKED_CONFUSION="hasBacked";
rpc.ChargeRecord.FIELD_NEWACCOUNT="newAccount";
rpc.ChargeRecord.FIELD_NEWACCOUNT_CONFUSION="newAccount";
rpc.ChargeRecord.FIELD_TYPE="type";
rpc.ChargeRecord.FIELD_TYPE_CONFUSION="type";
rpc.ChargeRecord.FIELD_DATE="date";
rpc.ChargeRecord.FIELD_DATE_CONFUSION="date";

rpc.ChargeRecord.checkAndInitial = function() {
    if(rpc.ChargeRecord.mFieldToConfusionMap)
        return;
	
	rpc.ChargeRecord.mHasConfusionField = false;
	rpc.ChargeRecord.mFieldToConfusionMap = {
		"content":"content", 
		"hasBacked":"hasBacked", 
		"newAccount":"newAccount", 
		"type":"type", 
		"date":"date"
	};
	rpc.ChargeRecord.mConfusionToFieldMap = {
		"content":"content", 
		"hasBacked":"hasBacked", 
		"newAccount":"newAccount", 
		"type":"type", 
		"date":"date"
	};

};

rpc.ChargeRecord.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ChargeRecord.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ChargeRecord.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ChargeRecord.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ChargeRecord.toConfusionObject(this.mObj, clone);
};

rpc.ChargeRecord.getConfusionName = function(name) {
    rpc.ChargeRecord.checkAndInitial();
    var value = rpc.ChargeRecord.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ChargeRecord.getRawName = function(confusionName) {
    rpc.ChargeRecord.checkAndInitial();
    var value = rpc.ChargeRecord.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ChargeRecord.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ChargeRecord.checkAndInitial();
    if (!rpc.ChargeRecord.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ChargeRecord.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ChargeRecord.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ChargeRecord.checkAndInitial();
    if (!rpc.ChargeRecord.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ChargeRecord.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ChargeRecord.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ChargeRecord.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ChargeRecord.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ChargeRecord.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.DealWait = function() {};
rpc.DealWait.prototype.getDealId = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dealId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dealId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dealId"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealWait.prototype.setDealId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dealId"];
	else
		this.mObj["dealId"] = _value_value0;

	if(value) {
		this.mValueCache["dealId"] = value;
	} else {
		delete this.mValueCache["dealId"];
	}
	return this;
};

rpc.DealWait.prototype.getDeliveryTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deliveryTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deliveryTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deliveryTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.DealWait.prototype.setDeliveryTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deliveryTime"];
	else
		this.mObj["deliveryTime"] = _value_value0;

	if(value) {
		this.mValueCache["deliveryTime"] = value;
	} else {
		delete this.mValueCache["deliveryTime"];
	}
	return this;
};

rpc.DealWait.FIELD_DELIVERYTIME="deliveryTime";
rpc.DealWait.FIELD_DELIVERYTIME_CONFUSION="deliveryTime";
rpc.DealWait.FIELD_DEALID="dealId";
rpc.DealWait.FIELD_DEALID_CONFUSION="dealId";

rpc.DealWait.checkAndInitial = function() {
    if(rpc.DealWait.mFieldToConfusionMap)
        return;
	
	rpc.DealWait.mHasConfusionField = false;
	rpc.DealWait.mFieldToConfusionMap = {
		"deliveryTime":"deliveryTime", 
		"dealId":"dealId"
	};
	rpc.DealWait.mConfusionToFieldMap = {
		"deliveryTime":"deliveryTime", 
		"dealId":"dealId"
	};

};

rpc.DealWait.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.DealWait.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.DealWait.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.DealWait.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.DealWait.toConfusionObject(this.mObj, clone);
};

rpc.DealWait.getConfusionName = function(name) {
    rpc.DealWait.checkAndInitial();
    var value = rpc.DealWait.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.DealWait.getRawName = function(confusionName) {
    rpc.DealWait.checkAndInitial();
    var value = rpc.DealWait.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.DealWait.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.DealWait.checkAndInitial();
    if (!rpc.DealWait.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.DealWait.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.DealWait.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.DealWait.checkAndInitial();
    if (!rpc.DealWait.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.DealWait.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.DealWait.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.DealWait.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.DealWait.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.DealWait.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Product = function() {};
rpc.Product.prototype.getBarCode = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["barCode"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["barCode"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["barCode"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setBarCode = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["barCode"];
	else
		this.mObj["barCode"] = _value_value0;

	if(value) {
		this.mValueCache["barCode"] = value;
	} else {
		delete this.mValueCache["barCode"];
	}
	return this;
};

rpc.Product.prototype.getCanPartialReturn = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["canPartialReturn"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["canPartialReturn"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["canPartialReturn"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setCanPartialReturn = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["canPartialReturn"];
	else
		this.mObj["canPartialReturn"] = _value_value0;

	if(value) {
		this.mValueCache["canPartialReturn"] = value;
	} else {
		delete this.mValueCache["canPartialReturn"];
	}
	return this;
};

rpc.Product.prototype.getCategoryId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["categoryId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["categoryId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["categoryId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setCategoryId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["categoryId"];
	else
		this.mObj["categoryId"] = _value_value0;

	if(value) {
		this.mValueCache["categoryId"] = value;
	} else {
		delete this.mValueCache["categoryId"];
	}
	return this;
};

rpc.Product.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.Product.prototype.getDescription = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["description"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["description"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["description"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setDescription = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["description"];
	else
		this.mObj["description"] = _value_value0;

	if(value) {
		this.mValueCache["description"] = value;
	} else {
		delete this.mValueCache["description"];
	}
	return this;
};

rpc.Product.prototype.getDprice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["dprice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["dprice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["dprice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setDprice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["dprice"];
	else
		this.mObj["dprice"] = _value_value0;

	if(value) {
		this.mValueCache["dprice"] = value;
	} else {
		delete this.mValueCache["dprice"];
	}
	return this;
};

rpc.Product.prototype.getIsTop = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isTop"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isTop"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isTop"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setIsTop = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isTop"];
	else
		this.mObj["isTop"] = _value_value0;

	if(value) {
		this.mValueCache["isTop"] = value;
	} else {
		delete this.mValueCache["isTop"];
	}
	return this;
};

rpc.Product.prototype.getLimitType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["limitType"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["limitType"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["limitType"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setLimitType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["limitType"];
	else
		this.mObj["limitType"] = _value_value0;

	if(value) {
		this.mValueCache["limitType"] = value;
	} else {
		delete this.mValueCache["limitType"];
	}
	return this;
};

rpc.Product.prototype.getLimitcount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["limitcount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["limitcount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["limitcount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setLimitcount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["limitcount"];
	else
		this.mObj["limitcount"] = _value_value0;

	if(value) {
		this.mValueCache["limitcount"] = value;
	} else {
		delete this.mValueCache["limitcount"];
	}
	return this;
};

rpc.Product.prototype.getNames = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["names"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["names"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["names"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setNames = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["names"];
	else
		this.mObj["names"] = _value_value0;

	if(value) {
		this.mValueCache["names"] = value;
	} else {
		delete this.mValueCache["names"];
	}
	return this;
};

rpc.Product.prototype.getPicture = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["picture"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["picture"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["picture"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setPicture = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["picture"];
	else
		this.mObj["picture"] = _value_value0;

	if(value) {
		this.mValueCache["picture"] = value;
	} else {
		delete this.mValueCache["picture"];
	}
	return this;
};

rpc.Product.prototype.getPid = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["pid"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setPid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["pid"];
	else
		this.mObj["pid"] = _value_value0;

	if(value) {
		this.mValueCache["pid"] = value;
	} else {
		delete this.mValueCache["pid"];
	}
	return this;
};

rpc.Product.prototype.getPprice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["pprice"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["pprice"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["pprice"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setPprice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["pprice"];
	else
		this.mObj["pprice"] = _value_value0;

	if(value) {
		this.mValueCache["pprice"] = value;
	} else {
		delete this.mValueCache["pprice"];
	}
	return this;
};

rpc.Product.prototype.getPrice = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["price"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["price"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["price"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setPrice = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["price"];
	else
		this.mObj["price"] = _value_value0;

	if(value) {
		this.mValueCache["price"] = value;
	} else {
		delete this.mValueCache["price"];
	}
	return this;
};

rpc.Product.prototype.getProductLimitcount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productLimitcount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productLimitcount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["productLimitcount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setProductLimitcount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["productLimitcount"];
	else
		this.mObj["productLimitcount"] = _value_value0;

	if(value) {
		this.mValueCache["productLimitcount"] = value;
	} else {
		delete this.mValueCache["productLimitcount"];
	}
	return this;
};

rpc.Product.prototype.getRank = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["rank"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["rank"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["rank"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setRank = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["rank"];
	else
		this.mObj["rank"] = _value_value0;

	if(value) {
		this.mValueCache["rank"] = value;
	} else {
		delete this.mValueCache["rank"];
	}
	return this;
};

rpc.Product.prototype.getShopId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setShopId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopId"];
	else
		this.mObj["shopId"] = _value_value0;

	if(value) {
		this.mValueCache["shopId"] = value;
	} else {
		delete this.mValueCache["shopId"];
	}
	return this;
};

rpc.Product.prototype.getSkuId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["skuId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["skuId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["skuId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setSkuId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["skuId"];
	else
		this.mObj["skuId"] = _value_value0;

	if(value) {
		this.mValueCache["skuId"] = value;
	} else {
		delete this.mValueCache["skuId"];
	}
	return this;
};

rpc.Product.prototype.getSoldCount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["soldCount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["soldCount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["soldCount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setSoldCount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["soldCount"];
	else
		this.mObj["soldCount"] = _value_value0;

	if(value) {
		this.mValueCache["soldCount"] = value;
	} else {
		delete this.mValueCache["soldCount"];
	}
	return this;
};

rpc.Product.prototype.getStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["status"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["status"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["status"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["status"];
	else
		this.mObj["status"] = _value_value0;

	if(value) {
		this.mValueCache["status"] = value;
	} else {
		delete this.mValueCache["status"];
	}
	return this;
};

rpc.Product.prototype.getTopTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["topTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["topTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["topTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setTopTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["topTime"];
	else
		this.mObj["topTime"] = _value_value0;

	if(value) {
		this.mValueCache["topTime"] = value;
	} else {
		delete this.mValueCache["topTime"];
	}
	return this;
};

rpc.Product.prototype.getUnit = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["unit"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["unit"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["unit"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Product.prototype.setUnit = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["unit"];
	else
		this.mObj["unit"] = _value_value0;

	if(value) {
		this.mValueCache["unit"] = value;
	} else {
		delete this.mValueCache["unit"];
	}
	return this;
};

rpc.Product.prototype.getUpdated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["updated"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["updated"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["updated"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Product.prototype.setUpdated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["updated"];
	else
		this.mObj["updated"] = _value_value0;

	if(value) {
		this.mValueCache["updated"] = value;
	} else {
		delete this.mValueCache["updated"];
	}
	return this;
};

rpc.Product.FIELD_LIMITTYPE="limitType";
rpc.Product.FIELD_LIMITTYPE_CONFUSION="limitType";
rpc.Product.FIELD_STATUS="status";
rpc.Product.FIELD_STATUS_CONFUSION="status";
rpc.Product.FIELD_PPRICE="pprice";
rpc.Product.FIELD_PPRICE_CONFUSION="pprice";
rpc.Product.FIELD_CATEGORYID="categoryId";
rpc.Product.FIELD_CATEGORYID_CONFUSION="categoryId";
rpc.Product.FIELD_PID="pid";
rpc.Product.FIELD_PID_CONFUSION="pid";
rpc.Product.FIELD_PRODUCTLIMITCOUNT="productLimitcount";
rpc.Product.FIELD_PRODUCTLIMITCOUNT_CONFUSION="productLimitcount";
rpc.Product.FIELD_LIMITCOUNT="limitcount";
rpc.Product.FIELD_LIMITCOUNT_CONFUSION="limitcount";
rpc.Product.FIELD_PICTURE="picture";
rpc.Product.FIELD_PICTURE_CONFUSION="picture";
rpc.Product.FIELD_UNIT="unit";
rpc.Product.FIELD_UNIT_CONFUSION="unit";
rpc.Product.FIELD_RANK="rank";
rpc.Product.FIELD_RANK_CONFUSION="rank";
rpc.Product.FIELD_PRICE="price";
rpc.Product.FIELD_PRICE_CONFUSION="price";
rpc.Product.FIELD_UPDATED="updated";
rpc.Product.FIELD_UPDATED_CONFUSION="updated";
rpc.Product.FIELD_CREATED="created";
rpc.Product.FIELD_CREATED_CONFUSION="created";
rpc.Product.FIELD_SHOPID="shopId";
rpc.Product.FIELD_SHOPID_CONFUSION="shopId";
rpc.Product.FIELD_DESCRIPTION="description";
rpc.Product.FIELD_DESCRIPTION_CONFUSION="description";
rpc.Product.FIELD_NAMES="names";
rpc.Product.FIELD_NAMES_CONFUSION="names";
rpc.Product.FIELD_SKUID="skuId";
rpc.Product.FIELD_SKUID_CONFUSION="skuId";
rpc.Product.FIELD_BARCODE="barCode";
rpc.Product.FIELD_BARCODE_CONFUSION="barCode";
rpc.Product.FIELD_CANPARTIALRETURN="canPartialReturn";
rpc.Product.FIELD_CANPARTIALRETURN_CONFUSION="canPartialReturn";
rpc.Product.FIELD_DPRICE="dprice";
rpc.Product.FIELD_DPRICE_CONFUSION="dprice";
rpc.Product.FIELD_ISTOP="isTop";
rpc.Product.FIELD_ISTOP_CONFUSION="isTop";
rpc.Product.FIELD_TOPTIME="topTime";
rpc.Product.FIELD_TOPTIME_CONFUSION="topTime";
rpc.Product.FIELD_SOLDCOUNT="soldCount";
rpc.Product.FIELD_SOLDCOUNT_CONFUSION="soldCount";

rpc.Product.checkAndInitial = function() {
    if(rpc.Product.mFieldToConfusionMap)
        return;
	
	rpc.Product.mHasConfusionField = false;
	rpc.Product.mFieldToConfusionMap = {
		"limitType":"limitType", 
		"status":"status", 
		"pprice":"pprice", 
		"categoryId":"categoryId", 
		"pid":"pid", 
		"productLimitcount":"productLimitcount", 
		"limitcount":"limitcount", 
		"picture":"picture", 
		"unit":"unit", 
		"rank":"rank", 
		"price":"price", 
		"updated":"updated", 
		"created":"created", 
		"shopId":"shopId", 
		"description":"description", 
		"names":"names", 
		"skuId":"skuId", 
		"barCode":"barCode", 
		"canPartialReturn":"canPartialReturn", 
		"dprice":"dprice", 
		"isTop":"isTop", 
		"topTime":"topTime", 
		"soldCount":"soldCount"
	};
	rpc.Product.mConfusionToFieldMap = {
		"limitType":"limitType", 
		"status":"status", 
		"pprice":"pprice", 
		"categoryId":"categoryId", 
		"pid":"pid", 
		"productLimitcount":"productLimitcount", 
		"limitcount":"limitcount", 
		"picture":"picture", 
		"unit":"unit", 
		"rank":"rank", 
		"price":"price", 
		"updated":"updated", 
		"created":"created", 
		"shopId":"shopId", 
		"description":"description", 
		"names":"names", 
		"skuId":"skuId", 
		"barCode":"barCode", 
		"canPartialReturn":"canPartialReturn", 
		"dprice":"dprice", 
		"isTop":"isTop", 
		"topTime":"topTime", 
		"soldCount":"soldCount"
	};

};

rpc.Product.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Product.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Product.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Product.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Product.toConfusionObject(this.mObj, clone);
};

rpc.Product.getConfusionName = function(name) {
    rpc.Product.checkAndInitial();
    var value = rpc.Product.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Product.getRawName = function(confusionName) {
    rpc.Product.checkAndInitial();
    var value = rpc.Product.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Product.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Product.checkAndInitial();
    if (!rpc.Product.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Product.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Product.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Product.checkAndInitial();
    if (!rpc.Product.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Product.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Product.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Product.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Product.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Product.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ProductCategory = function() {};
rpc.ProductCategory.prototype.getCid = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["cid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["cid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["cid"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategory.prototype.setCid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["cid"];
	else
		this.mObj["cid"] = _value_value0;

	if(value) {
		this.mValueCache["cid"] = value;
	} else {
		delete this.mValueCache["cid"];
	}
	return this;
};

rpc.ProductCategory.prototype.getHasMore = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hasMore"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hasMore"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["hasMore"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ProductCategory.prototype.setHasMore = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["hasMore"];
	else
		this.mObj["hasMore"] = _value_value0;

	if(value) {
		this.mValueCache["hasMore"] = value;
	} else {
		delete this.mValueCache["hasMore"];
	}
	return this;
};

rpc.ProductCategory.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategory.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.ProductCategory.prototype.getOrder = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["order"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["order"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["order"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ProductCategory.prototype.setOrder = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["order"];
	else
		this.mObj["order"] = _value_value0;

	if(value) {
		this.mValueCache["order"] = value;
	} else {
		delete this.mValueCache["order"];
	}
	return this;
};

rpc.ProductCategory.prototype.getProductCount = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productCount"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productCount"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["productCount"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ProductCategory.prototype.setProductCount = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["productCount"];
	else
		this.mObj["productCount"] = _value_value0;

	if(value) {
		this.mValueCache["productCount"] = value;
	} else {
		delete this.mValueCache["productCount"];
	}
	return this;
};

rpc.ProductCategory.prototype.getProducts = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["products"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["products"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Product], false);
	
	if(objRet) {
		this.mValueCache["products"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategory.prototype.setProducts = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["products"];
	else
		this.mObj["products"] = _value_value0;

	if(value) {
		this.mValueCache["products"] = value;
	} else {
		delete this.mValueCache["products"];
	}
	return this;
};

rpc.ProductCategory.prototype.getShopId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategory.prototype.setShopId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopId"];
	else
		this.mObj["shopId"] = _value_value0;

	if(value) {
		this.mValueCache["shopId"] = value;
	} else {
		delete this.mValueCache["shopId"];
	}
	return this;
};

rpc.ProductCategory.prototype.getSubcategories = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["subcategories"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["subcategories"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.ProductCategory], false);
	
	if(objRet) {
		this.mValueCache["subcategories"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategory.prototype.setSubcategories = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["subcategories"];
	else
		this.mObj["subcategories"] = _value_value0;

	if(value) {
		this.mValueCache["subcategories"] = value;
	} else {
		delete this.mValueCache["subcategories"];
	}
	return this;
};

rpc.ProductCategory.prototype.getType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["type"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["type"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["type"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ProductCategory.prototype.setType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["type"];
	else
		this.mObj["type"] = _value_value0;

	if(value) {
		this.mValueCache["type"] = value;
	} else {
		delete this.mValueCache["type"];
	}
	return this;
};

rpc.ProductCategory.prototype.getVImage = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["vImage"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["vImage"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["vImage"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategory.prototype.setVImage = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["vImage"];
	else
		this.mObj["vImage"] = _value_value0;

	if(value) {
		this.mValueCache["vImage"] = value;
	} else {
		delete this.mValueCache["vImage"];
	}
	return this;
};

rpc.ProductCategory.prototype.getXImage = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["xImage"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["xImage"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["xImage"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategory.prototype.setXImage = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["xImage"];
	else
		this.mObj["xImage"] = _value_value0;

	if(value) {
		this.mValueCache["xImage"] = value;
	} else {
		delete this.mValueCache["xImage"];
	}
	return this;
};

rpc.ProductCategory.FIELD_HASMORE="hasMore";
rpc.ProductCategory.FIELD_HASMORE_CONFUSION="hasMore";
rpc.ProductCategory.FIELD_PRODUCTCOUNT="productCount";
rpc.ProductCategory.FIELD_PRODUCTCOUNT_CONFUSION="productCount";
rpc.ProductCategory.FIELD_ORDER="order";
rpc.ProductCategory.FIELD_ORDER_CONFUSION="order";
rpc.ProductCategory.FIELD_SHOPID="shopId";
rpc.ProductCategory.FIELD_SHOPID_CONFUSION="shopId";
rpc.ProductCategory.FIELD_NAME="name";
rpc.ProductCategory.FIELD_NAME_CONFUSION="name";
rpc.ProductCategory.FIELD_XIMAGE="xImage";
rpc.ProductCategory.FIELD_XIMAGE_CONFUSION="xImage";
rpc.ProductCategory.FIELD_SUBCATEGORIES="subcategories";
rpc.ProductCategory.FIELD_SUBCATEGORIES_CONFUSION="subcategories";
rpc.ProductCategory.FIELD_TYPE="type";
rpc.ProductCategory.FIELD_TYPE_CONFUSION="type";
rpc.ProductCategory.FIELD_VIMAGE="vImage";
rpc.ProductCategory.FIELD_VIMAGE_CONFUSION="vImage";
rpc.ProductCategory.FIELD_PRODUCTS="products";
rpc.ProductCategory.FIELD_PRODUCTS_CONFUSION="products";
rpc.ProductCategory.FIELD_CID="cid";
rpc.ProductCategory.FIELD_CID_CONFUSION="cid";

rpc.ProductCategory.checkAndInitial = function() {
    if(rpc.ProductCategory.mFieldToConfusionMap)
        return;
	
	rpc.ProductCategory.mHasConfusionField = false;
	rpc.ProductCategory.mFieldToConfusionMap = {
		"hasMore":"hasMore", 
		"productCount":"productCount", 
		"order":"order", 
		"shopId":"shopId", 
		"name":"name", 
		"xImage":"xImage", 
		"subcategories":"subcategories", 
		"type":"type", 
		"vImage":"vImage", 
		"products":"products", 
		"cid":"cid"
	};
	rpc.ProductCategory.mConfusionToFieldMap = {
		"hasMore":"hasMore", 
		"productCount":"productCount", 
		"order":"order", 
		"shopId":"shopId", 
		"name":"name", 
		"xImage":"xImage", 
		"subcategories":"subcategories", 
		"type":"type", 
		"vImage":"vImage", 
		"products":"products", 
		"cid":"cid"
	};

};

rpc.ProductCategory.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ProductCategory.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ProductCategory.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ProductCategory.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ProductCategory.toConfusionObject(this.mObj, clone);
};

rpc.ProductCategory.getConfusionName = function(name) {
    rpc.ProductCategory.checkAndInitial();
    var value = rpc.ProductCategory.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ProductCategory.getRawName = function(confusionName) {
    rpc.ProductCategory.checkAndInitial();
    var value = rpc.ProductCategory.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ProductCategory.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ProductCategory.checkAndInitial();
    if (!rpc.ProductCategory.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ProductCategory.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ProductCategory.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ProductCategory.checkAndInitial();
    if (!rpc.ProductCategory.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ProductCategory.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ProductCategory.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ProductCategory.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ProductCategory.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ProductCategory.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ProductCategoryLogo = function() {};
rpc.ProductCategoryLogo.prototype.getCategoryId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["categoryId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["categoryId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["categoryId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategoryLogo.prototype.setCategoryId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["categoryId"];
	else
		this.mObj["categoryId"] = _value_value0;

	if(value) {
		this.mValueCache["categoryId"] = value;
	} else {
		delete this.mValueCache["categoryId"];
	}
	return this;
};

rpc.ProductCategoryLogo.prototype.getLogo = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["logo"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["logo"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["logo"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategoryLogo.prototype.setLogo = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["logo"];
	else
		this.mObj["logo"] = _value_value0;

	if(value) {
		this.mValueCache["logo"] = value;
	} else {
		delete this.mValueCache["logo"];
	}
	return this;
};

rpc.ProductCategoryLogo.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ProductCategoryLogo.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.ProductCategoryLogo.prototype.getType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["type"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["type"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["type"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ProductCategoryLogo.prototype.setType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["type"];
	else
		this.mObj["type"] = _value_value0;

	if(value) {
		this.mValueCache["type"] = value;
	} else {
		delete this.mValueCache["type"];
	}
	return this;
};

rpc.ProductCategoryLogo.FIELD_LOGO="logo";
rpc.ProductCategoryLogo.FIELD_LOGO_CONFUSION="logo";
rpc.ProductCategoryLogo.FIELD_NAME="name";
rpc.ProductCategoryLogo.FIELD_NAME_CONFUSION="name";
rpc.ProductCategoryLogo.FIELD_CATEGORYID="categoryId";
rpc.ProductCategoryLogo.FIELD_CATEGORYID_CONFUSION="categoryId";
rpc.ProductCategoryLogo.FIELD_TYPE="type";
rpc.ProductCategoryLogo.FIELD_TYPE_CONFUSION="type";

rpc.ProductCategoryLogo.checkAndInitial = function() {
    if(rpc.ProductCategoryLogo.mFieldToConfusionMap)
        return;
	
	rpc.ProductCategoryLogo.mHasConfusionField = false;
	rpc.ProductCategoryLogo.mFieldToConfusionMap = {
		"logo":"logo", 
		"name":"name", 
		"categoryId":"categoryId", 
		"type":"type"
	};
	rpc.ProductCategoryLogo.mConfusionToFieldMap = {
		"logo":"logo", 
		"name":"name", 
		"categoryId":"categoryId", 
		"type":"type"
	};

};

rpc.ProductCategoryLogo.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ProductCategoryLogo.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ProductCategoryLogo.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ProductCategoryLogo.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ProductCategoryLogo.toConfusionObject(this.mObj, clone);
};

rpc.ProductCategoryLogo.getConfusionName = function(name) {
    rpc.ProductCategoryLogo.checkAndInitial();
    var value = rpc.ProductCategoryLogo.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ProductCategoryLogo.getRawName = function(confusionName) {
    rpc.ProductCategoryLogo.checkAndInitial();
    var value = rpc.ProductCategoryLogo.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ProductCategoryLogo.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ProductCategoryLogo.checkAndInitial();
    if (!rpc.ProductCategoryLogo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ProductCategoryLogo.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ProductCategoryLogo.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ProductCategoryLogo.checkAndInitial();
    if (!rpc.ProductCategoryLogo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ProductCategoryLogo.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ProductCategoryLogo.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ProductCategoryLogo.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ProductCategoryLogo.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ProductCategoryLogo.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Shop = function() {};
rpc.Shop.prototype.getAddress = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["address"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["address"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["address"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setAddress = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["address"];
	else
		this.mObj["address"] = _value_value0;

	if(value) {
		this.mValueCache["address"] = value;
	} else {
		delete this.mValueCache["address"];
	}
	return this;
};

rpc.Shop.prototype.getAreaIds = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["areaIds"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["areaIds"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [Number], false);
	
	if(objRet) {
		this.mValueCache["areaIds"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setAreaIds = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["areaIds"];
	else
		this.mObj["areaIds"] = _value_value0;

	if(value) {
		this.mValueCache["areaIds"] = value;
	} else {
		delete this.mValueCache["areaIds"];
	}
	return this;
};

rpc.Shop.prototype.getBanners = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["banners"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["banners"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.BannerItem], false);
	
	if(objRet) {
		this.mValueCache["banners"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setBanners = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["banners"];
	else
		this.mObj["banners"] = _value_value0;

	if(value) {
		this.mValueCache["banners"] = value;
	} else {
		delete this.mValueCache["banners"];
	}
	return this;
};

rpc.Shop.prototype.getCloseTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["closeTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["closeTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["closeTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shop.prototype.setCloseTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["closeTime"];
	else
		this.mObj["closeTime"] = _value_value0;

	if(value) {
		this.mValueCache["closeTime"] = value;
	} else {
		delete this.mValueCache["closeTime"];
	}
	return this;
};

rpc.Shop.prototype.getDesc = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["desc"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["desc"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["desc"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setDesc = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["desc"];
	else
		this.mObj["desc"] = _value_value0;

	if(value) {
		this.mValueCache["desc"] = value;
	} else {
		delete this.mValueCache["desc"];
	}
	return this;
};

rpc.Shop.prototype.getIcon = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["icon"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["icon"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["icon"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setIcon = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["icon"];
	else
		this.mObj["icon"] = _value_value0;

	if(value) {
		this.mValueCache["icon"] = value;
	} else {
		delete this.mValueCache["icon"];
	}
	return this;
};

rpc.Shop.prototype.getLat = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["lat"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["lat"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["lat"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shop.prototype.setLat = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["lat"];
	else
		this.mObj["lat"] = _value_value0;

	if(value) {
		this.mValueCache["lat"] = value;
	} else {
		delete this.mValueCache["lat"];
	}
	return this;
};

rpc.Shop.prototype.getLng = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["lng"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["lng"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["lng"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shop.prototype.setLng = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["lng"];
	else
		this.mObj["lng"] = _value_value0;

	if(value) {
		this.mValueCache["lng"] = value;
	} else {
		delete this.mValueCache["lng"];
	}
	return this;
};

rpc.Shop.prototype.getLogo = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["logo"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["logo"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["logo"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setLogo = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["logo"];
	else
		this.mObj["logo"] = _value_value0;

	if(value) {
		this.mValueCache["logo"] = value;
	} else {
		delete this.mValueCache["logo"];
	}
	return this;
};

rpc.Shop.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.Shop.prototype.getOpenTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["openTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["openTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["openTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shop.prototype.setOpenTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["openTime"];
	else
		this.mObj["openTime"] = _value_value0;

	if(value) {
		this.mValueCache["openTime"] = value;
	} else {
		delete this.mValueCache["openTime"];
	}
	return this;
};

rpc.Shop.prototype.getOrder = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["order"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["order"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["order"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shop.prototype.setOrder = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["order"];
	else
		this.mObj["order"] = _value_value0;

	if(value) {
		this.mValueCache["order"] = value;
	} else {
		delete this.mValueCache["order"];
	}
	return this;
};

rpc.Shop.prototype.getProductCategoryLogos = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["productCategoryLogos"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["productCategoryLogos"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.ProductCategoryLogo], false);
	
	if(objRet) {
		this.mValueCache["productCategoryLogos"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setProductCategoryLogos = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["productCategoryLogos"];
	else
		this.mObj["productCategoryLogos"] = _value_value0;

	if(value) {
		this.mValueCache["productCategoryLogos"] = value;
	} else {
		delete this.mValueCache["productCategoryLogos"];
	}
	return this;
};

rpc.Shop.prototype.getShopId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["shopId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shop.prototype.setShopId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["shopId"];
	else
		this.mObj["shopId"] = _value_value0;

	if(value) {
		this.mValueCache["shopId"] = value;
	} else {
		delete this.mValueCache["shopId"];
	}
	return this;
};

rpc.Shop.prototype.getShowType = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["showType"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["showType"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["showType"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shop.prototype.setShowType = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["showType"];
	else
		this.mObj["showType"] = _value_value0;

	if(value) {
		this.mValueCache["showType"] = value;
	} else {
		delete this.mValueCache["showType"];
	}
	return this;
};

rpc.Shop.prototype.getStatus = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["status"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["status"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["status"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shop.prototype.setStatus = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["status"];
	else
		this.mObj["status"] = _value_value0;

	if(value) {
		this.mValueCache["status"] = value;
	} else {
		delete this.mValueCache["status"];
	}
	return this;
};

rpc.Shop.FIELD_ICON="icon";
rpc.Shop.FIELD_ICON_CONFUSION="icon";
rpc.Shop.FIELD_LOGO="logo";
rpc.Shop.FIELD_LOGO_CONFUSION="logo";
rpc.Shop.FIELD_DESC="desc";
rpc.Shop.FIELD_DESC_CONFUSION="desc";
rpc.Shop.FIELD_STATUS="status";
rpc.Shop.FIELD_STATUS_CONFUSION="status";
rpc.Shop.FIELD_LNG="lng";
rpc.Shop.FIELD_LNG_CONFUSION="lng";
rpc.Shop.FIELD_OPENTIME="openTime";
rpc.Shop.FIELD_OPENTIME_CONFUSION="openTime";
rpc.Shop.FIELD_CLOSETIME="closeTime";
rpc.Shop.FIELD_CLOSETIME_CONFUSION="closeTime";
rpc.Shop.FIELD_ORDER="order";
rpc.Shop.FIELD_ORDER_CONFUSION="order";
rpc.Shop.FIELD_ADDRESS="address";
rpc.Shop.FIELD_ADDRESS_CONFUSION="address";
rpc.Shop.FIELD_SHOPID="shopId";
rpc.Shop.FIELD_SHOPID_CONFUSION="shopId";
rpc.Shop.FIELD_NAME="name";
rpc.Shop.FIELD_NAME_CONFUSION="name";
rpc.Shop.FIELD_PRODUCTCATEGORYLOGOS="productCategoryLogos";
rpc.Shop.FIELD_PRODUCTCATEGORYLOGOS_CONFUSION="productCategoryLogos";
rpc.Shop.FIELD_SHOWTYPE="showType";
rpc.Shop.FIELD_SHOWTYPE_CONFUSION="showType";
rpc.Shop.FIELD_AREAIDS="areaIds";
rpc.Shop.FIELD_AREAIDS_CONFUSION="areaIds";
rpc.Shop.FIELD_LAT="lat";
rpc.Shop.FIELD_LAT_CONFUSION="lat";
rpc.Shop.FIELD_BANNERS="banners";
rpc.Shop.FIELD_BANNERS_CONFUSION="banners";

rpc.Shop.checkAndInitial = function() {
    if(rpc.Shop.mFieldToConfusionMap)
        return;
	
	rpc.Shop.mHasConfusionField = false;
	rpc.Shop.mFieldToConfusionMap = {
		"icon":"icon", 
		"logo":"logo", 
		"desc":"desc", 
		"status":"status", 
		"lng":"lng", 
		"openTime":"openTime", 
		"closeTime":"closeTime", 
		"order":"order", 
		"address":"address", 
		"shopId":"shopId", 
		"name":"name", 
		"productCategoryLogos":"productCategoryLogos", 
		"showType":"showType", 
		"areaIds":"areaIds", 
		"lat":"lat", 
		"banners":"banners"
	};
	rpc.Shop.mConfusionToFieldMap = {
		"icon":"icon", 
		"logo":"logo", 
		"desc":"desc", 
		"status":"status", 
		"lng":"lng", 
		"openTime":"openTime", 
		"closeTime":"closeTime", 
		"order":"order", 
		"address":"address", 
		"shopId":"shopId", 
		"name":"name", 
		"productCategoryLogos":"productCategoryLogos", 
		"showType":"showType", 
		"areaIds":"areaIds", 
		"lat":"lat", 
		"banners":"banners"
	};

};

rpc.Shop.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Shop.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Shop.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Shop.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Shop.toConfusionObject(this.mObj, clone);
};

rpc.Shop.getConfusionName = function(name) {
    rpc.Shop.checkAndInitial();
    var value = rpc.Shop.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Shop.getRawName = function(confusionName) {
    rpc.Shop.checkAndInitial();
    var value = rpc.Shop.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Shop.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Shop.checkAndInitial();
    if (!rpc.Shop.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Shop.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Shop.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Shop.checkAndInitial();
    if (!rpc.Shop.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Shop.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Shop.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Shop.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Shop.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Shop.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopBanner = function() {};
rpc.ShopBanner.prototype.getId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopBanner.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.ShopBanner.prototype.getUrl = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["url"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["url"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["url"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopBanner.prototype.setUrl = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["url"];
	else
		this.mObj["url"] = _value_value0;

	if(value) {
		this.mValueCache["url"] = value;
	} else {
		delete this.mValueCache["url"];
	}
	return this;
};

rpc.ShopBanner.FIELD_ID="id";
rpc.ShopBanner.FIELD_ID_CONFUSION="id";
rpc.ShopBanner.FIELD_URL="url";
rpc.ShopBanner.FIELD_URL_CONFUSION="url";

rpc.ShopBanner.checkAndInitial = function() {
    if(rpc.ShopBanner.mFieldToConfusionMap)
        return;
	
	rpc.ShopBanner.mHasConfusionField = false;
	rpc.ShopBanner.mFieldToConfusionMap = {
		"id":"id", 
		"url":"url"
	};
	rpc.ShopBanner.mConfusionToFieldMap = {
		"id":"id", 
		"url":"url"
	};

};

rpc.ShopBanner.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopBanner.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopBanner.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ShopBanner.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopBanner.toConfusionObject(this.mObj, clone);
};

rpc.ShopBanner.getConfusionName = function(name) {
    rpc.ShopBanner.checkAndInitial();
    var value = rpc.ShopBanner.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ShopBanner.getRawName = function(confusionName) {
    rpc.ShopBanner.checkAndInitial();
    var value = rpc.ShopBanner.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ShopBanner.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopBanner.checkAndInitial();
    if (!rpc.ShopBanner.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopBanner.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopBanner.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopBanner.checkAndInitial();
    if (!rpc.ShopBanner.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopBanner.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopBanner.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopBanner.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopBanner.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopBanner.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopGroup = function() {};
rpc.ShopGroup.prototype.getLogo = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["logo"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["logo"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["logo"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopGroup.prototype.setLogo = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["logo"];
	else
		this.mObj["logo"] = _value_value0;

	if(value) {
		this.mValueCache["logo"] = value;
	} else {
		delete this.mValueCache["logo"];
	}
	return this;
};

rpc.ShopGroup.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopGroup.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.ShopGroup.prototype.getShop = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shop"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shop"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Shop], false);
	
	if(objRet) {
		this.mValueCache["shop"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopGroup.prototype.setShop = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["shop"];
	else
		this.mObj["shop"] = _value_value0;

	if(value) {
		this.mValueCache["shop"] = value;
	} else {
		delete this.mValueCache["shop"];
	}
	return this;
};

rpc.ShopGroup.FIELD_SHOP="shop";
rpc.ShopGroup.FIELD_SHOP_CONFUSION="shop";
rpc.ShopGroup.FIELD_LOGO="logo";
rpc.ShopGroup.FIELD_LOGO_CONFUSION="logo";
rpc.ShopGroup.FIELD_NAME="name";
rpc.ShopGroup.FIELD_NAME_CONFUSION="name";

rpc.ShopGroup.checkAndInitial = function() {
    if(rpc.ShopGroup.mFieldToConfusionMap)
        return;
	
	rpc.ShopGroup.mHasConfusionField = false;
	rpc.ShopGroup.mFieldToConfusionMap = {
		"shop":"shop", 
		"logo":"logo", 
		"name":"name"
	};
	rpc.ShopGroup.mConfusionToFieldMap = {
		"shop":"shop", 
		"logo":"logo", 
		"name":"name"
	};

};

rpc.ShopGroup.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopGroup.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopGroup.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ShopGroup.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopGroup.toConfusionObject(this.mObj, clone);
};

rpc.ShopGroup.getConfusionName = function(name) {
    rpc.ShopGroup.checkAndInitial();
    var value = rpc.ShopGroup.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ShopGroup.getRawName = function(confusionName) {
    rpc.ShopGroup.checkAndInitial();
    var value = rpc.ShopGroup.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ShopGroup.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopGroup.checkAndInitial();
    if (!rpc.ShopGroup.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopGroup.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopGroup.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopGroup.checkAndInitial();
    if (!rpc.ShopGroup.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopGroup.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopGroup.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopGroup.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopGroup.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopGroup.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopHomepage = function() {};
rpc.ShopHomepage.prototype.getHierarchy = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["hierarchy"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["hierarchy"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.ProductCategory], false);
	
	if(objRet) {
		this.mValueCache["hierarchy"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopHomepage.prototype.setHierarchy = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["hierarchy"];
	else
		this.mObj["hierarchy"] = _value_value0;

	if(value) {
		this.mValueCache["hierarchy"] = value;
	} else {
		delete this.mValueCache["hierarchy"];
	}
	return this;
};

rpc.ShopHomepage.prototype.getRootCategories = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["rootCategories"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["rootCategories"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.ProductCategory], false);
	
	if(objRet) {
		this.mValueCache["rootCategories"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopHomepage.prototype.setRootCategories = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["rootCategories"];
	else
		this.mObj["rootCategories"] = _value_value0;

	if(value) {
		this.mValueCache["rootCategories"] = value;
	} else {
		delete this.mValueCache["rootCategories"];
	}
	return this;
};

rpc.ShopHomepage.FIELD_ROOTCATEGORIES="rootCategories";
rpc.ShopHomepage.FIELD_ROOTCATEGORIES_CONFUSION="rootCategories";
rpc.ShopHomepage.FIELD_HIERARCHY="hierarchy";
rpc.ShopHomepage.FIELD_HIERARCHY_CONFUSION="hierarchy";

rpc.ShopHomepage.checkAndInitial = function() {
    if(rpc.ShopHomepage.mFieldToConfusionMap)
        return;
	
	rpc.ShopHomepage.mHasConfusionField = false;
	rpc.ShopHomepage.mFieldToConfusionMap = {
		"rootCategories":"rootCategories", 
		"hierarchy":"hierarchy"
	};
	rpc.ShopHomepage.mConfusionToFieldMap = {
		"rootCategories":"rootCategories", 
		"hierarchy":"hierarchy"
	};

};

rpc.ShopHomepage.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopHomepage.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopHomepage.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ShopHomepage.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopHomepage.toConfusionObject(this.mObj, clone);
};

rpc.ShopHomepage.getConfusionName = function(name) {
    rpc.ShopHomepage.checkAndInitial();
    var value = rpc.ShopHomepage.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ShopHomepage.getRawName = function(confusionName) {
    rpc.ShopHomepage.checkAndInitial();
    var value = rpc.ShopHomepage.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ShopHomepage.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopHomepage.checkAndInitial();
    if (!rpc.ShopHomepage.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopHomepage.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopHomepage.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopHomepage.checkAndInitial();
    if (!rpc.ShopHomepage.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopHomepage.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopHomepage.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopHomepage.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopHomepage.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopHomepage.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopInfo = function() {};
rpc.ShopInfo.prototype.getProducts = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["products"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["products"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Product], false);
	
	if(objRet) {
		this.mValueCache["products"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopInfo.prototype.setProducts = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["products"];
	else
		this.mObj["products"] = _value_value0;

	if(value) {
		this.mValueCache["products"] = value;
	} else {
		delete this.mValueCache["products"];
	}
	return this;
};

rpc.ShopInfo.prototype.getShop = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shop"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shop"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.Shop, null, false);
	
	if(objRet) {
		this.mValueCache["shop"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopInfo.prototype.setShop = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["shop"];
	else
		this.mObj["shop"] = _value_value0;

	if(value) {
		this.mValueCache["shop"] = value;
	} else {
		delete this.mValueCache["shop"];
	}
	return this;
};

rpc.ShopInfo.FIELD_SHOP="shop";
rpc.ShopInfo.FIELD_SHOP_CONFUSION="shop";
rpc.ShopInfo.FIELD_PRODUCTS="products";
rpc.ShopInfo.FIELD_PRODUCTS_CONFUSION="products";

rpc.ShopInfo.checkAndInitial = function() {
    if(rpc.ShopInfo.mFieldToConfusionMap)
        return;
	
	rpc.ShopInfo.mHasConfusionField = false;
	rpc.ShopInfo.mFieldToConfusionMap = {
		"shop":"shop", 
		"products":"products"
	};
	rpc.ShopInfo.mConfusionToFieldMap = {
		"shop":"shop", 
		"products":"products"
	};

};

rpc.ShopInfo.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopInfo.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopInfo.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ShopInfo.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopInfo.toConfusionObject(this.mObj, clone);
};

rpc.ShopInfo.getConfusionName = function(name) {
    rpc.ShopInfo.checkAndInitial();
    var value = rpc.ShopInfo.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ShopInfo.getRawName = function(confusionName) {
    rpc.ShopInfo.checkAndInitial();
    var value = rpc.ShopInfo.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ShopInfo.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopInfo.checkAndInitial();
    if (!rpc.ShopInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopInfo.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopInfo.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopInfo.checkAndInitial();
    if (!rpc.ShopInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopInfo.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopInfo.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopInfo.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopInfo.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopInfo.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Shopper = function() {};
rpc.Shopper.prototype.getAreaNames = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["areaNames"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["areaNames"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["areaNames"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shopper.prototype.setAreaNames = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["areaNames"];
	else
		this.mObj["areaNames"] = _value_value0;

	if(value) {
		this.mValueCache["areaNames"] = value;
	} else {
		delete this.mValueCache["areaNames"];
	}
	return this;
};

rpc.Shopper.prototype.getAvatar = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["avatar"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["avatar"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["avatar"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shopper.prototype.setAvatar = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["avatar"];
	else
		this.mObj["avatar"] = _value_value0;

	if(value) {
		this.mValueCache["avatar"] = value;
	} else {
		delete this.mValueCache["avatar"];
	}
	return this;
};

rpc.Shopper.prototype.getBads = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["bads"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["bads"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["bads"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setBads = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["bads"];
	else
		this.mObj["bads"] = _value_value0;

	if(value) {
		this.mValueCache["bads"] = value;
	} else {
		delete this.mValueCache["bads"];
	}
	return this;
};

rpc.Shopper.prototype.getDeals = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deals"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deals"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deals"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setDeals = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deals"];
	else
		this.mObj["deals"] = _value_value0;

	if(value) {
		this.mValueCache["deals"] = value;
	} else {
		delete this.mValueCache["deals"];
	}
	return this;
};

rpc.Shopper.prototype.getGoods = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["goods"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["goods"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["goods"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setGoods = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["goods"];
	else
		this.mObj["goods"] = _value_value0;

	if(value) {
		this.mValueCache["goods"] = value;
	} else {
		delete this.mValueCache["goods"];
	}
	return this;
};

rpc.Shopper.prototype.getId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shopper.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.Shopper.prototype.getIdcard = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["idcard"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["idcard"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["idcard"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shopper.prototype.setIdcard = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["idcard"];
	else
		this.mObj["idcard"] = _value_value0;

	if(value) {
		this.mValueCache["idcard"] = value;
	} else {
		delete this.mValueCache["idcard"];
	}
	return this;
};

rpc.Shopper.prototype.getIsActive = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["isActive"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["isActive"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["isActive"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setIsActive = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["isActive"];
	else
		this.mObj["isActive"] = _value_value0;

	if(value) {
		this.mValueCache["isActive"] = value;
	} else {
		delete this.mValueCache["isActive"];
	}
	return this;
};

rpc.Shopper.prototype.getMediums = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["mediums"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["mediums"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["mediums"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setMediums = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["mediums"];
	else
		this.mObj["mediums"] = _value_value0;

	if(value) {
		this.mValueCache["mediums"] = value;
	} else {
		delete this.mValueCache["mediums"];
	}
	return this;
};

rpc.Shopper.prototype.getName = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["name"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["name"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["name"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shopper.prototype.setName = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["name"];
	else
		this.mObj["name"] = _value_value0;

	if(value) {
		this.mValueCache["name"] = value;
	} else {
		delete this.mValueCache["name"];
	}
	return this;
};

rpc.Shopper.prototype.getOfflineTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["offlineTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["offlineTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["offlineTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setOfflineTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["offlineTime"];
	else
		this.mObj["offlineTime"] = _value_value0;

	if(value) {
		this.mValueCache["offlineTime"] = value;
	} else {
		delete this.mValueCache["offlineTime"];
	}
	return this;
};

rpc.Shopper.prototype.getOnline = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["online"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["online"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["online"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setOnline = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["online"];
	else
		this.mObj["online"] = _value_value0;

	if(value) {
		this.mValueCache["online"] = value;
	} else {
		delete this.mValueCache["online"];
	}
	return this;
};

rpc.Shopper.prototype.getOnlineTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["onlineTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["onlineTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["onlineTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setOnlineTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["onlineTime"];
	else
		this.mObj["onlineTime"] = _value_value0;

	if(value) {
		this.mValueCache["onlineTime"] = value;
	} else {
		delete this.mValueCache["onlineTime"];
	}
	return this;
};

rpc.Shopper.prototype.getPhone = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["phone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["phone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["phone"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shopper.prototype.setPhone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["phone"];
	else
		this.mObj["phone"] = _value_value0;

	if(value) {
		this.mValueCache["phone"] = value;
	} else {
		delete this.mValueCache["phone"];
	}
	return this;
};

rpc.Shopper.prototype.getReturnDealNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["returnDealNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["returnDealNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["returnDealNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setReturnDealNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["returnDealNum"];
	else
		this.mObj["returnDealNum"] = _value_value0;

	if(value) {
		this.mValueCache["returnDealNum"] = value;
	} else {
		delete this.mValueCache["returnDealNum"];
	}
	return this;
};

rpc.Shopper.prototype.getShopNames = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shopNames"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shopNames"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [String], false);
	
	if(objRet) {
		this.mValueCache["shopNames"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shopper.prototype.setShopNames = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0;
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["shopNames"];
	else
		this.mObj["shopNames"] = _value_value0;

	if(value) {
		this.mValueCache["shopNames"] = value;
	} else {
		delete this.mValueCache["shopNames"];
	}
	return this;
};

rpc.Shopper.prototype.getTitle = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["title"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["title"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["title"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Shopper.prototype.setTitle = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["title"];
	else
		this.mObj["title"] = _value_value0;

	if(value) {
		this.mValueCache["title"] = value;
	} else {
		delete this.mValueCache["title"];
	}
	return this;
};

rpc.Shopper.prototype.getTodayReturnDealNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["todayReturnDealNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["todayReturnDealNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["todayReturnDealNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setTodayReturnDealNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["todayReturnDealNum"];
	else
		this.mObj["todayReturnDealNum"] = _value_value0;

	if(value) {
		this.mValueCache["todayReturnDealNum"] = value;
	} else {
		delete this.mValueCache["todayReturnDealNum"];
	}
	return this;
};

rpc.Shopper.prototype.getUid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Shopper.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.Shopper.FIELD_UID="uid";
rpc.Shopper.FIELD_UID_CONFUSION="uid";
rpc.Shopper.FIELD_PHONE="phone";
rpc.Shopper.FIELD_PHONE_CONFUSION="phone";
rpc.Shopper.FIELD_MEDIUMS="mediums";
rpc.Shopper.FIELD_MEDIUMS_CONFUSION="mediums";
rpc.Shopper.FIELD_AREANAMES="areaNames";
rpc.Shopper.FIELD_AREANAMES_CONFUSION="areaNames";
rpc.Shopper.FIELD_GOODS="goods";
rpc.Shopper.FIELD_GOODS_CONFUSION="goods";
rpc.Shopper.FIELD_TODAYRETURNDEALNUM="todayReturnDealNum";
rpc.Shopper.FIELD_TODAYRETURNDEALNUM_CONFUSION="todayReturnDealNum";
rpc.Shopper.FIELD_IDCARD="idcard";
rpc.Shopper.FIELD_IDCARD_CONFUSION="idcard";
rpc.Shopper.FIELD_AVATAR="avatar";
rpc.Shopper.FIELD_AVATAR_CONFUSION="avatar";
rpc.Shopper.FIELD_SHOPNAMES="shopNames";
rpc.Shopper.FIELD_SHOPNAMES_CONFUSION="shopNames";
rpc.Shopper.FIELD_DEALS="deals";
rpc.Shopper.FIELD_DEALS_CONFUSION="deals";
rpc.Shopper.FIELD_ONLINE="online";
rpc.Shopper.FIELD_ONLINE_CONFUSION="online";
rpc.Shopper.FIELD_ID="id";
rpc.Shopper.FIELD_ID_CONFUSION="id";
rpc.Shopper.FIELD_ISACTIVE="isActive";
rpc.Shopper.FIELD_ISACTIVE_CONFUSION="isActive";
rpc.Shopper.FIELD_TITLE="title";
rpc.Shopper.FIELD_TITLE_CONFUSION="title";
rpc.Shopper.FIELD_RETURNDEALNUM="returnDealNum";
rpc.Shopper.FIELD_RETURNDEALNUM_CONFUSION="returnDealNum";
rpc.Shopper.FIELD_ONLINETIME="onlineTime";
rpc.Shopper.FIELD_ONLINETIME_CONFUSION="onlineTime";
rpc.Shopper.FIELD_NAME="name";
rpc.Shopper.FIELD_NAME_CONFUSION="name";
rpc.Shopper.FIELD_OFFLINETIME="offlineTime";
rpc.Shopper.FIELD_OFFLINETIME_CONFUSION="offlineTime";
rpc.Shopper.FIELD_BADS="bads";
rpc.Shopper.FIELD_BADS_CONFUSION="bads";

rpc.Shopper.checkAndInitial = function() {
    if(rpc.Shopper.mFieldToConfusionMap)
        return;
	
	rpc.Shopper.mHasConfusionField = false;
	rpc.Shopper.mFieldToConfusionMap = {
		"uid":"uid", 
		"phone":"phone", 
		"mediums":"mediums", 
		"areaNames":"areaNames", 
		"goods":"goods", 
		"todayReturnDealNum":"todayReturnDealNum", 
		"idcard":"idcard", 
		"avatar":"avatar", 
		"shopNames":"shopNames", 
		"deals":"deals", 
		"online":"online", 
		"id":"id", 
		"isActive":"isActive", 
		"title":"title", 
		"returnDealNum":"returnDealNum", 
		"onlineTime":"onlineTime", 
		"name":"name", 
		"offlineTime":"offlineTime", 
		"bads":"bads"
	};
	rpc.Shopper.mConfusionToFieldMap = {
		"uid":"uid", 
		"phone":"phone", 
		"mediums":"mediums", 
		"areaNames":"areaNames", 
		"goods":"goods", 
		"todayReturnDealNum":"todayReturnDealNum", 
		"idcard":"idcard", 
		"avatar":"avatar", 
		"shopNames":"shopNames", 
		"deals":"deals", 
		"online":"online", 
		"id":"id", 
		"isActive":"isActive", 
		"title":"title", 
		"returnDealNum":"returnDealNum", 
		"onlineTime":"onlineTime", 
		"name":"name", 
		"offlineTime":"offlineTime", 
		"bads":"bads"
	};

};

rpc.Shopper.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Shopper.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Shopper.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Shopper.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Shopper.toConfusionObject(this.mObj, clone);
};

rpc.Shopper.getConfusionName = function(name) {
    rpc.Shopper.checkAndInitial();
    var value = rpc.Shopper.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Shopper.getRawName = function(confusionName) {
    rpc.Shopper.checkAndInitial();
    var value = rpc.Shopper.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Shopper.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Shopper.checkAndInitial();
    if (!rpc.Shopper.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Shopper.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Shopper.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Shopper.checkAndInitial();
    if (!rpc.Shopper.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Shopper.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Shopper.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Shopper.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Shopper.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Shopper.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopperShopInfo = function() {};
rpc.ShopperShopInfo.prototype.getOfflineProductNum = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["offlineProductNum"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["offlineProductNum"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["offlineProductNum"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopperShopInfo.prototype.setOfflineProductNum = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["offlineProductNum"];
	else
		this.mObj["offlineProductNum"] = _value_value0;

	if(value) {
		this.mValueCache["offlineProductNum"] = value;
	} else {
		delete this.mValueCache["offlineProductNum"];
	}
	return this;
};

rpc.ShopperShopInfo.prototype.getShops = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["shops"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["shops"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Array, [rpc.Shop], false);
	
	if(objRet) {
		this.mValueCache["shops"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopperShopInfo.prototype.setShops = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _arr_0 = (!value) ? null : [];
	if(value) {
		var _len_0 = value.length;
		for(var _i_0 = 0; _i_0 < _len_0; _i_0++) {
			var _l_0 = value[_i_0];
			var _value__l_02 = _l_0.getAsObject(false);
			_arr_0.push(_value__l_02);
		}
	}
	var _value_value0 = _arr_0;
	if(!_value_value0) 
		delete this.mObj["shops"];
	else
		this.mObj["shops"] = _value_value0;

	if(value) {
		this.mValueCache["shops"] = value;
	} else {
		delete this.mValueCache["shops"];
	}
	return this;
};

rpc.ShopperShopInfo.FIELD_SHOPS="shops";
rpc.ShopperShopInfo.FIELD_SHOPS_CONFUSION="shops";
rpc.ShopperShopInfo.FIELD_OFFLINEPRODUCTNUM="offlineProductNum";
rpc.ShopperShopInfo.FIELD_OFFLINEPRODUCTNUM_CONFUSION="offlineProductNum";

rpc.ShopperShopInfo.checkAndInitial = function() {
    if(rpc.ShopperShopInfo.mFieldToConfusionMap)
        return;
	
	rpc.ShopperShopInfo.mHasConfusionField = false;
	rpc.ShopperShopInfo.mFieldToConfusionMap = {
		"shops":"shops", 
		"offlineProductNum":"offlineProductNum"
	};
	rpc.ShopperShopInfo.mConfusionToFieldMap = {
		"shops":"shops", 
		"offlineProductNum":"offlineProductNum"
	};

};

rpc.ShopperShopInfo.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopperShopInfo.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopperShopInfo.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ShopperShopInfo.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopperShopInfo.toConfusionObject(this.mObj, clone);
};

rpc.ShopperShopInfo.getConfusionName = function(name) {
    rpc.ShopperShopInfo.checkAndInitial();
    var value = rpc.ShopperShopInfo.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ShopperShopInfo.getRawName = function(confusionName) {
    rpc.ShopperShopInfo.checkAndInitial();
    var value = rpc.ShopperShopInfo.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ShopperShopInfo.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopperShopInfo.checkAndInitial();
    if (!rpc.ShopperShopInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopperShopInfo.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopperShopInfo.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopperShopInfo.checkAndInitial();
    if (!rpc.ShopperShopInfo.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopperShopInfo.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopperShopInfo.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopperShopInfo.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopperShopInfo.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopperShopInfo.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.ShopperWorkTime = function() {};
rpc.ShopperWorkTime.prototype.getCreated = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["created"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["created"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["created"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopperWorkTime.prototype.setCreated = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["created"];
	else
		this.mObj["created"] = _value_value0;

	if(value) {
		this.mValueCache["created"] = value;
	} else {
		delete this.mValueCache["created"];
	}
	return this;
};

rpc.ShopperWorkTime.prototype.getDeals = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["deals"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["deals"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["deals"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopperWorkTime.prototype.setDeals = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["deals"];
	else
		this.mObj["deals"] = _value_value0;

	if(value) {
		this.mValueCache["deals"] = value;
	} else {
		delete this.mValueCache["deals"];
	}
	return this;
};

rpc.ShopperWorkTime.prototype.getId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["id"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["id"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["id"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.ShopperWorkTime.prototype.setId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["id"];
	else
		this.mObj["id"] = _value_value0;

	if(value) {
		this.mValueCache["id"] = value;
	} else {
		delete this.mValueCache["id"];
	}
	return this;
};

rpc.ShopperWorkTime.prototype.getOfflineTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["offlineTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["offlineTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["offlineTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopperWorkTime.prototype.setOfflineTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["offlineTime"];
	else
		this.mObj["offlineTime"] = _value_value0;

	if(value) {
		this.mValueCache["offlineTime"] = value;
	} else {
		delete this.mValueCache["offlineTime"];
	}
	return this;
};

rpc.ShopperWorkTime.prototype.getOnlineTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["onlineTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["onlineTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["onlineTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopperWorkTime.prototype.setOnlineTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["onlineTime"];
	else
		this.mObj["onlineTime"] = _value_value0;

	if(value) {
		this.mValueCache["onlineTime"] = value;
	} else {
		delete this.mValueCache["onlineTime"];
	}
	return this;
};

rpc.ShopperWorkTime.prototype.getUid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopperWorkTime.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.ShopperWorkTime.prototype.getWorkTime = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["workTime"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["workTime"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["workTime"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.ShopperWorkTime.prototype.setWorkTime = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["workTime"];
	else
		this.mObj["workTime"] = _value_value0;

	if(value) {
		this.mValueCache["workTime"] = value;
	} else {
		delete this.mValueCache["workTime"];
	}
	return this;
};

rpc.ShopperWorkTime.FIELD_UID="uid";
rpc.ShopperWorkTime.FIELD_UID_CONFUSION="uid";
rpc.ShopperWorkTime.FIELD_ID="id";
rpc.ShopperWorkTime.FIELD_ID_CONFUSION="id";
rpc.ShopperWorkTime.FIELD_ONLINETIME="onlineTime";
rpc.ShopperWorkTime.FIELD_ONLINETIME_CONFUSION="onlineTime";
rpc.ShopperWorkTime.FIELD_CREATED="created";
rpc.ShopperWorkTime.FIELD_CREATED_CONFUSION="created";
rpc.ShopperWorkTime.FIELD_WORKTIME="workTime";
rpc.ShopperWorkTime.FIELD_WORKTIME_CONFUSION="workTime";
rpc.ShopperWorkTime.FIELD_OFFLINETIME="offlineTime";
rpc.ShopperWorkTime.FIELD_OFFLINETIME_CONFUSION="offlineTime";
rpc.ShopperWorkTime.FIELD_DEALS="deals";
rpc.ShopperWorkTime.FIELD_DEALS_CONFUSION="deals";

rpc.ShopperWorkTime.checkAndInitial = function() {
    if(rpc.ShopperWorkTime.mFieldToConfusionMap)
        return;
	
	rpc.ShopperWorkTime.mHasConfusionField = false;
	rpc.ShopperWorkTime.mFieldToConfusionMap = {
		"uid":"uid", 
		"id":"id", 
		"onlineTime":"onlineTime", 
		"created":"created", 
		"workTime":"workTime", 
		"offlineTime":"offlineTime", 
		"deals":"deals"
	};
	rpc.ShopperWorkTime.mConfusionToFieldMap = {
		"uid":"uid", 
		"id":"id", 
		"onlineTime":"onlineTime", 
		"created":"created", 
		"workTime":"workTime", 
		"offlineTime":"offlineTime", 
		"deals":"deals"
	};

};

rpc.ShopperWorkTime.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.ShopperWorkTime.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.ShopperWorkTime.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.ShopperWorkTime.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.ShopperWorkTime.toConfusionObject(this.mObj, clone);
};

rpc.ShopperWorkTime.getConfusionName = function(name) {
    rpc.ShopperWorkTime.checkAndInitial();
    var value = rpc.ShopperWorkTime.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.ShopperWorkTime.getRawName = function(confusionName) {
    rpc.ShopperWorkTime.checkAndInitial();
    var value = rpc.ShopperWorkTime.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.ShopperWorkTime.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.ShopperWorkTime.checkAndInitial();
    if (!rpc.ShopperWorkTime.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.ShopperWorkTime.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.ShopperWorkTime.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.ShopperWorkTime.checkAndInitial();
    if (!rpc.ShopperWorkTime.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.ShopperWorkTime.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.ShopperWorkTime.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.ShopperWorkTime.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.ShopperWorkTime.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.ShopperWorkTime.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.Address = function() {};
rpc.Address.prototype.getAddrdesc = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["addrdesc"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["addrdesc"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["addrdesc"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Address.prototype.setAddrdesc = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["addrdesc"];
	else
		this.mObj["addrdesc"] = _value_value0;

	if(value) {
		this.mValueCache["addrdesc"] = value;
	} else {
		delete this.mValueCache["addrdesc"];
	}
	return this;
};

rpc.Address.prototype.getAddressDetail = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["addressDetail"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["addressDetail"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["addressDetail"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Address.prototype.setAddressDetail = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["addressDetail"];
	else
		this.mObj["addressDetail"] = _value_value0;

	if(value) {
		this.mValueCache["addressDetail"] = value;
	} else {
		delete this.mValueCache["addressDetail"];
	}
	return this;
};

rpc.Address.prototype.getAddressId = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["addressId"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["addressId"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["addressId"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Address.prototype.setAddressId = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["addressId"];
	else
		this.mObj["addressId"] = _value_value0;

	if(value) {
		this.mValueCache["addressId"] = value;
	} else {
		delete this.mValueCache["addressId"];
	}
	return this;
};

rpc.Address.prototype.getCity = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["city"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["city"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.City, null, false);
	
	if(objRet) {
		this.mValueCache["city"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Address.prototype.setCity = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["city"];
	else
		this.mObj["city"] = _value_value0;

	if(value) {
		this.mValueCache["city"] = value;
	} else {
		delete this.mValueCache["city"];
	}
	return this;
};

rpc.Address.prototype.getContacts = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["contacts"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["contacts"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["contacts"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Address.prototype.setContacts = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["contacts"];
	else
		this.mObj["contacts"] = _value_value0;

	if(value) {
		this.mValueCache["contacts"] = value;
	} else {
		delete this.mValueCache["contacts"];
	}
	return this;
};

rpc.Address.prototype.getDistrict = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["district"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["district"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, rpc.ResidentalDistrict, null, false);
	
	if(objRet) {
		this.mValueCache["district"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Address.prototype.setDistrict = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value.getAsObject(false);
	if(!_value_value0) 
		delete this.mObj["district"];
	else
		this.mObj["district"] = _value_value0;

	if(value) {
		this.mValueCache["district"] = value;
	} else {
		delete this.mValueCache["district"];
	}
	return this;
};

rpc.Address.prototype.getPhone = function() {
	if(!this.mObj) {
		return null;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["phone"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["phone"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, String, null, false);
	
	if(objRet) {
		this.mValueCache["phone"] = objRet;
		return objRet;
	}
	
	return null;
};

rpc.Address.prototype.setPhone = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = value;
	if(!_value_value0) 
		delete this.mObj["phone"];
	else
		this.mObj["phone"] = _value_value0;

	if(value) {
		this.mValueCache["phone"] = value;
	} else {
		delete this.mValueCache["phone"];
	}
	return this;
};

rpc.Address.prototype.getUid = function() {
	if(!this.mObj) {
		return 0;
	}
	
	this.mValueCache = this.mValueCache || {};
	var cacheValue = this.mValueCache["uid"];
	if(cacheValue) return cacheValue;
	
	var value = this.mObj["uid"];
	
	var objRet = ConvertUtils.jsonObjectToObject(value, Number, null, false);
	
	if(objRet) {
		this.mValueCache["uid"] = objRet;
		return objRet;
	}
	
	return 0;
};

rpc.Address.prototype.setUid = function(value) {
    this.checkAndCreate();
	this.mValueCache = this.mValueCache || {};
	this.mObj = this.mObj || {};
	
	var _value_value0 = (value);
	if(!_value_value0) 
		delete this.mObj["uid"];
	else
		this.mObj["uid"] = _value_value0;

	if(value) {
		this.mValueCache["uid"] = value;
	} else {
		delete this.mValueCache["uid"];
	}
	return this;
};

rpc.Address.FIELD_UID="uid";
rpc.Address.FIELD_UID_CONFUSION="uid";
rpc.Address.FIELD_ADDRDESC="addrdesc";
rpc.Address.FIELD_ADDRDESC_CONFUSION="addrdesc";
rpc.Address.FIELD_PHONE="phone";
rpc.Address.FIELD_PHONE_CONFUSION="phone";
rpc.Address.FIELD_DISTRICT="district";
rpc.Address.FIELD_DISTRICT_CONFUSION="district";
rpc.Address.FIELD_ADDRESSDETAIL="addressDetail";
rpc.Address.FIELD_ADDRESSDETAIL_CONFUSION="addressDetail";
rpc.Address.FIELD_ADDRESSID="addressId";
rpc.Address.FIELD_ADDRESSID_CONFUSION="addressId";
rpc.Address.FIELD_CONTACTS="contacts";
rpc.Address.FIELD_CONTACTS_CONFUSION="contacts";
rpc.Address.FIELD_CITY="city";
rpc.Address.FIELD_CITY_CONFUSION="city";

rpc.Address.checkAndInitial = function() {
    if(rpc.Address.mFieldToConfusionMap)
        return;
	
	rpc.Address.mHasConfusionField = false;
	rpc.Address.mFieldToConfusionMap = {
		"uid":"uid", 
		"addrdesc":"addrdesc", 
		"phone":"phone", 
		"district":"district", 
		"addressDetail":"addressDetail", 
		"addressId":"addressId", 
		"contacts":"contacts", 
		"city":"city"
	};
	rpc.Address.mConfusionToFieldMap = {
		"uid":"uid", 
		"addrdesc":"addrdesc", 
		"phone":"phone", 
		"district":"district", 
		"addressDetail":"addressDetail", 
		"addressId":"addressId", 
		"contacts":"contacts", 
		"city":"city"
	};

};

rpc.Address.prototype.toString = function() {
	if(this.mObj) {
		return JSON.stringify(this.mObj);
	}
	return "{}";
};

rpc.Address.prototype.getRpcJSONObject  = function() {
	return this.mObj;
};

rpc.Address.prototype.checkAndCreate = function() {
    if (!this.mObj) {
        this.mObj = {};
    }
};


rpc.Address.prototype.getAsObject  = function(confusionMode, clone) {
    if(this.mObj == null) {
		this.checkAndCreate();
        return clone ? objectClone(this.mObj) : this.mObj;
    }
    if(!confusionMode)
        return clone ? objectClone(this.mObj) : this.mObj;
    return rpc.Address.toConfusionObject(this.mObj, clone);
};

rpc.Address.getConfusionName = function(name) {
    rpc.Address.checkAndInitial();
    var value = rpc.Address.mFieldToConfusionMap[name];
    if(value)
        return value;
    return null;
};
    
rpc.Address.getRawName = function(confusionName) {
    rpc.Address.checkAndInitial();
    var value = rpc.Address.mConfusionToFieldMap[confusionName];
    if(value)
        return value;
    return null;
};

rpc.Address.toConfusionObject  = function(from, clone) {
    if(!from)
        return from;

	rpc.Address.checkAndInitial();
    if (!rpc.Address.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for (var key in from) {
        var rawKey = rpc.Address.getConfusionName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
      
    return ret;
};
    
rpc.Address.confusionToRawObject  = function(from, clone) {
    if(!from)
        return from;
    
    rpc.Address.checkAndInitial();
    if (!rpc.Address.mHasConfusionField) {
        return clone ? objectClone(from) : from;
    }
        
    var ret = {};
    for(var key in from) {
        var rawKey = rpc.Address.getRawName(key);
        if(!rawKey)
            rawKey = key;
        ret[rawKey] = from[key];
    }
    return ret;
};

rpc.Address.prototype.clearCache = function() {
	if(this.mValueCache) {
		this.mValueCache = {};
	}
};

rpc.Address.prototype.convertFrom  = function(from, confusionMode, clone) {
    if (!from)
        return false;
    
    if (from.prototype && from.prototype.convertFrom) {
        this.clearCache();
        this.mObj = from.getAsObject(false, clone);
        return true;
    }
    
    if (from instanceof String && from[0] == '{') {
        this.clearCache();
        var jsonObj = JSON.parse(from);
        if(confusionMode) {
            this.mObj = rpc.Address.confusionToRawObject(jsonObj, clone);
        } else {
            this.mObj = clone ? objectClone(jsonObj) : jsonObj;
        }
        return true;
    }
    
    this.clearCache();
    if(confusionMode) {
         this.mObj = rpc.Address.confusionToRawObject(from, clone);
    } else {
         this.mObj = clone ? objectClone(from) : from;
    }
    return true;
};

rpc.IAuthAction = {};

rpc.IAuthAction.changePassword = function(oldPassword, newPassword, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IAuthAction.changePassword param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_oldPassword1 = oldPassword;
		if(!_value_oldPassword1) 
			delete _jsonDict["oldPassword"];
		else
			_jsonDict["oldPassword"] = _value_oldPassword1;
	}

	{
		var _value_newPassword1 = newPassword;
		if(!_value_newPassword1) 
			delete _jsonDict["newPassword"];
		else
			_jsonDict["newPassword"] = _value_newPassword1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/changePassword";
	return RpcCall.doInvoke(_url, "changePassword", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.modifyAccname = function(accname, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IAuthAction.modifyAccname param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_accname1 = accname;
		if(!_value_accname1) 
			delete _jsonDict["accname"];
		else
			_jsonDict["accname"] = _value_accname1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/modifyAccname";
	return RpcCall.doInvoke(_url, "modifyAccname", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.sendAuthCode = function(phone, verifyType, deviceID, success, fail){
	if(arguments.length < 5) alert("com.paitao.generic.rpc.protocol.IAuthAction.sendAuthCode param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_phone1 = phone;
		if(!_value_phone1) 
			delete _jsonDict["phone"];
		else
			_jsonDict["phone"] = _value_phone1;
	}

	{
		var _value_verifyType1 = (verifyType);
		if(!_value_verifyType1) 
			delete _jsonDict["verifyType"];
		else
			_jsonDict["verifyType"] = _value_verifyType1;
	}

	{
		var _value_deviceID1 = deviceID;
		if(!_value_deviceID1) 
			delete _jsonDict["deviceID"];
		else
			_jsonDict["deviceID"] = _value_deviceID1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/sendAuthCode";
	return RpcCall.doInvoke(_url, "sendAuthCode", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.setAvatar = function(avatar, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IAuthAction.setAvatar param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_avatar1 = avatar;
		if(!_value_avatar1) 
			delete _jsonDict["avatar"];
		else
			_jsonDict["avatar"] = _value_avatar1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/setAvatar";
	return RpcCall.doInvoke(_url, "setAvatar", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.setName = function(name, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IAuthAction.setName param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_name1 = name;
		if(!_value_name1) 
			delete _jsonDict["name"];
		else
			_jsonDict["name"] = _value_name1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/setName";
	return RpcCall.doInvoke(_url, "setName", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.setNameAndPassword = function(name, password, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IAuthAction.setNameAndPassword param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_name1 = name;
		if(!_value_name1) 
			delete _jsonDict["name"];
		else
			_jsonDict["name"] = _value_name1;
	}

	{
		var _value_password1 = password;
		if(!_value_password1) 
			delete _jsonDict["password"];
		else
			_jsonDict["password"] = _value_password1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/setNameAndPassword";
	return RpcCall.doInvoke(_url, "setNameAndPassword", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.signinWithAuthcode = function(phone, authcode, deviceType, deviceID, success, fail){
	if(arguments.length < 6) alert("com.paitao.generic.rpc.protocol.IAuthAction.signinWithAuthcode param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.UserAuthInfo, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_phone1 = phone;
		if(!_value_phone1) 
			delete _jsonDict["phone"];
		else
			_jsonDict["phone"] = _value_phone1;
	}

	{
		var _value_authcode1 = authcode;
		if(!_value_authcode1) 
			delete _jsonDict["authcode"];
		else
			_jsonDict["authcode"] = _value_authcode1;
	}

	{
		var _value_deviceType1 = (deviceType);
		if(!_value_deviceType1) 
			delete _jsonDict["deviceType"];
		else
			_jsonDict["deviceType"] = _value_deviceType1;
	}

	{
		var _value_deviceID1 = deviceID;
		if(!_value_deviceID1) 
			delete _jsonDict["deviceID"];
		else
			_jsonDict["deviceID"] = _value_deviceID1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/signinWithAuthcode";
	return RpcCall.doInvoke(_url, "signinWithAuthcode", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.signinWithPassword = function(userName, password, deviceType, deviceID, success, fail){
	if(arguments.length < 6) alert("com.paitao.generic.rpc.protocol.IAuthAction.signinWithPassword param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.UserAuthInfo, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_userName1 = userName;
		if(!_value_userName1) 
			delete _jsonDict["userName"];
		else
			_jsonDict["userName"] = _value_userName1;
	}

	{
		var _value_password1 = password;
		if(!_value_password1) 
			delete _jsonDict["password"];
		else
			_jsonDict["password"] = _value_password1;
	}

	{
		var _value_deviceType1 = (deviceType);
		if(!_value_deviceType1) 
			delete _jsonDict["deviceType"];
		else
			_jsonDict["deviceType"] = _value_deviceType1;
	}

	{
		var _value_deviceID1 = deviceID;
		if(!_value_deviceID1) 
			delete _jsonDict["deviceID"];
		else
			_jsonDict["deviceID"] = _value_deviceID1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/signinWithPassword";
	return RpcCall.doInvoke(_url, "signinWithPassword", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.signout = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.generic.rpc.protocol.IAuthAction.signout param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/signout";
	return RpcCall.doInvoke(_url, "signout", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.signupDetailWithAuthcode = function(phone, authcode, name, pwd, deviceType, deviceID, success, fail){
	if(arguments.length < 8) alert("com.paitao.generic.rpc.protocol.IAuthAction.signupDetailWithAuthcode param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.UserAuthInfo, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_phone1 = phone;
		if(!_value_phone1) 
			delete _jsonDict["phone"];
		else
			_jsonDict["phone"] = _value_phone1;
	}

	{
		var _value_authcode1 = authcode;
		if(!_value_authcode1) 
			delete _jsonDict["authcode"];
		else
			_jsonDict["authcode"] = _value_authcode1;
	}

	{
		var _value_name1 = name;
		if(!_value_name1) 
			delete _jsonDict["name"];
		else
			_jsonDict["name"] = _value_name1;
	}

	{
		var _value_pwd1 = pwd;
		if(!_value_pwd1) 
			delete _jsonDict["pwd"];
		else
			_jsonDict["pwd"] = _value_pwd1;
	}

	{
		var _value_deviceType1 = (deviceType);
		if(!_value_deviceType1) 
			delete _jsonDict["deviceType"];
		else
			_jsonDict["deviceType"] = _value_deviceType1;
	}

	{
		var _value_deviceID1 = deviceID;
		if(!_value_deviceID1) 
			delete _jsonDict["deviceID"];
		else
			_jsonDict["deviceID"] = _value_deviceID1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/signupDetailWithAuthcode";
	return RpcCall.doInvoke(_url, "signupDetailWithAuthcode", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAuthAction.signupWithAuthcode = function(phone, authcode, deviceType, deviceID, success, fail){
	if(arguments.length < 6) alert("com.paitao.generic.rpc.protocol.IAuthAction.signupWithAuthcode param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.UserAuthInfo, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_phone1 = phone;
		if(!_value_phone1) 
			delete _jsonDict["phone"];
		else
			_jsonDict["phone"] = _value_phone1;
	}

	{
		var _value_authcode1 = authcode;
		if(!_value_authcode1) 
			delete _jsonDict["authcode"];
		else
			_jsonDict["authcode"] = _value_authcode1;
	}

	{
		var _value_deviceType1 = (deviceType);
		if(!_value_deviceType1) 
			delete _jsonDict["deviceType"];
		else
			_jsonDict["deviceType"] = _value_deviceType1;
	}

	{
		var _value_deviceID1 = deviceID;
		if(!_value_deviceID1) 
			delete _jsonDict["deviceID"];
		else
			_jsonDict["deviceID"] = _value_deviceID1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Auth") + "IAuthAction/1/signupWithAuthcode";
	return RpcCall.doInvoke(_url, "signupWithAuthcode", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.ILogReport = {};

rpc.ILogReport.log = function(data, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.ILogReport.log param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.LogReportRespose, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	_uploadDict["da"] =data;
	var _url = rpc.ServerConfig.getUrlPrefix("Log") + "ILogReport/1/log";
	return RpcCall.doInvoke(_url, "log", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService = {};
rpc.IMService.SEND_FAILED=1;
rpc.IMService.VOICE_TYPE_AAC=1;
rpc.IMService.VOICE_TYPE_AMR=2;

rpc.IMService.clearBadge = function(token, time, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IMService.clearBadge param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_token1 = token;
		if(!_value_token1) 
			delete _jsonDict["t"];
		else
			_jsonDict["t"] = _value_token1;
	}

	{
		var _value_time1 = (time);
		if(!_value_time1) 
			delete _jsonDict["m"];
		else
			_jsonDict["m"] = _value_time1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/clearBadge";
	return RpcCall.doInvoke(_url, "clearBadge", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService.enterBackgroudMode = function(bg, token, time, success, fail){
	if(arguments.length < 5) alert("com.paitao.generic.rpc.protocol.IMService.enterBackgroudMode param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_bg1 = (bg);
		if(!_value_bg1) 
			delete _jsonDict["b"];
		else
			_jsonDict["b"] = _value_bg1;
	}

	{
		var _value_token1 = token;
		if(!_value_token1) 
			delete _jsonDict["t"];
		else
			_jsonDict["t"] = _value_token1;
	}

	{
		var _value_time1 = (time);
		if(!_value_time1) 
			delete _jsonDict["m"];
		else
			_jsonDict["m"] = _value_time1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/enterBackgroudMode";
	return RpcCall.doInvoke(_url, "enterBackgroudMode", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService.loadOfflineMsg = function(fromTime, limit, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IMService.loadOfflineMsg param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.RpcMessageBase], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_fromTime1 = (fromTime);
		if(!_value_fromTime1) 
			delete _jsonDict["f"];
		else
			_jsonDict["f"] = _value_fromTime1;
	}

	{
		var _value_limit1 = (limit);
		if(!_value_limit1) 
			delete _jsonDict["l"];
		else
			_jsonDict["l"] = _value_limit1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/loadOfflineMsg";
	return RpcCall.doInvoke(_url, "loadOfflineMsg", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService.sendMessage = function(msg, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IMService.sendMessage param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.SendMsgRespose, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_msg1 = msg.getAsObject(false);
		if(!_value_msg1) 
			delete _jsonDict["m"];
		else
			_jsonDict["m"] = _value_msg1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/sendMessage";
	return RpcCall.doInvoke(_url, "sendMessage", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService.sendMessageReceived = function(msgId, toId, endMsgIds, bg, success, fail){
	if(arguments.length < 6) alert("com.paitao.generic.rpc.protocol.IMService.sendMessageReceived param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [String], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _arr_1 = (!msgId) ? null : [];
		if(msgId) {
			var _len_1 = msgId.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = msgId[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_msgId1 = _arr_1;
		if(!_value_msgId1) 
			delete _jsonDict["m"];
		else
			_jsonDict["m"] = _value_msgId1;
	}

	{
		var _arr_1 = (!toId) ? null : [];
		if(toId) {
			var _len_1 = toId.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = toId[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_toId1 = _arr_1;
		if(!_value_toId1) 
			delete _jsonDict["t"];
		else
			_jsonDict["t"] = _value_toId1;
	}

	{
		var _arr_1 = (!endMsgIds) ? null : [];
		if(endMsgIds) {
			var _len_1 = endMsgIds.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = endMsgIds[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_endMsgIds1 = _arr_1;
		if(!_value_endMsgIds1) 
			delete _jsonDict["em"];
		else
			_jsonDict["em"] = _value_endMsgIds1;
	}

	{
		var _value_bg1 = (bg);
		if(!_value_bg1) 
			delete _jsonDict["b"];
		else
			_jsonDict["b"] = _value_bg1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/sendMessageReceived";
	return RpcCall.doInvoke(_url, "sendMessageReceived", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService.sendPicMessage = function(msg, data, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IMService.sendPicMessage param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.SendMsgRespose, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_msg1 = msg.getAsObject(false);
		if(!_value_msg1) 
			delete _jsonDict["m"];
		else
			_jsonDict["m"] = _value_msg1;
	}

	_uploadDict["pd"] =data;
	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/sendPicMessage";
	return RpcCall.doInvoke(_url, "sendPicMessage", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService.sendTextMessage = function(msg, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IMService.sendTextMessage param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.SendMsgRespose, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_msg1 = msg.getAsObject(false);
		if(!_value_msg1) 
			delete _jsonDict["m"];
		else
			_jsonDict["m"] = _value_msg1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/sendTextMessage";
	return RpcCall.doInvoke(_url, "sendTextMessage", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService.sendVoiceMessage = function(msg, data, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IMService.sendVoiceMessage param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.SendMsgRespose, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_msg1 = msg.getAsObject(false);
		if(!_value_msg1) 
			delete _jsonDict["m"];
		else
			_jsonDict["m"] = _value_msg1;
	}

	_uploadDict["vd"] =data;
	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/sendVoiceMessage";
	return RpcCall.doInvoke(_url, "sendVoiceMessage", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IMService.updateDeviceToken = function(token, bg, time, identify, sandboxMode, success, fail){
	if(arguments.length < 7) alert("com.paitao.generic.rpc.protocol.IMService.updateDeviceToken param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_token1 = token;
		if(!_value_token1) 
			delete _jsonDict["t"];
		else
			_jsonDict["t"] = _value_token1;
	}

	{
		var _value_bg1 = (bg);
		if(!_value_bg1) 
			delete _jsonDict["b"];
		else
			_jsonDict["b"] = _value_bg1;
	}

	{
		var _value_time1 = (time);
		if(!_value_time1) 
			delete _jsonDict["m"];
		else
			_jsonDict["m"] = _value_time1;
	}

	{
		var _value_identify1 = identify;
		if(!_value_identify1) 
			delete _jsonDict["i"];
		else
			_jsonDict["i"] = _value_identify1;
	}

	{
		var _value_sandboxMode1 = (sandboxMode);
		if(!_value_sandboxMode1) 
			delete _jsonDict["s"];
		else
			_jsonDict["s"] = _value_sandboxMode1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("IM") + "IMService/1/updateDeviceToken";
	return RpcCall.doInvoke(_url, "updateDeviceToken", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IResourceAction = {};

rpc.IResourceAction.uploadImage = function(data, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IResourceAction.uploadImage param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, String, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	_uploadDict["data"] =data;
	var _url = rpc.ServerConfig.getUrlPrefix("Resource") + "IResourceAction/1/uploadImage";
	return RpcCall.doInvoke(_url, "uploadImage", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IResourceAction.uploadVoice = function(data, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IResourceAction.uploadVoice param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, String, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	_uploadDict["data"] =data;
	var _url = rpc.ServerConfig.getUrlPrefix("Resource") + "IResourceAction/1/uploadVoice";
	return RpcCall.doInvoke(_url, "uploadVoice", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IServerConfig = {};

rpc.IServerConfig.getServerInfo = function(version, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IServerConfig.getServerInfo param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.ServerConfigs, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_version1 = version;
		if(!_value_version1) 
			delete _jsonDict["v"];
		else
			_jsonDict["v"] = _value_version1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("config") + "IServerConfig/0/getServerInfo";
	return RpcCall.doInvoke(_url, "getServerInfo", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IVersionCheck = {};

rpc.IVersionCheck.check = function(version, clientType, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IVersionCheck.check param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.VersionInfo, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_version1 = version;
		if(!_value_version1) 
			delete _jsonDict["v"];
		else
			_jsonDict["v"] = _value_version1;
	}

	{
		var _value_clientType1 = clientType;
		if(!_value_clientType1) 
			delete _jsonDict["clientType"];
		else
			_jsonDict["clientType"] = _value_clientType1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IVersionCheck/1/check";
	return RpcCall.doInvoke(_url, "check", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IWebSite = {};

rpc.IWeiboAction = {};

rpc.IWeiboAction.getWeiboFriends = function(type, success, fail){
	if(arguments.length < 3) alert("com.paitao.generic.rpc.protocol.IWeiboAction.getWeiboFriends param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.WeiboFriend], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_type1 = (type);
		if(!_value_type1) 
			delete _jsonDict["type"];
		else
			_jsonDict["type"] = _value_type1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IWeiboAction/1/getWeiboFriends";
	return RpcCall.doInvoke(_url, "getWeiboFriends", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IWeiboAction.inviteUser = function(invites, type, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IWeiboAction.inviteUser param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _arr_1 = (!invites) ? null : [];
		if(invites) {
			var _len_1 = invites.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = invites[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_invites1 = _arr_1;
		if(!_value_invites1) 
			delete _jsonDict["invites"];
		else
			_jsonDict["invites"] = _value_invites1;
	}

	{
		var _value_type1 = (type);
		if(!_value_type1) 
			delete _jsonDict["type"];
		else
			_jsonDict["type"] = _value_type1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IWeiboAction/1/inviteUser";
	return RpcCall.doInvoke(_url, "inviteUser", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IWeiboAction.shareToRencentAction = function(mid, shareType, success, fail){
	if(arguments.length < 4) alert("com.paitao.generic.rpc.protocol.IWeiboAction.shareToRencentAction param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_mid1 = (mid);
		if(!_value_mid1) 
			delete _jsonDict["mid"];
		else
			_jsonDict["mid"] = _value_mid1;
	}

	{
		var _value_shareType1 = (shareType);
		if(!_value_shareType1) 
			delete _jsonDict["shareType"];
		else
			_jsonDict["shareType"] = _value_shareType1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IWeiboAction/1/shareToRencentAction";
	return RpcCall.doInvoke(_url, "shareToRencentAction", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IWeiboAction.shareToWeibo = function(mid, target, shareType, success, fail){
	if(arguments.length < 5) alert("com.paitao.generic.rpc.protocol.IWeiboAction.shareToWeibo param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_mid1 = (mid);
		if(!_value_mid1) 
			delete _jsonDict["mid"];
		else
			_jsonDict["mid"] = _value_mid1;
	}

	{
		var _value_target1 = (target);
		if(!_value_target1) 
			delete _jsonDict["target"];
		else
			_jsonDict["target"] = _value_target1;
	}

	{
		var _value_shareType1 = (shareType);
		if(!_value_shareType1) 
			delete _jsonDict["shareType"];
		else
			_jsonDict["shareType"] = _value_shareType1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IWeiboAction/1/shareToWeibo";
	return RpcCall.doInvoke(_url, "shareToWeibo", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAddressService = {};

rpc.IAddressService.deleteAddress = function(addressId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IAddressService.deleteAddress param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Number, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_addressId1 = addressId;
		if(!_value_addressId1) 
			delete _jsonDict["addressId"];
		else
			_jsonDict["addressId"] = _value_addressId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IAddressService/1/deleteAddress";
	return RpcCall.doInvoke(_url, "deleteAddress", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAddressService.getAddressById = function(addressId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IAddressService.getAddressById param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Address, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_addressId1 = addressId;
		if(!_value_addressId1) 
			delete _jsonDict["addressId"];
		else
			_jsonDict["addressId"] = _value_addressId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IAddressService/1/getAddressById";
	return RpcCall.doInvoke(_url, "getAddressById", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAddressService.getAddressesByDistrict = function(districtId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IAddressService.getAddressesByDistrict param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Address], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_districtId1 = districtId;
		if(!_value_districtId1) 
			delete _jsonDict["districtId"];
		else
			_jsonDict["districtId"] = _value_districtId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IAddressService/1/getAddressesByDistrict";
	return RpcCall.doInvoke(_url, "getAddressesByDistrict", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAddressService.getAddressesByUser = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IAddressService.getAddressesByUser param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Address], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IAddressService/1/getAddressesByUser";
	return RpcCall.doInvoke(_url, "getAddressesByUser", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAddressService.insert = function(districtId, desc, phone, contacts, success, fail){
	if(arguments.length < 6) alert("com.paitao.xmlife.rpc.IAddressService.insert param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Address, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_districtId1 = districtId;
		if(!_value_districtId1) 
			delete _jsonDict["districtId"];
		else
			_jsonDict["districtId"] = _value_districtId1;
	}

	{
		var _value_desc1 = desc;
		if(!_value_desc1) 
			delete _jsonDict["desc"];
		else
			_jsonDict["desc"] = _value_desc1;
	}

	{
		var _value_phone1 = phone;
		if(!_value_phone1) 
			delete _jsonDict["phone"];
		else
			_jsonDict["phone"] = _value_phone1;
	}

	{
		var _value_contacts1 = contacts;
		if(!_value_contacts1) 
			delete _jsonDict["contacts"];
		else
			_jsonDict["contacts"] = _value_contacts1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IAddressService/1/insert";
	return RpcCall.doInvoke(_url, "insert", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IAddressService.update = function(addressId, districtId, desc, phone, contacts, success, fail){
	if(arguments.length < 7) alert("com.paitao.xmlife.rpc.IAddressService.update param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Address, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_addressId1 = addressId;
		if(!_value_addressId1) 
			delete _jsonDict["addressId"];
		else
			_jsonDict["addressId"] = _value_addressId1;
	}

	{
		var _value_districtId1 = districtId;
		if(!_value_districtId1) 
			delete _jsonDict["districtId"];
		else
			_jsonDict["districtId"] = _value_districtId1;
	}

	{
		var _value_desc1 = desc;
		if(!_value_desc1) 
			delete _jsonDict["desc"];
		else
			_jsonDict["desc"] = _value_desc1;
	}

	{
		var _value_phone1 = phone;
		if(!_value_phone1) 
			delete _jsonDict["phone"];
		else
			_jsonDict["phone"] = _value_phone1;
	}

	{
		var _value_contacts1 = contacts;
		if(!_value_contacts1) 
			delete _jsonDict["contacts"];
		else
			_jsonDict["contacts"] = _value_contacts1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IAddressService/1/update";
	return RpcCall.doInvoke(_url, "update", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IChargeCardService = {};

rpc.IChargeCardService.chargeCardDetail = function(code, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IChargeCardService.chargeCardDetail param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.ChargeCardResult, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_code1 = code;
		if(!_value_code1) 
			delete _jsonDict["code"];
		else
			_jsonDict["code"] = _value_code1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IChargeCardService/1/chargeCardDetail";
	return RpcCall.doInvoke(_url, "chargeCardDetail", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IChargeCardService.chargeCardRecords = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IChargeCardService.chargeCardRecords param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.ChargeRecord], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IChargeCardService/1/chargeCardRecords";
	return RpcCall.doInvoke(_url, "chargeCardRecords", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IChargeCardService.checkChargeBatch = function(batchId, payWay, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IChargeCardService.checkChargeBatch param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.ChargeBatchPayResult, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_batchId1 = (batchId);
		if(!_value_batchId1) 
			delete _jsonDict["batchId"];
		else
			_jsonDict["batchId"] = _value_batchId1;
	}

	{
		var _value_payWay1 = (payWay);
		if(!_value_payWay1) 
			delete _jsonDict["payWay"];
		else
			_jsonDict["payWay"] = _value_payWay1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IChargeCardService/1/checkChargeBatch";
	return RpcCall.doInvoke(_url, "checkChargeBatch", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IChargeCardService.clientNotifyCharge = function(chargeId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IChargeCardService.clientNotifyCharge param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Number, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_chargeId1 = (chargeId);
		if(!_value_chargeId1) 
			delete _jsonDict["chargeId"];
		else
			_jsonDict["chargeId"] = _value_chargeId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IChargeCardService/1/clientNotifyCharge";
	return RpcCall.doInvoke(_url, "clientNotifyCharge", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IChargeCardService.decharge = function(code, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IChargeCardService.decharge param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.ChargeCardResult, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_code1 = code;
		if(!_value_code1) 
			delete _jsonDict["code"];
		else
			_jsonDict["code"] = _value_code1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IChargeCardService/1/decharge";
	return RpcCall.doInvoke(_url, "decharge", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IChargeCardService.getOnlineChargCardBatchs = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IChargeCardService.getOnlineChargCardBatchs param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.ChargeCardBatch], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IChargeCardService/1/getOnlineChargCardBatchs";
	return RpcCall.doInvoke(_url, "getOnlineChargCardBatchs", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.ICityService = {};

rpc.ICityService.getCityByLocation = function(loc, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.ICityService.getCityByLocation param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.City, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _arr_1 = (!loc) ? null : [];
		if(loc) {
			var _len_1 = loc.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = loc[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_loc1 = _arr_1;
		if(!_value_loc1) 
			delete _jsonDict["loc"];
		else
			_jsonDict["loc"] = _value_loc1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "ICityService/1/getCityByLocation";
	return RpcCall.doInvoke(_url, "getCityByLocation", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.ICityService.getSupportedCities = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.ICityService.getSupportedCities param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.City], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "ICityService/1/getSupportedCities";
	return RpcCall.doInvoke(_url, "getSupportedCities", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.ICustomerService = {};

rpc.ICustomerService.getCustomerAccountInfo = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.ICustomerService.getCustomerAccountInfo param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.AccountInfo, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "ICustomerService/1/getCustomerAccountInfo";
	return RpcCall.doInvoke(_url, "getCustomerAccountInfo", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.ICustomerService.getCustomerCashflowRecords = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.ICustomerService.getCustomerCashflowRecords param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.CashflowRecord], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "ICustomerService/1/getCustomerCashflowRecords";
	return RpcCall.doInvoke(_url, "getCustomerCashflowRecords", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.ICustomerService.getCustomerInfo = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.ICustomerService.getCustomerInfo param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Customer, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "ICustomerService/1/getCustomerInfo";
	return RpcCall.doInvoke(_url, "getCustomerInfo", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService = {};

rpc.IDealService.checkDealProduct = function(residentalDistrictId, productIds, prices, productNums, dealId, success, fail){
	if(arguments.length < 7) alert("com.paitao.xmlife.rpc.IDealService.checkDealProduct param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.CheckResult, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_residentalDistrictId1 = residentalDistrictId;
		if(!_value_residentalDistrictId1) 
			delete _jsonDict["residentalDistrictId"];
		else
			_jsonDict["residentalDistrictId"] = _value_residentalDistrictId1;
	}

	{
		var _arr_1 = (!productIds) ? null : [];
		if(productIds) {
			var _len_1 = productIds.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productIds[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productIds1 = _arr_1;
		if(!_value_productIds1) 
			delete _jsonDict["productIds"];
		else
			_jsonDict["productIds"] = _value_productIds1;
	}

	{
		var _arr_1 = (!prices) ? null : [];
		if(prices) {
			var _len_1 = prices.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = prices[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_prices1 = _arr_1;
		if(!_value_prices1) 
			delete _jsonDict["prices"];
		else
			_jsonDict["prices"] = _value_prices1;
	}

	{
		var _arr_1 = (!productNums) ? null : [];
		if(productNums) {
			var _len_1 = productNums.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productNums[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productNums1 = _arr_1;
		if(!_value_productNums1) 
			delete _jsonDict["productNums"];
		else
			_jsonDict["productNums"] = _value_productNums1;
	}

	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/checkDealProduct";
	return RpcCall.doInvoke(_url, "checkDealProduct", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.checkPay = function(dealId, isPayAllByBalance, payWay, success, fail){
	if(arguments.length < 5) alert("com.paitao.xmlife.rpc.IDealService.checkPay param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.PayResult, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _value_isPayAllByBalance1 = (isPayAllByBalance);
		if(!_value_isPayAllByBalance1) 
			delete _jsonDict["isPayAllByBalance"];
		else
			_jsonDict["isPayAllByBalance"] = _value_isPayAllByBalance1;
	}

	{
		var _value_payWay1 = (payWay);
		if(!_value_payWay1) 
			delete _jsonDict["payWay"];
		else
			_jsonDict["payWay"] = _value_payWay1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/checkPay";
	return RpcCall.doInvoke(_url, "checkPay", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.completeDeal = function(dealId, shopper, delivererId, reviewType, reviewNote, success, fail){
	if(arguments.length < 7) alert("com.paitao.xmlife.rpc.IDealService.completeDeal param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _arr_1 = (!shopper) ? null : [];
		if(shopper) {
			var _len_1 = shopper.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = shopper[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_shopper1 = _arr_1;
		if(!_value_shopper1) 
			delete _jsonDict["shopper"];
		else
			_jsonDict["shopper"] = _value_shopper1;
	}

	{
		var _value_delivererId1 = (delivererId);
		if(!_value_delivererId1) 
			delete _jsonDict["delivererId"];
		else
			_jsonDict["delivererId"] = _value_delivererId1;
	}

	{
		var _value_reviewType1 = (reviewType);
		if(!_value_reviewType1) 
			delete _jsonDict["reviewType"];
		else
			_jsonDict["reviewType"] = _value_reviewType1;
	}

	{
		var _value_reviewNote1 = reviewNote;
		if(!_value_reviewNote1) 
			delete _jsonDict["reviewNote"];
		else
			_jsonDict["reviewNote"] = _value_reviewNote1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/completeDeal";
	return RpcCall.doInvoke(_url, "completeDeal", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.createDeal = function(residentalDistrictId, productIds, prices, productNums, dealPrice, addressId, customName, customAddr, customPhone, note, deliverTime, deliverType, isOrder, success, fail){
	if(arguments.length < 15) alert("com.paitao.xmlife.rpc.IDealService.createDeal param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.CreateDealResult, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_residentalDistrictId1 = residentalDistrictId;
		if(!_value_residentalDistrictId1) 
			delete _jsonDict["residentalDistrictId"];
		else
			_jsonDict["residentalDistrictId"] = _value_residentalDistrictId1;
	}

	{
		var _arr_1 = (!productIds) ? null : [];
		if(productIds) {
			var _len_1 = productIds.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productIds[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productIds1 = _arr_1;
		if(!_value_productIds1) 
			delete _jsonDict["productIds"];
		else
			_jsonDict["productIds"] = _value_productIds1;
	}

	{
		var _arr_1 = (!prices) ? null : [];
		if(prices) {
			var _len_1 = prices.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = prices[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_prices1 = _arr_1;
		if(!_value_prices1) 
			delete _jsonDict["prices"];
		else
			_jsonDict["prices"] = _value_prices1;
	}

	{
		var _arr_1 = (!productNums) ? null : [];
		if(productNums) {
			var _len_1 = productNums.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productNums[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productNums1 = _arr_1;
		if(!_value_productNums1) 
			delete _jsonDict["productNums"];
		else
			_jsonDict["productNums"] = _value_productNums1;
	}

	{
		var _value_dealPrice1 = (dealPrice);
		if(!_value_dealPrice1) 
			delete _jsonDict["dealPrice"];
		else
			_jsonDict["dealPrice"] = _value_dealPrice1;
	}

	{
		var _value_addressId1 = addressId;
		if(!_value_addressId1) 
			delete _jsonDict["addressId"];
		else
			_jsonDict["addressId"] = _value_addressId1;
	}

	{
		var _value_customName1 = customName;
		if(!_value_customName1) 
			delete _jsonDict["customName"];
		else
			_jsonDict["customName"] = _value_customName1;
	}

	{
		var _value_customAddr1 = customAddr;
		if(!_value_customAddr1) 
			delete _jsonDict["customAddr"];
		else
			_jsonDict["customAddr"] = _value_customAddr1;
	}

	{
		var _value_customPhone1 = customPhone;
		if(!_value_customPhone1) 
			delete _jsonDict["customPhone"];
		else
			_jsonDict["customPhone"] = _value_customPhone1;
	}

	{
		var _value_note1 = note;
		if(!_value_note1) 
			delete _jsonDict["note"];
		else
			_jsonDict["note"] = _value_note1;
	}

	{
		var _value_deliverTime1 = (deliverTime);
		if(!_value_deliverTime1) 
			delete _jsonDict["deliverTime"];
		else
			_jsonDict["deliverTime"] = _value_deliverTime1;
	}

	{
		var _value_deliverType1 = (deliverType);
		if(!_value_deliverType1) 
			delete _jsonDict["deliverType"];
		else
			_jsonDict["deliverType"] = _value_deliverType1;
	}

	{
		var _value_isOrder1 = (isOrder);
		if(!_value_isOrder1) 
			delete _jsonDict["isOrder"];
		else
			_jsonDict["isOrder"] = _value_isOrder1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/createDeal";
	return RpcCall.doInvoke(_url, "createDeal", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.getActiveDealsNum = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IDealService.getActiveDealsNum param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Number, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/getActiveDealsNum";
	return RpcCall.doInvoke(_url, "getActiveDealsNum", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.getDealDetail = function(dealId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IDealService.getDealDetail param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Deal, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/getDealDetail";
	return RpcCall.doInvoke(_url, "getDealDetail", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.getDeliverTime = function(areaId, shopIds, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IDealService.getDeliverTime param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.DealDeliverTimeResult, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_areaId1 = (areaId);
		if(!_value_areaId1) 
			delete _jsonDict["areaId"];
		else
			_jsonDict["areaId"] = _value_areaId1;
	}

	{
		var _arr_1 = (!shopIds) ? null : [];
		if(shopIds) {
			var _len_1 = shopIds.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = shopIds[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_shopIds1 = _arr_1;
		if(!_value_shopIds1) 
			delete _jsonDict["shopIds"];
		else
			_jsonDict["shopIds"] = _value_shopIds1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/getDeliverTime";
	return RpcCall.doInvoke(_url, "getDeliverTime", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.getMyDeals = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IDealService.getMyDeals param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.SimpleDeal], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/getMyDeals";
	return RpcCall.doInvoke(_url, "getMyDeals", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.isDealComfired = function(dealId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IDealService.isDealComfired param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.DealComfiredResult, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/isDealComfired";
	return RpcCall.doInvoke(_url, "isDealComfired", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDealService.isDealPaid = function(dealId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IDealService.isDealPaid param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Number, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDealService/1/isDealPaid";
	return RpcCall.doInvoke(_url, "isDealPaid", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService = {};

rpc.IDelivererClientService.completeDeal = function(dealId, productIds, productNums, types, contents, dealPrice, success, fail){
	if(arguments.length < 8) alert("com.paitao.xmlife.rpc.IDelivererClientService.completeDeal param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _arr_1 = (!productIds) ? null : [];
		if(productIds) {
			var _len_1 = productIds.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productIds[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productIds1 = _arr_1;
		if(!_value_productIds1) 
			delete _jsonDict["productIds"];
		else
			_jsonDict["productIds"] = _value_productIds1;
	}

	{
		var _arr_1 = (!productNums) ? null : [];
		if(productNums) {
			var _len_1 = productNums.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productNums[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productNums1 = _arr_1;
		if(!_value_productNums1) 
			delete _jsonDict["productNums"];
		else
			_jsonDict["productNums"] = _value_productNums1;
	}

	{
		var _arr_1 = (!types) ? null : [];
		if(types) {
			var _len_1 = types.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = types[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_types1 = _arr_1;
		if(!_value_types1) 
			delete _jsonDict["types"];
		else
			_jsonDict["types"] = _value_types1;
	}

	{
		var _arr_1 = (!contents) ? null : [];
		if(contents) {
			var _len_1 = contents.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = contents[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_contents1 = _arr_1;
		if(!_value_contents1) 
			delete _jsonDict["contents"];
		else
			_jsonDict["contents"] = _value_contents1;
	}

	{
		var _value_dealPrice1 = (dealPrice);
		if(!_value_dealPrice1) 
			delete _jsonDict["dealPrice"];
		else
			_jsonDict["dealPrice"] = _value_dealPrice1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/completeDeal";
	return RpcCall.doInvoke(_url, "completeDeal", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getActiveTasks = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IDelivererClientService.getActiveTasks param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Deal], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getActiveTasks";
	return RpcCall.doInvoke(_url, "getActiveTasks", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getDelivererInfo = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IDelivererClientService.getDelivererInfo param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Deliverer, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getDelivererInfo";
	return RpcCall.doInvoke(_url, "getDelivererInfo", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getDelivererLastMonthDeals = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IDelivererClientService.getDelivererLastMonthDeals param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Deal], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getDelivererLastMonthDeals";
	return RpcCall.doInvoke(_url, "getDelivererLastMonthDeals", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getDelivererThisMonthDeals = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IDelivererClientService.getDelivererThisMonthDeals param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Deal], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getDelivererThisMonthDeals";
	return RpcCall.doInvoke(_url, "getDelivererThisMonthDeals", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getDelivererTodayCODDeals = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IDelivererClientService.getDelivererTodayCODDeals param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.DelivererCODHistory, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getDelivererTodayCODDeals";
	return RpcCall.doInvoke(_url, "getDelivererTodayCODDeals", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getDelivererYestdayCODDeals = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IDelivererClientService.getDelivererYestdayCODDeals param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.DelivererCODHistory, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getDelivererYestdayCODDeals";
	return RpcCall.doInvoke(_url, "getDelivererYestdayCODDeals", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getHistoryDeals = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IDelivererClientService.getHistoryDeals param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Deal], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getHistoryDeals";
	return RpcCall.doInvoke(_url, "getHistoryDeals", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getTodayReturnInventory = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IDelivererClientService.getTodayReturnInventory param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.ReturnInventory, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getTodayReturnInventory";
	return RpcCall.doInvoke(_url, "getTodayReturnInventory", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.getWaitDeliverTasks = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IDelivererClientService.getWaitDeliverTasks param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Deal], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/getWaitDeliverTasks";
	return RpcCall.doInvoke(_url, "getWaitDeliverTasks", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.offline = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IDelivererClientService.offline param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/offline";
	return RpcCall.doInvoke(_url, "offline", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.online = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IDelivererClientService.online param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/online";
	return RpcCall.doInvoke(_url, "online", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.pickupProduct = function(dealId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IDelivererClientService.pickupProduct param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/pickupProduct";
	return RpcCall.doInvoke(_url, "pickupProduct", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.previewCODTake = function(dealId, productIds, productNums, success, fail){
	if(arguments.length < 5) alert("com.paitao.xmlife.rpc.IDelivererClientService.previewCODTake param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Number, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _arr_1 = (!productIds) ? null : [];
		if(productIds) {
			var _len_1 = productIds.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productIds[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productIds1 = _arr_1;
		if(!_value_productIds1) 
			delete _jsonDict["productIds"];
		else
			_jsonDict["productIds"] = _value_productIds1;
	}

	{
		var _arr_1 = (!productNums) ? null : [];
		if(productNums) {
			var _len_1 = productNums.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productNums[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productNums1 = _arr_1;
		if(!_value_productNums1) 
			delete _jsonDict["productNums"];
		else
			_jsonDict["productNums"] = _value_productNums1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/previewCODTake";
	return RpcCall.doInvoke(_url, "previewCODTake", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IDelivererClientService.previewModifyDeal = function(dealId, productIds, productNums, success, fail){
	if(arguments.length < 5) alert("com.paitao.xmlife.rpc.IDelivererClientService.previewModifyDeal param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Number, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _arr_1 = (!productIds) ? null : [];
		if(productIds) {
			var _len_1 = productIds.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productIds[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productIds1 = _arr_1;
		if(!_value_productIds1) 
			delete _jsonDict["productIds"];
		else
			_jsonDict["productIds"] = _value_productIds1;
	}

	{
		var _arr_1 = (!productNums) ? null : [];
		if(productNums) {
			var _len_1 = productNums.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productNums[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productNums1 = _arr_1;
		if(!_value_productNums1) 
			delete _jsonDict["productNums"];
		else
			_jsonDict["productNums"] = _value_productNums1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IDelivererClientService/1/previewModifyDeal";
	return RpcCall.doInvoke(_url, "previewModifyDeal", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IFeedbackService = {};

rpc.IFeedbackService.sendFeedBack = function(feedback, type, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IFeedbackService.sendFeedBack param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_feedback1 = feedback;
		if(!_value_feedback1) 
			delete _jsonDict["feedback"];
		else
			_jsonDict["feedback"] = _value_feedback1;
	}

	{
		var _arr_1 = (!type) ? null : [];
		if(type) {
			var _len_1 = type.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = type[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_type1 = _arr_1;
		if(!_value_type1) 
			delete _jsonDict["type"];
		else
			_jsonDict["type"] = _value_type1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IFeedbackService/1/sendFeedBack";
	return RpcCall.doInvoke(_url, "sendFeedBack", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IHomepageService = {};

rpc.IHomepageService.getBannersByArea = function(areaId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IHomepageService.getBannersByArea param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.BannerItem], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_areaId1 = (areaId);
		if(!_value_areaId1) 
			delete _jsonDict["areaId"];
		else
			_jsonDict["areaId"] = _value_areaId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IHomepageService/1/getBannersByArea";
	return RpcCall.doInvoke(_url, "getBannersByArea", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IHomepageService.getHomepageByArea = function(areaId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IHomepageService.getHomepageByArea param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Homepage, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_areaId1 = (areaId);
		if(!_value_areaId1) 
			delete _jsonDict["areaId"];
		else
			_jsonDict["areaId"] = _value_areaId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IHomepageService/1/getHomepageByArea";
	return RpcCall.doInvoke(_url, "getHomepageByArea", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IResidentalDistrictService = {};

rpc.IResidentalDistrictService.get = function(rid, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IResidentalDistrictService.get param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.ResidentalDistrict, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_rid1 = rid;
		if(!_value_rid1) 
			delete _jsonDict["rid"];
		else
			_jsonDict["rid"] = _value_rid1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IResidentalDistrictService/1/get";
	return RpcCall.doInvoke(_url, "get", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IResidentalDistrictService.getDistrictsNearby = function(loc, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IResidentalDistrictService.getDistrictsNearby param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.ResidentalDistrict], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _arr_1 = (!loc) ? null : [];
		if(loc) {
			var _len_1 = loc.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = loc[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_loc1 = _arr_1;
		if(!_value_loc1) 
			delete _jsonDict["loc"];
		else
			_jsonDict["loc"] = _value_loc1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IResidentalDistrictService/1/getDistrictsNearby";
	return RpcCall.doInvoke(_url, "getDistrictsNearby", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IResidentalDistrictService.searchByName = function(cityCode, name, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IResidentalDistrictService.searchByName param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.ResidentalDistrict], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_cityCode1 = (cityCode);
		if(!_value_cityCode1) 
			delete _jsonDict["cityCode"];
		else
			_jsonDict["cityCode"] = _value_cityCode1;
	}

	{
		var _value_name1 = name;
		if(!_value_name1) 
			delete _jsonDict["name"];
		else
			_jsonDict["name"] = _value_name1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IResidentalDistrictService/1/searchByName";
	return RpcCall.doInvoke(_url, "searchByName", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService = {};

rpc.IShopService.getCategoryContent = function(shopId, categoryId, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopService.getCategoryContent param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.ProductCategory], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_shopId1 = shopId;
		if(!_value_shopId1) 
			delete _jsonDict["shopId"];
		else
			_jsonDict["shopId"] = _value_shopId1;
	}

	{
		var _value_categoryId1 = categoryId;
		if(!_value_categoryId1) 
			delete _jsonDict["categoryId"];
		else
			_jsonDict["categoryId"] = _value_categoryId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/getCategoryContent";
	return RpcCall.doInvoke(_url, "getCategoryContent", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.getCategoryHierarchy = function(shopId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopService.getCategoryHierarchy param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.ProductCategory], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_shopId1 = shopId;
		if(!_value_shopId1) 
			delete _jsonDict["shopId"];
		else
			_jsonDict["shopId"] = _value_shopId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/getCategoryHierarchy";
	return RpcCall.doInvoke(_url, "getCategoryHierarchy", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.getOfflineProductsByShop = function(shopId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopService.getOfflineProductsByShop param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Product], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_shopId1 = shopId;
		if(!_value_shopId1) 
			delete _jsonDict["shopId"];
		else
			_jsonDict["shopId"] = _value_shopId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/getOfflineProductsByShop";
	return RpcCall.doInvoke(_url, "getOfflineProductsByShop", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.getProductDetail = function(productId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopService.getProductDetail param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Product, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_productId1 = productId;
		if(!_value_productId1) 
			delete _jsonDict["productId"];
		else
			_jsonDict["productId"] = _value_productId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/getProductDetail";
	return RpcCall.doInvoke(_url, "getProductDetail", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.getShop = function(shopId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopService.getShop param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Shop, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_shopId1 = shopId;
		if(!_value_shopId1) 
			delete _jsonDict["shopId"];
		else
			_jsonDict["shopId"] = _value_shopId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/getShop";
	return RpcCall.doInvoke(_url, "getShop", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.getShopHomepage = function(shopId, withHierarchy, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopService.getShopHomepage param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.ShopHomepage, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_shopId1 = shopId;
		if(!_value_shopId1) 
			delete _jsonDict["shopId"];
		else
			_jsonDict["shopId"] = _value_shopId1;
	}

	{
		var _value_withHierarchy1 = (withHierarchy);
		if(!_value_withHierarchy1) 
			delete _jsonDict["withHierarchy"];
		else
			_jsonDict["withHierarchy"] = _value_withHierarchy1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/getShopHomepage";
	return RpcCall.doInvoke(_url, "getShopHomepage", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.getShopsByAreaId = function(areaId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopService.getShopsByAreaId param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Shop], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_areaId1 = (areaId);
		if(!_value_areaId1) 
			delete _jsonDict["areaId"];
		else
			_jsonDict["areaId"] = _value_areaId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/getShopsByAreaId";
	return RpcCall.doInvoke(_url, "getShopsByAreaId", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.markOnline = function(productId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopService.markOnline param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_productId1 = productId;
		if(!_value_productId1) 
			delete _jsonDict["productId"];
		else
			_jsonDict["productId"] = _value_productId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/markOnline";
	return RpcCall.doInvoke(_url, "markOnline", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.searchProduct = function(shopId, name, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopService.searchProduct param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Product], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_shopId1 = shopId;
		if(!_value_shopId1) 
			delete _jsonDict["shopId"];
		else
			_jsonDict["shopId"] = _value_shopId1;
	}

	{
		var _value_name1 = name;
		if(!_value_name1) 
			delete _jsonDict["name"];
		else
			_jsonDict["name"] = _value_name1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/searchProduct";
	return RpcCall.doInvoke(_url, "searchProduct", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopService.searchProductByAreaId = function(areaId, keyword, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopService.searchProductByAreaId param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Product], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_areaId1 = (areaId);
		if(!_value_areaId1) 
			delete _jsonDict["areaId"];
		else
			_jsonDict["areaId"] = _value_areaId1;
	}

	{
		var _value_keyword1 = keyword;
		if(!_value_keyword1) 
			delete _jsonDict["keyword"];
		else
			_jsonDict["keyword"] = _value_keyword1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopService/1/searchProductByAreaId";
	return RpcCall.doInvoke(_url, "searchProductByAreaId", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService = {};

rpc.IShopperClientService.cancelTask = function(dealId, taskId, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopperClientService.cancelTask param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _value_taskId1 = (taskId);
		if(!_value_taskId1) 
			delete _jsonDict["taskId"];
		else
			_jsonDict["taskId"] = _value_taskId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/cancelTask";
	return RpcCall.doInvoke(_url, "cancelTask", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.completeTask = function(dealId, taskId, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopperClientService.completeTask param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Task, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _value_taskId1 = (taskId);
		if(!_value_taskId1) 
			delete _jsonDict["taskId"];
		else
			_jsonDict["taskId"] = _value_taskId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/completeTask";
	return RpcCall.doInvoke(_url, "completeTask", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getActiveTasks = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IShopperClientService.getActiveTasks param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Task], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getActiveTasks";
	return RpcCall.doInvoke(_url, "getActiveTasks", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getBindingShopInfo = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IShopperClientService.getBindingShopInfo param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Shop], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getBindingShopInfo";
	return RpcCall.doInvoke(_url, "getBindingShopInfo", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getOfflineProducts = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IShopperClientService.getOfflineProducts param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.ShopInfo], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getOfflineProducts";
	return RpcCall.doInvoke(_url, "getOfflineProducts", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getProductDetail = function(productId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopperClientService.getProductDetail param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Product, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_productId1 = productId;
		if(!_value_productId1) 
			delete _jsonDict["productId"];
		else
			_jsonDict["productId"] = _value_productId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getProductDetail";
	return RpcCall.doInvoke(_url, "getProductDetail", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getProductsByCategory = function(categoryId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopperClientService.getProductsByCategory param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Product], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_categoryId1 = categoryId;
		if(!_value_categoryId1) 
			delete _jsonDict["categoryId"];
		else
			_jsonDict["categoryId"] = _value_categoryId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getProductsByCategory";
	return RpcCall.doInvoke(_url, "getProductsByCategory", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getShopCategories = function(shopId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopperClientService.getShopCategories param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.ProductCategory], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_shopId1 = shopId;
		if(!_value_shopId1) 
			delete _jsonDict["shopId"];
		else
			_jsonDict["shopId"] = _value_shopId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getShopCategories";
	return RpcCall.doInvoke(_url, "getShopCategories", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getShopperInfo = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IShopperClientService.getShopperInfo param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Shopper, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getShopperInfo";
	return RpcCall.doInvoke(_url, "getShopperInfo", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getShopperTaskHistoryLastMonth = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopperClientService.getShopperTaskHistoryLastMonth param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Task], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getShopperTaskHistoryLastMonth";
	return RpcCall.doInvoke(_url, "getShopperTaskHistoryLastMonth", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getShopperTaskHistoryThisMonth = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopperClientService.getShopperTaskHistoryThisMonth param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Task], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getShopperTaskHistoryThisMonth";
	return RpcCall.doInvoke(_url, "getShopperTaskHistoryThisMonth", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getTaskHistory = function(offset, count, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopperClientService.getTaskHistory param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Task], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_offset1 = (offset);
		if(!_value_offset1) 
			delete _jsonDict["offset"];
		else
			_jsonDict["offset"] = _value_offset1;
	}

	{
		var _value_count1 = (count);
		if(!_value_count1) 
			delete _jsonDict["count"];
		else
			_jsonDict["count"] = _value_count1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getTaskHistory";
	return RpcCall.doInvoke(_url, "getTaskHistory", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getTodayReturnInventory = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IShopperClientService.getTodayReturnInventory param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.ReturnInventory, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getTodayReturnInventory";
	return RpcCall.doInvoke(_url, "getTodayReturnInventory", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.getWaitDeliverTasks = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IShopperClientService.getWaitDeliverTasks param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Task], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/getWaitDeliverTasks";
	return RpcCall.doInvoke(_url, "getWaitDeliverTasks", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.markOnline = function(productId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopperClientService.markOnline param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_productId1 = productId;
		if(!_value_productId1) 
			delete _jsonDict["productId"];
		else
			_jsonDict["productId"] = _value_productId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/markOnline";
	return RpcCall.doInvoke(_url, "markOnline", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.markSoldOut = function(productId, success, fail){
	if(arguments.length < 3) alert("com.paitao.xmlife.rpc.IShopperClientService.markSoldOut param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_productId1 = productId;
		if(!_value_productId1) 
			delete _jsonDict["productId"];
		else
			_jsonDict["productId"] = _value_productId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/markSoldOut";
	return RpcCall.doInvoke(_url, "markSoldOut", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.offline = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IShopperClientService.offline param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/offline";
	return RpcCall.doInvoke(_url, "offline", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.online = function(success, fail){
	if(arguments.length < 2) alert("com.paitao.xmlife.rpc.IShopperClientService.online param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/online";
	return RpcCall.doInvoke(_url, "online", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.readTask = function(dealId, taskId, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopperClientService.readTask param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		success(returnCode, null);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _value_taskId1 = (taskId);
		if(!_value_taskId1) 
			delete _jsonDict["taskId"];
		else
			_jsonDict["taskId"] = _value_taskId1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/readTask";
	return RpcCall.doInvoke(_url, "readTask", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.searchProduct = function(shopId, keyword, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopperClientService.searchProduct param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Product], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_shopId1 = shopId;
		if(!_value_shopId1) 
			delete _jsonDict["shopId"];
		else
			_jsonDict["shopId"] = _value_shopId1;
	}

	{
		var _value_keyword1 = keyword;
		if(!_value_keyword1) 
			delete _jsonDict["keyword"];
		else
			_jsonDict["keyword"] = _value_keyword1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/searchProduct";
	return RpcCall.doInvoke(_url, "searchProduct", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.searchProductByAreaId = function(areaId, keyword, success, fail){
	if(arguments.length < 4) alert("com.paitao.xmlife.rpc.IShopperClientService.searchProductByAreaId param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, Array, [rpc.Product], true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_areaId1 = (areaId);
		if(!_value_areaId1) 
			delete _jsonDict["areaId"];
		else
			_jsonDict["areaId"] = _value_areaId1;
	}

	{
		var _value_keyword1 = keyword;
		if(!_value_keyword1) 
			delete _jsonDict["keyword"];
		else
			_jsonDict["keyword"] = _value_keyword1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/searchProductByAreaId";
	return RpcCall.doInvoke(_url, "searchProductByAreaId", _jsonDict, _uploadDict, successWrapper, fail);
};

rpc.IShopperClientService.setProductNum = function(dealId, taskId, productId, productNum, success, fail){
	if(arguments.length < 6) alert("com.paitao.xmlife.rpc.IShopperClientService.setProductNum param count dismatch");

	var successWrapper = success ? function(returnCode, jsonObj) {
		var obj = ConvertUtils.jsonObjectToObject(jsonObj, rpc.Task, null, true);
		success(returnCode, obj);
	} : null;
	var _jsonDict = {};
	var _uploadDict = {};
	{
		var _value_dealId1 = (dealId);
		if(!_value_dealId1) 
			delete _jsonDict["dealId"];
		else
			_jsonDict["dealId"] = _value_dealId1;
	}

	{
		var _value_taskId1 = (taskId);
		if(!_value_taskId1) 
			delete _jsonDict["taskId"];
		else
			_jsonDict["taskId"] = _value_taskId1;
	}

	{
		var _arr_1 = (!productId) ? null : [];
		if(productId) {
			var _len_1 = productId.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productId[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productId1 = _arr_1;
		if(!_value_productId1) 
			delete _jsonDict["productId"];
		else
			_jsonDict["productId"] = _value_productId1;
	}

	{
		var _arr_1 = (!productNum) ? null : [];
		if(productNum) {
			var _len_1 = productNum.length;
			for(var _i_1 = 0; _i_1 < _len_1; _i_1++) {
				var _l_1 = productNum[_i_1];
				var _value__l_13 = _l_1;
				_arr_1.push(_value__l_13);
			}
		}
		var _value_productNum1 = _arr_1;
		if(!_value_productNum1) 
			delete _jsonDict["productNum"];
		else
			_jsonDict["productNum"] = _value_productNum1;
	}

	var _url = rpc.ServerConfig.getUrlPrefix("Business") + "IShopperClientService/1/setProductNum";
	return RpcCall.doInvoke(_url, "setProductNum", _jsonDict, _uploadDict, successWrapper, fail);
};
rpc.IReturnCodeAuth={};
rpc.IReturnCodeAuth.USER_BLOCKED=-20;
rpc.IReturnCodeAuth.DEVICE_BLOCKED=-21;
rpc.IReturnCodeAuth.USER_NOT_EXIST=-22;
rpc.IReturnCodeAuth.PASSWORD_INVALID=-23;
rpc.IReturnCodeAuth.PHONE_ALREADY_REGISTERED=-24;
rpc.IReturnCodeAuth.AUTHCODE_EXPIRE=-25;
rpc.IReturnCodeAuth.INVALID_AUTHCODE=-26;
rpc.IReturnCodeAuth.INVALID_AUTH_TYPE=-27;
rpc.IReturnCodeAuth.INVALID_PHONE=-28;
rpc.IReturnCodeAuth.OLD_PASSWORD_INVALID=-29;
rpc.IReturnCodeAuth.PHONE_NOT_BINDED=-30;
rpc.IReturnCodeAuth.USERNAME_REGISTERED=-31;
rpc.IReturnCodeAuth.INVALID_NAME_LENGTH=-32;
rpc.IReturnCodeAuth.INVALID_NAME_CHAR=-33;
rpc.IReturnCodeAuth.ACCNAME_MODIFYED=-34;
rpc.IReturnCodeAuth.ACCNAME_REGISTERED=-35;

rpc.MessageFlag={};
rpc.MessageFlag.Event=1;
rpc.MessageFlag.Zip=2;
rpc.MessageFlag.SendAPN=4;
rpc.MessageFlag.NeedDownload=8;
rpc.MessageFlag.Encryption=16;
rpc.MessageFlag.OneWay=32;
rpc.MessageFlag.NoNotification=128;
rpc.MessageFlag.NoSound=256;
rpc.MessageFlag.NotSaveToServerDB=512;
rpc.MessageFlag.NotSaveToClient=1024;
rpc.MessageFlag.DelayDeliver=2048;
rpc.MessageFlag.NoConfirm=4096;

rpc.IReturnCode={};
rpc.IReturnCode.OK=0;
rpc.IReturnCode.RPC_INVALID_PARAM=-1;
rpc.IReturnCode.BUS_INVALID_PARAM=-2;
rpc.IReturnCode.SESSION_TIMEOUTED=-3;
rpc.IReturnCode.DATABASE_ERROR=-4;
rpc.IReturnCode.USER_NOT_EXISTED=-5;
rpc.IReturnCode.PERMISSION_DENIED=-6;
rpc.IReturnCode.UPLOAD_FAILED=-7;
rpc.IReturnCode.FORCED_UPGRADED=-8;
rpc.IReturnCode.VERSION_UNMATCHED=-9;
rpc.IReturnCode.EXCEED_LIMIT=-10;
rpc.IReturnCode.BLOCKED_DEVICEID=-11;
rpc.IReturnCode.BLOCKED_USERID=-12;
rpc.IReturnCode.UNKOWN=-13;
rpc.IReturnCode.BAD_FORMAT=-14;
rpc.IReturnCode.NETWORK_TIMEOUT=-15;
rpc.IReturnCode.USER_CHANGED=-16;
rpc.IReturnCode.TOO_FREQUENT=-17;
rpc.IReturnCode.ACTION_FAILED=-18;

rpc.RpcConstants={};
rpc.RpcConstants.DEFAULT_CATEGORY="_dc";
rpc.RpcConstants.DEFAULT_FIELD="_default";
rpc.RpcConstants.PRODUCT_SERVER_KEY="production";
rpc.RpcConstants.TEST_SERVER_KEY="test";
rpc.RpcConstants.DEV_SERVER_KEY="dev";
rpc.RpcConstants.SCREEN_SCALE_MULTIP=4;

rpc.AuthConstant={};
rpc.AuthConstant.AUTH_INTERNAL=0;
rpc.AuthConstant.AUTH_SESSION=4;
rpc.AuthConstant.AUTH_SINA=1;
rpc.AuthConstant.AUTH_TENCENT=2;
rpc.AuthConstant.AUTH_TAOBAO=3;
rpc.AuthConstant.GENDER_MALE=1;
rpc.AuthConstant.GENDER_FEMAIL=2;
rpc.AuthConstant.AUTH_TYPE_PHONE=1;

rpc.DeviceType={};
rpc.DeviceType.IOS_TYPE=1;
rpc.DeviceType.ANDROID_TYPE=2;
rpc.DeviceType.WP_TYPE=3;
rpc.DeviceType.HTML_TYPE=4;
rpc.DeviceType.PC_WIN=5;
rpc.DeviceType.PC_LINUX=6;
rpc.DeviceType.PC_MAC=7;

rpc.NetworkType={};
rpc.NetworkType.TWOG=1;
rpc.NetworkType.THREEG=2;
rpc.NetworkType.FOURG=3;
rpc.NetworkType.WIFI=4;

rpc.VerifyCodeType={};
rpc.VerifyCodeType.SIGN_IN=1;
rpc.VerifyCodeType.SIGN_UP=2;
rpc.VerifyCodeType.RESET_PASS=3;
rpc.VerifyCodeType.FIND_PASS=4;
rpc.VerifyCodeType.VALIDATE_PHONE=5;

rpc.HttpRequestConstants={};
rpc.HttpRequestConstants.KEY_DATA="d";
rpc.HttpRequestConstants.KEY_UID="u";
rpc.HttpRequestConstants.KEY_SESSION="s";
rpc.HttpRequestConstants.KEY_VERSION="v";
rpc.HttpRequestConstants.KEY_DEVICE_TYPE="t";
rpc.HttpRequestConstants.KEY_MODE="m";
rpc.HttpRequestConstants.KEY_CERT_VERSION="c";
rpc.HttpRequestConstants.KEY_DEVICE_ID="di";
rpc.HttpRequestConstants.KEY_JSONP_CALLBACK="callback";
rpc.HttpRequestConstants.KEY_ENCRYPT_KEY="k";
rpc.HttpRequestConstants.KEY_PATH="p";
rpc.HttpRequestConstants.KEY_USER_AGENT="a";
rpc.HttpRequestConstants.HEADER_DES_KEY="dk";
rpc.HttpRequestConstants.HEADER_ETAG="RTag";
rpc.HttpRequestConstants.HEADER_CHECKSUM="RC";
rpc.HttpRequestConstants.HEADER_ENCRYPT_KEY_EXPIRE="ke";
rpc.HttpRequestConstants.HEADER_REQUEST_SEQ="sq";
rpc.HttpRequestConstants.HEADER_CATEGORY="cg";
rpc.HttpRequestConstants.KEY_RESP="r";
rpc.HttpRequestConstants.KEY_RETURN_CODE="c";
rpc.HttpRequestConstants.KEY_ERROR="e";
rpc.HttpRequestConstants.MODE_NORMAL=0;
rpc.HttpRequestConstants.MODE_CONFUSION=1;
rpc.HttpRequestConstants.MODE_ENCRYPTION=2;
rpc.HttpRequestConstants.MODE_SUPPORT_DIFF=4;
rpc.HttpRequestConstants.MODE_NOZIP=8;
rpc.HttpRequestConstants.PROXY_MODE_NORMAL=0;
rpc.HttpRequestConstants.PROXY_MODE_ENCRYPTION=1;
rpc.HttpRequestConstants.PROXY_MODE_ZIP=2;
rpc.HttpRequestConstants.SHORT_DEVICE_ID_LEN=4;
rpc.HttpRequestConstants.HTTP_CODE_OK=200;
rpc.HttpRequestConstants.HTTP_CODE_NOT_MODIFIED=304;
rpc.HttpRequestConstants.HTTP_CODE_DIFF_PATCH=281;
rpc.HttpRequestConstants.HTTP_CODE_DECRYPT_FAIL=496;
rpc.HttpRequestConstants.ZIP_MIN_SIZE=100;

rpc.IMConstants={};
rpc.IMConstants.NORMAL_CHAT_SESSION_DOMAIN="chat";
rpc.IMConstants.NORMAL_CHAT_SESSION_PATH="/c";
rpc.IMConstants.NORMAL_CHAT_SESSION_ARG_FIRST="u";
rpc.IMConstants.NORMAL_CHAT_SESSION_ARG_SECOND="v";

rpc.DeliverErrorCodes={};
rpc.DeliverErrorCodes.INVALID_TO_ID=1;
rpc.DeliverErrorCodes.SAVE_FAILED=2;

rpc.BackAmountTaskConstant={};
rpc.BackAmountTaskConstant.STATUS_BACKING=0;
rpc.BackAmountTaskConstant.STATUS_COMPLETE=1;
rpc.BackAmountTaskConstant.STATUS_STOP=2;
rpc.BackAmountTaskConstant.TYPE_IS_NEW=1;
rpc.BackAmountTaskConstant.TYPE_COMMON_BACK=2;

rpc.BalanceConstant={};
rpc.BalanceConstant.MAX_BALANCE_FOR_CHARGE=500000;

rpc.CashFlowType={};
rpc.CashFlowType.ALIPAY="ALIPAY";
rpc.CashFlowType.TENPAY="TENPAY";
rpc.CashFlowType.BALANCE="BALANCE";
rpc.CashFlowType.CHARGE="CHARGE";
rpc.CashFlowType.CODE="COD";
rpc.CashFlowType.BATCHBACK="BATCHBACK";
rpc.CashFlowType.BATCHIMMEDIATELY="BATCHIMMEDIATELY";

rpc.ChargeCardBatchConstant={};
rpc.ChargeCardBatchConstant.STATUS_OPEN=1;
rpc.ChargeCardBatchConstant.STATUS_CLOSED=0;
rpc.ChargeCardBatchConstant.STATUS_EXPIRED=2;
rpc.ChargeCardBatchConstant.STATUS_BUILDING=3;

rpc.ChargeCardRecordConstant={};
rpc.ChargeCardRecordConstant.TYPE_IMMEDIATELY=0;
rpc.ChargeCardRecordConstant.TYPE_BATCH_IMMEDIATELY=1;
rpc.ChargeCardRecordConstant.TYPE_BATCH=2;
rpc.ChargeCardRecordConstant.TYPE_BATCH_CHARGE_ALIPAY=3;
rpc.ChargeCardRecordConstant.TYPE_BATCH_CHARGE_TENPAY=4;

rpc.ChargeCardResultCode={};
rpc.ChargeCardResultCode.SUCCCESS=1;
rpc.ChargeCardResultCode.FAILURE=2;
rpc.ChargeCardResultCode.ACTIVITY_CARD_LIMITD=3;
rpc.ChargeCardResultCode.ACCOUNT_FREEZE=4;
rpc.ChargeCardResultCode.CARD_NOT_EXSIT=5;
rpc.ChargeCardResultCode.RECORD_FAILURE_TOO_MUCH_LIMITED_TODAY=6;
rpc.ChargeCardResultCode.BATCH_EXPIRED=7;
rpc.ChargeCardResultCode.BALNCE_OVERFLOW=8;

rpc.ChargeCardTemplateConstant={};
rpc.ChargeCardTemplateConstant.TYPE_COMMON=0;
rpc.ChargeCardTemplateConstant.TYPE_ACTIVE=1;
rpc.ChargeCardTemplateConstant.TYPE_BATCH=2;
rpc.ChargeCardTemplateConstant.BIZ_TYPE_UNLINE=0;
rpc.ChargeCardTemplateConstant.BIZ_TYPE_ONLINE=1;

rpc.CheckResultCodeConstant={};
rpc.CheckResultCodeConstant.OK=1;
rpc.CheckResultCodeConstant.SHOP_ILLEGAL=2;
rpc.CheckResultCodeConstant.PRODUCT_ILLEGAL=4;
rpc.CheckResultCodeConstant.DISTRICT_ILLEGAL=8;
rpc.CheckResultCodeConstant.PRODUCT_PRICE_ILLEGAL=16;
rpc.CheckResultCodeConstant.DELIVER_TIME_ILLEGAL=32;
rpc.CheckResultCodeConstant.PRODUCT_LIMIT=64;
rpc.CheckResultCodeConstant.DEAL_PRICE_ILLEGAL=128;

rpc.ClientTypeConstant={};
rpc.ClientTypeConstant.ANDROID_C="android/c";
rpc.ClientTypeConstant.ANDROID_S="android/s";
rpc.ClientTypeConstant.ANDROID_D="android/d";
rpc.ClientTypeConstant.IOS_C="ios/c";

rpc.DealReviewConstant={};
rpc.DealReviewConstant.GOOD=1;
rpc.DealReviewConstant.BAD=-1;
rpc.DealReviewConstant.MEDIUM=0;

rpc.DealStatusConstant={};
rpc.DealStatusConstant.CREATED=0;
rpc.DealStatusConstant.WAIT_FOR_PAYMENT_CONFIRMATION=10;
rpc.DealStatusConstant.PAY_FAILED_SINCE_INSUFFICIENT_BALANCE=8;
rpc.DealStatusConstant.PAID=11;
rpc.DealStatusConstant.WAIT_FOR_ASSIGN_SHOPPER=20;
rpc.DealStatusConstant.ASSIGN_SHOPPER_FAILED=31;
rpc.DealStatusConstant.BUY_BEGIN=1;
rpc.DealStatusConstant.ASSIGNED=1;
rpc.DealStatusConstant.CANCELED=7;
rpc.DealStatusConstant.BUY_DONE=2;
rpc.DealStatusConstant.BOUGHT=2;
rpc.DealStatusConstant.WAIT_FOR_ASSIGN_DELIVERER=21;
rpc.DealStatusConstant.ASSIGN_DELIVERER_FAILED=32;
rpc.DealStatusConstant.WAIT_FOR_DELIVERER_PICKUP=22;
rpc.DealStatusConstant.DELIVER_BEGIN=3;
rpc.DealStatusConstant.DELIVERING=3;
rpc.DealStatusConstant.DELIVER_DONE=4;
rpc.DealStatusConstant.DELIVERED=4;
rpc.DealStatusConstant.RETURNED=6;
rpc.DealStatusConstant.PRODUCT_LIMIT=91;

rpc.DeliverTypeConstant={};
rpc.DeliverTypeConstant.ONE_HOUR=1;
rpc.DeliverTypeConstant.OTHER=2;

rpc.FeedbackTypeConstant={};
rpc.FeedbackTypeConstant.FUCTION=1;
rpc.FeedbackTypeConstant.UI=2;
rpc.FeedbackTypeConstant.OPERATION=3;
rpc.FeedbackTypeConstant.OTHERS=4;

rpc.GetImageConstants={};
rpc.GetImageConstants.KEY_ID="id";
rpc.GetImageConstants.KEY_WIDTH="w";
rpc.GetImageConstants.KEY_HEIGHT="h";
rpc.GetImageConstants.KEY_MODE="m";
rpc.GetImageConstants.KEY_SCALE="c";
rpc.GetImageConstants.MODE_FIXED_WIDTH="fw";
rpc.GetImageConstants.MODE_FIXED_HEIGHT="fh";
rpc.GetImageConstants.MODE_SCALE_IN="si";
rpc.GetImageConstants.MODE_SCALE_ROTATE="sr";

rpc.GetVoiceConstants={};
rpc.GetVoiceConstants.KEY_ID="id";
rpc.GetVoiceConstants.KEY_EQUIP="equip";

rpc.IReturnCodeAddress={};
rpc.IReturnCodeAddress.INVALID_PHONE=181;
rpc.IReturnCodeAddress.INVALID_DESC=182;
rpc.IReturnCodeAddress.INVALID_CONTACTS=183;
rpc.IReturnCodeAddress.DUPLICATE_ADDRESS=184;

rpc.IReturnCodeArea={};
rpc.IReturnCodeArea.DUPLICATE_NAME=161;

rpc.IReturnCodeChardCard={};
rpc.IReturnCodeChardCard.CAN_NOT_USED=201;
rpc.IReturnCodeChardCard.NO_START=202;
rpc.IReturnCodeChardCard.EXPIRED=203;
rpc.IReturnCodeChardCard.BACKED_COMPLETE=204;
rpc.IReturnCodeChardCard.EXISTS_NEWS=205;
rpc.IReturnCodeChardCard.EXISTS=206;
rpc.IReturnCodeChardCard.CARD_IS_USED=207;
rpc.IReturnCodeChardCard.CARD_IS_DISABLED=208;

rpc.IReturnCodeProduct={};
rpc.IReturnCodeProduct.PRODUCT_CATEGORY_IS_NOT_LEAF=170;
rpc.IReturnCodeProduct.DUPLICATE_NAME=171;
rpc.IReturnCodeProduct.DESC_TOO_LONG=172;
rpc.IReturnCodeProduct.UNIT_NOT_EXISTS=173;
rpc.IReturnCodeProduct.TEMPLATE_NOT_EXISTS=174;
rpc.IReturnCodeProduct.NAME_TOO_LONG=175;
rpc.IReturnCodeProduct.FPRICE_LTOREQ_ZERO=176;
rpc.IReturnCodeProduct.PPRICE_LTOREQ_ZERO=177;
rpc.IReturnCodeProduct.DPRICE_LT_ZERO=178;
rpc.IReturnCodeProduct.NOT_OPER_STATUS=179;

rpc.IReturnCodeProductCategory={};
rpc.IReturnCodeProductCategory.DUPLICATE_NAME=181;
rpc.IReturnCodeProductCategory.NAME_TOO_LONG=182;

rpc.IReturnCodeShop={};
rpc.IReturnCodeShop.NAME_TOO_LONG=191;

rpc.OnlineChargeInfoNotifyClientConstant={};
rpc.OnlineChargeInfoNotifyClientConstant.SUCCESS=1;
rpc.OnlineChargeInfoNotifyClientConstant.DATA_INVALID=2;

rpc.PayBalanceResult={};
rpc.PayBalanceResult.SUCCESS=1;
rpc.PayBalanceResult.NO_ENOUGH_BALANCE=2;
rpc.PayBalanceResult.NO_DEAL_EXSIT=3;
rpc.PayBalanceResult.NO_ACCOUNT_EXSIT=4;
rpc.PayBalanceResult.ACCOUNT_FREEZE=5;
rpc.PayBalanceResult.PAY_FAILURE=6;
rpc.PayBalanceResult.DEAL_OVERDUE=7;
rpc.PayBalanceResult.WAIT_FOR_THIRDPART=8;
rpc.PayBalanceResult.NO_NEEDED_FOR_THIRDPART=9;
rpc.PayBalanceResult.DEAL_NO_NEED_PAY=10;

rpc.PayResultCodeConstant={};
rpc.PayResultCodeConstant.PAID_SUCCESS=1;
rpc.PayResultCodeConstant.THIRD_PART_NEEDED=2;
rpc.PayResultCodeConstant.TIMEOUT=3;
rpc.PayResultCodeConstant.NO_ENOUGH_BALANCE=4;
rpc.PayResultCodeConstant.NO_NEEDED_THIRDPART=5;
rpc.PayResultCodeConstant.DEAL_NO_NEED_PAY=6;

rpc.PayWayConstant={};
rpc.PayWayConstant.NONE=0;
rpc.PayWayConstant.ALIPAY=1;
rpc.PayWayConstant.TENPAY=2;
rpc.PayWayConstant.COD=3;

rpc.ProductCategoryConstant={};
rpc.ProductCategoryConstant.STATUS_ONLINE=1;
rpc.ProductCategoryConstant.STATUS_OFFLINE=0;
rpc.ProductCategoryConstant.TYPE_IS_LEAF=0;
rpc.ProductCategoryConstant.TYPE_IS_NOT_LEAF=1;

rpc.ProductConstant={};
rpc.ProductConstant.STATUS_ONLINE=0;
rpc.ProductConstant.STATUS_OFFLINE=1;
rpc.ProductConstant.STATUS_REMOVED=2;
rpc.ProductConstant.STATUS_SOLDOUT=3;
rpc.ProductConstant.SOURCE_APP="app";
rpc.ProductConstant.SOURCE_PC="pc";
rpc.ProductConstant.CATEGORY_CACHE_MAX_PRODUCT_COUNT=8;
rpc.ProductConstant.LIMIT_TYPE_BY_DAY=1;
rpc.ProductConstant.LIMIT_TYPE_BY_LIFE=2;

rpc.RefundResult={};
rpc.RefundResult.SUCCESS=0;
rpc.RefundResult.ACTION_ERROR=1;
rpc.RefundResult.REFUND_AMOUNT_ILLEAGE=2;
rpc.RefundResult.NO_CASHFLOW_EXSITS=3;
rpc.RefundResult.ACCOUNT_NOT_EXSITS=4;
rpc.RefundResult.DEAL_NOT_EXSITS=5;

rpc.SetProductNumTypeConstant={};
rpc.SetProductNumTypeConstant.PRODUCT_BAD=1;
rpc.SetProductNumTypeConstant.OTHER=2;

rpc.ShopConstant={};
rpc.ShopConstant.STATUS_CLOSE=0;
rpc.ShopConstant.STATUS_OPEN=1;
rpc.ShopConstant.DEFAULT_EMPTY_SHOP_BANNER_1="53d07275036489844e6bc23262";
rpc.ShopConstant.DEFAULT_EMPTY_SHOP_BANNER_2="53d072a0036489844e6bc233d6";
rpc.ShopConstant.SHOW_TYPE_0=0;
rpc.ShopConstant.SHOW_TYPE_1=1;

rpc.TaskProductStatusConstant={};
rpc.TaskProductStatusConstant.OK=1;
rpc.TaskProductStatusConstant.SHOPPER_RETURN=2;
rpc.TaskProductStatusConstant.DELIVERER_RETURN=3;

rpc.TaskStatusConstant={};
rpc.TaskStatusConstant.CREATED=0;
rpc.TaskStatusConstant.BUY_BEGIN=1;
rpc.TaskStatusConstant.BUY_DONE=2;
rpc.TaskStatusConstant.WAIT_FOR_ASSIGN_DELIVERER=21;
rpc.TaskStatusConstant.WAIT_FOR_DELIVERER_PICKUP=22;
rpc.TaskStatusConstant.DELIVER_BEGIN=3;
rpc.TaskStatusConstant.DELIVER_DONE=4;
rpc.TaskStatusConstant.RETURNED=6;
rpc.TaskStatusConstant.CANCELED=7;

rpc.WebSiteUrlPathContant={};
rpc.WebSiteUrlPathContant.RESET_PASSWORD="pass_reset.html";
rpc.WebSiteUrlPathContant.AGREEMENT="agreement.html";
rpc.WebSiteUrlPathContant.HELP="info_help.html";
rpc.WebSiteUrlPathContant.INTRODUCTION="info_introduction.html";
rpc.WebSiteUrlPathContant.CONTACT="info_contact.html";


rpc.ServerConfig = {};

rpc.ServerConfig.getCategoryUrlMap = function() {
    return rpc.ServerConfig.categoryUrlMap;
}

rpc.ServerConfig.getUrlPrefix = function(category) {
    if(!category)
         category = rpc.RpcConstants.DEFAULT_CATEGORY;
    var urls = rpc.ServerConfig.categoryUrlMap[category];
    if(!urls || urls.length < 1) {
         return "http://127.0.0.1/";
    }
		
    url = urls[0];
    return url;
}
	
rpc.ServerConfig.setDefaultUrls = function(urls) {
    return rpc.ServerConfig.setUrls(rpc.RpcConstants.DEFAULT_CATEGORY, urls);
}
	
rpc.ServerConfig.setUrls = function(map) {
    if(!map) return false;
    var ret = true;
    for(var key in map) {
        if(!setUrls(key, map[key])) {
           ret = false;
        }
    }
	return ret;
}
	
rpc.ServerConfig.setUrls = function(category, urls) {
    if(!urls || urls.length < 1)
        return false;
    if(category == null)
        category = rpc.RpcConstants.DEFAULT_CATEGORY;
	var len = urls.length;
	var newUrls = [];
    for(var i = 0; i < len; i++) {
        var url = urls[i];
        if(url.indexOf("/", url.length - 1) < 0 && url.indexOf('?') < 0)
            url += "/";
		newUrls.push(url);
	}
	rpc.ServerConfig.categoryUrlMap[category] = newUrls;
	return true;
}

	
rpc.ServerConfig.hasCategory = function(category) {
    if(!category)
        return false;
    return rpc.ServerConfig.categoryUrlMap[category];
}
	
rpc.ServerConfig.loadDefaultConfig = function() {
	rpc.ServerConfig.categoryUrlMap = {};
	rpc.ServerConfig.categoryUrlMap["Auth"] = ["http://service.xiaomei.com/auth/"];
	rpc.ServerConfig.categoryUrlMap["Business"] = ["http://service.xiaomei.com/biz/"];
	rpc.ServerConfig.categoryUrlMap["CDN"] = ["http://res.xiaomei.com/"];
	rpc.ServerConfig.categoryUrlMap["IM"] = ["http://service.xiaomei.com/biz/"];
	rpc.ServerConfig.categoryUrlMap["Long"] = ["ws://long.xiaomei.com:1090/long/"];
	rpc.ServerConfig.categoryUrlMap["Site"] = ["http://www.xiaomei.com/"];
	rpc.ServerConfig.categoryUrlMap["_dc"] = ["http://service.xiaomei.com/biz/"];

}

rpc.ServerConfig.loadDefaultConfig();


// category: CDN
// arg 1: hash

rpc.ProductImageResource = {};

rpc.ProductImageResource.hashToUrl = function(
		hash 
	) {
	var _url = hash;
	if(!_url || _url.length < 3)
		return _url;
	if(_url.indexOf("http:") == 0 ||
		   _url.indexOf("https:") == 0 ||
           _url.indexOf("file:") == 0 ||
           _url.indexOf("res:") == 0 ||
           _url.indexOf("/") == 0) {
           return _url;
	}
	var _url1 = rpc.ServerConfig.getUrlPrefix("CDN");
	if(!_url1 || _url1.length < 2)
		return null;
	var _sb =_url1;
	var _c;
	_c = _sb.charAt(_sb.length - 1);
	if(_c != '/') {
		_sb += "/";
	}
	//_sb += "id-";

	_sb += hash;
	
	return _sb;
};

rpc.ProductImageResource.hashToSmallUrl = function(
		hash 
	) {
	var _url = rpc.ProductImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-202") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-202";
	
	
	return _sb;
};

rpc.ProductImageResource.hashToMediumUrl = function(
		hash 
	) {
	var _url = rpc.ProductImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-372") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-372";
	
	
	return _sb;
};

rpc.ProductImageResource.hashToFullUrl = function(
		hash 
	) {
	var _url = rpc.ProductImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-640/m-fw") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-640/m-fw";
	
	
	return _sb;
};


// category: CDN
// arg 1: hash

rpc.AvatarImageResource = {};

rpc.AvatarImageResource.hashToUrl = function(
		hash 
	) {
	var _url = hash;
	if(!_url || _url.length < 3)
		return _url;
	if(_url.indexOf("http:") == 0 ||
		   _url.indexOf("https:") == 0 ||
           _url.indexOf("file:") == 0 ||
           _url.indexOf("res:") == 0 ||
           _url.indexOf("/") == 0) {
           return _url;
	}
	var _url1 = rpc.ServerConfig.getUrlPrefix("CDN");
	if(!_url1 || _url1.length < 2)
		return null;
	var _sb =_url1;
	var _c;
	_c = _sb.charAt(_sb.length - 1);
	if(_c != '/') {
		_sb += "/";
	}
	//_sb += "id-";

	_sb += hash;
	
	return _sb;
};

rpc.AvatarImageResource.hashToSmallUrl = function(
		hash 
	) {
	var _url = rpc.AvatarImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-72") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-72";
	
	
	return _sb;
};

rpc.AvatarImageResource.hashToMediumUrl = function(
		hash 
	) {
	var _url = rpc.AvatarImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-92") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-92";
	
	
	return _sb;
};

rpc.AvatarImageResource.hashToFullUrl = function(
		hash 
	) {
	var _url = rpc.AvatarImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-640/m-fw") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-640/m-fw";
	
	
	return _sb;
};



rpc.RpcProxyStub = {};


// category: CDN
// arg 1: hash

rpc.HttpImageResource = {};

rpc.HttpImageResource.hashToUrl = function(
		hash 
	) {
	var _url = hash;
	if(!_url || _url.length < 3)
		return _url;
	if(_url.indexOf("http:") == 0 ||
		   _url.indexOf("https:") == 0 ||
           _url.indexOf("file:") == 0 ||
           _url.indexOf("res:") == 0 ||
           _url.indexOf("/") == 0) {
           return _url;
	}
	var _url1 = rpc.ServerConfig.getUrlPrefix("CDN");
	if(!_url1 || _url1.length < 2)
		return null;
	var _sb =_url1;
	var _c;
	_c = _sb.charAt(_sb.length - 1);
	if(_c != '/') {
		_sb += "/";
	}
	//_sb += "id-";

	_sb += hash;
	
	return _sb;
};

rpc.HttpImageResource.hashToSmallUrl = function(
		hash 
	) {
	var _url = rpc.HttpImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-40") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-40";
	
	
	return _sb;
};

rpc.HttpImageResource.hashToMediumUrl = function(
		hash 
	) {
	var _url = rpc.HttpImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-200") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-200";
	
	
	return _sb;
};

rpc.HttpImageResource.hashToBigUrl = function(
		hash 
	) {
	var _url = rpc.HttpImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-360") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-360";
	
	
	return _sb;
};

rpc.HttpImageResource.hashToFullUrl = function(
		hash 
	) {
	var _url = rpc.HttpImageResource.hashToUrl(
		hash 
	);
	if(!_url || _url.length < 3 || _url.indexOf("http") < 0)
		return _url;
	
	//if(_url.indexOf("w-640/m-fw") > 1) {
	//	return _url;
	//}
	
	var _sb = _url;
	var _c = _sb.charAt(_sb.length - 1);
	if(_c != '@') {
		_sb += "@";
	}
	
	_sb += "w-640/m-fw";
	
	
	return _sb;
};



rpc.LongPolling = {};

rpc.RpcClassMap = {};
rpc.RpcClassMap.gMsgClassMap = {};
rpc.RpcClassMap.getMsgClass = function(type) {
	return rpc.RpcClassMap.gMsgClassMap["" + type];
};
	
rpc.RpcClassMap.createMsg = function(type) {
    if(type == 0)
        return null;

    var cls = rpc.RpcClassMap.getMsgClass(type);
    if(!cls) {
        var msg = new rpc.RpcMessageBase();
        msg.setMsgType(type);
        return msg;
    }
    return new cls();
};

rpc.RpcClassMap.gMsgClassMap["1"] = rpc.DebugMessage;
rpc.RpcClassMap.gMsgClassMap["2"] = rpc.KickOut;
rpc.RpcClassMap.gMsgClassMap["3"] = rpc.LoadOfflineEvent;
rpc.RpcClassMap.gMsgClassMap["4"] = rpc.PingMessage;
rpc.RpcClassMap.gMsgClassMap["7"] = rpc.PipeInitMessage;
rpc.RpcClassMap.gMsgClassMap["5"] = rpc.PipeInitedMessage;
rpc.RpcClassMap.gMsgClassMap["6"] = rpc.RecvConfirmMessage;
rpc.RpcClassMap.gMsgClassMap["109"] = rpc.BackAmountMessage;
rpc.RpcClassMap.gMsgClassMap["111"] = rpc.ChargeMessage;
rpc.RpcClassMap.gMsgClassMap["107"] = rpc.DealNotificationMessage;
rpc.RpcClassMap.gMsgClassMap["108"] = rpc.DeliverBeginMessage;
rpc.RpcClassMap.gMsgClassMap["105"] = rpc.DelivererNewTaskMessage;
rpc.RpcClassMap.gMsgClassMap["106"] = rpc.DelivererPickupMessage;
rpc.RpcClassMap.gMsgClassMap["110"] = rpc.PaymentRefundNotificationMessgae;
rpc.RpcClassMap.gMsgClassMap["100"] = rpc.PictureMessage;
rpc.RpcClassMap.gMsgClassMap["104"] = rpc.ShopperBuyDoneMessage;
rpc.RpcClassMap.gMsgClassMap["103"] = rpc.ShopperNewTaskMessage;
rpc.RpcClassMap.gMsgClassMap["101"] = rpc.TextMessage;
rpc.RpcClassMap.gMsgClassMap["112"] = rpc.UserBlockNotification;
rpc.RpcClassMap.gMsgClassMap["102"] = rpc.VoiceMessage;

