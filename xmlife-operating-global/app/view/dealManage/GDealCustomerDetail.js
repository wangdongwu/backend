Ext.define('XMLifeOperating.view.dealManage.GDealCustomerDetail', {
    extend: 'Ext.window.Window',
    xtype: 'gDealCustomerDetail',

    closeAction: 'hide',
    modal: true,
    width: 400,
    height: 240,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title: '收货人详情',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,
            defaults: {
                anchor: '100%',
                xtype: 'displayfield',
                labelAlign: 'left'
            },
            items: [{
                name: 'contactsName',
                fieldLabel: '姓名:'
            }, {
                name: 'contactsPhone',
                fieldLabel: '电话:'
            }, {
                name: 'dtoAddress',
                fieldLabel: '地址'
            }, ],
            buttons: [{
                text: '知道了',
                labelAlign: 'center',
                handler: function() {
                    this.up('window').close();
                }
            }]
        }];
        this.callParent(arguments);
    }
});