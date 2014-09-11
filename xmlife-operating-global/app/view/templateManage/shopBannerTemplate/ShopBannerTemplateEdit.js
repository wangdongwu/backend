/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.templateManage.shopBannerTemplate.ShopBannerTemplateEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopBannerTemplateEdit',
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
                {"value": 1, "type": '农贸市场'},
                {"value": 2, "type": '生活超市'}
            ],
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '商品名称',
                    labelWidth: 90,
                    allowBlank:false,
                    minLength: 2,
                    minLengthText:'商品名称最小长度为2',
                    maxLength: 10,
                    maxLengthText:'商品名称最大长度为10',
                },
                {
                    fieldLabel : '市场类型',
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
                    xtype: 'fieldset',
                    layout: 'column',
                    padding: 0,
                    border: false,
                    items:[
                        {
                            xtype: 'textfield',
                            name: 'logo',
                            fieldLabel: '上传店铺logo',
                            itemId:'logo',
                            labelWidth: 90,
                            readOnly: false,
                        },
                        {
                            xtype: 'form',
                            border: false,
                            margin: '0 30 0 0',
                            items:[
                                {
                                  xtype: 'filefield',
                                  name: 'templateUploadfile',
                                  buttonText: '上传logo',
                                  buttonOnly: true,
                                  hideLabel: true,
                                },
                            ]
                        },
                    ]
                },
                {
                    xtype: 'fieldset',
                    layout: 'column',
                    padding: 0,
                    border: false,
                    items:[
                        {
                            xtype: 'textfield',
                            name: 'inco',
                            fieldLabel: '上传店铺inco',
                            itemId:'inco',
                            labelWidth: 90,
                            readOnly: false,
                        },
                        {
                            xtype: 'form',
                            border: false,
                            margin: '0 30 0 0',
                            items:[
                                {
                                  xtype: 'filefield',
                                  name: 'templateUploadfile',
                                  buttonText: '上传inco',
                                  buttonOnly: true,
                                  hideLabel: true,
                                },
                            ]
                        },
                    ]
                }
            ],
            buttons: [
                {
                    text: '保存',
                    itemId: 'save-template-edit-btn'
                },
                {
                    text: '关闭',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('editTemplate')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

});      
