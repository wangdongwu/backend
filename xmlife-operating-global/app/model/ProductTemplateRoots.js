Ext.define('XMLifeOperating.model.ProductTemplateRoots', {
    extend: 'Ext.data.Model',
    fields: ['id','name','leaf','status'],
    proxy: new XMLifeOperating.generic.BaseProxy('producttemplate/roots')
});
