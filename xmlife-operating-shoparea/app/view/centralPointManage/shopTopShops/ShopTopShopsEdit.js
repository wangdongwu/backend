/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shopTopShops.ShopTopShopsEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopTopShopsEdit',
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
        var typeStore = Ext.create('Ext.data.Store', {
            fields: ['value','type'],
            data : [
                {"value": 0, "type": '5'},
                {"value": 1, "type": '6'}
            ],
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [
                
                {
                    fieldLabel : '展示店铺分类',
                    labelWidth: 90,
                    store : typeStore,
                    name : 'type',
                    allowBlank : false,
                    xtype : 'combo',
                    editable : false,
                    queryMode : 'local',
                    triggerAction : 'all',
                    displayField: 'type',
                    valueField: 'value',
                    allowBlank:false                  
                },
                {
                    name: 'shopTopShopsAddIds',
                    store:'ShopTopShopsAdd',
                    allowBlank: false,
                    fieldLabel: '展示店铺',
                    xtype:'gridpanel',
                    itemId:'shopTopShopsAddId',

                    height:150,
                    selModel:Ext.create('Ext.selection.CheckboxModel',{mode:"SINGLE"}),
                    columns:[
                        {
                            text:'uid',
                            dataIndex:'id'
                        },
                        {
                            text:'配送员姓名',
                            dataIndex:'name'
                        },
                        {
                            text:'手机号',
                            dataIndex:'phone'
                        },
                    ],
                },
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-shopTopShops-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('shopTopShopsEdit')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

});      
