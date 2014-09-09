Ext.define('XMLifeOperating.store.DelivererWorkTime', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DelivererWorkTime',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy : new XMLifeOperating.generic.BaseProxy('deliverer/worktime','arrayResult')
});