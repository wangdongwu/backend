ConvertUtils = {};

ConvertUtils.jsonObjectToObject = function(obj, type,
            genericTypes, confusionMode) {
	if(!obj) return obj;
	
	if(type == Object || type == Number || type == String)
		return obj;
	if(type == Array) {
		var len = obj.length;
		var ret = [];
		for(var i = 0; i < len; i++) {
			ret.push(ConvertUtils.jsonObjectToObject(obj[i], genericTypes[0], null, confusionMode));
		}
		return ret;
	}

	var ret =  new type();
	ret.convertFrom(obj, confusionMode, false);
	return ret;
};