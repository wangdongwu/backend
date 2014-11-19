Ext.define('XMLifeOperating.model.OfflineProductGetOfflineRecords', {
	extend: 'Ext.data.Model',
	fields: [
		'phoneNum',
		'product',
		'productId',
		'reason',
		'shopName',
		'shopper',
		'skuId',
		'skuName',
		'template',
		'time'
	],
	proxy: new XMLifeOperating.generic.BaseProxy('offlineProduct/getOfflineRecords','result')
});