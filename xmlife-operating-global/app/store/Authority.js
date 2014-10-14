Ext.define('XMLifeOperating.store.Authority', {
    extend: 'Ext.data.Store',
    fields : ['id','name','uid','text'],
    proxy : new XMLifeOperating.generic.BaseProxy('module/getNewAdminModules')
});