/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.staffManage.shopper.ShopperWorkTimeList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shopperWorkTimeList',

    title: '考勤管理',

    store: 'ShopperWorkTime',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'ShopperWorkTime',
        dock: 'bottom',
        displayInfo: true,
        style:'border:none'
        /*,
      items : ['->'],   
      prependButtons: true*/
    }],
    tbar: [{
        xtype: 'button',
        text: '返回',
        itemId: 'shopperReturn'
    }, {
        xtype: 'radiogroup',
        fieldLabel: '按时间过滤',
        defaultType: 'radiofield',
        itemId:'shopperworktimeradios',
        defaults: {
            flex: 1,
            margin: '0 5 0 5'
        },
        layout: 'hbox',
        items: [{
            boxLabel: '本周',
            checked: true,
            name: 'dayType',
            itemId: 'dayType3',
            inputValue:3
        }, {
            boxLabel: '上周',
            name: 'dayType',
            itemId: 'dayType4',
             inputValue:4
        }, {
            boxLabel: '本月',
            name: 'dayType',
            itemId: 'dayType5',
             inputValue:5
        }, {
            boxLabel: '上月',
            name: 'dayType',
            itemId: 'dayType6',
             inputValue:6
        }]
    }, ],
    columns: [{
            xtype: 'rownumberer'
        }, {
            text: '日期',
            dataIndex: 'created',
            sortable: true,
            width: 100,
            format: 'Y-m-d',
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getFullYear() + '-' + (newTime.getMonth() + 1) + '-' + newTime.getDate();
                return newTime;
            }
        }, {
            text: '上班时间',
            dataIndex: 'onlineTime',
            format: 'H:i',
            sortable: true,
            width: 100,
            renderer: function(value) {
                var time = Math.floor(value / 60) + ':' + (value % 60);
                return time;
            }
        }, {
            text: '下班时间',
            dataIndex: 'offlineTime',
            format: 'H:i',
            sortable: true,
            width: 100,
            renderer: function(value) {
                var time = Math.floor(value / 60) + ':' + (value % 60);
                return time;
            }
        }, {
            text: '本次工时',
            dataIndex: 'workTime',
            sortable: true,
            width: 100,
            renderer: function(value) {
                var time = Math.floor(value / 60) + '时' + (value % 60) + '分';
                return time;
            }
        }, {
            text: '完成订单数',
            dataIndex: 'deals',

            sortable: true,
            width: 100
        },
        /* {
            text: '顾客',
            dataIndex: 'customName',
            sortable: false,
            width: 100
        },
        {
            text: '联系方式',
            dataIndex: 'customPhone',
            sortable: false,
            width: 100
        },
        {
            text: '店铺',
            dataIndex: 'shopName',
            sortable: false,
            width: 100
        },
        {
            text: '采购订单',
            dataIndex: 'id1',
            sortable: false,
            width: 100
        },
        {
            text: '订单情况',
            dataIndex: 'status',
            sortable: false,
            width: 100
        },
        {
            text: '评价',
            dataIndex: 'review',
            sortable: false,
            width: 100
        },*/

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