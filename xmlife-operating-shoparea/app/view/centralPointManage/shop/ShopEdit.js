Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopedit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.selection.CheckboxModel'
    ],
    bodyStyle: 'text-align:center;border-style: none;',
    width: 450,
    buttonAlign: 'center',
    autoScroll: false,
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            frame: true,
            defaults: {
                anchor: '100%'
            },
            itemId: 'shopeditform',
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: '店铺名称',
                flex: 1,
                labelWidth: 90,
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required,
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
                blankText: '请选择模板',
                flex: 1,
                allowBlank: false,
                labelWidth: 90,
                labelAlign: 'right',
                afterLabelTextTpl: required,
                editable: false,
                store: 'ShopBannerTemplate',
                queryMode:'remote',
                displayField: 'name',
                valueField: 'id',
                emptyText: "请选择模板"
            }, {
                xtype: 'textfield',
                name: 'address',
                fieldLabel: '地址',
                flex: 1,
                labelWidth: 90,
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required,
                minLength: 2,
                minLengthText: '商品名称最小长度为2',
                maxLength: 10,
                maxLengthText: '商品名称最大长度为10'
            }, {
                xtype: 'textfield',
                name: 'lng',
                fieldLabel: '经度',
                labelWidth: 90,
                flex: 1,
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required,
                minLength: 2,
                minLengthText: '商品名称最小长度为2',
                maxLength: 10,
                maxLengthText: '商品名称最大长度为10'
            }, {
                xtype: 'textfield',
                name: 'lat',
                fieldLabel: '纬度',
                flex: 1,
                labelWidth: 90,
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required,
                minLength: 2,
                minLengthText: '商品名称最小长度为2',
                maxLength: 10,
                maxLengthText: '商品名称最大长度为10'
            }, {
                xtype: 'timefield',
                name: 'openTimeText',
                fieldLabel: '开始时间',
                labelWidth: 90,
                flex: 1,
                format: 'H:i',
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required
            }, {
                xtype: 'timefield',
                name: 'closeTimeText',
                fieldLabel: '结束时间',
                labelWidth: 90,
                flex: 1,
                format: 'H:i',
                allowBlank: false,
                labelAlign: 'right',
                afterLabelTextTpl: required
            }, {
                xtype: 'radiogroup',
                fieldLabel: '商品是否每日自动上架',
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
                    name: 'autoOnline',
                    inputValue: 'true'
                }, {
                    boxLabel: '否',
                    name: 'autoOnline',
                    inputValue: 'false'
                }]
            }, {
                xtype: 'radiogroup',
                fieldLabel: '首页展示所有商品',
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
                    name: 'showAllProducts',
                    inputValue: 'true'
                }, {
                    boxLabel: '否',
                    name: 'showAllProducts',
                    inputValue: 'false'
                }],
            }, {
                xtype: 'radiogroup',
                fieldLabel: '改价是否审核',
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
                    name: 'needAuditPrice',
                    inputValue: 'true'
                }, {
                    boxLabel: '否',
                    name: 'needAuditPrice',
                    inputValue: 'false'
                }]
            },{
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
                    inputValue: 'false'
                }]
            }],
            buttons: [{
                xtype: 'button',
                text: '修改',
                itemId: 'modifyShopStoreInfo'
            }, {
                xtype: 'button',
                text: '返回',
                handler: function() {
                    Ext.ComponentQuery.query('shopedit')[0].close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});