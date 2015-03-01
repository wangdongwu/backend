Ext.define('XMLifeOperating.view.userManage.customer.CustomerDeductBalance', {
    extend: 'Ext.window.Window',
    xtype: 'customerDeductBalance',
    title: '减扣余额',
    closeAction: 'hide',
    modal: true,
    width: 180,
    resizable: false,
    layout: 'fit',
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        border: false,
        bodyPadding: 10,
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '当前余额',
            name: 'balance',
            labelWidth: 70,
            style: 'text-align:left',
            renderer: XMLifeOperating.ViewUtil.rmbRenderer
        }, {
            xtype: 'numberfield',
            name: 'amount',
            emptyText: '减扣数量',
            allowBlank: false,
            minValue: 0.01,
            maxText: '超出用户当前余额'
        }, {
            // 从列表中读取uid用于submit
            xtype: 'hidden',
            name: 'uid'
        }]
    }],
    buttons: [{
        text: '取消',
        handler: function() {
            this.up('window').close();
        }
    }, {
        text: '确定',
        itemId: 'submitDeduct'
    }]
});
