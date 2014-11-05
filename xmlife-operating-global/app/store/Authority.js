Ext.define('XMLifeOperating.store.Authority', {
    extend: 'Ext.data.TreeStore',
    fields : ['auth',
                'children',
                'id','inheritLevel','leaf','platFormName','platFormType','text','uniqueName'],
    proxy : new XMLifeOperating.generic.BaseProxy('module/getNewAdminModules'),
    defaultRootId : '',
    autoSync: false,
    autoLoad: false,
    root: {}
});
