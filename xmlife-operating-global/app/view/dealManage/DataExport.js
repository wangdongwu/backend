Ext.define('XMLifeOperating.view.dealManage.DataExport', {
    extend: 'Ext.tab.Panel',
    layout: 'fit',
    closable: true,
    alias: 'widget.DataExport',
    xtype: 'DataExport',
    id: 'DataExport',
    autoScroll: true,
    title: '订单中心',
    tabPosition: 'top',
    initComponent: function() {
        this.items = [{
            xtype: 'AccountSales',
            itemId:'accountSales',
            disabled: true
        }, {
            xtype: 'DamagedAddSalesDefeat',
            itemId:'damagedAddSalesDefeat',
            disabled: true
        }, {
            xtype: 'DealSales',
            itemId:'dealSales',
            disabled: true
        }, {
            xtype: 'CustomerSales',
            itemId:'customerSales',
            disabled: true
        }, {
            xtype: 'RechargeableCardSales',
            itemId:'rechargeableCardSales',
            disabled: true
        }];
        this.callParent(arguments);
    }
});
