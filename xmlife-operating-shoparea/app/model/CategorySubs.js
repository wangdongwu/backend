var dataProxy = new XMLifeOperating.generic.BaseProxy('category/subs');
Ext.define('XMLifeOperating.model.CategorySubs', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','shopId','leaf'],
    proxy: dataProxy,
});