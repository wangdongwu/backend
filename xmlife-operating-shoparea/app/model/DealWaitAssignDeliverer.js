var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/waitAssignDeliverer');
Ext.define('XMLifeOperating.model.DealWaitAssignDeliverer', {
    extend: 'Ext.data.Model',
    fields: ['created', 'shortId','districtName','contactsPhone','status','deliverTime','remainTime','dealBackendId','customerName','customerPhone','contactsName','contactsPhone','dtoAddress'],
    proxy: dataProxy
});
 


// 日期：created
// 订单号：shortId
// 小区：districtName
// 收货电话：contactsPhone
// 下单时间：created
// 期望送达时间：deliverTime
// 剩余时间：remainTime
// 订单号显示用shortId，重新分配操作时传dealBackendId