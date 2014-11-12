Ext.define('XMLifeOperating.store.ProductStatus', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.ProductStatus',
	data: [{
		'value': 0,
		'name': '上架'
	}, {
		'value': 1,
		'name': '雪藏'
	}, {
		'value': 2,
		'name': '废弃'
	}, {
		'value': 3,
		'name': '下架'
	}]
});