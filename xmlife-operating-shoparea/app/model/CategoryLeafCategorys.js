var dataProxy = new XMLifeOperating.generic.BaseProxy('category/leafCategorys');
Ext.define('XMLifeOperating.model.CategoryLeafCategorys', {
    extend: 'Ext.data.Model',
    model: 'XMLifeOperating.model.CategoryLeaf',
    proxy: dataProxy
});