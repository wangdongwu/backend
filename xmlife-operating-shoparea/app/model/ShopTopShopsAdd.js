var dataProxy = new XMLifeOperating.generic.BaseProxy('shop/topshops/add');
Ext.define('XMLifeOperating.model.ShopTopShopsAdd', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','shopId'],
    proxy: dataProxy,
});