/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.staffManage.deliverer.DealDelivererHistoryList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'dealDelivererHistoryList',
    title: '历史订单',
    store: 'DealDelivererHistory',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'DealDelivererHistory',
        dock: 'bottom',
        displayInfo: true
            /*,
            items : ['->'],   
            prependButtons: true*/
    }],
    tbar: [{
        xtype: 'button',
        text: '返回',
        itemId: 'delivererReturn'
    }, {
        xtype: 'radiogroup',
        fieldLabel: '按时间过滤',
        defaultType: 'radiofield',
        itemId: 'historyorderradios',
        defaults: {
            flex: 1,
            margin: '0 5 0 5'
        },
        layout: 'hbox',
        items: [{
            checked: true,
            boxLabel: '今天',
            name: 'dayType',
            itemId: 'dayType0',
            inputValue: 0
        }, {
            boxLabel: '昨天',
            name: 'dayType',
            itemId: 'dayType1',
            inputValue: 1
        }, {
            boxLabel: '前天',
            name: 'dayType',
            itemId: 'dayType2',
            inputValue: 2
        }, {
            boxLabel: '本周',
            name: 'dayType',
            itemId: 'dayType3',
            inputValue: 3
        }, {
            boxLabel: '上周',
            name: 'dayType',
            itemId: 'dayType4',
            inputValue: 4
        }, {
            boxLabel: '本月',
            name: 'dayType',
            itemId: 'dayType5',
            inputValue: 5
        }, {
            boxLabel: '上月',
            name: 'dayType',
            itemId: 'dayType6',
            inputValue: 6
        }]
    }, ],

    columns: [{
            xtype: 'rownumberer',
            width: 50,
            align: 'center'
        }, {
            text: '订单号',
            dataIndex: 'dealBackendId',
            sortable: true,
            width: 150
        }, {
            text: '下单时间',
            dataIndex: 'created',
            format: 'H:i',
            sortable: true,
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
            sortable: true,
            width: 100,
            renderer: function(value) {
                var newTime = '';
                for (var i = 0; i < value.length; i++) {
                    newTime = new Date(value[i]);
                    newTime = newTime.getHours() + ':' + newTime.getMinutes() + '<br />';
                }
                return newTime;
            }
        }, {
            text: '出货时间',
            dataIndex: 'beginDeliverTime',
            format: 'H:i',
            sortable: true,
            width: 100,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '完成时间',
            dataIndex: 'completeTime',
            format: 'H:i',
            sortable: true,
            width: 100,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '顾客',
            dataIndex: 'customerName',
            sortable: true,
            width: 100
        }, {
            text: '联系方式',
            dataIndex: 'customerPhone',
            sortable: true,
            width: 100
        }, {
            text: '店铺',
            dataIndex: 'shopNames',
            sortable: true,
            width: 100
        }, {
            header: "采购清单",
            width: 90,
            itemId: 'dealItemsId',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                var seeBtn = '<span style="cursor:pointer">查看</span>';
                return seeBtn;
            }
        }, {
            text: '订单情况',
            dataIndex: 'status',
            sortable: true,
            width: 60
        }, {
            text: '评价',
            dataIndex: 'review',
            sortable: true,
            width: 100
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    columnLines: true,
    frame: true,
    iconCls: 'icon-grid'

});
