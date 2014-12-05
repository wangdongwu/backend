Ext.define('XMLifeOperating.store.ShopSetConfig', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.ShopSetConfig',
	proxy: new XMLifeOperating.generic.BaseProxy('shop/shopset','result')
});