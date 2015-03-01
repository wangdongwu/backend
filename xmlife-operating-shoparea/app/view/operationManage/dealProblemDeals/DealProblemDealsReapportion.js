Ext.define('XMLifeOperating.view.operationManage.dealProblemDeals.DealProblemDealsReapportion', {
    extend: 'Ext.window.Window',
    xtype: 'reapportion',
    closeAction: 'hide',
    modal: true,
    width: 675,
    maxHeight: 500,
    autoScroll: true,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title: '订单重新分配',
            itemId: 'dealForm',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,
            defaults: {
                anchor: '100%',
                labelAlign: 'left'
            },
            items: [{
                xtype: 'displayfield',
                name: 'id',
                fieldLabel: '订单号'
            }, {
                xtype: 'displayfield',
                name: 'created',
                fieldLabel: '下单时间',
                renderer: function(value) {
                    return Ext.Date.format(new Date(parseInt(value)), 'H:i');
                }
            }, {
                xtype: 'displayfield',
                name: 'deliverTime',
                fieldLabel: '期望送达时间',
                renderer: function(value) {
                    return Ext.Date.format(new Date(parseInt(value)), 'm-d H:i');
                }
            }, {
                xtype: 'displayfield',
                name: 'contactsName',
                fieldLabel: '收货人'
            }, {
                xtype: 'displayfield',
                name: 'contactsPhone',
                fieldLabel: '收货人电话'
            }, {
                xtype: 'displayfield',
                name: 'dtoAddress',
                fieldLabel: '送货地址'
            }, {
                name: 'dealTasks',
                store: 'DealTasks',
                fieldLabel: '订单',
                xtype: 'gridpanel',
                itemId: 'dealTasks',
                columns: [{
                        text: '订单号',
                        width: 150,
                        dataIndex: 'id'
                    }, {
                        text: '店铺',
                        dataIndex: 'shopName'
                    }, {
                        text: '分配买手',
                        dataIndex: 'shopperName'
                    }, {
                        text: '买手电话',
                        dataIndex: 'shopperPhone'
                    }, {
                        text: '问题原因',
                        width: 102,
                        renderer: function(value, md, record, rowIndex, colIndex, store, view) {
                            return view.up('window').problemText;
                         }
                    }, {
                        text: '操作',
                        align: 'center',
                        itemId: 'reapportionShopper',
                        sortable: false,
                        renderer: function() {
                            return '<a href="javascript:;">重新分配</a>';
                        }
                    }]
            }]
        }];
        this.callParent(arguments);
    }
});
