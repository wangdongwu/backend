Ext.define('XMLifeOperating.store.DealItems', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.DealItems',
	autoLoad: {
		start: 0,
		limit: 25,
		page: 1
	},
	proxy: new XMLifeOperating.generic.BaseProxy('deal/items', 'arrayResult')
});