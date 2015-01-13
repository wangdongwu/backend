Ext.define('XMLifeOperating.model.DealItems', {
    extend: 'Ext.data.Model',
    fields: [
        'dealBackendId', 'unit', 'name', 'shopName', 'orderNum', 'cancelNum', 'returnNum', 'num',
        'price', 'cancelPrice', 'returnPrice', 'dealPrice', 'pprice', 'fprice', 'actualItemPrice', 'couponPrice', 'productId','promotionId'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('deal/items')
});