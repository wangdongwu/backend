Ext.define('XMLifeOperating.view.damagedGoodsManage.CManagerDetail', {
    extend: 'Ext.window.Window',
    xtype: 'cManagerDetail',

    closeAction: 'hide',
    modal: true,
    width: 400,
    height: 240,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title: '掌柜详情',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,

            defaults: {
                anchor: '100%',
                xtype: 'displayfield',
                labelAlign: 'left'
            },
            items: [{
                name: 'name',
                fieldLabel: '姓名:'
            }, {
                name: 'phone',
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
