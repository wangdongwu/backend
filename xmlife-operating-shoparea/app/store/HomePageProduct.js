Ext.define('XMLifeOperating.store.HomePageProduct', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePageProduct',
	proxy: new XMLifeOperating.generic.BaseProxy('product/getValidProduct')
});
