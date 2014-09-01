Ext.define('XMLifeOperating.view.userManage.customer.CustomerDealList', {
    extend: 'Ext.window.Window',
    xtype: 'CustomerDealList',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'destroy',
    modal: true,
    width: 800,
    height: 600,
    resizable: false,
    layout: 'fit',
    initComponent: function() {
        this.items = [{
            xtype : 'grid',
            store : 'Deal',
            layout: 'fit',
            forceFit: true,
                columns: [
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
            width: 150,
            sortable: false,
            align: 'center',  
            itemId: 'dealDetail',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a>'+value+'</a>'
            }
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
            width: 60,
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
                    case 3:
                        return '正在配送';
                        break;
                    case 4:
                        return '正在配送';
                        break;
                    case 7:
                        return '订单取消';
                        break;
                    case 20:
                        return '等待分配买手';
                        break;
                    case 21:
                        return '货到中心';
                        break;
                    case 22:
                        return '等待取货';
                        break;
                    default:
                        return '未知';
                }
            }
        },
        {
            text: '顾客',
            dataIndex: 'customerName',
            width: 100,
            sortable: false,
            align: 'center',
            itemId: 'customerDetail',  
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a>'+value+'</a>'
            }
        },
        {
            text: '顾客电话',
            dataIndex: 'customerPhone',
            width: 60,
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
            text: '购买店铺',
            dataIndex: 'shopNames',
            width: 60,
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
            width: 100,
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
            text: '送达时间',
            dataIndex: 'completeTime',
            width: 80,
            sortable: false,
            align: 'center', 
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getHours()+':'+newTime.getMinutes();
               return newTime;
            } 
        }
                ]
        }];

        this.callParent(arguments);

    }

        
});

