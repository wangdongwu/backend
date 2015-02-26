Ext.define('XMLifeOperating.view.msgManage.ViewReceipt', {
    extend: 'Ext.window.Window',
    xtype: 'viewReceipt',
    title: '查看回执',
    closeAction: 'hide',
    modal: true,
    width: 320,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            bodyBorder: false,
            layout: 'anchor',
            bodyPadding: '10 15',
            buttonAlign: 'center',
            defaults: {
                anchor: '98%',
                margin: '8 0'
            },
            items: [{
                xtype: 'displayfield',
                name: 'total',
                fieldLabel: '发送'
            }, {
                xtype: 'displayfield',
                name: 'ios',
                fieldLabel: 'IOS送达'
            }, {
                xtype: 'displayfield',
                name: 'android',
                fieldLabel: '安卓送达'
            }],
            buttons: [{
                text: '知道了',
                handler: function() {
                    this.up('window').close();
                }
            }]
        }];

        this.callParent(arguments);
    }
});
