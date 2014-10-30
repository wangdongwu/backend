Ext.define('XMLifeOperating.model.ProductTemplateRoots', {
    extend: 'Ext.data.TreeModel',
    fields: ['id','name','leaf','status'],
    proxy: new XMLifeOperating.generic.BaseProxy('producttemplate/roots')
});
