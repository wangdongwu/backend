Ext.define('XMLifeOperating.view.staffManage.shopper.GDealShopperHistoryList', {
    extend: 'Ext.grid.Panel',
    id: 'gDealShopperHistoryList',
    xtype: 'gDealShopperHistoryList',
    title: '买手历史订单',
    columnLines: true,
    closable: true,
    store: 'DealShopperHistory',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'DealShopperHistory',
        dock: 'bottom',
        displayInfo: true
            /*,
                  items : ['->'],   
                  prependButtons: true*/
    }],
    tbar: [{
        xtype: 'button',
        text: '返回',
        itemId: 'shopperReturn'
    }, {
        xtype: 'radio',
        checked: true,
        fieldLabel: '今天',
        itemId: 'dayType0',
        name: 'dayType',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;',
    }, {
        xtype: 'radio',
        fieldLabel: '昨天',
        name: 'dayType',
        itemId: 'dayType1',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;',
    }, {
        xtype: 'radio',
        fieldLabel: '前天',
        name: 'dayType',
        itemId: 'dayType2',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;',
    }, {
        xtype: 'radio',
        fieldLabel: '本周',
        name: 'dayType',
        itemId: 'dayType3',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;',
    }, {
        xtype: 'radio',
        fieldLabel: '上周',
        name: 'dayType',
        itemId: 'dayType4',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;',
    }, {
        xtype: 'radio',
        fieldLabel: '本月',
        name: 'dayType',
        itemId: 'dayType5',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;',
    }, {
        xtype: 'radio',
        fieldLabel: '上月',
        name: 'dayType',
        itemId: 'dayType6',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;',
    }],

    columns: [{
            xtype: 'rownumberer',
            width: 50,
            align: 'center'
        }, {
            text: '订单号',
            dataIndex: 'shortBackendId',
            sortable: false,
            width: 150,
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a href="javascript:;">' + value + '</a>';
            }
        }, {
            text: '下单时间',
            dataIndex: 'created',
            format: 'H:i',
            sortable: false,
            width: 100,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '买完时间',
            dataIndex: 'taskDone',
            format: 'H:i',
            sortable: false,
            width: 100,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '出货时间',
            dataIndex: 'beginDeliverTime',
            format: 'H:i',
            sortable: false,
            width: 100,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '完成时间',
            dataIndex: 'dealDone',
            format: 'H:i',
            sortable: false,
            width: 100,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '顾客',
            dataIndex: 'customName',
            sortable: false,
            width: 100
        }, {
            text: '联系方式',
            dataIndex: 'customPhone',
            sortable: false,
            width: 100
        }, {
            text: '店铺',
            dataIndex: 'shopName',
            sortable: false,
            width: 100
        }, {
            header: "采购清单",
            width: 90,
            itemId: 'dealItemsId',
            menuDisabled: true,
            sortable: false,
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                var seeBtn = '<span style="color:green;cursor:pointer;">查看</span>';
                return seeBtn;
            }
        }, {
            text: '订单情况',
            dataIndex: 'status',
            sortable: false,
            width: 60
        }, {
            text: '评价',
            dataIndex: 'review',
            sortable: false,
            width: 100
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});
