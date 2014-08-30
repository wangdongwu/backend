var dataProxy = new XMLifeOperating.generic.BaseProxy('delivererZone');
Ext.define('XMLifeOperating.model.DelivererZone', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','shopAreaName','districts','deliverers','areaId','shopArea'],
    proxy: dataProxy,
});