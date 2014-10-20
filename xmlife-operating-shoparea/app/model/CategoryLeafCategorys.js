var dataProxy = new XMLifeOperating.generic.BaseProxy('category/leafCategorys');
Ext.define('XMLifeOperating.model.CategoryLeafCategorys', {
    extend: 'Ext.data.Model',
    fields: ['id','name','leaf'],
    proxy: dataProxy
});