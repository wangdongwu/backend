Ext.define('XMLifeSeller.store.HistoryReturns', {
    extend: 'Ext.data.Store',
    config: {
        model: 'XMLifeSeller.model.HistoryReturns',
        data: [{
            shopName: '联华华商',
            productName: '好酒',
            quantity: 433,
            price: 180,
            techSvcExpense: 12,
            promotionExpense: 22,
            settlementAmount: 68
        }, {
            shopName: '周黑鸭',
            productName: '好肉',
            quantity: 433,
            price: 180,
            techSvcExpense: 12,
            promotionExpense: 22,
            settlementAmount: 68
        }, {
            shopName: '物美超市',
            productName: '好米饭',
            quantity: 433,
            price: 180,
            techSvcExpense: 12,
            promotionExpense: 22,
            settlementAmount: 68
        }]
    }
});
