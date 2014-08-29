var dataProxy = new XMLifeOperating.generic.BaseProxy('realTime');
Ext.define('XMLifeOperating.model.RealTime', {
    extend: 'Ext.data.Model',
    fields: ['zoneName', 'waitPickUps','problemDeals'],
    proxy: dataProxy
});
 

// 订单1：id
// 店铺：shopName
// 分配买手：shopperName