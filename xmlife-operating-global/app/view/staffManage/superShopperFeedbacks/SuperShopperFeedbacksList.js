Ext.define('XMLifeOperating.view.staffManage.superShopperFeedbacks.SuperShopperFeedbacksList', {
    extend: 'Ext.grid.Panel',
    id: 'superShopperFeedbacksList',
    xtype: 'superShopperFeedbacksList',
    title: '买手反馈管理',
    titleAlign: 'left',
    closable: true,
    forceFit: true,
    store: 'SuperShopperFeedbacks',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'SuperShopperFeedbacks',
        dock: 'bottom',
        displayInfo: true
    }],
    tbar: [
        '按时间查找:', {
            xtype: 'datefield',
            name: 'beginTime',
            emptyText: '开始时间',
            maxValue: new Date(),
            value: new Date(),
            format: 'Y-m-d',
            disabled:true
        },'到', {
            xtype: 'datefield',
            name: 'endTime',
            emptyText: '结束时间',
            maxValue: new Date(),
            value: new Date(),
            format: 'Y-m-d',
            disabled:true
        }, {
            xtype: 'button',
            name: 'thisWeek',
            text: '本周',
            style: {
                border: '1px solid #99bce8'
            }
        }, {
            xtype: 'button',
            name: 'lastWeek',
            text: '上周',
            style: {
                border: '1px solid #99bce8'
            }
        }, {
            xtype: 'button',
            name: 'thisMonth',
            text: '本月',
            style: {
                border: '1px solid #99bce8'
            }
        }, {
            xtype: 'button',
            name: 'lastMonth',
            style: {
                border: '1px solid #99bce8'
            },
            text: '上月'
        },
        '->', {
            labelWidth: 40,
            xtype: 'combo',
            itemId: 'feedbackStatus',
            store: Ext.create('Ext.data.Store', {
                fields: ['name', 'value'],
                data: [{
                    'name': '全部',
                    'value': null
                }, {
                    'name': '标记',
                    'value': 1
                }, {
                    'name': '未标记',
                    'value': 0
                }]
            }),
            value: '未标记',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            emptyText: '全部'
        }
    ],

    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        dataIndex: 'time',
        text: '时间',
        width: 100,
        format: 'Y-M-D',
        sortable: false,
        align: 'center',
        renderer: function(v) {
            return Ext.util.Format.date(new Date(v), "Y.m.d");
        }
    }, {
        text: '用户',
        dataIndex: 'name',
        width: 100,
        sortable: false
    }, {
        text: '注册号码',
        dataIndex: 'phone',
        width: 100,
        sortable: false
    }, {
        text: '反馈意见',
        dataIndex: 'feedback',
        itemId: 'feedbackcontent',
        width: 100,
        sortable: false,
        renderer:function(value){
            return '<a href="javascript:;">' + value + '</a>';
        }
    }, {
        header: "操作",
        width: 100,
        dataIndex: 'mark',
        itemId: 'mark',
        menuDisabled: true,
        sortable: false,
        renderer: function(value) {
            var str = '';
            if (value == 1) {
                str = '<input type="button" value="取消标记"  />';
            } else {
                str = '<input type="button" value="标记" />';
            }
            return str;
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});
