var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/tasks');
Ext.define('XMLifeOperating.model.DealTasks', {
    extend: 'Ext.data.Model',
    fields: ['id', 'shopName','shopperName','shopId','taskId','dealId','problem'],
    proxy: dataProxy
});
 

// 订单1：id
// 店铺：shopName
// 分配买手：shopperName