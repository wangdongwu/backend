Ext.define('XMLifeOperating.model.HomePage', {
    extend: 'Ext.data.Model',
    fields: [
    	'areaId', 'status','id', 'layoutId', 'order', 'index', 'version', 'enable',
    	'type', 'items', 'name', 'image', 'urlType', 'url', 'shopId', 'cid', 'pid',
    	{name: 'titles', convert: function(v,r) {
    			if(v) return v.join(';');
    		}
    	}
    ]
});