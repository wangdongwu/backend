Ext.define('XMLifeOperating.store.Customer', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Customer',
    	autoLoad: {
		start: 0,
		limit: 25,
		page: 1
	},
    proxy: new XMLifeOperating.generic.BaseProxy('customer', 'result')
});
