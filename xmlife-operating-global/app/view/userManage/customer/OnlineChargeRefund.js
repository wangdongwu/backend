Ext.define('XMLifeOperating.view.userManage.customer.OnlineChargeRefund', {
    extend: 'Ext.window.Window',
    xtype: 'onlineChargeRefund',
    layout: 'fit',
    modal: true,
    width: 280,
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
            name: 'batchno',
            itemId: 'batchno'
        }, {
            fieldLabel: '充值对应余额',
            name: 'chargeAmount'
        }, {
            fieldLabel: '充值实际支付',
            name: 'actualPaied'
        }, {
            fieldLabel: '支付渠道',
            name: 'chargeChannel'
        }, {
            fieldLabel: '充值时间',
            name: 'chargeTime'
        }, {
            fieldLabel: '已退款金额',
            name: 'amoutRefunded'
        }, {
            fieldLabel: '处理中的金额',
            name: 'amountInProcess'
        }, {
            fieldLabel: '当前可退',
            name: 'amountAvailable'
            // 服务器端接口还没有齐备，后续补充联调
                // }, {
                //     xtype: 'grid',
                //     store: 'aaa',
                //     columns: {
                //         defaults: {
                //             align: 'center'
                //         },
                //         items: [{
                //             text: '退款申请时间',
                //             dataIndex: 'timeOfApply'
                //         }, {
                //             text: '余额',
                //             dataIndex: 'balance'
                //         }, {
                //             text: '财务处理',
                //             dataIndex: 'operationDetail'
                //         }]
                //     }
        }, {
            xtype: 'numberfield',
            name: 'amoutToRefund',
            margin: '0 0 0 90',
            emptyText: '请填写退还的人民币金额（元）',
            allowBlank: false,
            minValue: 0.01,
            maxText: '超出用户当前余额'
        }]
    }]

});
