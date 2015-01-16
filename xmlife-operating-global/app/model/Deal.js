Ext.define('XMLifeOperating.model.Deal', {
    extend: 'Ext.data.Model',
    fields: [
        'created',         // 下单时间
        'customId',
        'dtoAddress',
        'dealBackendId',   // 订单号
        'zoneName',        // 线路
        'status',          // 订单状态
        'customerName',    // 顾客
        'customerPhone',   // 顾客电话
        'shopAreaName',    // 中心点
        'shopperNames',    // 可用买手(数组)
        'superShopperName',// 分配买手
        'shopNames',       // 购买店铺
        'assignSuperShopperTime', // 接单时间
        'deliverTime',     // 期望送达时间
        'remainTime',      // 剩余时间
        'taskDone',        // 完成购买时间(数组)
        'beginDeliverTime',// 出货时间
        'completeTime',    // 送达时间
        'actualDealPrice', // 总计
        'dealPrice',
        'contactsName',
        'contactsPhone',
        'shortId'
    ]
});
