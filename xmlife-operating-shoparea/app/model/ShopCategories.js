var dataProxy = new XMLifeOperating.generic.BaseProxy('shop/categories');
Ext.define('XMLifeOperating.model.ShopCategories', {
    extend: 'Ext.data.Model',
    fields: ['id','name','categories'],
    proxy:dataProxy
});