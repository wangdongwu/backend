Ext.define('XMLifeOperating.store.ShopCategories', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.ShopCategories',
    proxy:new XMLifeOperating.generic.BaseProxy('shop/categories','list')
});
