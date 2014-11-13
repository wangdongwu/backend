Ext.define('XMLifeOperating.model.HomePage', {
    extend: 'Ext.data.Model',
    fields: [
    	'areaId', 'status', 'id', 'layoutId', 'order', 'index', 'version', 'enable',
    	'type', 'items', 'image', 'urlType', 'url', 'shopId', 'cid', 'pid',
    	{name: 'titles', convert: function(v,r) {
    			if(typeof(v) == 'object' && v.length >0){
    				return v.join(';');
    			} else {
    				return v;
    			}
    		}
    	},
        // fixed combo 有回车符时取值的bug
        {name: 'name', convert: function(v,r) {return v.replace(/\n/g,' ');} }
    ]
});