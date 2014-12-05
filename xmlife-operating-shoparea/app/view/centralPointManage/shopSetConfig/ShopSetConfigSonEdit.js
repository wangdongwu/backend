Ext.define('XMLifeOperating.view.centralPointManage.shopSetConfig.ShopSetConfigSonEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopSetConfigSonEdit',

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
                    fieldLabel : '店铺链接',
                    labelWidth: 80,
                    itemId:'gainOpenShopsId',
                    name : 'shopId',
                    allowBlank : false,
                    xtype : 'combo',
                    editable : false,
                    queryMode : 'local',
                    triggerAction : 'all',
                    displayField: 'name',
                    valueField: 'id',
                    allowBlank:false              
                },
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
