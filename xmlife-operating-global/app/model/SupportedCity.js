Ext.define('XMLifeOperating.model.SupportedCity', {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'code', 'name', 'status', 'shopAreas', 'zones',
        'initShippingFee', 'minOrderForFreeShipping', 'lng', 'lat'
    ],
    idProperty: 'code',
    proxy: new XMLifeOperating.generic.BaseProxy('supportedcity')
});
