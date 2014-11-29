Ext.define('XMLifeOperating.store.ModuleNameComplete', {
    extend: 'Ext.data.Store',
     fields: ['id', 'name'],
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: 'localstorage',
        id  : 'moduleName'
    }
});
