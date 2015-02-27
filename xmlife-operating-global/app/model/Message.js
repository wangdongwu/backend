Ext.define('XMLifeOperating.model.Message', {
    extend: 'Ext.data.Model',
    fields: [
    	'id', 'content', 'userNums',
    	{name: 'startTime', type: 'date', convert: function(v) {
    			return Ext.Date.format(new Date(v),'Y-m-d H:i:s');
    		}
    	},
    	'adminName', 'url', 'file', 'status','linkType','internalType'
    ]
});