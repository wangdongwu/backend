/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shopTopShops.ShopShopGroupEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopShopGroupEdit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 500,
    height: 450,
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
                    name: 'ShopShopGroupAddIds',
                    store:'ShopShopGroupAdd',
                    allowBlank: false,
                    fieldLabel: '展示店铺',
                    xtype:'gridpanel',
                    itemId:'ShopShopGroupAddId',

                    height:150,
                    selModel:Ext.create('Ext.selection.CheckboxModel',{mode:"MULTI"}),
                    columns:[
                        {
                            text:'店铺id',
                            dataIndex:'id'
                        },
                        {
                            text:'店铺名称',
                            dataIndex:'name'
                        }
                    ],
                },
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-shopShopGroup-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('shopShopGroupEdit')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

});      
