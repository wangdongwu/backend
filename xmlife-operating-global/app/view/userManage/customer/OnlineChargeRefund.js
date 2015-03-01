Ext.define('XMLifeOperating.view.userManage.customer.OnlineChargeRefund', {
    extend: 'Ext.window.Window',
    xtype: 'onlineChargeRefund',
    layout: 'fit',
    title: '在线充值退款',
    modal: true,
    width: 300,
    maxHeight: 500,
    autoScroll: true,
    resizable: false,
    buttonAlign: 'center',
    buttons: [{
        text: '取消',
        handler: function() {
            this.up('window').close();
        }
    }, {
        text: '确定',
        itemId: 'submitRefund'
    }],
    items: [{
        xtype: 'form',
        border: false,
        bodyPadding: 10,
        defaults: {
            anchor: '100%',
            xtype: 'displayfield',
            labelAlign: 'right',
            labelWidth: 90
        },
        items: [{
            fieldLabel: '充值卡批次',
            name: 'batchId',
            itemId: 'batchId',
            renderer: function(value) {
                return '<a href="javascript:;">' + value + '</a>';
            }
        }, {
            fieldLabel: '充值对应余额',
            name: 'batchAmount',
            renderer: XMLifeOperating.ViewUtil.rmbRenderer
        }, {
            fieldLabel: '充值实际支付',
            name: 'batchPrice',
            renderer: XMLifeOperating.ViewUtil.rmbRenderer
        }, {
            fieldLabel: '支付渠道',
            name: 'payWay',
            renderer: function(value) {
                return {
                    '1': '支付宝',
                    '2': '微信'
                }[value];
            }
        }, {
            fieldLabel: '充值时间',
            name: 'rechargeTime',
            renderer: XMLifeOperating.ViewUtil.dateRenderer
        }, {
            fieldLabel: '已退款金额',
            name: 'completedRefundCash',
            renderer: XMLifeOperating.ViewUtil.rmbRenderer
        }, {
            fieldLabel: '处理中的金额',
            name: 'processingRefundCash',
            renderer: XMLifeOperating.ViewUtil.rmbRenderer
        }, {
            fieldLabel: '当前可退',
            name: 'maxRefundCashPermitted',
            renderer: XMLifeOperating.ViewUtil.rmbRenderer
        }, {
            xtype: 'grid',
            margin: '0 10',
            store: Ext.create('Ext.data.Store', {
                fields: ['submitTime', 'cashAmount', 'status']
            }),
            columns: {
                defaults: {
                    align: 'center'
                },
                items: [{
                    text: '退款申请时间',
                    flex: 3,
                    dataIndex: 'submitTime',
                    renderer: XMLifeOperating.ViewUtil.dateRenderer
                }, {
                    text: '余额',
                    flex: 1,
                    dataIndex: 'cashAmount',
                    renderer: XMLifeOperating.ViewUtil.rmbRenderer
                }, {
                    text: '财务处理',
                    flex: 2,
                    dataIndex: 'status',
                    renderer: function(value) {
                        return {
                            '1': '待处理', // 已上报，但是财务尚未处理
                            '2': '处理中', // 财务已处理，但尚未成功
                            '3': '已通过', // 财务已处理，并且成功（包含人工处理，处理成功）
                            '4': '已拒绝', // 财务拒绝退款
                            '5': '已失败' // 退款失败
                        }[value];
                    }
                }]
            }
        }, {
            xtype: 'numberfield',
            name: 'amoutToRefund',
            margin: '10 10',
            emptyText: '请填写退还的人民币金额（元）',
            allowBlank: false,
            minValue: 0.01,
            maxText: '超出用户当前余额'
        }, {
            // 用于提交表单时填充参数
            xtype: 'hidden',
            name: 'chargeId'
        }]
    }]

});
