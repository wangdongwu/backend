Ext.define('XMLifeSeller.view.currentOrder.DealedOrder', {
    extend: 'Ext.Panel',
    xtype: 'dealedOrder',
    config: {
        scrollable: true,
        defaults: {
            docked: 'top'
        },
        items: [{
            xtype: 'titlebar',
            title: '已处理订单'
        }, {
            styleHtmlContent: true,
            html: '已处理订单 content!'
        }]
    }
});
