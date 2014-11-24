Ext.define('XMLifeOperating.view.soldoutProductManage.soldoutRecord.soldoutRecordList', {
    extend: 'Ext.grid.Panel',
    xtype: 'soldoutRecordList',
    itemId: 'soldoutRecordList',
    title: '下架记录',
    titleAlign: 'left',
    store: 'OfflineProductGetOfflineRecords',
    closable: true,
    columnLines: true,
    forceFit: true,
    initComponent: function() {
        var me = this;
        var store = Ext.create('Ext.data.Store', {
            fields: ['value', 'name', 'itemId', 'disabled'],
            data: [{
                'value': 0,
                'name': '上架',
                'itemId': 'onCarriage',
                'disabled': false
            }, {
                'value': 1,
                'name': '雪藏',
                'itemId': 'frozen',
                'disabled': false
            }]
        });
        var combo = Ext.create('Ext.form.ComboBox', {
            displayField: 'name',
            valueField: 'value',
            itemId:'statusCombo',
            triggerAction: 'all',
            autoScroll: true,
            editable: false,
            queryMode: 'local',
            tpl: Ext.create('Ext.XTemplate', '<ul class="x-list-plain">',
                '<tpl for=".">',
                '<li class="x-boundlist-item"',
                '<tpl if="disabled == true">',
                'style="color:lightgray;background-color:whitesmoke;"',
                '</tpl>',
                '>{name}</li>',
                '</tpl>', '</ul>'),
            store: store,
            listeners: {
                beforeselect: function(combo, record, index) {
                    if (record.get('disabled')) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        });
        Ext.applyIf(me, {
            columns: [{
                header: '买手姓名',
                dataIndex: 'shopper',
                aligin: 'center'
            }, {
                header: '联系方式',
                dataIndex: 'phoneNum',
                aligin: 'center'
            }, {
                header: '所属店铺',
                dataIndex: 'shopName',
                aligin: 'center'
            }, {
                header: '下架SKU名称',
                dataIndex: 'skuName',
                aligin: 'center'
            }, {
                header: '下架SKU ID',
                dataIndex: 'skuId',
                aligin: 'center'
            }, {
                header: '下架原因',
                dataIndex: 'reason',
                aligin: 'center'
            }, {
                header: '操作时间',
                dataIndex: 'time',
                aligin: 'center',
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
                xtype: 'actioncolumn',
                aligin: 'center',
                itemId: 'editProduct',
                items: [{
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑实例',
                    itemId: 'editProductInstance',
                    aligin: 'left',
                    handler: function(grid, rowIndex, colIndex, btn, e, record, row) {
                        var me = this;
                        me.fireEvent('editProduct',{record:record,iconId:'editProductInstance'})
                    }
                }, {
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑模板',
                    itemId: 'editProductTemplate',
                    aligin: 'right'
                }]
            }, {
                header: '操作',
                dataIndex: 'status',
                aligin: 'center',
                itemId: 'putawayOrOut',
                editor: combo,
                sortable: true,
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    var me = this,
                        column = me.down('#putawayOrOut'),
                        editor = me.down('#putawayOrOut').getEditor(),
                        store = editor.getStore(),
                        returnStr = '',
                        product = record.get('product'),
                        value = value || product.status;
                    var comboRecordIndex = store.find(editor.valueField, value),
                        comboReocrd = store.getAt(comboRecordIndex);
                    if (record == null) {
                        returnStr = value;
                    } else {
                        returnStr = comboReocrd.get(editor.displayField);
                    }
                    return returnStr;
                }
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
            }],
            plugins: [{
                ptype: 'cellediting',
                clicksToEdit: 1
            }]
        });
        me.callParent(arguments);
    }
});
