Ext.define('XMLifeOperating.model.AdminGetInfo', {
	extend: 'Ext.data.Model',
	fields: ['account','account','modules','adminType','cities','cityIds','enable','name','enable'],
	proxy: new XMLifeOperating.generic.BaseProxy('admin/getInfo')
});