var dataProxy = new XMLifeOperating.generic.BaseProxy('shop/topshops');
Ext.define('XMLifeOperating.model.ShopTopShops', {
    extend: 'Ext.data.Model',
    fields: ['id','areaId','shopId','shopName','names','type'],
    proxy: dataProxy,
});