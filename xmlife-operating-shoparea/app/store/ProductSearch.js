Ext.define('XMLifeOperating.store.ProductSearch', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.ProductSearch',
	proxy: new XMLifeOperating.generic.BaseProxy('product/search', 'result')
});