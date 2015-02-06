Ext.define('XMLifeOperating.model.ProductUnit', {
    extend: 'Ext.data.Model',
    fields: ['id', 'unitId', 'name', 'canPartiallyReturn', '_Id'],
    proxy: new XMLifeOperating.generic.BaseProxy('productunit')
});
