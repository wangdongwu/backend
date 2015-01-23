Ext.define('XMLifeOperating.view.damagedProductApply.DamagedProductApplyList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'damagedProductApplyList',

    title: '残损申报',

    store: 'DamagedProductApply',
    id: 'damagedProductApplyList',

    tbar: [{
            xtype: 'combobox',
            name: 'shopArea',
            itemId: 'shopArea',
            store: 'ShopArea',
            emptyText: '请选择中心',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            xtype: 'button',
            itemId: 'createDamagedProductApply',
            text: '申报残损',
        },
        '申报时间', {
            xtype: 'datefield',
            name: 'beginTime',
            emptyText: '开始时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 1);
                date.setDate(1);
                return date;
            })(),
            maxValue: (function() {
                var date = new Date();
                date.setDate(date.getDate());
                return date;
            })(),
            value: (function() {
                var date = new Date();
                date.setDate(date.getDate() - 6);
                return date;
            })(),
            format: 'Y-m-d'
        },
        '到', {
            xtype: 'datefield',
            name: 'endTime',
            emptyText: '结束时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 1);
                date.setDate(1);
                return date;
            })(),
            maxValue: (function() {
                var date = new Date();
                date.setDate(date.getDate());
                return date;
            })(),
            value: (function() {
                var date = new Date();
                date.setDate(date.getDate());
                return date;
            })(),
            format: 'Y-m-d'
        }, {
            xtype: 'button',
            itemId: 'getDamagedProductApplyListByDate',
            text: '查询'
        }, {
            xtype: 'button',
            itemId: 'damagedProductApplyInvoice',
            text: '导出数据'
        },
        '->', {
            xtype: 'combobox',
            name: 'status',
            itemId: 'dpStatusSearch',
            store: 'DamagedProductStatus',
            emptyText: '申报状态',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value'
        },
    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'DamagedProductApply',
        displayInfo: true,
        style: 'border:none'
    }],
    columns: [{
        text: '申报时间',
        dataIndex: 'applyTime',
        width: 70,
        sortable: true,
        align: 'center',
        renderer: function(value) {
            return Ext.util.Format.date(new Date(value), "Y.m.d");
        }
    }, {
        text: '商品名（快照）',
        dataIndex: 'productName',
        width: 100,
        sortable: true,
        align: 'center',
    }, {
        text: '数量',
        dataIndex: 'count',
        width: 90,
        sortable: true,
        align: 'center',
    }, {
        text: '总价（快照）',
        dataIndex: 'totalPrice',
        width: 60,
        sortable: true,
        align: 'center',
        renderer: function(value) {
            return value / 100;
        }
    }, {
        text: '所属商家（快照）',
        dataIndex: 'shopName',
        width: 60,
        sortable: true,
        align: 'center'
    }, {
        text: '所属量贩',
        dataIndex: '',
        width: 100,
        sortable: false,
        align: 'center',
        renderer: function(value, model, record) {
            var pkgCount = record.get('pkgCount'),
                pkgName = record.get('pkgName');
            return (pkgCount == 0 || pkgName === null) ? '-' : pkgName + '*' + pkgCount;
        }
    }, {
        text: '理由',
        dataIndex: 'reasonCode',
        width: 80,
        sortable: true,
        align: 'center',
        renderer: function(value) {
            switch (value) {
                case 1:
                    return '过期';
                    break;
                case 2:
                    return '无法退货';
                    break;
                default:
                    return '未知';
            }
        }
    }, {
        text: '状态',
        dataIndex: 'status',
        width: 80,
        sortable: true,
        align: 'center',
        renderer: function(value) {
            switch (value) {
                case 0:
                    return '提交未审核状态';
                    break;
                case 1:
                    return '审核通过';
                    break;
                case 2:
                    return '审核拒绝';
                    break;
                default:
                    return '未知';
            }
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    forceFit: true,
    columnLines: true
});
