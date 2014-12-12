Ext.define('XMLifeSeller.store.UnDealedOrder', {
    extend: 'Ext.data.Store',
    config: {
        model: 'XMLifeSeller.model.UnDealedOrder',
        //proxy: new XMLifeSeller.proxy.Proxy(''),
        data: [
            {shopName: '联华华商', deliverTime: '2014-12-12 10:18:00', orderNo: '100002', price: 10.0, status: '已备货'},
            {shopName: '周黑鸭', deliverTime: '2014-12-12 10:18:00', orderNo: '100002', price: 10.0, status: '已备货'},
            {shopName: '物美超市', deliverTime: '2014-12-12 10:18:00', orderNo: '100002', price: 10.0, status: '已备货'},
            {shopName: '可沙密儿', deliverTime: '2014-12-12 10:18:00', orderNo: '100002', price: 10.0, status: '已备货'},
            {shopName: '一鸣真鲜奶', deliverTime: '2014-12-12 10:18:00', orderNo: '100002', price: 10.0, status: '已备货'}
        ]
    }   
});
