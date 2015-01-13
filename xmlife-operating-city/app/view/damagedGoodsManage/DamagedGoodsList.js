Ext.define('XMLifeOperating.view.damagedGoodsManage.DamagedGoodsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'damagedGoodsList',
    alias: 'widget.damagedGoodsList',
    id: 'damagedGoodsList',
    autoScroll: true,
    title: '残损审核',
    titleAlign: 'left',
    closable: true,
    store: 'DamagedProduct',
    forceFit: true,
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    requires: [
        'Ext.panel.Panel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.ux.RowExpander',
        'Ext.selection.CheckboxModel'
    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'DamagedProduct',
        displayInfo: true
    }],
    tbar: [
        '申报时间', {
            xtype: 'datefield',
            name: 'startTime',
            emptyText: '开始时间',
            maxValue: new Date(),
            value: new Date(),
            format: 'Y-m-d'
        },
        '到', {
            xtype: 'datefield',
            name: 'endTime',
            emptyText: '结束时间',
            maxValue: new Date(),
            value: new Date(),
            format: 'Y-m-d'
        }, {
            xtype: 'combo',
            editable: false,
            itemId: 'shopArea',
            store: 'ShopArea',
            triggerAction: 'all',
            displayField: 'name',
            valueField: 'id',
            fieldLabel: '商圈',
            name: 'areaId'
        }, {
            xtype: 'combo',
            editable: false,
            itemId: 'status',
            store: Ext.create('Ext.data.Store', {
                fields: ['id', 'name'],
                data: [{
                    id: '0',
                    name: '未审核'
                }, {
                    id: '1',
                    name: '审核通过'
                }, {
                    id: '2',
                    name: '商品丢失'
                }]
            }),
            triggerAction: 'all',
            displayField: 'name',
            valueField: 'id',
            fieldLabel: '申报状态',
            name: 'status'
        }, {
            xtype: 'button',
            text: '搜索',
            itemId: 'search'
        }, {
            xtype: 'button',
            style: 'margin-left: 50px;',
            text: '导出数据',
            itemId: 'export'
        }, {
            xtype: 'button',
            style: 'margin-left: 50px;',
            text: '批量通过',
            itemId: 'batchAccept'
        }
    ],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '商圈',
        dataIndex: 'areaName',
        width: 100,
        sortable: false,
        align: 'left'
    }, {
        text: '申报时间',
        dataIndex: 'applyTime',
        width: 70,
        sortable: true,
        align: 'center',
        renderer: function(value) {
            return Ext.util.Format.date(new Date(value), "Y.m.d");
        }
    }, {
        text: '商品名称',
        dataIndex: 'productName',
        width: 100,
        sortable: false,
        align: 'left'
    }, {
        text: '数量',
        dataIndex: 'count',
        width: 100,
        sortable: false,
        align: 'left'
    }, {
        text: '总价',
        dataIndex: 'totalPrice',
        width: 100,
        sortable: false,
        align: 'left',
        renderer: function(value) {
            return value / 100;
        }
    }, {
        text: '所属订单',
        dataIndex: 'dealId',
        itemId:'cDealDetail',
        width: 100,
        sortable: false,
        align: 'left',
        renderer: function(value){
            return value !== null ? '<a href="javascript:;">'+value+'</a>' : '';
        }
    }, {
        text: '所属量贩',
        dataIndex: '',
        width: 100,
        sortable: false,
        align: 'left',
        renderer: function(value,model,record){
            var pkgCount = record.get('pkgCount'),
                pkgName = record.get('pkgName');

            return (pkgCount == '' || pkgName == '') ? pkgName * pkgCount : '-';
        }
    }, {
        text: '所属商家',
        dataIndex: 'shopName',
        width: 100,
        sortable: false,
        align: 'left'
    }, {
        text: '理由',
        dataIndex: 'reasonCode',
        width: 100,
        sortable: false,
        align: 'left',
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
        width: 100,
        sortable: false,
        align: 'left',
        renderer: function(v) {
            switch (v) {
                case 0:
                    return '未审核';
                case 1:
                    return '审核通过';
                case 2:
                    return '商品丢失';
            }
        }
    }, {
        text: '操作',
        dataIndex: 'status',
        width: 50,
        sortable: false,
        align: 'left',
        itemId: 'acceptBtn',
        renderer: function(v) {
            if (v == 0) {
                return '<button>通过</button>'
            }
        }
    }, {
        text: '操作',
        dataIndex: 'status',
        width: 70,
        sortable: false,
        align: 'center',
        itemId: 'goodsLostBtn',
        renderer: function(v) {
            if (v == 0) {
                return '<button>商品丢失</button>'
            }
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }

});
