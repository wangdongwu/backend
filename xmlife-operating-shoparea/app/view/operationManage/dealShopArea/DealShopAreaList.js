Ext.define('XMLifeOperating.view.operationManage.dealShopArea.DealShopAreaList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    id: 'dealShopAreaList',
    xtype: 'dealShopAreaList',

    title: '货到中心管理',

    store: 'DealShopArea',
    tbar: [{
        xtype: 'combobox',
        name: 'shopArea',
        itemId: 'shopArea',
        store: 'ShopArea',
        emptyText: '请选择中心',
        margin: 10,
        editable: false,
        queryMode: 'local',
        displayField: 'name',
        valueField: 'id',
        hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
    }, {
        xtype: 'button',
        itemId: 'refresh',
        text: '刷新'
    }, '->', {
        xtype: 'textfield',
        emptyText: '输入搜索号码...',
        name: 'keyword',
        itemId: 'keyword',
        fieldLabel: '手机/订单号'
    }, {
        xtype: 'button',
        itemId: 'dealSearch',
        text: '搜索'
    }],

    columns: [{
            xtype: 'rownumberer',
            width: 50,
            align: 'center'
        }, {
            text: '日期',
            dataIndex: 'created',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var newTime = new Date(value);
                newDate = newTime.getFullYear() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getDate();
                return newDate;
            }
        }, {
            text: '订单号',
            dataIndex: 'shortBackendId',
            width: 60,
            sortable: true,
            align: 'center',
            itemId: 'dealDetail',
            renderer: function(value) {
                return '<a style="cursor:pointer;">' + value + '</a>';
            }
        }, {
            text: '小区/写字楼',
            dataIndex: 'districtName',
            width: 80,
            sortable: true,
            align: 'center'
        }, {
            text: '订单状态',
            dataIndex: 'status',
            width: 70,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                switch (value) {
                    case 1:
                        return '正在备货-' + value;
                        break;
                    case 31:
                        return '分配买手失败-' + value;
                        break;
                    case 2:
                        return '已出货-' + value;
                        break;
                    case 32:
                        return '分配快递员失败-' + value;
                        break;
                    case 3:
                        return '配送中-' + value;
                        break;
                    case 4:
                        return '完成配送-' + value;
                        break;
                    case 7:
                        return '订单取消-' + value;
                        break;
                    case 6:
                        return '全部退货-' + value;
                        break;
                    case 20:
                        return '等待分配买手-' + value;
                        break;
                    case 21:
                        return '货到中心-' + value;
                        break;
                    case 22:
                        return '等待快递员取货-' + value;
                        break;
                    default:
                        return '未知-' + value;
                }
            }
        }, {
            header: "货架",
            width: 80,
            dataIndex: 'status',
            itemId: 'arrivalOnCenter',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                if (value == 2) {
                    var seeBtn = '<input type="button" value="货到中心" />';
                    return seeBtn;
                }
                return '--';

            }
        }, {
            text: '收货人',
            dataIndex: 'customName',
            width: 80,
            sortable: true,
            align: 'center'
        }, {
            text: '收货人电话',
            dataIndex: 'customPhone',
            width: 90,
            sortable: true,
            align: 'center'
        }, {
            text: '分配买手',
            dataIndex: 'shopperName',
            width: 60,
            sortable: true,
            align: 'center',
        }, {
            text: '购买店铺',
            dataIndex: 'shopName',
            width: 80,
            sortable: true,
            align: 'center',
        }, {
            text: '配送员',
            dataIndex: 'delivererName',
            width: 60,
            sortable: true,
            align: 'center',
        }, {
            text: '下单时间',
            dataIndex: 'created',
            width: 60,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '期望送达时间',
            dataIndex: 'deliTime',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = (newTime.getMonth() + 1) + '-' + newTime.getDate() + ' ' + newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '剩余时间',
            dataIndex: 'remainTime',
            width: 60,
            sortable: true,
            align: 'center',
            renderer: function(value, da, record) {
                var status = record.get('status');
                var str = '';
                switch (status) {
                    case 4:
                        return '完成配送';
                        break;
                    case 6:
                        return '全部退货';
                        break;
                    case 7:
                        return '已取消';
                        break;
                    default:

                        var time = (value / (3600 * 1000) + '').split('.');
                        var time1 = Math.abs(time[0]);
                        var time2 = Math.floor(('0.' + time[1]) * 60);
                        time = time1 + '时' + time2 + '分';
                        if (value <= 0) {
                            return '<span style="color:#ff0000">' + time + '</span>';
                        }
                        return '<span style="color:#000">' + time + '</span>';
                        break;
                }
            }
        }, {
            text: '完成购买时间',
            dataIndex: 'taskDone',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        },
        // {
        //     text: '操作',
        //     dataIndex: 'name',
        //     width: 60,
        //     sortable: false,
        //     align: 'center',
        // },
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    columnLines: true,
});