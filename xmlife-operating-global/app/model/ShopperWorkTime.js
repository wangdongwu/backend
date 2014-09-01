var dataProxy = new XMLifeOperating.generic.BaseProxy('shopper/worktime');
Ext.define('XMLifeOperating.model.ShopperWorkTime', {
    extend: 'Ext.data.Model',
    fields: ['id','created','offlineTime','onlineTime','workTime','deals'],
    proxy: dataProxy,
});