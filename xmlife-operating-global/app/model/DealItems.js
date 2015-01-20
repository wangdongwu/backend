Ext.define('XMLifeOperating.model.DealItems', {
    extend: 'Ext.data.Model',
    fields: ['productId',
        'name', 'price', 'promotionId', 'orderNum', 'cancelNum',
        {name: 'cancelType', convert: function(v,r) {
                var str = '';
                if (v == 0) {
                    str = '';
                } else if (v == 1) {
                    str = '用户主动要求';
                } else if (v == 2) {
                    str = '缺货';
                }
                return str;
    		}
    	},
        'returnNum', 'returnNote', 'num', 'actualItemPrice', 'couponPrice','dealBackendId'
    ]
});
