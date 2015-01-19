Ext.data.Types.RMB = {
    type: 'rmb',
    sortType: Ext.data.SortTypes.asFloat,
    // 注意到dataField的convert方法在model的load和update阶段都会被调用。
    convert: function(v) {
        // 不转换表示特殊状态的－1
        return v > 0 ? (v / 100) : v;
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
            // store.sync时不写回服务器，当然目前我们是手动写回的:P
            persist: false,
            convert: function(value, record) {
                return record.data.minDistance > -1;
            }
        }, {
            name: 'minOrderForFreeShippingEnabled',
            persist: false,
            convert: function(value, record) {
                return record.data.minOrderForFreeShipping > -1;
            }
        }
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('supportedcity/getByCode')
});
