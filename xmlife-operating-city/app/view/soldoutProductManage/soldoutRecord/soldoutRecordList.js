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
        var pros = ['商品缺货', '图片错误', '价格错误', '规格错误', '商品名错误', '条形码错误'];
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
        var opTypeStore = Ext.create('Ext.data.Store', {
            fields: ['value', 'name'],
            data: [{
                'value': 4,
                'name': '全部'
            }, {
                'value': 1,
                'name': '买手'
            }, {
                'value': 2,
                'name': '掌柜'
            }, {
                'value': 3,
                'name': '其他'
            }]
        });
        var combo = Ext.create('Ext.form.ComboBox', {
            displayField: 'name',
            valueField: 'value',
            itemId: 'statusCombo',
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
            defaults: {
                aligin: 'center'
            },
            columns: [{
                header: '联系方式',
                dataIndex: 'phoneNum'
            }, {
                header: '所属店铺',
                dataIndex: 'shopName'
            }, {
                header: '下架SKU名称',
                dataIndex: 'skuName'
            }, {
                header: '下架SKU ID',
                dataIndex: 'skuId'
            }, {
                header: '下架原因',
                dataIndex: 'reason',
                renderer: function(value) {
                    var me = this;
                    var bina = value.toString(2);
                    var str = [];
                    for (var i = 0, len = bina.length; i < len; i++) {
                        if (bina.charAt(i) == 1) {
                            str.push(pros[len - i - 1]);
                        }
                    }
                    return str.join('<br/>');
                }
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
                header: '操作人',
                dataIndex: 'operator'
            }, {
                header: '类别',
                dataIndex: 'operatorType',
                renderer: function(value) {
                    var str = '';
                    switch (value) {
                        case 1:
                            str = '买手';
                            break;
                        case 2:
                            str = '掌柜';
                            break;
                        case 3:
                            str = '其他';
                            break;
                        case 4:
                            str = '全部';
                            break;
                        default:
                            break;
                    }
                    return str;
                }
            }, {
                header: '编辑实例',
                xtype: 'actioncolumn',
                itemId: 'editProductInstance',
                items: [{
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑实例',
                    itemId: 'editProductInstance',
                    aligin: 'center',
                    handler: function(grid, rowIndex, colIndex, btn, e, record, row) {
                        var me = this;
                        me.fireEvent('editProduct', {
                            record: record,
                            iconId: 'editProductInstance'
                        });
                    }
                }],
            }, {
                header: '编辑模板',
                xtype: 'actioncolumn',
                itemId: 'editProductTemplate',
                items: [{
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑模板',
                    itemId: 'editProductTemplate',
                    aligin: 'center',
                    handler: function(grid, rowIndex, colIndex, btn, e, record, row) {
                        var me = this;
                        me.fireEvent('editProduct', {
                            record: record,
                            iconId: 'editProductTemplate'
                        })
                    }
                }]
            }, {
                header: '状态',
                dataIndex: 'status',
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
                    var comboRecordIndex = store.find(editor.valueField, value);
                    if (comboRecordIndex === -1) {
                        switch (value) {
                            case 2:
                                returnStr = '废弃';
                                break;
                            case 3:
                                returnStr = '下架';
                                break;
                        }
                    } else {
                        var comboReocrd = store.getAt(comboRecordIndex);
                        if (record == null) {
                            returnStr = value;
                        } else {
                            returnStr = comboReocrd.get(editor.displayField);
                        }
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
                        xtype: 'combo',
                        name: 'optype',
                        itemId: 'optype',
                        store: opTypeStore,
                        displayField: 'name',
                        valueField: 'value',
                        editable: false,
                        deafultValue: 1
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
