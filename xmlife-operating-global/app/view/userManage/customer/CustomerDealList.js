Ext.define('XMLifeOperating.view.userManage.customer.CustomerDealList', {
    extend: 'Ext.grid.Panel',
    xtype: 'CustomerDealList',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    tbar : [{
         xtype: 'button',
            text: '返回',
            itemId: 'returnCustomerList'
    }],
    store : 'Deal'
    ,
    forceFit: true,
    layout: 'fit',
    columns : [
        {
            text: '订单号',
            dataIndex: 'shortId',
            width: 80,
            sortable: false,
               
            itemId: 'dealDetail',
            renderer: function(value, metadata, model, rowIndex, colIndex, store) {
                return '<a>'+value+'</a>'
            }
        },
        {
            text: '下单时间',
            dataIndex: 'created',
            width: 60,
            sortable: false,
              
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getHours()+':'+newTime.getMinutes();
               return newTime;
            }  
        },
        {
            text: '地址',
            dataIndex: 'dtoAddress',
            width: 80,
            sortable: false,
               
            itemId: 'dealAddress'
        },
        {
            text: '期望送达时间',
            dataIndex: 'deliverTime',
            width: 80,
            sortable: false,
              
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
              
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getHours()+':'+newTime.getMinutes();
               return newTime;
            } 
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
            text: '订单详情',
            sortable: false,
             
            itemId: 'dealDetail',  
            renderer: function() {
                return '<a>查看</a>'
            }
        },
        {
            text: '订单价格',
             
            itemId: 'historyDealPrice',
            dataIndex : 'dealPrice',
            renderer : function(value){
                return value / 100;
            }
        },
        {
            text: '成交价格',
             
            dataIndex : 'actualDealPrice',
            renderer : function(value){
                return value / 100;
            }
        },
        {
            text: '配送员',
            dataIndex: 'delivererName',
            width: 60,
            sortable: false,
               
        },
        {
            text: '订单状态',
            dataIndex: 'status',
            width: 60,
            sortable: false,
               
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
        }
                ]
});

