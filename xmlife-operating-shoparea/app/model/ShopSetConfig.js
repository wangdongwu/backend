Ext.define('XMLifeOperating.model.ShopSetConfig', {
	extend: 'Ext.data.Model',
	fields: [
		'id',
		'name',
		'shopId'
	],
	proxy: dataProxy
});