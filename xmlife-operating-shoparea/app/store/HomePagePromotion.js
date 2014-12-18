Ext.define('XMLifeOperating.store.HomePagePromotion', {
	extend: 'Ext.data.Store',
	fields: ['name', 'promotionId'],
	proxy: new XMLifeOperating.generic.BaseProxy('promotion/getByAreaId')
});