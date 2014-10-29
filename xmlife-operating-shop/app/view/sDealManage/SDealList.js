Ext.define('XMLifeOperating.view.sDealManage.SDealList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'sDealList',

    title: '订单管理',

    store: 'Deal',
    id: 'sDealList',

    tbar: [
        '查询范围', {
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
        },{
            xtype: 'button',
            itemId: 'getDealListByDate',
            text: '查询',
        }, {
            xtype: 'button',
            itemId: 'productInvoice',
            text: '导出商品对货单',
        },

    ],
 
    columns: [{
            text: '日期',
            dataIndex: 'created',
            width: 70,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var newTime = new Date(value);
                newDate = newTime.getFullYear() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getDate();
                return newDate;
            }
        }, {
            text: '订单号',
            dataIndex: 'shortId',
            width: 50,
            sortable: true,
            align: 'center',
            itemId: 'dealDetail',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a>' + value + '</a>'
            }
        }, {
            text: '小区/写字楼',
            dataIndex: 'districtName',
            width: 100,
            sortable: true,
            align: 'center',
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
        },
        {
            text: '分配买手',
            dataIndex: 'shopperNames',
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
            text: '购买店铺',
            dataIndex: 'shopNames',
            width: 60,
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
            text: '分配配送员',
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
            width: 70,
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
            text: '送达时间',
            dataIndex: 'completeTime',
            width: 60,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        },
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    listeners: {
        onShowView: function(view, viewName) {
            /*if(XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }*/
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
    columnLines: true,


});