Ext.define('XMLifeOperating.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    model: 'XMLifeOperating.model.Navigation',
    proxy: new XMLifeOperating.generic.BaseProxy('module/getPlatModulesTree?type=Global'),
    defaultRootId: '',
    autoSync: false,
    autoLoad: false,
    root: {
        expanded: true,
        children: []
    }
});