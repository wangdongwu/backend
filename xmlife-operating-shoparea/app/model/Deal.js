Ext.define('XMLifeOperating.model.Deal', {
    extend: 'Ext.data.Model',
    fields: [
        'created',
        'customId',
        'dtoAddress',
        'dealBackendId',
        'zoneName',
        'status',
        'customerName',
        'shopAreaName',
        'superShopperName',
        'shopName',
        'deliverTime',
        'remainTime',
        'assignShopperTime',
        'buyDone',
        'beginDeliverTime',
        'completeTime',
        'actualDealPrice',
        'dealPrice',
        'contactsName',
        'contactsPhone',
        'shortId'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('deal')
});


// 日期：created
// 订单号：dealBackendId
// 线路:zoneName
// 订单状态：status
// 顾客:customerName
// 中心点:shopAreaName
// 分配买手:superShopperName
// 购买店铺：shopName
// 分配配送员：delivererName
// 下单时间：created
// 期望送达时间:deliverTime
// 剩余时间:remainTime
// 接单时间: assignShopperTime
// 完成购买时间:buyDone
// 出货时间:beginDeliverTime
// 送达时间：completeTime
// 总计：actualDealPrice
