Ext.define('XMLifeOperating.view.operationManage.dealCashOnDelivery.DealCashOnDeliveryListEditRemark', {
    extend: 'Ext.window.Window',
    xtype: 'editRemark',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 500,
    height: 250,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,

            items: [{
                xtype: 'textfield',
                name: 'codMarkContent',
                fieldLabel: '备注',
                labelWidth: 90,
                allowBlank: false,
                itemId: 'codeMarkContentId'
            }],
            buttons: [{
                text: '保存',
                itemId: 'save-editRemark-edit-btn'
            }, {
                text: '取消',
                handler: function() {
                    //关闭窗口
                    this.up('window').close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
