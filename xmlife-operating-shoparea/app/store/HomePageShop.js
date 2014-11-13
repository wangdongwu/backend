Ext.define('XMLifeOperating.store.HomePageShop', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('shop/getOpenShops')
});