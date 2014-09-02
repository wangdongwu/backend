Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardInstance.RechargeableCardInstanceList', {
    extend: 'Ext.grid.Panel',
    xtype: 'rechargeablecrdinstancelist',
    title : '充值卡实例管理',
    titleAlign : 'left',
    forceFit: true,frame : true,
    store: 'CardBatch',
    tbar: [
        {
            xtype: 'button',
            text: '生成充值卡',
            itemId: 'generateCard'
        },
    ],
    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: '批次',
            dataIndex: 'id',
            width: 100,
            sortable: false,  
        },
        {
            text: '名称',
            dataIndex: 'name',
            width: 180,
            sortable: false,
            
        },
        {
            text: '充值有效期开始时间',
            dataIndex: 'startTime',
            width: 130,
            sortable: false,
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getFullYear()+newTime.getMonth()+newTime.getDate();
               return newTime;
            }  
            
        },
        {
            text: '充值有效期结束时间',
            dataIndex: 'endTime',
            width: 130,
            sortable: false,
            renderer:function(value){
               var newTime = new Date(value);
               newTime = newTime.getFullYear()+newTime.getMonth()+newTime.getDate();
               return newTime;
            }  
            
        },
        {
            text: '发行量/张',
            dataIndex: 'total',
            width: 130,
            sortable: false,
            
        },
        {
            text: '使用模板',
            dataIndex: 'descStrokeColor',
            width: 130,
            sortable: false,
            
        },
        {
            text: '操作',
            dataIndex: 'descDegree',
            width: 130,
            sortable: false,
        },
      
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});