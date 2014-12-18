Ext.define('XMLifeOperating.store.HomePageShopSet', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('shop/shopset')
});