Ext.data.Types.RMB = {
    type: 'rmb',
    sortType: Ext.data.SortTypes.asFloat,
    convert: function mightyConvertFn(v) {
        return (v / 100);
    }
};

Ext.define('XMLifeOperating.model.SupportedcityGetByCode', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'name',
        'code',
        'shopAreas', {
            name: 'initShippingFee',
            type: 'rmb',
            defaultValue: 0
        }, {
            name: 'minPrice',
            type: 'rmb',
            defaultValue: 0
        }, {
            name: 'minOrderForFreeShipping',
            type: 'rmb'
        }, {
            name: 'minDistance',
            type: 'rmb'
        }, {
            name: 'shippingFeePerKM',
            type: 'rmb'
        }, {
            name: 'minDistanceEnabled',
            persist: false,
            convert: function(value, record) {
                return record.data.minDistance > 0;
            }
        }, {
            name: 'minOrderForFreeShippingEnabled',
            persist: false,
            convert: function(value, record) {
                return record.data.minOrderForFreeShipping > 0;
            }
        }
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('supportedcity/getByCode')
});
