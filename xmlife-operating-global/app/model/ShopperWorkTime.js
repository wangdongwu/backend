Ext.define('XMLifeOperating.model.ShopperWorkTime', {
    extend: 'Ext.data.Model',
    fields: ['id','created','offlineTime','onlineTime','workTime','deals'],
    proxy: new XMLifeOperating.generic.BaseProxy('superShopper/worktime')
});