Ext.define('XMLifeOperating.view.operationManage.dealShopArea.DSADealDetail', {
    extend: 'Ext.window.Window',
    xtype: 'dSADealDetail',
    title: '订单详情',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    closeAction: 'hide',
    modal: true,
    width: 550,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            itemId: 'dealForm',
            layout: 'anchor',
            bodyPadding: '10 15 20 15',
            border: false,
            defaults: {
                margin: 0,
                padding: 0,
                labelWidth: 85,
                labelPad: 15,
                labelAlign: 'right'
            },
            items: [{
                    xtype: 'displayfield',
                    name: 'shortId',
                    fieldLabel: '订单号',
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    name: 'dealBackendId',
                    fieldLabel: '长单号',
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    name: 'customerName',
                    fieldLabel: '用户名',
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    name: 'customerPhone',
                    fieldLabel: '注册电话',
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    name: 'contactsName',
                    fieldLabel: '收货人',
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    name: 'contactsPhone',
                    fieldLabel: '收货电话',
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    name: 'dtoAddress',
                    fieldLabel: '收货地址',
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    name: 'allProductPrice',
                    fieldLabel: '货品价格',
                    allowBlank: false,
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'shipfee',
                    fieldLabel: '运费',
                    allowBlank: false,
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'couponReduce',
                    fieldLabel: '已优惠',
                    allowBlank: false,
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'coupons',
                    fieldLabel: '使用优惠券',
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    name: 'dealPrice',
                    fieldLabel: '总计(含运费)',
                    allowBlank: false,
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'balance',
                    fieldLabel: '余额支付',
                    allowBlank: false,
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'tenpay',
                    fieldLabel: '微信支付',
                    allowBlank: false,
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'alipay',
                    fieldLabel: '支付宝支付',
                    allowBlank: false,
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'gridpanel',
                    itemId: 'dealDetails',
                    store: 'DealItems',
                    forceFit: true,
                    columns: [
                        {
                            xtype: 'rownumberer'
                        }, {
                            text: '店铺名',
                            width: 90,
                            dataIndex: 'shopName'
                        }, {
                            text: '商品名',
                            dataIndex: 'name'
                        }, {
                            text: '单价',
                            width: 50,
                            dataIndex: 'price',
                            renderer: function(value) {
                                return value / 100;
                            }
                        }, {
                            text: '数量',
                            width: 50,
                            dataIndex: 'num'
                        }, {
                            text: '合计',
                            width: 50,
                            dataIndex: 'actualItemPrice',
                            renderer: function(value) {
                                return value / 100;
                            }
                        }
                    ]
                }
            ],
            buttons: [{
                text: '知道了',
                labelAlign: 'center',
                handler: function() {
                    this.up('window').close();
                }
            }]
        }];

        this.callParent(arguments);
    }
});
