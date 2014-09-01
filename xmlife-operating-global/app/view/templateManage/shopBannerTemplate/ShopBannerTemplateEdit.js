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
            frame: true,
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
                            name: 'banner',
                            fieldLabel: '上传图片',
                            itemId:'picture',
                            labelWidth: 90,
                            
                            readOnly: false,
                        },
                        {
                            xtype: 'form',
                            border: false,
                            itemId:'adf',
                            margin: '0 30 0 0',
                            items:[
                                {
                                    xtype: 'filefield',
                                    name: 'templateUploadfile',
                                    buttonOnly: true,
                                    hideLabel: true,
                                },
                            ]
                        },
                    ]
                },
                {
                    xtype: 'textfield',
                    name: 'descColor',
                    fieldLabel: '大标题 argb',
                    labelWidth: 90,
                    allowBlank:false,
                    regex:/^[0-9a-fA-F]{8}$/,
                    regexText: '请输入8位0-9a-fA-F的字母或数字',
                },
                {
                    xtype: 'textfield',
                    name: 'descStrokeColor',
                    fieldLabel: '大标题 Stroke argb',
                    labelWidth: 90,
                    allowBlank:false,
                    regex:/^[0-9a-fA-F]{8}$/,
                    regexText: '请输入8位0-9a-fA-F的字母或数字',
                },
                {
                    xtype: 'textfield',
                    name: 'descDegree',
                    fieldLabel: '大标题投影角度',
                    labelWidth: 90,
                    allowBlank:false,
                    
                },
                {
                    xtype: 'textfield',
                    name: 'nameColor',
                    fieldLabel: '小标题argb',
                    labelWidth: 90,
                    allowBlank:false,
                    regex:/^[0-9a-fA-F]{8}$/,
                    regexText: '请输入8位0-9a-fA-F的字母或数字',
                },
                {
                    xtype: 'textfield',
                    name: 'nameStrokeColor',
                    fieldLabel: '小标题 Stroke argb',
                    labelWidth: 90,
                    allowBlank:false,
                    regex:/^[0-9a-fA-F]{8}$/,
                    regexText: '请输入8位0-9a-fA-F的字母或数字',
                },
                {
                    xtype: 'textfield',
                    name: 'nameDegree',
                    fieldLabel: '小标题投影角度',
                    labelWidth: 90,
                    allowBlank:false,
                   
                   
                },
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-template-edit-btn'
                },
                {
                    text: 'Cancel',
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
