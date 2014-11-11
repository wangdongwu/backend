Ext.define('XMLifeOperating.store.ShopNameFilter', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Shop',
    proxy: new XMLifeOperating.generic.BaseProxy('shop/name/filter')
});