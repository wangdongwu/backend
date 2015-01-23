Ext.define('XMLifeOperating.model.DealTasks', {
    extend: 'Ext.data.Model',
    fields: ['id', 'shopName','shopperName','shopperPhone','shopId','taskId','dealId'],
    proxy: new XMLifeOperating.generic.BaseProxy('deal/tasks')
});
 

// 订单1：id
// 店铺：shopName
// 分配买手：shopperName