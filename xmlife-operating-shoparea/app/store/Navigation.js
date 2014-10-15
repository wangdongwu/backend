Ext.define('XMLifeOperating.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    model : 'XMLifeOperating.model.Navigation',
    proxy : new XMLifeOperating.generic.BaseProxy('module/getUserModulesTree'),  
    defaultRootId : '',
    autoSync: false,
    autoLoad: false,
    root: {
    	expand:false
    }
});