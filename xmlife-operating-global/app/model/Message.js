Ext.define('XMLifeOperating.model.Message', {
    extend: 'Ext.data.Model',
    fields: [
    	'id', 'content',
    	{name: 'startTime', type: 'date', convert: function(v,r) {
    			return Ext.Date.format(new Date(v),'Y-m-d H:i:s');
    		}
    	},
    	'adminName', 'url', 'file', 'status'
    ]
});