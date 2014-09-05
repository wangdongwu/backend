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
            
            items: [
                {
                    xtype: 'textfield',
                    name: 'codMarkContent',
                    fieldLabel: '备注',
                    labelWidth: 90,
                    allowBlank:false,
                    itemId:'codeMarkContentId'
                    /*maxLength: 10,
                    maxLengthText:'商品名称最大长度为1',*/
                },
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-editRemark-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('editRemark')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

});      
