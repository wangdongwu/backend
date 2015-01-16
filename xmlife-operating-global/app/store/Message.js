Ext.define('XMLifeOperating.store.Message', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.Message',
    autoLoad: false,
    proxy: new XMLifeOperating.generic.BaseProxy('notify/list')
});
