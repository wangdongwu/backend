Ext.define('XMLifeOperating.store.ShopSetItem', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.ShopSetConfig',
	proxy: new XMLifeOperating.generic.BaseProxy('shop/shopset/item','result')
});