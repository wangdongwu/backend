
Ext.define('XMLifeOperating.view.operationManage.dealProblemDeals.DealProblemDealsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'dealProblemDealsList',
    title: '问题订单管理',
    store: 'DealProblemDeals',
    id:'dealProblemDealsList',

    tbar: [
        {
            xtype:'combobox',
            name:'shopArea',
            itemId:'shopArea',
            store:'ShopArea',
            emptyText:'请选择中心',
            margin:10,
            editable: false,
            queryMode:'local',
            displayField:'name',
            valueField:'id',
            hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        },
        {

            xtype: 'button',
            text: '刷新',
            itemId: 'update',
            hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        },
        
     ],

    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: '日期',
            dataIndex: 'created',
            width: 70,
            sortable: true,
            align: 'center', 
            renderer:function(value){
               var newTime = new Date(value);
               newDate = newTime.getFullYear()+'.'+(newTime.getMonth()+1)+'.'+newTime.getDate();
               return newDate;
            } 
        },
        {
            text: '订单号',
            dataIndex: 'shortId',
            width: 50,
            sortable: false,
            align: 'center',  
        },

        {
            text: '线路',
            dataIndex: 'zoneName',
            width: 60,
            sortable: false,
            align: 'center',  
        },
        {
            text: '订单状态',
            dataIndex: 'status',
            width: 70,
            sortable: false,
            align: 'center',  
            renderer:function(value){
                switch(value){
                    case 1:
                        return '正在采购';
                        break;
                    case 31:
                        return '未被接单';
                        break;
                    case 2:
                    case 21:
                    case 32:                        
                        return '等待派送';
                        break;
                    case 4:
                        return '正在配送';
                        break;
                }
            }
        },
        {
            text: '问题原因',
            dataIndex: 'problem',
            width: 70,
            sortable: false,
            align: 'center',  
            renderer:function(value){
                switch(value){
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
                    default:
                        return '默认';
                }
            }
        },
        {
            text: '注册用户',
            dataIndex: 'customerName',
            width: 80,
            sortable: false,
            align: 'center',  
        },
        {
            text: '注册电话',
            dataIndex: 'customerPhone',
            width: 90,
            sortable: false,
            align: 'center',  
        },
        {
            text: '收货用户',
            dataIndex: 'contactsName',
            width: 80,
            sortable: false,
            align: 'center',  
        },
        {
            text: '收货电话',
            dataIndex: 'contactsPhone',
            width: 90,
            sortable: false,
            align: 'center',  
        },
        {
            text: '中心点',
            dataIndex: 'shopAreaName',
            width: 60,
            sortable: false,
            align: 'center',  
        },
        {
            text: '分配买手',
            dataIndex: 'shopperNames',
            width: 80,
            sortable: false,
            align: 'center',
            renderer:function(value){
                var str='';
                for(var i=0;i<value.length;i++){
                    str += value[i]+'<br />';
                }
                return str;
            }
 
        },
        {
            text: '购买店铺',
            dataIndex: 'shopNames',
            width: 80,
            sortable: false,
            align: 'left',
            renderer:function(value){
                var str='';
                for(var i=0;i<value.length;i++){
                    str += value[i]+'<br />';
                }
                return str;
            }
        },
        {
            text: '配送员',
            dataIndex: 'delivererName',
            width: 60,
            sortable: false,
            align: 'center',  
        },
        {
            text: '下单时间',
            dataIndex: 'created',
            width: 60,
            sortable: false,
            align: 'center', 
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getHours()+':'+newTime.getMinutes();
               return newTime;
            }  
        },
        {
            text: '期望送达时间',
            dataIndex: 'deliverTime',
            width: 80,
            sortable: false,
            align: 'center', 
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getHours()+':'+newTime.getMinutes();
               return newTime;
            }   
        },
        {
            text: '剩余时间',
            dataIndex: 'remainTime',
            width: 80,
            sortable: false,
            align: 'center', 
            renderer:function(value){
                var time = (value/(3600*1000)+'').split('.');
                var time1=Math.abs(time[0]);
                var time2=Math.floor(('0.'+time[1])*60);
                time= time1+'时'+time2+'分';
                if(value<=0){
                    return '<span style="color:#ff0000">'+time+'</span>';
                }
                return '<span style="color:#000">'+time+'</span>';
            }
        },
        {
            text: '完成购买时间',
            dataIndex: 'taskDone',
            width: 80,
            sortable: false,
            align: 'center',  
            renderer:function(value){
                var str='';
                for(var i=0;i<value.length;i++){
                    var newTime = new Date(value[i]);
                    newTime = newTime.getHours()+':'+newTime.getMinutes();
                    str += newTime+'<br />';
                }
                return str;
            }
        },
        {
            text: '出货时间',
            dataIndex: 'beginDeliverTime',
            width: 60,
            sortable: false,
            align: 'center',
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getHours()+':'+newTime.getMinutes();
               return newTime;
            }  
        },
       {
            text: '问题标记',
            dataIndex: 'problemMark',
            width: 60,
            sortable: false,
            align: 'center',  
            renderer:function(value){
                if (value) 
                {
                    return Ext.String.format('已处理', value, value);
                }
                else
                {
                    return Ext.String.format('未处理', value, value);
                }
            } 
        },        
        {
            text: '重新分配',
            width: 80,
            itemId: 'reapportion',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return Ext.String.format('<a>重新分配</a>', value, value);
            }
        },
        {
            text: '取消订单',
            width: 80,
            itemId: 'cancellation',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return Ext.String.format('<a>取消订单</a>', value, value);
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
            if(XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if(XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    columnLines: true,
    frame: true,
    iconCls: 'icon-grid'
});