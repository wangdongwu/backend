Ext.define('XMLifeOperating.model.AdminGetInfo', {
	extend: 'Ext.data.Model',
	fields: [
		'account',
		'adminType',
		'areaId',
		'cities',
		'cityIds',
		'creater',
		'enable',
		'modules',
		'name',
		'phoneNum',
		'shopAreaName',
		'shopId',
		'shopName'
	],
	proxy: new XMLifeOperating.generic.BaseProxy('admin/getInfo')
});