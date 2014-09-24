Ext.define('XMLifeOperating.view.operationManage.dealWaitAssignDeliverer.DealWaitAssignDelivererList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'dealWaitAssignDelivererList',
    title: '今日未分配配送订单',
    store: 'DealWaitAssignDeliverer',
    id: 'dealWaitAssignDelivererList',
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
        },{
        xtype: 'button',
        itemId: 'refresh',
        text: '刷新'
    }

    ],
    columns: [{
            xtype: 'rownumberer'
        }, 
        {
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
        }, 
        {
            text: '订单号',
            dataIndex: 'shortId',
            width: 50,
            sortable: true,
            itemId:'dealDetail',
            align: 'center',
            renderer:function(value){
                return '<a style="cursor:pointer;">'+value+'</a>';
            }
        },
        {
            text: '小区/写字楼',
            dataIndex: 'districtName',
            width: 100,
            sortable: true,
            align: 'center',
        }, 
        {
            text: '操作',
            width: 90,
            itemId: 'reapportion',
            menuDisabled: true,
            sortable: true,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return Ext.String.format('<a>分配配送员</a>', value, value);
            }
        },
        {
            text: '收货电话',
            dataIndex: 'contactsPhone',
            width: 90,
            sortable: true,
            align: 'center',
        }, 
        {
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
        }, 
        {
            text: '期望送达时间',
            dataIndex: 'deliverTime',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value) {
                var newTime = new Date(value);
                newTime = (newTime.getMonth()+1)+'-'+newTime.getDate() +' '+ newTime.getHours() + ':' + newTime.getMinutes();
                return newTime;
            }
        }, 
        {
            text: '剩余时间',
            dataIndex: 'remainTime',
            width: 80,
            sortable: true,
            align: 'center',
            renderer: function(value,da,record) {
                var status = record.get('status');
                var str='';
                switch(status){
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