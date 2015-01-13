var dataProxy = new XMLifeOperating.generic.BaseProxy('manager/worktime');
Ext.define('XMLifeOperating.model.ManagerWorkTime', {
    extend: 'Ext.data.Model',
    fields: ['id','created','offlineTime','onlineTime','workTime','deals'],
    proxy: dataProxy,
});