Ext.define('XMLifeOperating.model.SupportedcityGetByCode', {
    extend: 'Ext.data.Model',
    fields: ['id','name', 'code',  'shopAreas','shipfee','deductd'],
    proxy: new XMLifeOperating.generic.BaseProxy('supportedcity/getByCode')
    //proxy: dataProxy,
});