Ext.define('XMLifeSeller.view.HistoryOrders', {
    extend: 'Ext.tab.Panel',
    requires: [
        'XMLifeSeller.view.historyOrders.DateAndExportToolbar',
        'XMLifeSeller.view.historyOrders.Grid'
    ],
    xtype: 'historyOrders',
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
            title: '订单',
            layout: 'fit',
            gridStoreName: 'HistoryOrders',
            items: [{
                xtype: 'historyOrdersToolbar'
            }, {
                xtype: 'historyOrdersGrid',
                columns: [{
                    text: '商铺名称',
                    dataIndex: 'shopName',
                    width: '20%'
                }, {
                    text: '交付时间',
                    dataIndex: 'deliverTime',
                    width: '20%'
                }, {
                    text: '订单号',
                    dataIndex: 'orderNo',
                    width: '15%'
                }, {
                    text: '销售金额',
                    dataIndex: 'revenue',
                    width: '15%'
                }, {
                    text: '技术服务费',
                    dataIndex: 'techSvcExpense',
                    width: '15%'
                }, {
                    text: '结算金额',
                    dataIndex: 'settlementAmount',
                    width: '15%'
                }]
            }]
        }, {
            title: '促销费用',
            layout: 'fit',
            gridStoreName: 'HistoryPromotions',
            items: [{
                xtype: 'historyOrdersToolbar'
            }, {
                xtype: 'historyOrdersGrid',
                columns: [{
                    text: '商铺名称',
                    dataIndex: 'shopName',
                    width: '30%'
                }, {
                    text: '商品名称',
                    dataIndex: 'productName',
                    width: '30%'
                }, {
                    text: '数量',
                    dataIndex: 'quantity',
                    width: '20%'
                }, {
                    text: '促销费用',
                    dataIndex: 'promotionExpense',
                    width: '20%'
                }]
            }]
        }, {
            title: '退货',
            layout: 'fit',
            gridStoreName: 'HistoryReturns',
            items: [{
                xtype: 'historyOrdersToolbar'
            }, {
                xtype: 'historyOrdersGrid',
                columns: [{
                    text: '商铺名称',
                    dataIndex: 'shopName',
                    width: '15%'
                }, {
                    text: '商品名称',
                    dataIndex: 'productName',
                    width: '15%'
                }, {
                    text: '数量',
                    dataIndex: 'quantity',
                    width: '10%'
                }, {
                    text: '零售金额',
                    dataIndex: 'price',
                    width: '15%'
                }, {
                    text: '技术服务费',
                    dataIndex: 'techSvcExpense',
                    width: '15%'
                }, {
                    text: '促销费用',
                    dataIndex: 'promotionExpense',
                    width: '15%'
                }, {
                    text: '结算金额',
                    dataIndex: 'settlementAmount',
                    width: '15%'
                }]
            }]
        }]
    },

    initialize: function() {
        this.callParent(arguments);
        Ext.Array.forEach((this.getInnerItems() || []), function(item) {
            var exportBtnText = '导出' + item.title + '清单',
                gridStoreName = item.gridStoreName;
            item.down('historyOrdersToolbar > #exportBtn').setText(exportBtnText);
            item.down('historyOrdersGrid > list').setStore(gridStoreName);
        });
    }

});
