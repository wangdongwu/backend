var dataProxy = new XMLifeOperating.generic.BaseProxy('shop/categories','list');
Ext.define('XMLifeOperating.model.ShopCategories', {
    extend: 'Ext.data.Model',
    fields: ['id','name','categoryNames'],
    proxy:dataProxy
});