Ext.define('XMLifeOperating.view.centralPointManage.shopSetConfig.ShopSetConfigEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopSetConfigEdit',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    
    closeAction: 'hide',
    modal: true,
    width: 350,
    height: 250,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            defaults: {
                anchor: '100%'
            },
            items: [{
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '店铺集合名',
                    labelWidth: 90,
                    allowBlank: false
                }
            ],
            buttons: [{
                text: 'Save',
                itemId: 'saveBtn'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    this.up('window').close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
