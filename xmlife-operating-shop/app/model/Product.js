var dataProxy = new XMLifeOperating.generic.BaseProxy('product');
Ext.define('XMLifeOperating.model.Product', {
	extend: 'Ext.data.Model',
	fields: [
		'id',
		'name',
		'shopId',
		'shopname',
		'unitname',
		'pprice',
		'fprice',
		'dprice',
		'status',
		'top',
		'productTemplateId',
		'purchasePrice',
		'facePrice', 
		'discountPrice',
		'categoryId',
		'limitType',
		'limitCount',
		'productLimitCount',
		'dayLimitCount',
		'totalLimitCount',
		'barCode',
		'skuId',
		'rank',
		'rank2',
		'dayTodayLimitCount',
		'totalTodayLimitCount'
	],
	proxy: dataProxy,
});
//barCode