Ext.define('XMLifeOperating.view.dealManage.DealSuperShopperDetail', {
    extend: 'Ext.window.Window',
    xtype: 'dealSuperShopperDetail',

    closeAction: 'hide',
    modal: true,
    width: 400,
    height: 240,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title: '买手详情',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,

            defaults: {
                anchor: '100%',
                xtype: 'displayfield',
                labelAlign: 'left'
            },
            items: [{
                name: 'superShopperName',
                fieldLabel: '姓名:'
            }, {
                name: 'superShopperPhone',
                fieldLabel: '电话:'
            }],
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