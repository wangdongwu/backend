Ext.define('XMLifeOperating.view.operationManage.dealProblemDeals.DealProblemDealsList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'dealProblemDealsList',
    title: '问题订单管理',
    store: 'DealProblemDeals',
    id: 'dealProblemDealsList',
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
            text: '刷新',
            itemId: 'update',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            xtype: 'button',
            itemId: 'refresh',
            text: '刷新'
        },
        '->', {
            xtype: 'textfield',
            emptyText: '输入搜索号码...',
            name: 'keyword',
            itemId: 'keyword',
            fieldLabel: '手机/订单号'
        }, {
            xtype: 'button',
            itemId: 'dealSearch',
            text: '搜索'
        }
    ],
    columns: [{
            xtype: 'rownumberer',
            width: 50,
            align: 'center'
        }, {
            text: '日期',
            dataIndex: 'created',
            width: 75,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                return Ext.Date.format(new Date(value), 'Y.m.d');
            }
        }, {
            text: '订单号',
            dataIndex: 'shortId',
            width: 65,
            sortable: true,
            itemId: 'dealDetail',
            align: 'center',
            renderer: function(value) {
                return '<a href="javascript:;">' + value + '</a>';
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
            width: 80,
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
            text: '问题原因',
            dataIndex: 'problem',
            width: 70,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                switch (value) {
                    case 0:
                        return '默认';
                        break;
                    case 1:
                        return '买手超时';
                        break;
                    case 2:
                        return '未上班';
                        break;
                    case 3:
                        return '未分配';
                        break;
                    case 4:
                        return '配送超时';
                        break;
                    case 5:
                        return '标记问题订单';
                        break;
                    case 6:
                        return '买手未反应';
                        break;
                    default:
                        return '默认';
                }
            }
        }, {
            text: '重新分配',
            width: 65,
            itemId: 'reapportion',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                var shopperNames = model.get('shopperNames');
                var mark = 0;
                for (var j = 0; j < shopperNames.length; j++) {
                    if (shopperNames[j] != null) {
                        mark = 1;
                        break;
                    }
                }
                if (mark == 0) {
                    return '重新分配';
                }

                return Ext.String.format('<a href="javascript:;">重新分配</a>', value, value);
            }
        }, {
            text: '处理次数',
            dataIndex: 'resolveNum',
            width: 40,
            sortable: false,
            align: 'center',
        },
        // {
        //     text: '注册用户',
        //     dataIndex: 'customerName',
        //     width: 80,
        //     sortable: false,
        //     align: 'center',
        // }, 
        // {
        //     text: '注册电话',
        //     dataIndex: 'customerPhone',
        //     width: 90,
        //     sortable: false,
        //     align: 'center',
        // }, 
        // {
        //     text: '收货用户',
        //     dataIndex: 'contactsName',
        //     width: 80,
        //     sortable: false,
        //     align: 'center',
        // }, 
        {
            text: '收货电话',
            dataIndex: 'contactsPhone',
            width: 90,
            sortable: true,
            align: 'center',
        },
        /*{
            text: '中心点',
            dataIndex: 'shopAreaName',
            width: 60,
            sortable: false,
            align: 'center',
        },*/
        {
            text: '分配买手',
            dataIndex: 'shopperNames',
            width: 65,
            sortable: true,
            align: 'center',
            itemId: 'autoAllocation',
            renderer: function(value) {
                var mark = 0;
                for (var j = 0; j < value.length; j++) {
                    if (value[j] != null) {
                        mark = 1;
                        break;
                    }
                }
                if (mark == 0) {
                    return '<a href="javascript:void(0)">自动分配</a>';
                }
                var str = '';
                for (var i = 0; i < value.length; i++) {
                    str += value[i] + '<br />';
                }
                return str;
            }

        }, {
            text: '购买店铺',
            dataIndex: 'shopNames',
            width: 80,
            sortable: true,
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
            width: 50,
            sortable: true,
            align: 'center'
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
            dataIndex: 'deliverTime',
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
            width: 75,
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
            width: 60,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, {
            text: '问题标记',
            dataIndex: 'problemMark',
            width: 60,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                if (value) {
                    return Ext.String.format('已处理', value, value);
                } else {
                    return Ext.String.format('未处理', value, value);
                }
            }
        }, {
            text: '取消订单',
            width: 65,
            itemId: 'cancellation',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                var status = model.get('status');
                if (status != 20 && status != 31) {
                    return '取消订单';
                }
                return Ext.String.format('<a href="javascript:void(0)">取消订单</a>', value, value);
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
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    columnLines: true
});
