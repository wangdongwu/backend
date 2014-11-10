Ext.define('XMLifeOperating.store.HomePageProduct', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('product')
});