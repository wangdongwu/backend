Ext.define('XMLifeOperating.model.SupportedCitySetShipfee', {
    extend: 'Ext.data.Model',
    fields: ['id','name', 'code',  'shopAreas','shipfee','deductd'],
    proxy: new XMLifeOperating.generic.BaseProxy('supportedcity/setShipfee')
});