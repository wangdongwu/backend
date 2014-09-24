var dataProxy = new XMLifeOperating.generic.BaseProxy('deal');
Ext.define('XMLifeOperating.model.Deal', {
    extend: 'Ext.data.Model',
    fields: [
    'created',
    'customId',
    'dtoAddress',
    'dealBackendId',
    'zoneName',
    'districtName',
    'status',
    'customerName',
    'customerPhone',
    'shopAreaName',
    'shopperNames',
    'shopNames',
    'delivererName',
    'deliverTime',
    'remainTime',
    'taskDone',
    'beginDeliverTime',
    'completeTime',
    'actualDealPrice',
    'dealPrice',
    'shortId'],
    proxy: dataProxy
});
 

// 日期：created
// 订单号：dealBackendId
// 线路:zoneName
// 订单状态：status
// 顾客:customerName
// 顾客电话:customerPhone
// 中心点:shopAreaName
// 分配买手:shopperNames(数组)
// 购买店铺：shopNames（数组）
// 分配配送员：delivererName
// 下单时间：created
// 期望送达时间:deliverTime
// 剩余时间:remainTime
// 完成购买时间:taskDone(数组)
// 出货时间:beginDeliverTime
// 送达时间：completeTime
// 总计：actualDealPrice
