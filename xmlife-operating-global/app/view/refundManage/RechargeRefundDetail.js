Ext.define('XMLifeOperating.view.refundManage.RechargeRefundDetail', {
    extend: 'Ext.window.Window',
    xtype: 'rechargeRefundDetail',
    title: '在线充值退款',
    closeAction: 'hide',
    modal: true,
    width: 500,
    maxHeight: 500,
    autoScroll: true,
    resizable: false,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            itemId: 'dealForm',
            bodyPadding: '10 15 20 15',
            border: false,
            buttonAlign: 'center',
            items: [{
                xtype: 'checkboxgroup',
                columns: 1,
                vertical: true,
                defaults: {
                    margin: '2 0',
                    labelWidth: 85,
                    labelAlign: 'right'
                },
                items: [{
                    xtype: 'displayfield',
                    name: 'batchId',
                    fieldLabel: '充值卡批次',
                    itemId: 'batchId',
                    renderer: function(value) {
                        return '<a href="javascript:;">' + value + '</a>';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'batchAmount',
                    fieldLabel: '充值对应余额',
                    renderer: function(value){
                        return value/100 + '元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'batchPrice',
                    fieldLabel: '充值实际支付',
                    renderer: function(value){
                        return value/100 + '元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'payWay',
                    fieldLabel: '支付渠道',
                    renderer: function(value){
                        var data = {
                            '1': '支付宝',
                            '2': '微信'
                        };
                        return data[value];

                    }
                }, {
                    xtype: 'displayfield',
                    name: 'rechargeTime',
                    fieldLabel: '充值时间',
                    renderer: function(value){
                        return Ext.util.Format.date(new Date(parseInt(value)), "Y-m-d");
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'completedRefundCash',
                    // fieldLabel: '未到账余额'
                    fieldLabel: '已退款金额',
                    renderer: function(value){
                        return value/100 + '元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'processingRefundCash',
                    // fieldLabel: '当前余额'
                    fieldLabel: '处理中的金额',
                    renderer: function(value){
                        return value/100 + '元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'maxRefundCashPermitted',
                    fieldLabel: '当前可退',
                    renderer: function(value){
                        return value/100 + '元';
                    }
                }, {
                    xtype: 'grid',
                    store: Ext.create('Ext.data.Store',{
                        fields: ['submitTime', 'cashAmount', 'status']
                    }),
                    columns: {
                        defaults: {
                            align: 'center'
                        },
                        items: [{
                            text: '退款申请时间',
                            dataIndex: 'submitTime',
                            renderer: function(value){
                                return Ext.util.Format.date(new Date(parseInt(value)), "Y-m-d");
                            }
                        }, {
                            text: '余额',
                            dataIndex: 'cashAmount',
                            renderer: function(value){
                                return value/100 + '元';
                            }
                        }, {
                            text: '状态',
                            dataIndex: 'status',
                            renderer: function(value){
                                var data = {
                                    '1': '待处理',
                                    '2': '处理中',
                                    '3': '处理成功',
                                    '4': '拒绝',
                                    '5': '处理失败'
                                };
                                return data[value];
                            }
                        }]
                    }
                }]
            }],
            buttons: [{
                text: '关闭',
                handler: function() {
                    this.up('window').close();
                }
            }]
        }];

        this.callParent(arguments);
    }
});
