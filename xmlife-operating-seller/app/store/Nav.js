Ext.define('XMLifeSeller.store.Nav', {
    extend: 'Ext.data.TreeStore',
    config: {
        model: 'XMLifeSeller.model.Nav',
        //proxy: new XMLifeSeller.proxy.Proxy(''),
        defaultRootProperty: 'items',
        root: {
            items: [{
                text: '今日订单',
                items: [{
                    xtype: 'unDealedOrder',
                    text: '未处理订单',
                    leaf: true
                }, {
                    xtype: 'dealedOrder',
                    text: '已处理订单',
                    leaf: true
                }, {
                    text: '退货通报',
                    leaf: true
                }]
            }, {
                text: '历史订单',
                items: [{
                    text: '订单汇总',
                    leaf: true
                }, {
                    text: '促销汇总',
                    leaf: true
                }, {
                    text: '退货汇总',
                    leaf: true
                }]
            }, {
                text: '账务结算',
                items: [{
                    text: '发起结算',
                    items: [{
                    	text: '结算进程表',
                    	leaf: true
                    }, {
                        xtype:'historySettleBill',
                    	text: '历史结算账单',
                    	leaf: true
                    }, {
                    	text: '本期商品销售',
                    	leaf: true
                    }, {
                    	text: '本期促销费用',
                    	leaf: true
                    }, {
                    	text: '本期退货抵扣',
                    	leaf: true
                    }]
                }]
            }, {
                text: '商品管理',
                leaf: true
            }, {
                text: '店铺信息',
                leaf: true
            }]
        }
    }
});
