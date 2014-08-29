Ext.define('XMLifeOperating.store.Navigation', {
    requires: [
        'Ext.grid.*',
        'Ext.data.TreeStore',
    ],
    extend: 'Ext.data.TreeStore',
    fields: ['id', 'text', 'code', 'leaf'],
    autoLoad: true,
    root: {
        text: 'Root',
        expanded: true,
        children: [{
            id: 'centralPointManage',
            text: '中心管理',
            leaf: false,
            expanded: true,
            children: [{
                id: 'shop',
                text: '店铺管理',
                leaf: true
            }, {
                id: 'deliverAddress',
                text: '配送地址管理',
                leaf: true
            }, {
                id: 'lineList',
                text: '线路管理',
                leaf: true
            }]
        }, {
            id: 'operateManage',
            text: '操作管理',
            left: false,
            expanded: true,
            children: [{
                id: 'centerReceiveList',
                text: '货到中心管理',
                leaf: true
            }, {
                id: 'problemDealsList',
                text: '问题订单管理',
                leaf: true
            }, {
                id: 'realTimeList',
                text: '数据中心',
                leaf: true
            }, {
                id: 'cashOnDeliveryList',
                text: '货到付款管理',
                leaf: true
            }, {
                id: 'refundList',
                text: '退款管理',
                leaf: true
            }, {
                id: 'refundHistoryList',
                text: '退款订单查询',
                leaf: true
            }]
        }, {
            id: 'staffManage',
            text: '员工管理',
            leaf: false,
            expanded: true,
            children: [{
                id: 'shopperList',
                text: '买手管理',
                leaf: true
            }, {
                id: 'courierList',
                text: '配送员管理',
                leaf: true
            }]
        }, {
            id: 'customerManage',
            text: '用户管理',
            leaf: false,
            children: [{
                id: 'customerList',
                text: '用户信息管理',
                leaf: true
            }, {
                id: 'feedbackResource',
                text: '用户反馈管理',
                leaf: true
            }]
        }, {
            id: 'orderList',
            text: '订单管理',
            leaf: true
        }]
    }
});