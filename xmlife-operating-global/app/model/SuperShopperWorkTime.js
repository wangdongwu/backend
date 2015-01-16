Ext.define('XMLifeOperating.model.SuperShopperWorkTime', {
    extend: 'Ext.data.Model',
    fields: ['id', 'created', 'offlineTime', 'onlineTime', 'workTime', 'deals'],
    proxy: new XMLifeOperating.generic.BaseProxy('superShopper/worktime')
});
