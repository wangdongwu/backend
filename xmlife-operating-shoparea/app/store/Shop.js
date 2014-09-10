Ext.define('XMLifeOperating.store.Shop', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.Shop',
	autoLoad: {
		start: 0,
		limit: 25,
		page: 1
	},
	proxy: new XMLifeOperating.generic.BaseProxy('shop', 'result')
});