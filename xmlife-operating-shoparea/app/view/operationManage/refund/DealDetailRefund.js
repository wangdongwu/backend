Ext.define('XMLifeOperating.view.operationManage.refund.DealDetailRefund', {
    extend: 'Ext.window.Window',
    xtype: 'dealDetailRefund',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 500,
    height: 500,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title: '订单详情',
            itemId: 'dealForm',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,
            labelAlign: 'center',
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'fieldset',
                labelWidth: 400,
                border: false,
                labelAlign: 'left',
                bodyPadding: 0,
                padding: 0,
                margin: 0,
                items: [{
                    layout: 'column',
                    xtype: 'fieldset',
                    border: false,
                    items: [{
                        xtype: 'displayfield',
                        fieldLabel: '用户名',
                        labelWidth: 60,
                        width: 150,
                        name: 'userName',
                        style: {
                            margin: '0 30px 0 0'
                        }
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: '用户电话',
                        labelWidth: 60,
                        name: 'userPhone',
                        style: {
                            color: '#ff0000'
                        }
                    }]

                }]
            }, {
                xtype: 'fieldset',
                labelWidth: 400,
                border: false,
                labelAlign: 'left',
                bodyPadding: 0,
                padding: 0,
                margin: 0,
                items: [{
                    layout: 'column',
                    xtype: 'fieldset',
                    border: false,
                    items: [{
                        xtype: 'displayfield',
                        fieldLabel: '订单编号',
                        labelWidth: 60,
                        width: 150,
                        name: 'shortId',
                        style: {
                            margin: '0 30px 0 0',
                        }
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: '下单时间',
                        labelWidth: 60,
                        name: 'createTime',

                    }]

                }],
            }, {
                xtype: 'fieldset',
                labelWidth: 400,
                border: false,
                labelAlign: 'left',
                bodyPadding: 0,
                padding: 0,
                margin: 0,
                items: [{
                    layout: 'column',
                    xtype: 'fieldset',
                    border: false,
                    items: [{
                        xtype: 'displayfield',
                        fieldLabel: '订单金额',
                        labelWidth: 60,
                        name: 'dealPrice',
                        width: 150,
                        style: {
                            margin: '0 30px 0 0',
                        },
                        renderer: function(v) {
                            return v / 100;
                        }
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: '退款金额',
                        labelWidth: 60,
                        name: 'amount',
                        renderer: function(v) {
                            return v / 100;
                        }
                    }]
                }]
            }, {
                xtype: 'fieldset',
                labelWidth: 400,
                border: false,
                labelAlign: 'left',
                bodyPadding: 0,
                padding: 0,
                margin: 0,
                items: [{
                    layout: 'column',
                    xtype: 'fieldset',
                    border: false,
                    items: [{
                        xtype: 'displayfield',
                        fieldLabel: '收货人',
                        labelWidth: 60,
                        width: 150,
                        name: 'contacts',
                        style: {
                            margin: '0 30px 0 0',
                        }
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: '收货电话',
                        labelWidth: 60,
                        name: 'contactsPhone',
                    }]
                }],
            }, {
                xtype: 'displayfield',
                name: 'dealBackendId',
                fieldLabel: '长订单号',
                allowBlank: false,
                margin: '0 0 0 10px',
                labelWidth: 60
            }, {
                xtype: 'displayfield',
                name: 'address',
                fieldLabel: '收货地址',
                allowBlank: false,
                labelAlign: 'center',
                margin: '0 0 0 10px',
                labelWidth: 60
            }, {
                xtype: 'displayfield',
                name: 'areaName',
                fieldLabel: '对应中心',
                allowBlank: false,
                labelAlign: 'center',
                margin: '0 0 0 10px',
                labelWidth: 60
            }, {
                name: 'dealDetails',
                store: 'DealItems',
                fieldLabel: '购买清单',
                xtype: 'gridpanel',
                //itemId:'dealDetails',
                height: 200,
                columns: [
                    {
                        text: '店铺名',
                        width: 100,
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
            }],
            buttons: [{
                text: '知道了',
                labelAlign: 'center',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('dealDetailRefund')[0].close();
                }
            }]
        }],
        this.callParent(arguments);
    }
});
