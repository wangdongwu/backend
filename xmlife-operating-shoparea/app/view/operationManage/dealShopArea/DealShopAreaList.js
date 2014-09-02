
Ext.define('XMLifeOperating.view.operationManage.dealShopArea.DealShopAreaList', {
    extend: 'Ext.grid.Panel',
    xtype: 'dealShopAreaList',

    title: '货到中心管理',

    store: 'DealShopArea',
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
        
    ],

    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: '日期',
            dataIndex: 'created',
            width: 100,
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
            dataIndex: 'shortBackendId',
            width: 60,
            sortable: false,
            align: 'center',  
        },

        {
            text: '线路',
            dataIndex: 'deliveryZoneName',
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
                    case 7:
                        return '订单取消';
                        break;
                    case 2:
                        return '已买完';
                        break;
                    case 21:
                        return '已送到';
                        break;
                    case 22:
                        return '等待取货';
                        break;
                }
            }
        },
        {
            header:"货架",
            width: 90,
            dataIndex: 'status',
            itemId: 'arrivalOnCenter',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer : function(value, metadata, model, rowIndex, colIndex, store) { 
                if(value==2){
                    var seeBtn = '<input type="button" value="货到中心" />'; 
                    return seeBtn; 
                }
                return '--';
                
            } 
        },
        {
            text: '顾客',
            dataIndex: 'customName',
            width: 60,
            sortable: false,
            align: 'center',  
        },
        {
            text: '顾客电话',
            dataIndex: 'customPhone',
            width: 100,
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
            dataIndex: 'shopperName',
            width: 60,
            sortable: false,
            align: 'center',  
        },
        {
            text: '购买店铺',
            dataIndex: 'shopName',
            width: 60,
            sortable: false,
            align: 'center',  
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
            dataIndex: 'deliTime',
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
            width: 60,
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
            text: '操作',
            dataIndex: 'name',
            width: 60,
            sortable: false,
            align: 'center',  
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
    forceFit : true,
    columnLines: true,
    frame: true,
    iconCls: 'icon-grid'
});