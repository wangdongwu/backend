Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopAdd', {
    extend: 'Ext.window.Window',
    xtype: 'shopadd',
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
    bodyStyle: 'text-align:center;border-style: none;',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,
            defaults: {
                anchor: '100%'
            },
            itemId: 'shopeditform',
            items: [{
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '店铺主名称',
                    labelWidth: 90,
                    allowBlank: false,
                    validator: function(value) {
                        var value = value;
                        var length = 0;
                        for (var i = 0, len = value.length; i < len; i++) {
                            var chart = value.charCodeAt(i);
                            if (chart >= 0 && chart <= 255) {
                                length = length + 1;
                            } else {
                                length = length + 2;
                            }
                        }
                        if (length > 24) {
                            return '店铺主名称最大长度为12个汉字或24个字母'
                        } else {
                            return true
                        }
                    }
                },/* {
                    xtype: 'textfield',
                    name: 'desc',
                    fieldLabel: '店铺副名称',
                    labelWidth: 90,
                    allowBlank: false,
                    validator: function(value) {
                        var value = value;
                        var length = 0;
                        for (var i = 0, len = value.length; i < len; i++) {
                            var chart = value.charCodeAt(i);
                            if (chart >= 0 && chart <= 255) {
                                length = length + 1;
                            } else {
                                length = length + 2;
                            }
                        }
                        if (length > 40) {
                            return '店铺副名称最大长度为20个汉字或40个字母'
                        } else {
                            return true
                        }
                    }
                },*/ {
                    xtype: 'combo',
                    name: 'shopBannerTemplateId',
                    fieldLabel: '模板',
                    allowBlank: false,
                    blankText: '请选择模板',
                    labelWidth: 90,
                    editable: false,
                    mode: 'local',
                    store: 'ShopBannerTemplate',
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
                    allowBlank: false
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
                },{
                    xtype:'radiogroup',
                    fieldLabel:'商品是否每日自动上架',
                    labelWidth: 130,
                    defaults:{
                        flex:1
                    },
                    layout:'hbox',
                    items:[{
                        boxLabel:'是',
                        name:'autoOnline',
                        inputValue:'true'
                    },{
                        boxLabel:'否',
                        name:'autoOnline',
                        inputValue:'false',
                        checked:true
                    }]
                }
            ],
            buttons: [{
                text: 'Save',
                itemId: 'save-shopStore-edit-btn'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('shopadd')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }


});