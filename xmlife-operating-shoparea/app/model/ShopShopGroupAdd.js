var dataProxy = new XMLifeOperating.generic.BaseProxy('shop/shopgroup/add');
Ext.define('XMLifeOperating.model.ShopShopGroupAdd', {
    extend: 'Ext.data.Model',
    fields: ['id','areaId','name'],
    proxy: dataProxy,
});