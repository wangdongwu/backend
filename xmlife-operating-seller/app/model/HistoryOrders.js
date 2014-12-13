Ext.define('XMLifeSeller.model.HistoryOrders', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['shopName', 'deliverTime', 'orderNo', 'revenue', 'techSvcExpense', 'settlementAmount']
    }
});
