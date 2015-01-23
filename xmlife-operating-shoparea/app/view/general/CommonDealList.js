// 这个类和全局后台中同路径文件内容一致，修改时按需要同步。
Ext.define('XMLifeOperating.view.general.CommonDealList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'commonDealList',
    columns: {
        defaults: {
            align: 'center'
        },
        items: [{
            xtype: 'rownumberer'
        }, {
            text: '日期',
            dataIndex: 'created',
            renderer: function(value) {
                return Ext.Date.format(new Date(value), 'Y.m.d');
            }
        }, {
            text: '长单号',
            dataIndex: 'dealBackendId',
            itemId: 'dealDetail',
            renderer: function(value) {
                return '<a href="javascript:;">' + value + '</a>';
            }
        }, {
            text: '订单状态',
            dataIndex: 'status',
            renderer: function(value) {
                switch (value) {
                    case 1:
                        return '正在备货-' + value;
                    case 31:
                        return '分配买手失败-' + value;
                    case 2:
                        return '已出货-' + value;
                    case 32:
                        return '分配快递员失败-' + value;
                    case 3:
                        return '配送中-' + value;
                    case 4:
                        return '完成配送-' + value;
                    case 7:
                        return '订单取消-' + value;
                    case 6:
                        return '全部退货-' + value;
                    case 20:
                        return '等待分配买手-' + value;
                    case 21:
                        return '货到中心-' + value;
                    case 22:
                        return '等待快递员取货-' + value;
                    case 23:
                        return '分配买手中－' + value;
                    default:
                        return '未知-' + value;
                }
            }
        }, {
            text: '顾客',
            dataIndex: 'contactsName',
            itemId: 'customerDetail',
            renderer: function(value) {
                return '<a href="javascript:;">' + value + '</a>';
            }
        }, {
            text: '顾客电话',
            dataIndex: 'contactsPhone'
        }, {
            text: '中心点',
            dataIndex: 'shopAreaName',
        }, {
            text: '买手',
            dataIndex: 'superShopperName',
            itemId: 'superShopperName'
        }, {
            text: '购买店铺',
            dataIndex: 'shopName'
        }, {
            text: '下单时间',
            dataIndex: 'created',
            renderer: function(value) {
                return Ext.Date.format(new Date(value), 'H:i');
            }
        }, {
            text: '期望送达时间',
            dataIndex: 'deliverTime',
            renderer: function(value) {
                return Ext.Date.format(new Date(value), 'm-d H:i');
            },
        }, {
            text: '剩余时间',
            dataIndex: 'remainTime',
            renderer: function(value, metaData, record) {
                var status = record.get('status');
                switch (status) {
                    case 4:
                        return '完成配送';
                    case 6:
                        return '全部退货';
                    case 7:
                        return '已取消';
                    default:
                        var time = (value / (3600 * 1000) + '').split('.');
                        var time1 = Math.abs(time[0]);
                        var time2 = Math.floor(('0.' + time[1]) * 60);
                        time = time1 + '时' + time2 + '分';

                        var color = value <= 0 ? '#ff0000' : '#000';
                        return '<span style="color:' + color + '">' + time + '</span>';
                }
            }
        }, {
            text: '接单时间',
            dataIndex: 'assignShopperTime',
            renderer: function(value) {
                return Ext.Date.format(new Date(value), 'H:i');
            }
        }, {
            text: '完成购买时间',
            dataIndex: 'buyDone',
            renderer: function(value) {
                return Ext.Date.format(new Date(value), 'H:i');
            }
        }, {
            text: '送达时间',
            dataIndex: 'completeTime',
            renderer: function(value) {
                return Ext.Date.format(new Date(value), 'H:i');
            }
        }]
    },
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    columnLines: true
});
