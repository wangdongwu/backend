Ext.define('XMLifeOperating.store.Shopper', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.Shopper',
	proxy: new XMLifeOperating.generic.BaseProxy('superShopper', 'result')
});