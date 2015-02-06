Ext.define('XMLifeOperating.model.DelivererWorkTime', {
    extend: 'Ext.data.Model',
    fields: ['created', 'offlineTime', 'onlineTime', 'workTime', 'deals'],
    proxy: new XMLifeOperating.generic.BaseProxy('deliverer/worktime')
});
