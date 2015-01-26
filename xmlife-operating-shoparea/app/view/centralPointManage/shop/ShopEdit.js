Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopedit',
    bodyStyle: 'text-align:center;border-style: none;',
    width: 450,
    buttonAlign: 'center',
    autoScroll: false,
    modal: true,
    initComponent: function() {

        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        var showstore = Ext.create('Ext.data.Store', {
            fields: ['value', 'name'],
            data: [{
                'value': 0,
                'name': '系统默认展示'
            }, {
                'value': 1,
                'name': '一级分类合并展示'
            }, {
                'value': 2,
                'name': '二级分类合并展示'
            }, {
                'value': 3,
                'name': '三级分类合并展示'
            }]
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
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
                fieldLabel: '店铺名称',
                flex: 1,
                allowBlank: false,
                afterLabelTextTpl: required,
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
                blankText: '请选择模板',
                flex: 1,
                allowBlank: false,
                afterLabelTextTpl: required,
                editable: false,
                store: 'ShopBannerTemplate',
                queryMode: 'remote',
                displayField: 'name',
                valueField: 'id',
                emptyText: "请选择模板"
            }, {
                xtype: 'textfield',
                name: 'address',
                fieldLabel: '地址',
                flex: 1,
                allowBlank: false,
                afterLabelTextTpl: required,
                minLength: 2,
                minLengthText: '商品名称最小长度为2',
                maxLength: 10,
                maxLengthText: '商品名称最大长度为10'
            }, {
                xtype: 'textfield',
                name: 'lng',
                fieldLabel: '经度',
                flex: 1,
                allowBlank: false,
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
                allowBlank: false,
                afterLabelTextTpl: required,
                minLength: 2,
                minLengthText: '商品名称最小长度为2',
                maxLength: 10,
                maxLengthText: '商品名称最大长度为10'
            }, {
                xtype: 'timefield',
                name: 'openTimeText',
                fieldLabel: '开始时间',
                flex: 1,
                format: 'H:i',
                allowBlank: false,
                afterLabelTextTpl: required
            }, {
                xtype: 'timefield',
                name: 'closeTimeText',
                fieldLabel: '结束时间',
                flex: 1,
                format: 'H:i',
                allowBlank: false,
                afterLabelTextTpl: required
            }, {
                xtype: 'combo',
                itemId: 'showway',
                name:'mergeType',
                fieldLabel: '分类展示方式',
                labelAlign: 'right',
                afterLabelTextTpl: required,
                store: showstore,
                queryMode: 'local',
                valueField: 'value',
                displayField: 'name',
                allowBlank: false
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
                defaults: {
                    flex: 1
                },
                allowBlank: false,
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
                fieldLabel: '改价是否审核',
                labelWidth: 160,
                defaults: {
                    flex: 1
                },
                allowBlank: false,
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
        }];
        this.callParent(arguments);
    }
});
