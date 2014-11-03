Ext.define('XMLifeOperating.store.DealItems', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.DealItems',
	proxy: new XMLifeOperating.generic.BaseProxy('deal/items', 'arrayResult')
});