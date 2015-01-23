Ext.define('XMLifeOperating.view.operationManage.dealProblemDeals.DealProblemDealsReapportion', {
    extend: 'Ext.window.Window',
    xtype: 'reapportion',
    closeAction: 'hide',
    modal: true,
    width: 650,
    maxHeight: 500,
    autoScroll: true,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title: '问题订单重新分配',
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
                name: 'customerName',
                fieldLabel: '顾客'
            }, {
                xtype: 'displayfield',
                name: 'customerPhone',
                fieldLabel: '顾客电话'
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
                        dataIndex: 'problem',
                        width: 76,
                        renderer: function(value) {
                            switch (value) {
                                case 0:
                                    return '正常单';
                                case 1:
                                    return '分配失败';
                                case 2:
                                    return '超时，未打开';
                                case 3:
                                    return '超时，未购买完成';
                                case 4:
                                    return '超时，未送达';
                                case 5:
                                    return '人工置为问题单';
                                default:
                                    return '未定义原因';
                            }
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
                    // 听说配送员不会再出现了
                    // }, {
                    //     xtype: 'fieldset',
                    //     labelWidth: 400,
                    //     border: false,
                    //     bodyPadding: 0,
                    //     items: [{
                    //         layout: 'column',
                    //         xtype: 'fieldset',
                    //         border: false,
                    //         padding: 10,
                    //         items: [{
                    //             xtype: 'displayfield',
                    //             fieldLabel: '配送员名字',
                    //             labelWidth: 100,
                    //             name: 'delivererName',
                    //         }, {
                    //             xtype: 'displayfield',
                    //             fieldLabel: '线路',
                    //             labelWidth: 100,
                    //             Padding: 20,
                    //             name: 'zoneName',
                    //         }, {
                    //             xtype: 'label',
                    //             width: 80,
                    //             bodyPadding: 20,
                    //             itemId: 'reapportionDeliverer',
                    //             html: '<a>重新分配</a>',
                    //             listeners: {
                    //                 render: function(c) {
                    //                     c.getEl().on('click', function() {
                    //                         this.fireEvent('click', c);
                    //                     }, c);
                    //                 }
                    //             }
                    //         }]
                    //     }]
            }],
        }];
        this.callParent(arguments);
    }
});
