var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/cashOnDelivery');
Ext.define('XMLifeOperating.model.DealCashOnDelivery', {
    extend: 'Ext.data.Model',
    fields: ['id', 'created','dealBackendId','shortId','shopAreaName','zoneName','customerName','customerPhone','delivererName','actualDealPrice','dtoAddress','hasCancel','hasReturn','codMark','codMarkContent','codAmt','balance','cancelPrice','returnPrice','codProblemMark'],
    proxy: dataProxy,
});

//actualDealPrice 订单金额
//dealPrice  包含运费的订单金额
//dtoAddress 顾客订单的地址
//"hasReturn": false,  是否有退货
//"hasCancel": false,  是否取消订单
//banlance 使用账户余额
//线下应收codAmt
//备注：codeMarkContent
//标记codMark：true
// 取消金额：cancelPrice
//退款金额：returnPrice