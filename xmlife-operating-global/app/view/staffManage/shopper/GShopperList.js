Ext.define('XMLifeOperating.view.staffManage.shopper.GShopperList', {
    extend: 'Ext.grid.Panel',
    xtype: 'gShopperList',
    store: 'SuperShopper',
    id: 'gShopperList',
    title: '买手管理',
    titleAlign: 'left',
    closable: true,
    columnLines: true,
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'SuperShopper',
        dock: 'bottom',
        displayInfo: true
    }],
    tbar: [{
            xtype: 'button',
            text: '添加买手',
            itemId: 'add'
        }, {
            xtype: 'combo',
            name: 'status',
            itemId: 'filtrate',
            queryMode: 'local',
            triggerAction: 'all',
            emptyText: '全部',
            editable: false,
            displayField: 'type',
            width: 120,
            margin: '0 5 0 15',
            valueField: 'value',
            store: Ext.create('Ext.data.Store', {
                fields: ['value', 'type'],
                data: [{
                    "value": '0',
                    "type": '全部'
                }, {
                    "value": '1',
                    "type": '查看未绑定买手'
                }, {
                    "value": '2',
                    "type": '查看已绑定买手'
                }, {
                    "value": '3',
                    "type": '查看未停单买手'
                }, {
                    "value": '4',
                    "type": '查看已停单买手'
                }, {
                    "value": '5',
                    "type": '查看已废弃买手'
                }]
            })
        },
        '->', {
            xtype: 'textfield',
            name: 'searchbuyer',
            itemId: 'searchBuyerKeyWords',
            emptyText: '输入手机号'
        }, {
            xtype: 'button',
            name: 'searchbutton',
            itemId: 'searchButton',
            text: '搜索'
        }
    ],
    columns: [{
        xtype: 'rownumberer',
        width: 30,
        align: 'center'
    }, {
        text: 'uid',
        dataIndex: 'uid',
        width: 50,
        align: 'center'
    }, {
        text: '姓名',
        dataIndex: 'name',
        align: 'center',
        width: 80
    }, {
        text: '职称',
        dataIndex: 'title',
        align: 'center',
        width: 60
    }, {
        text: '电话',
        dataIndex: 'phone',
        align: 'center',
        width: 90
    }, {
        text: '绑定店铺',
        dataIndex: 'shopNames',
        width: 110,
        align: 'center',
        renderer: function(value) {
            return (value || []).join('<br />');
        }
    }, {
        text: '订单数',
        dataIndex: 'totalDeals',
        width: 55,
        align: 'center'
    }, {
        header: "考勤管理",
        align: 'center',
        width: 80,
        itemId: 'shopperWorkTimeId',
        menuDisabled: true,
        renderer: function() {
            return '<a href="javascript:;">查看</a>';
        }
    }, {
        xtype: 'actioncolumn',
        header: "编辑",
        align: 'center',
        width: 40,
        icon: 'resources/images/edit.png',
        tooltip: 'Edit',
        menuDisabled: true,
        itemId: 'editShopperId',
        hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
    }, {
        header: "操作",
        align: 'center',
        width: 70,
        dataIndex: 'isActive',
        itemId: 'closeOrOpenOrder',
        menuDisabled: true,
        renderer: function(value) {
            var txt = value ? '关闭' : '开启',
                statusValue = value ? 'open' : 'close';

            return Ext.String.format('<input type="button" value="{0}" statusValue="{1}"  /><br/>', txt, statusValue);
        }
    }, {
        header: "操作",
        width: 70,
        dataIndex: 'abandon',
        itemId: 'abandon',
        menuDisabled: true,
        hidden: false,
        align: 'center',
        renderer: function() {
            return '<input type="button" value="废弃"/>';
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});
