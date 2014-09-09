Ext.define('XMLifeOperating.store.DelivererZone', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DelivererZone',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy : new XMLifeOperating.generic.BaseProxy('delivererZone','arrayResult')
});