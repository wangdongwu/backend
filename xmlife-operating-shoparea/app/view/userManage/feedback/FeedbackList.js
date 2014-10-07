Ext.define('XMLifeOperating.view.userManage.feedback.FeedbackList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'feedbackList',
    title: '用户反馈管理',
    store: 'Feedback',
    id: 'feedbackList',
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Feedback',
        displayInfo: true
    }],
    tbar: [{
            xtype: 'fieldcontainer',
            fieldLabel: '按时间过滤',
            id:'dayType',
            itemId: 'feedbackRadiofield',
            defaultType: 'radiofield',
            defaults: {
                flex: 1,
                margin: '0 5 0 5'
            },
            layout: 'hbox',
            items: [{
                xtype: 'radiogroup',
                itemId:'feedbackRadios',
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
            }],
        },
        '->', , {
            labelWidth: 40,
            xtype: 'combo',
            store: 'FeedbackStatus',
            itemId: 'feedbackStatus',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
        }
    ],

    columns: [{
            xtype: 'rownumberer'
        }, {
            dataIndex: 'created',
            text: '时间',
            width: 130,
            format: 'Y-M-D',
            sortable: true,
            align: 'center',
        }, {
            text: '用户',
            dataIndex: 'name',
            width: 100,
            sortable: true,
            align: 'center',
        }, {
            text: '注册号码',
            dataIndex: 'phone',
            width: 90,
            sortable: true,
            align: 'center',
        }, {
            text: '反馈意见',
            dataIndex: 'content',
            width: 140,
            sortable: true,
            align: 'center',
        }, {
            header: "标记",
            width: 60,
            dataIndex: 'mark',
            itemId: 'mark',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var str = '';
                if (value == true) {
                    str = '<input type="button" value="取消标记" statusValue="offline" class="markStatus" />';
                } else {
                    str = '<input type="button" value="标记" statusValue="online" class="markStatus" />';
                }
                return str;
            }
        },

    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    columnLines: true,


});