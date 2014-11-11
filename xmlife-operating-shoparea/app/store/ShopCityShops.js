Ext.define('XMLifeOperating.store.ShopCityShops', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Shop',
    proxy: new XMLifeOperating.generic.BaseProxy('shop/city/shops'),

});