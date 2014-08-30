Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopedit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel'
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 650,
    resizable: false,
    layout: 'fit',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,
            defaults:{
                anchor: '100%'
            },
            itemId: 'shopeditform',
            items: [{
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '店铺主名称',
                    labelWidth: 90,
                    allowBlank: false,
                    maxLength: 4,
                    maxLengthText: '商品名称最大长度为4',
                }, {
                    xtype: 'textfield',
                    name: 'desc',
                    fieldLabel: '店铺副名称',
                    labelWidth: 90,
                    allowBlank: false,
                    maxLength: 14,
                    maxLengthText: '商品名称最大长度为14',
                }, {
                    xtype: 'combo',
                    name: 'shopBannerTemplateId',
                    fieldLabel: '模板',
                    allowBlank: false,
                    blankText: '请选择模板',
                    labelWidth: 90,
                    editable: false,
                    // store: 'Template',
                    displayField: 'name',
                    valueField: 'id',
                    emptyText: "请选择模板"
                }, {
                    xtype: 'textfield',
                    name: 'address',
                    fieldLabel: '地址',
                    labelWidth: 90,
                    allowBlank: false,

                }, {
                    xtype: 'textfield',
                    name: 'lng',
                    fieldLabel: '经度',
                    labelWidth: 90,
                    allowBlank: false,
                }, {
                    xtype: 'textfield',
                    name: 'lat',
                    fieldLabel: '纬度',
                    labelWidth: 90,
                    allowBlank: false,
                }, {
                    xtype: 'timefield',
                    name: 'openTime',
                    fieldLabel: '开始时间',
                    labelWidth: 90,
                    format: 'H:i',
                    allowBlank: false,
                }, {
                    xtype: 'timefield',
                    name: 'closeTime',
                    fieldLabel: '结束时间',
                    labelWidth: 90,
                    format: 'H:i',
                    allowBlank: false,
                }

                /*                {
                    name: 'areaIds',
                    store:'BusinessArea',
                    fieldLabel: '中心',
                    xtype:'gridpanel',
                    itemId:'businessAreaScid',
                    height:150,
                    selModel:Ext.create('Ext.selection.CheckboxModel',{mode:"SIMPLE"}),
                    columns:[
                        {
                            text:'id',
                            dataIndex:'id'
                        },
                        {
                            text:'中心名称',
                            dataIndex:'name'
                        }
                    ],
                     hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
                },*/
                /*{
                    xtype:'fieldset',
                    border:false,
                    padding:0,
                    height:20,
                    items:[
                        
                        {
                            layout:'column',
                            xtype:'fieldset',
                            border:false,
                            padding:0,
                            items:[
                                {
                                    xtype:'radio',
                                    
                                    labelAlign:'left',
                                    name:'beCopyedShopId'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'lat',
                                    fieldLabel: '纬度',
                                    labelWidth: 90,
                                    allowBlank:false,
                                    labelAlign:'left',
                                },
                                {
                                    title:'天气',
                                    height:100,
                                    region:'center',
                                }
                                {
                                    xtype:'radio',
                                    fieldLabel:'复制店铺',
                                    labelAlign:'right',
                                    name:'beCopyedShopId'
                                }
                            ]
                            
                        },
                        {
                            layout:'column',
                            xtype:'fieldset',
                            border:false,
                            padding:0,
                            items:[
                                {
                                    xtype:'radio',
                                    fieldLabel:'新建店铺',
                                    labelAlign:'left',
                                    name:'beCopyedShopId'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'lat',
                                    fieldLabel: '纬度',
                                    labelWidth: 90,
                                    allowBlank:false,
                                    labelAlign:'left',
                                },
                                {
                                    xtype:'radio',
                                    fieldLabel:'复制店铺',
                                    labelAlign:'right',
                                    name:'beCopyedShopId'
                                }
                            ]
                            
                        },
                    ]   
                },
                {
                    xtype:'fieldset',
                    border:false,
                    padding:0,
                    items:[
                        
                        {
                            layout:'column',
                            xtype:'fieldset',
                            border:false,
                            padding:0,
                            items:[
                                {
                                    xtype:'radio',
                                    fieldLabel:'',
                                    labelAlign:'left',
                                    name:'beCopyedShopId'
                                },
                                {
                                    xtype:'textfield',
                                    fieldLabel:'选择复制店铺',
                                    labelAlign:'right',
                                    name:'beCopyedShopId'
                                },
                                {
                                    xtype:'button',
                                    text:'搜索',
                                   
                                    
                                }
                            ]
                            
                        },
                    ]   
                },*/
            ],
            buttons: [{
                text: 'Save',
                itemId: 'save-shopStore-edit-btn'
            }, 
            {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('shopedit')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }


});