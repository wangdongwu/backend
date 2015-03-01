Ext.define('XMLifeOperating.view.userManage.customer.CustomerList', {
    extend: 'Ext.grid.Panel',
    id: 'CustomerList',
    xtype: 'CustomerList',
    title: '用户信息管理',
    titleAlign: 'left',
    closable: true,
    forceFit: true,
    store: 'Customer',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'Customer',
        dock: 'bottom',
        displayInfo: true
    }, {
        xtype: 'toolbar',
        dock: 'top',
        items: [{
                xtype: 'combo',
                name: 'shopAreac',
                itemId: 'shopAreac',
                store: 'ShopArea',
                emptyText: '请选择中心',
                editable: false,
                displayField: 'name',
                valueField: 'id',
                hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
            },
            '->', {
                xtype: 'combo',
                name: 'status',
                itemId: 'statusUidOrMobile',
                queryMode: 'local',
                triggerAction: 'all',
                emptyText: 'uid',
                editable: false,
                displayField: 'type',
                width: 120,
                margin: '0 5 0 5',
                valueField: 'value',
                store: Ext.create('Ext.data.Store', {
                    fields: ['value', 'type'],
                    data: [{
                        "value": 'uid',
                        "type": 'uid'
                    }, {
                        "value": 'mobile',
                        "type": '手机号码'
                    }]
                })
            }, {
                xtype: 'textfield',
                emptyText: '输入搜索号码orUid...',
                name: 'keywordc',
                itemId: 'keywordc'
            }, {
                xtype: 'button',
                itemId: 'customerSearch',
                text: '搜索'
            }, {
                xtype: 'button',
                itemId: 'customerTitle',
                text: '查看封号用户'
            }
        ]
    }],
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        text: '用户昵称',
        dataIndex: 'name',
        width: 100
    }, {
        text: 'UID',
        dataIndex: 'uid',
        width: 100
    }, {
        text: '手机号',
        dataIndex: 'phone',
        width: 90
    }, {
        text: '日期',
        dataIndex: 'created',
        width: 80,
        sortable: true,
        renderer: function(value) {
            return Ext.Date.format(new Date(value), 'Y.m.d');
        }
    }, {
        text: '最后登录日期',
        dataIndex: 'lastLogin',
        width: 80,
        sortable: true,
        renderer: function(value) {
            return Ext.Date.format(new Date(value), 'Y.m.d');
        }
    }, {
        text: '余额',
        dataIndex: 'balance',
        width: 60,
        align: 'center',
        renderer: function(value) {
            return value / 100;
        }
    }, {
        text: '收货地址',
        itemId: 'addressCustomer',
        width: 60,
        align: 'center',
        menuDisabled: true,
        renderer: function() {
            return '<a href="javascript:;">查看</a>';
        }
    }, {
        text: '历史订单',
        itemId: 'orderHistory',
        width: 60,
        align: 'center',
        menuDisabled: true,
        renderer: function() {
            return '<a href="javascript:;">查看</a>';
        }
    }, {
        text: '充值和消费',
        width: 60,
        align: 'center',
        itemId: 'consumePayListId',
        menuDisabled: true,
        renderer: function() {
            return '<a href="javascript:;">查看</a>';
        }
    }, {
        text: '优惠券',
        width: 60,
        align: 'center',
        itemId: 'couponListId',
        menuDisabled: true,
        renderer: function() {
            return '<a href="javascript:;">查看</a>';
        }
    }, {
        text: '扣余额',
        width: 60,
        align: 'center',
        itemId: 'deduct',
        menuDisabled: true,
        renderer: function() {
            return '<input type="button" value="减扣" />';
        }
    }, {
        header: "操作",
        dataIndex: 'enable',
        itemId: 'operationc',
        width: 40,
        align: 'center',
        menuDisabled: true,
        sortable: false,
        renderer: function(value) {
            var inputVal = value ? '封号' : '解封',
                statusVal = value ? 'open' : 'close';
            return '<input type="button" value="' + inputVal + '" statusValue="' + statusVal + '"  />';
        }
    }],
    viewConfig: {
        enableTextSelection: true
    },
    listeners: {
        onShowView: function(view) {
            if (XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopAreac');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    }
});
