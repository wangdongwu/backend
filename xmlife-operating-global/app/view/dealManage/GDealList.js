Ext.define('XMLifeOperating.view.dealManage.GDealList', {
    extend: 'Ext.grid.Panel',
    id: 'gDealList',
    xtype: 'gDealList',
    title: '订单管理',
    titleAlign: 'left',
    closable: true,
    forceFit: 'true',
    store: 'Deal',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'Deal',
        dock: 'bottom',
        displayInfo: true
            /*,
                  items : ['->'],   
                  prependButtons: true*/
    }],
    tbar: [
        '查询范围', {
            xtype: 'datefield',
            name: 'beginTime',
            emptyText: '开始时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 3);
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
                date.setMonth(date.getMonth() - 3);
                return date;
            })(),
            format: 'Y-m-d',
            width: 100
        },
        '到', {
            xtype: 'datefield',
            name: 'endTime',
            emptyText: '结束时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 3);
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
            format: 'Y-m-d',
            width: 100
        }, {
            xtype: 'button',
            itemId: 'getDealListByDate',
            text: '查询'
        }, {
            xtype: 'combobox',
            name: 'shopAread',
            itemId: 'shopAread',
            store: 'ShopArea',
            emptyText: '请选择中心',
            editable: false,
            //queryMode:'local',
            displayField: 'name',
            valueField: 'id',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            xtype: 'combobox',
            name: 'status',
            itemId: 'statusSearch',
            fieldLabel: '状态',
            labelWidth: 50,
            store: 'DealStatus',
            emptyText: '状态',
            labelAlign: 'right',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value'
        },
        '->', {
            xtype: 'textfield',
            emptyText: '输入搜索号码...',
            name: 'keyword',
            itemId: 'keyword',
            fieldLabel: '手机/订单号码',
            labelAlign: 'right',
            /* regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.PHONE,
             regexText: '请输入正确的手机号'*/
        }, {
            xtype: 'button',
            itemId: 'dealSearch',
            text: '搜索'
        }
    ],
    columns: [{
            xtype: 'rownumberer'
        }, {
            text: '日期',
            dataIndex: 'created',
            sortable: true,
            renderer: function(value) {
                var newTime = new Date(value);
                newDate = newTime.getFullYear() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getDate();
                return newDate;
            }
        }, {
            text: '订单号',
            dataIndex: 'shortId',
            sortable: false,
            itemId: 'dealDetail',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a style="color:#248bca;">' + value + '</a>'
            }
        }, {
            text: '线路',
            dataIndex: 'zoneName',
            sortable: false,

        }, {
            text: '订单状态',
            dataIndex: 'status',
            sortable: false,
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
            text: '顾客',
            dataIndex: 'contactsName',
            sortable: false,
            itemId: 'customerDetail',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a style="color:#248bca;">' + value + '</a>'
            }
        }, {
            text: '顾客电话',
            dataIndex: 'contactsPhone',
            sortable: false,

        }, {
            text: '中心点',
            dataIndex: 'shopAreaName',
            sortable: false
        }, {
            text: '分配买手',
            dataIndex: 'shopperNames',
            sortable: false,
            align: 'left',
            renderer: function(value) {
                var str = '';
                for (var i = 0; i < value.length; i++) {
                    str += value[i] + '<br />';
                }
                return str;
            }
        }, {
            text: '购买店铺',
            dataIndex: 'shopNames',
            sortable: false,
            align: 'left',
            renderer: function(value) {
                var str = '';
                for (var i = 0; i < value.length; i++) {
                    str += value[i] + '<br />';
                }
                return str;
            }
        }, {
            text: '配送员',
            dataIndex: 'delivererName',
            sortable: false
        }, {
            text: '下单时间',
            dataIndex: 'created',
            sortable: false,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '期望送达时间',
            dataIndex: 'deliverTime',
            sortable: false,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '剩余时间',
            dataIndex: 'remainTime',
            sortable: false,
            renderer: function(value) {
                var time = (value / (3600 * 1000) + '').split('.');
                var time1 = Math.abs(time[0]);
                var time2 = Math.floor(('0.' + time[1]) * 60);
                time = time1 + '时' + time2 + '分';
                if (value <= 0) {
                    return '<span style="color:#ff0000">' + time + '</span>';
                }
                return '<span style="color:#000">' + time + '</span>';
            }
        }, {
            text: '完成购买时间',
            dataIndex: 'taskDone',
            sortable: false,
            renderer: function(value) {
                var str = '';
                for (var i = 0; i < value.length; i++) {
                    var newTime = new Date(value[i]);
                    newTime = newTime.getHours() + ':' + newTime.getMinutes();
                    str += newTime + '<br />';
                }
                return str;
            }
        }, {
            text: '出货时间',
            dataIndex: 'beginDeliverTime',
            sortable: false,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '送达时间',
            dataIndex: 'completeTime',
            sortable: false,
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '操作',
            width: 80,
            itemId: 'toproblemdeal',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return Ext.String.format('<a>转为问题订单</a>', value, value);
            }
        }, {
            text: '操作',
            itemId: 'showReturnProductBtn',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return Ext.String.format('<button>退货</button>', value, value);
            }
        }
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
            var combo = view.down('#shopAread');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    }
});
