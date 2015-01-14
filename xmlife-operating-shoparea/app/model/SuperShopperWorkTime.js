var dataProxy = new XMLifeOperating.generic.BaseProxy('superShopper/worktime');
Ext.define('XMLifeOperating.model.SuperShopperWorkTime', {
    extend: 'Ext.data.Model',
    fields: ['id','created','offlineTime','onlineTime','workTime','deals'],
    proxy: dataProxy,
});