Ext.define('XMLifeOperating.model.Navigation', {
    extend: 'Ext.data.Model',
    fields: ['id', 'text', 'code', 'leaf'],
    proxy:new XMLifeOperating.generic.BaseProxy('module/getUserModulesTree') 
});
