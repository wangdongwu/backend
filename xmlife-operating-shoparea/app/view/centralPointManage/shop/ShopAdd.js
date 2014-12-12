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
    height: 600,
    resizable: false,
    layout: 'fit',
    bodyStyle: 'text-align:center;border-style: none;',
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
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
                afterLabelTextTpl: required,
                fieldLabel: '店铺主名称',
                labelWidth: 90,
                labelAlign: 'right',
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
            }, {
                xtype: 'combo',
                name: 'shopBannerTemplateId',
                fieldLabel: '模板',
                allowBlank: false,
                afterLabelTextTpl: required,
                blankText: '请选择模板',
                labelWidth: 90,
                labelAlign: 'right',
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
                labelAlign: 'right',
                allowBlank: false,
                afterLabelTextTpl: required

            }, {
                xtype: 'textfield',
                name: 'lng',
                fieldLabel: '经度',
                labelWidth: 90,
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required
            }, {
                xtype: 'textfield',
                name: 'lat',
                fieldLabel: '纬度',
                labelWidth: 90,
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required
            }, {
                xtype: 'timefield',
                name: 'openTime',
                fieldLabel: '开始时间',
                labelWidth: 90,
                format: 'H:i',
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required
            }, {
                xtype: 'timefield',
                name: 'closeTime',
                fieldLabel: '结束时间',
                labelWidth: 90,
                format: 'H:i',
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required
            }, {
                xtype: 'radiogroup',
                fieldLabel: '商品是否每日自动上架',
                labelWidth: 160,
                labelAlign: 'right',
                afterLabelTextTpl: required,
                defaults: {
                    flex: 1
                },
                layout: 'hbox',
                items: [{
                    boxLabel: '是',
                    name: 'autoOnline',
                    inputValue: 'true'
                }, {
                    boxLabel: '否',
                    name: 'autoOnline',
                    inputValue: 'false',
                    checked: true
                }]
            }, {
                xtype: 'radiogroup',
                fieldLabel: '是否在首页展示所有商品',
                labelWidth: 160,
                labelAlign: 'right',
                defaults: {
                    flex: 1
                },
                layout: 'hbox',
                items: [{
                    boxLabel: '是',
                    name: 'showAllProducts',
                    inputValue: 'true'
                }, {
                    boxLabel: '否',
                    name: 'showAllProducts',
                    inputValue: 'false',
                    checked: true
                }],
                afterLabelTextTpl: required
            }, {
                xtype: 'radiogroup',
                fieldLabel: '改价是否审核',
                labelWidth: 160,
                labelAlign: 'right',
                defaults: {
                    flex: 1
                },
                layout: 'hbox',
                items: [{
                    boxLabel: '是',
                    name: 'needAuditPrice',
                    inputValue: 'true',
                    checked: true
                }, {
                    boxLabel: '否',
                    name: 'needAuditPrice',
                    inputValue: 'false'
                }],
                allowBlank: false,
                afterLabelTextTpl: required
            }, {
                xtype: 'radiogroup',
                fieldLabel: '是否显示购买过的商品',
                labelWidth: 160,
                defaults: {
                    flex: 1
                },
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required,
                layout: 'hbox',
                items: [{
                    boxLabel: '是',
                    name: 'needUserCollection',
                    inputValue: 'true'                   
                }, {
                    boxLabel: '否',
                    name: 'needUserCollection',
                    inputValue: 'false',
                    checked: true
                }]
            }, {
                xtype: 'fieldset',
                layout: 'column',
                border: false,
                padding: 0,
                items: [{
                    xtype: 'checkbox',
                    itemId: 'copyShopCheckbox',
                    name: 'copyShopCheckbox',
                    handler: function(cmp, value) {
                        if (value) {
                            cmp.nextSibling().setDisabled(false);
                        } else {
                            cmp.nextSibling().setDisabled(true);
                        }
                    }
                }, {
                    xtype: 'textfield',
                    name: 'copyShop',
                    fieldLabel: '复制店铺',
                    labelWidth: 90,
                    disabled: true,
                    /*                        editable: false,*/
                    width: 390,
                    /*                        displayField: 'name',
                        valueField: 'id',*/
                    emptyText: '请输入店铺ID'
                }]
            }],
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
