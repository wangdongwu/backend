Ext.define('XMLifeSeller.store.HistoryPromotions', {
    extend: 'Ext.data.Store',
    config: {
        model: 'XMLifeSeller.model.HistoryPromotions',
        data: [{
            shopName: '联华华商',
            productName: '好酒',
            quantity: 433,
            promotionExpense: 200
        }, {
            shopName: '周黑鸭',
            productName: '好肉',
            quantity: 105,
            promotionExpense: 200
        }, {
            shopName: '物美超市',
            productName: '好米饭',
            quantity: 63,
            promotionExpense: 200
        }]
    }
});
