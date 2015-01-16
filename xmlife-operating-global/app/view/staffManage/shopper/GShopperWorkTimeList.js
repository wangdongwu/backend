Ext.define('XMLifeOperating.view.staffManage.shopper.GShopperWorkTimeList', {
    extend: 'Ext.grid.Panel',
    id: 'gShopperWorkTimeList',
    xtype: 'gShopperWorkTimeList',
    title: '买手考勤管理',
    columnLines: true,
    closable: true,
    store: 'SuperShopperWorkTime',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'SuperShopperWorkTime',
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
        fieldLabel: '本周',
        name: 'dayType',
        checked: true,
        itemId: 'dayType3',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;'
    }, {
        xtype: 'radio',
        fieldLabel: '上周',
        name: 'dayType',
        itemId: 'dayType4',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;'
    }, {
        xtype: 'radio',
        fieldLabel: '本月',
        name: 'dayType',
        itemId: 'dayType5',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;'
    }, {
        xtype: 'radio',
        fieldLabel: '上月',
        name: 'dayType',
        itemId: 'dayType6',
        labelAlign: 'right',
        style: 'border:0px solid;margin-right:10px;'
    }],

    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        text: '日期',
        dataIndex: 'created',
        sortable: false,
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
        sortable: false,
        width: 100,
        renderer: function(value) {
            var time = Math.floor(value / 60) + ':' + (value % 60);
            return time;
        }
    }, {
        text: '下班时间',
        dataIndex: 'offlineTime',
        format: 'H:i',
        sortable: false,
        width: 100,
        renderer: function(value) {
            var time = Math.floor(value / 60) + ':' + (value % 60);
            return time;
        }
    }, {
        text: '本次工时',
        dataIndex: 'workTime',
        sortable: false,
        width: 100,
        renderer: function(value) {
            var time = Math.floor(value / 60) + '时' + (value % 60) + '分';
            return time;
        }
    }, {
        text: '完成订单数',
        dataIndex: 'deals',

        sortable: false,
        width: 100
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});
