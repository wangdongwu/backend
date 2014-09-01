var dataProxy = new XMLifeOperating.generic.BaseProxy('deliverer/worktime');
Ext.define('XMLifeOperating.model.DelivererWorkTime', {
    extend: 'Ext.data.Model',
    fields: ['created','offlineTime','onlineTime','workTime','deals'],
    proxy: dataProxy,
});