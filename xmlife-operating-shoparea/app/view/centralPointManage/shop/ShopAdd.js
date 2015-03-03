Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopAdd', {
    extend: 'Ext.window.Window',
    xtype: 'shopadd',
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 600,
    resizable: false,
    layout: 'fit',
    bodyStyle: 'text-align:center;border-style: none;',
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        var showstore = Ext.create('Ext.data.Store', {
            fields: ['value', 'name'],
            data: [{
                'value': 0,
                'name': '系统默认展示'
            }, {
                'value': 1,
                'name': '一级分类全部展示'
            }, {
                'value': 2,
                'name': '二级分类全部展示'
            }, {
                'value': 3,
                'name': '三级分类全部展示'
            }]
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,
            defaults: {
                anchor: '100%',
                labelAlign: 'right',
                labelWidth: 110
            },
            itemId: 'shopeditform',
            items: [{
                xtype: 'textfield',
                name: 'name',
                afterLabelTextTpl: required,
                fieldLabel: '店铺主名称',
                allowBlank: false,
                validator: function(value) {
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
                        return '店铺主名称最大长度为12个汉字或24个字母';
                    } else {
                        return true;
                    }
                }
            }, {
                xtype: 'combo',
                name: 'shopBannerTemplateId',
                fieldLabel: '模板',
                allowBlank: false,
                afterLabelTextTpl: required,
                blankText: '请选择模板',
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
                allowBlank: false,
                afterLabelTextTpl: required,
                emptyText: '请填写地址'

            }, {
                xtype: 'textfield',
                name: 'lng',
                fieldLabel: '经度',
                allowBlank: false,
                afterLabelTextTpl: required,
                emptyText: '请输入经度'
            }, {
                xtype: 'textfield',
                name: 'lat',
                fieldLabel: '纬度',
                allowBlank: false,
                afterLabelTextTpl: required,
                emptyText: '请输入纬度'
            }, {
                xtype: 'timefield',
                name: 'openTime',
                fieldLabel: '开始时间',
                format: 'H:i',
                allowBlank: false,
                afterLabelTextTpl: required,
                emptyText: '请选择开始时间'
            }, {
                xtype: 'timefield',
                name: 'closeTime',
                fieldLabel: '结束时间',
                format: 'H:i',
                allowBlank: false,
                afterLabelTextTpl: required,
                emptyText: '请选择结束时间'
            }, {
                xtype: 'combo',
                itemId: 'showway',
                name: 'mergeType',
                fieldLabel: '分类展示方式',
                afterLabelTextTpl: required,
                store: showstore,
                queryMode: 'local',
                valueField: 'value',
                displayField: 'name',
                allowBlank: false,
                emptyText: "请选择分类展示方式"
            }, {
                xtype: 'numberfield',
                name: 'initShippingFee',
                fieldLabel: '基本配送费',
                minValue: 0,
                allowDecimals: false,
                emptyText: '不填则以城市设置为准'
            }, {
                xtype: 'numberfield',
                name: 'minPrice',
                fieldLabel: '起送金额',
                minValue: 0,
                allowDecimals: false,
                emptyText: '不填则以城市设置为准'
            }, {
                xtype: 'numberfield',
                name: 'minOrderForFreeShipping',
                fieldLabel: '满免金额',
                minValue: 1,
                allowDecimals: false,
                emptyText: '不填则以城市设置为准'
            }, {
                xtype: 'numberfield',
                name: 'minDistance',
                fieldLabel: '配送距离',
                minValue: 1,
                allowDecimals: false,
                emptyText: '不填则以城市设置为准'
            }, {
                xtype: 'numberfield',
                name: 'shippingFeePerKM',
                fieldLabel: '超配送距离追加费',
                minValue: 0.01,
                emptyText: '元/公里；不填则以城市设置为准'
            }, {
                xtype: 'radiogroup',
                fieldLabel: '商品是否每日自动上架',
                labelWidth: 160,
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
                        cmp.nextSibling().setDisabled(!value);
                    }
                }, {
                    xtype: 'textfield',
                    name: 'copyShop',
                    fieldLabel: '复制店铺',
                    labelWidth: 90,
                    disabled: true,
                    width: 390,
                    emptyText: '请输入店铺ID'
                }]
            }],
            buttons: [{
                text: '保存',
                itemId: 'save-shopStore-edit-btn'
            }, {
                text: '取消',
                handler: function(cmp) {
                    //关闭窗口
                    cmp.up('window').close();
                }
            }]
        }];

        this.callParent(arguments);
    }
});
