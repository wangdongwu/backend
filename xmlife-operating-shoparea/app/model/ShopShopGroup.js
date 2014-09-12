var dataProxy = new XMLifeOperating.generic.BaseProxy('shop/shopgroup');
Ext.define('XMLifeOperating.model.ShopShopGroup', {
    extend: 'Ext.data.Model',
    fields: ['id','areaId','name','type','logo','shopGroupId'],
    proxy: dataProxy,
});