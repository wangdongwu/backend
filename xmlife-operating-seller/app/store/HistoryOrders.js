Ext.define('XMLifeSeller.store.HistoryOrders', {
    extend: 'Ext.data.Store',
    config: {
        model: 'XMLifeSeller.model.HistoryOrders',
        data: [{
            shopName: '联华华商',
            deliverTime: '2014-12-12 10:18:00',
            orderNo: '100002',
            revenue: 80,
            techSvcExpense: 12,
            settlementAmount: 68
        }, {
            shopName: '周黑鸭',
            deliverTime: '2014-12-12 10:18:00',
            orderNo: '100002',
            revenue: 80,
            techSvcExpense: 12,
            settlementAmount: 68
        }, {
            shopName: '物美超市',
            deliverTime: '2014-12-12 10:18:00',
            orderNo: '100002',
            revenue: 80,
            techSvcExpense: 12,
            settlementAmount: 68
        }, {
            shopName: '可沙密儿',
            deliverTime: '2014-12-12 10:18:00',
            orderNo: '100002',
            revenue: 80,
            techSvcExpense: 12,
            settlementAmount: 68
        }, {
            shopName: '一鸣真鲜奶',
            deliverTime: '2014-12-12 10:18:00',
            orderNo: '100002',
            revenue: 80,
            techSvcExpense: 12,
            settlementAmount: 68
        }]
    }
});
