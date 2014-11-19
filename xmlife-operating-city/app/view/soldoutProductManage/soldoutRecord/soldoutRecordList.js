Ext.define('XMLifeOperating.view.soldoutProductManage.soldoutRecord.soldoutRecordList', {
    extend: 'Ext.grid.Panel',
    xtype: 'soldoutRecordList',
    itemId: 'soldoutRecordList',
    title: '下架记录',
    titleAlign: 'left',
    store: 'OfflineProductGetOfflineRecords',
    columns: [{
        header: '买手姓名',
        dataIndex: 'shopper',
    }, {
        header: '联系方式',
        dataIndex: 'phoneNum',
    }, {
        header: '所属店铺',
        dataIndex: 'shopName'
    }, {
        header: '下架SKU名称',
        dataIndex: 'skuName',
    }, {
        header: '下架SKU ID',
        dataIndex: 'skuId',
    }, {
        header: '下架原因',
        dataIndex: 'reason'
    }, {
        header: '操作时间',
        dataIndex: 'time',
        renderer: function(value) {
            var date = new Date(value);
            var str = [];
            str.push(date.getFullYear());
            str.push(date.getMonth() + 1);
            str.push(date.getDate());
            return str.join('-');

        }
    }, {
        header: '编辑',
        dataIndex: '',
    }, {
        header: '操作',
        dataIndex: '',
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        style: {
            border: 'none'
        },
        items: [{
                xtype: 'datefield',
                name: 'startTime',
                emptyText: '开始时间',
                format: 'Y-m-d',
                value: (function() {
                    var date = new Date();
                    date.setDate(date.getDate());
                    return date;
                })()
            }, '到',{
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
            },
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
    }, {
        xytpe: 'toolbar',
        dock: 'bottom',
        style: {
            border: 'none'
        },
        items: [{
            xtype: 'pagingtoolbar',
            itemId: 'pageToolBar',
            store: 'OfflineProductGetOfflineRecords',
            border: 0,
            displayInfo: false
        }]

    }]
});