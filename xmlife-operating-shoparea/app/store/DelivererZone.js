Ext.define('XMLifeOperating.store.DelivererZone', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DelivererZone',
    proxy : new XMLifeOperating.generic.BaseProxy('delivererZone','arrayResult')
});