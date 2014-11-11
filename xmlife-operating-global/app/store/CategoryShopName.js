Ext.define('XMLifeOperating.store.CategoryShopName', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.CategoryShopName',
    proxy: new XMLifeOperating.generic.BaseProxy('category/shop/name')
});