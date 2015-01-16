Ext.define('XMLifeOperating.model.Deliverer', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'zoneName', 'uid', 'idcard', 'activeDealNum', 'title', 'avatar', 'onlineTime', 'offlineTime', 'phone', 'areaNames', 'deals', 'returnDealNum', 'goods', 'mediums', 'bads', 'areaIds', 'delivererIds', 'zoneId', 'pwd', 'isActive', 'gender'],
    proxy: new XMLifeOperating.generic.BaseProxy('deliverer')
});
