Ext.define('XMLifeSeller.model.HistoryReturns', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['shopName', 'productName', 'quantity', 'price', 'techSvcExpense', 'promotionExpense', 'settlementAmount']
    }
});
