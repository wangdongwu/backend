Ext.define('XMLifeOperating.store.ProductStatus', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.ProductStatus',
	data: [{
		'value': 0,
		'name': '上架',
		'itemId': 'onCarriage',
		'disabled': false
	}, {
		'value': 1,
		'name': '雪藏',
		'itemId': 'frozen/unfreeze',
		'disabled': false
	}, {
		'value': 2,
		'name': '废弃',
		'itemId': 'waste',
		'disabled': false
	}, {
		'value': 3,
		'name': '下架',
		'itemId': 'underCarriage',
		'disabled': false
	}]
});