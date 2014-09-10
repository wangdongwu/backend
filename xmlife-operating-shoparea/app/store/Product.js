Ext.define('XMLifeOperating.store.Product', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.Product',
	autoLoad: {
		start: 0,
		limit: 25,
		page: 1
	},
	proxy: new XMLifeOperating.generic.BaseProxy('product', 'result')
});