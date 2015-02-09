Ext.define('XMLifeOperating.model.OfflineProductGetOfflineRecords', {
	extend: 'Ext.data.Model',
	fields: [
		'phoneNum',
		'product',
		'productId',
		'reason',
		'shopName',
		'skuId',
		'skuName',
		'stockEnable',
		'template',
		'time',
		'shopType',
		'status',
		'operatorType',
		'operator'
	],
	proxy: new XMLifeOperating.generic.BaseProxy('offlineProduct/getOfflineRecords','result')
});