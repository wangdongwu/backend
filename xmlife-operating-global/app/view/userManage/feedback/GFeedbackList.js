Ext.define('XMLifeOperating.view.userManage.feedback.GFeedbackList', {
    extend: 'Ext.grid.Panel',
    id: 'gFeedbackList',
    xtype: 'gFeedbackList',
    title: '用户反馈管理',
    titleAlign: 'left',
    closable: true,
    forceFit: true,
    store: 'Feedback',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'Feedback',
        dock: 'bottom',
        displayInfo: true
    }],
    tbar: [{
            xtype: 'fieldcontainer',
            fieldLabel: '按时间过滤',
            defaultType: 'radiofield',
            defaults: {
                flex: 1,
                margin: '0 5'
            },
            layout: 'hbox',
            items: [{
                xtype: 'radiogroup',
                itemId: 'gFeedbackRadios',
                items: [{
                    boxLabel: '今天',
                    name: 'dayType',
                    itemId: 'dayType0',
                    inputValue: '0'
                }, {
                    boxLabel: '昨天',
                    name: 'dayType',
                    itemId: 'dayType1',
                    inputValue: '1'
                }, {
                    boxLabel: '前天',
                    name: 'dayType',
                    itemId: 'dayType2',
                    inputValue: '2'
                }, {
                    boxLabel: '本周',
                    name: 'dayType',
                    itemId: 'dayType3',
                    inputValue: '3'
                }, {
                    boxLabel: '上周',
                    name: 'dayType',
                    itemId: 'dayType4',
                    inputValue: '4'
                }, {
                    boxLabel: '本月',
                    name: 'dayType',
                    itemId: 'dayType5',
                    inputValue: '5'
                }, {
                    boxLabel: '上月',
                    name: 'dayType',
                    itemId: 'dayType6',
                    inputValue: '6'
                }]
            }]
        },
        '->', {
            labelWidth: 40,
            xtype: 'combo',
            itemId: 'feedbackStatus',
            store: 'FeedbackStatus',
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
        dataIndex: 'created',
        text: '时间',
        width: 100,
        format: 'Y-M-D',
        sortable: false,
        align: 'center',
        renderer: function(v) {
            var date = new Date(v);
            return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
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
        dataIndex: 'content',
        itemId: 'feedbackcontent',
        width: 100,
        sortable: false,
        renderer:function(value){
            return '<a href="javascript:;">' + value + '</a>';
        }
    }, {
        header: "",
        width: 100,
        dataIndex: 'mark',
        itemId: 'mark',
        menuDisabled: true,
        sortable: false,
        renderer: function(value) {
            var str = '';
            if (value == true) {
                str = '<input type="button" value="取消标记" statusValue="offline" class="markStatus" />';
            } else {
                str = '<input type="button" value="标记" statusValue="online" class="markStatus" />';
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
