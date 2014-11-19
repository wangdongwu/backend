Ext.define('XMLifeOperating.view.soldoutProductManage.shopperRecord.shopperRecordList', {
    extend: 'Ext.grid.Panel',
    xtype: 'shopperRecordList',
    itemId: 'shopperRecordList',
    title: '买手记录',
    titleAlign: 'left',
    store: 'GetOptLogs',
    columns: [{
        header: '买手姓名',
        dataIndex: 'shopper'
    }, {
        header: '联系方式',
        dataIndex: 'phoneNum',
    }, {
        header: '今日推送任务数',
        dataIndex: 'todayPush'
    }, {
        header: '今日维持下架数',
        dataIndex: 'todayKeep',
    }, {
        header: '今日重新上架数',
        dataIndex: 'todayOnline',
    }, {
        header: '本周推送任务数',
        dataIndex: 'weekPush'
    }, {
        header: '本周维持下架数',
        dataIndex: 'weekKeep'
    }, {
        header: '本周重新上架数',
        dataIndex: 'weekOnline'
    }, {
        header: '本月推送任务数',
        dataIndex: 'monthPush'
    }, {
        header: '本月维持下架数',
        dataIndex: 'monthkeep'
    }, {
        header: '本月重新上架数',
        dataIndex: 'monthOnline'
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        style: {
            border: 'none'
        },
        items: [/*{
                xtype: 'datefield',
                name: 'startTime',
                emptyText: '开始时间',
                format: 'Y-m-d',
                value: (function() {
                    var date = new Date();
                    date.setDate(date.getDate());
                    return date;
                })()
            }, '到', {
                xtype: 'datefield',
                name: 'endTime',
                emptyText: '结束时间',
                format: 'Y-m-d',
                value: (function() {
                    var date = new Date();
                    date.setDate(date.getDate());
                    return date;
                })()
            }, {
                xtype: 'button',
                text: '查询',
                itemId: 'queryRecordBtn'
            },*/
            '->', {
                xtype: 'textfield',
                fieldLabel: '请输入搜索内容',
                labelWidth: 130,
                labelAlign: 'left',
                name: 'recordSearchKeyWords',
                itemId: 'recordSearchKeyWords',
            }, {
                xtype: 'button',
                text: '搜索',
                itemId: 'recordSearchBtn'
            }
        ]
    }]
});