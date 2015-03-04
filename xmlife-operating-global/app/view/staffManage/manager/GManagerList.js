Ext.define('XMLifeOperating.view.staffManage.manager.GManagerList', {
    extend: 'Ext.grid.Panel',
    closable: true,
    xtype: 'gManagerList',
    title: '掌柜管理',
    store: 'Manager',
    id: 'gManagerList',
    columnLines: true,
    tbar: [{
            xtype: 'button',
            text: '添加掌柜',
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
                    "type": '查看未绑定掌柜'
                }, {
                    "value": '2',
                    "type": '查看已绑定掌柜'
                }, {
                    "value": '3',
                    "type": '查看未停单掌柜'
                }, {
                    "value": '4',
                    "type": '查看已停单掌柜'
                }, {
                    "value": '5',
                    "type": '查看已废弃掌柜'
                }]
            })
        },
        '->', {
            xtype: 'textfield',
            name: 'searchbuyer',
            fieldLabel: '手机号码',
            itemId: 'searchManagerKeyWords',
            emptyText: '输入搜索号码...'
        }, {
            xtype: 'button',
            name: 'searchbutton',
            itemId: 'searchButton',
            text: '搜索'
        }
    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Manager',
        displayInfo: true,
        style: 'border:none'
    }],
    columns: [{
        xtype: 'rownumberer',
        width: 30,
        align: 'center'
    }, {
        text: 'uid',
        dataIndex: 'uid',
        width: 60,
        align: 'center'
    }, {
        text: '姓名',
        dataIndex: 'name',
        width: 80,
        align: 'center'
    }, {
        text: '职称',
        dataIndex: 'title',
        width: 80,
        align: 'center'
    }, {
        text: '电话',
        dataIndex: 'phone',
        width: 90,
        align: 'center'
    }, {
        text: '绑定店铺',
        dataIndex: 'shopNames',
        width: 110,
        align: 'center',
        renderer: function(value) {
            return (value || []).join('<br />');
        }
    }, {
        header: "考勤管理",
        width: 90,
        itemId: 'managerWorkTimeId',
        menuDisabled: true,
        align: 'center',
        renderer: function() {
            return '<a href="javascript:;">查看</a>';
        }
    }, {
        header: "编辑",
        xtype: 'actioncolumn',
        width: 60,
        icon: 'resources/images/edit.png',
        tooltip: 'Edit',
        menuDisabled: true,
        align: 'center',
        itemId: 'editManagerId'
    }, {
        header: "操作",
        width: 90,
        dataIndex: 'isActive',
        itemId: 'closeOrOpenOrder',
        menuDisabled: true,
        align: 'center',
        renderer: function(value, cellmeta, record) {
            var txt = value ? '关闭' : '开启',
                statusValue = value ? 'open' : 'close',
                disabled,
                enable = record.data['enable'];
            if (!enable) {
                disabled = enable ? '' : 'disabled';
            }

            return Ext.String.format('<input type="button" value="{0}" statusValue="{1}" {2} /><br/>', txt, statusValue, disabled);
        }
    }, {
        header: "操作",
        width: 90,
        dataIndex: 'enable',
        itemId: 'abandon',
        menuDisabled: true,
        align: 'center',
        renderer: function(value) {
            var txt = value ? '废弃' : '已废弃',
                statusValue = value ? 'open' : 'close',
                disabled = value ? '' : 'disabled';

            return Ext.String.format('<input type="button" value="{0}" statusValue="{1}" {2} /><br/>', txt, statusValue, disabled);
        }
    }]
});
