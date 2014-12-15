Ext.define('XMLifeSeller.view.currentOrder.UnDealedOrder', {
    extend: 'Ext.tab.Panel',
    xtype: 'unDealedOrder',
    config: {
        tabBar: {
            ui: 'neutral',
            layout: {
                pack: 'center'
            }
        },
        layout: {
            type: 'card',
            animation: 'slide'
        },
        defaults: {
            styleHtmlContent: true,
            scrollable: true
        },
        items: [{
            title: '未处理订单',
            layout: 'fit',
            items: [{
                xtype: 'list',
                docked: 'top',
                height: 40,
                html: '<div style="line-height:40px;font-size:14px;font-weight:bold;"><span style="display:inline-block;padding-left:25px;width:25%">商铺名称</span><span style="display:inline-block;width:25%">期望送达时间</span><span style="display:inline-block;width:20%">订单号</span><span style="display:inline-block;width:15%">销售价格</span><span style="display:inline-block;width:15%">状态</span></div>'
            }, {
                xtype: 'list',
                indexBar: true,
                store: 'UnDealedOrder',
                itemTpl: '<div><span style="display:inline-block;padding-left:10px;width:25%">{shopName}</span><span style="display:inline-block;width:25%">{deliverTime}</span><span style="display:inline-block;width:20%">{orderNo}</span><span style="display:inline-block;width:15%">{price}</span><span style="display:inline-block;width:15%">{status}</span></div>'
            }]
        }, {
            title: '已处理订单',
            html: '已处理订单 content!'
        }, {
            title: '退货通报',
            html: '退货通报 content!'
        }]
    }
});
