Ext.define('XMLifeOperating.model.AdminAdminShopType', {
	extend: 'Ext.data.Model',
	fields: [
		'increaseProduct',
		'editprice',
		'editlimit',
		'editstock',
		'changeStorageRack',
		'onCarriage',
		'underCarriage',
		'frozen/unfreeze',
		'waste'
	],
	proxy: new XMLifeOperating.generic.BaseProxy('admin/adminShopType')
});