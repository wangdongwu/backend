Ext.define('XMLifeOperating.view.dealManage.DealDetail', {
    extend: 'Ext.window.Window',
    xtype: 'dealDetail',
    title: '订单详情',
    closeAction: 'hide',
    modal: true,
    width: 850,
    maxHeight: 500,
    autoScroll: true,
    resizable: false,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            itemId: 'dealForm',
            bodyPadding: '10 15 20 15',
            border: false,
            buttonAlign: 'center',
            items: [{
                xtype: 'checkboxgroup',
                columns: 2,
                vertical: true,
                defaults: {
                    margin: '2 0',
                    labelWidth: 85,
                    labelAlign: 'right'
                },
                items: [{
                    xtype: 'displayfield',
                    name: 'shortId',
                    fieldLabel: '订单号'
                }, {
                    xtype: 'displayfield',
                    name: 'dealBackendId',
                    fieldLabel: '长单号'
                }, {
                    xtype: 'displayfield',
                    name: 'customerName',
                    fieldLabel: '用户名'
                }, {
                    xtype: 'displayfield',
                    name: 'customerPhone',
                    fieldLabel: '注册电话'
                }, {
                    xtype: 'displayfield',
                    name: 'contactsName',
                    fieldLabel: '收货人'
                }, {
                    xtype: 'displayfield',
                    name: 'contactsPhone',
                    fieldLabel: '收货电话'
                }, {
                    xtype: 'displayfield',
                    name: 'dtoAddress',
                    fieldLabel: '收货地址'
                }, {
                    xtype: 'displayfield',
                    name: 'shopName',
                    fieldLabel: '商店'
                }, {
                    xtype: 'displayfield',
                    name: 'allProductPrice',
                    fieldLabel: '货品价格',
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'shipfee',
                    fieldLabel: '运费',
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'couponReduce',
                    fieldLabel: '已优惠',
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'coupons',
                    fieldLabel: '使用优惠券',
                    renderer: function(value) {
                        return value ? value : '无';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'dealPrice',
                    fieldLabel: '总计(含运费)',
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'balance',
                    fieldLabel: '余额支付',
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'tenpay',
                    fieldLabel: '微信支付',
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'alipay',
                    fieldLabel: '支付宝支付',
                    renderer: function(value) {
                        return value / 100 + ' 元';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'starNum',
                    fieldLabel: '评价',
                    renderer: function(value) {
                        return (value ? value : 0) + ' 星';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'serviceProblem',
                    fieldLabel: '标准吐槽',
                    renderer: function(value) {
                        return value ? value : '无';
                    }
                }, {
                    xtype: 'displayfield',
                    name: 'note',
                    fieldLabel: '自定义吐槽',
                    renderer: function(value) {
                        return value ? value : '无';
                    }
                }]
            }, {
                xtype: 'gridpanel',
                itemId: 'dealDetails',
                store: 'DealItems',
                forceFit: true,
                columns: [{
                    xtype: 'rownumberer',
                    width: 50,
                    align: 'center'
                }, {
                    text: '商品名',
                    width: '25%',
                    dataIndex: 'name'
                }, {
                    text: '单价',
                    dataIndex: 'price',
                    width: '10%',
                    align: 'center',
                    renderer: function(value) {
                        return value / 100;
                    }
                }, {
                    text: '是否活动',
                    dataIndex: 'promotionId',
                    align: 'center',
                    renderer: function(value) {
                        return value ? '是' : '否';
                    }
                }, {
                    text: '下单数量',
                    dataIndex: 'orderNum',
                    align: 'center'
                }, {
                    text: '取消数量',
                    dataIndex: 'cancelNum',
                    width: '19%',
                    align: 'center',
                    renderer: function(value, meta, record) {
                        var cancelType = record.get('cancelType');
                        return cancelType ? value + '(' + cancelType + ')' : value;
                    }
                }, {
                    text: '退货数量',
                    dataIndex: 'returnNum',
                    width: '18%',
                    align: 'center',
                    renderer: function(value, meta, record) {
                        var returnNote = record.get('returnNote');
                        return returnNote ? value + '(' + returnNote + ')' : value;
                    }
                }, {
                    text: '实际数量',
                    dataIndex: 'num',
                    align: 'center'
                }, {
                    text: '合计金额',
                    dataIndex: 'actualItemPrice',
                    align: 'center',
                    renderer: function(value) {
                        return value / 100;
                    }
                }, {
                    text: '优惠后金额',
                    dataIndex: 'couponPrice',
                    align: 'center',
                    renderer: function(value) {
                        return value / 100;
                    }
                }]
            }],
            buttons: [{
                text: '知道了',
                handler: function() {
                    this.up('window').close();
                }
            }]
        }];

        this.callParent(arguments);
    }
});
