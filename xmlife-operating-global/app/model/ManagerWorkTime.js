Ext.define('XMLifeOperating.model.ManagerWorkTime', {
    extend: 'Ext.data.Model',
    fields: ['id','created','offlineTime','onlineTime','workTime','deals'],
    proxy: new XMLifeOperating.generic.BaseProxy('manager/worktime')
});