var dataProxy = new XMLifeOperating.generic.BaseProxy('productunit');
Ext.define('XMLifeOperating.model.ProductUnit', {
    extend: 'Ext.data.Model',
    fields: ['id', 'unitId', 'name','canPartiallyReturn','_Id'],
    proxy: dataProxy,
});
