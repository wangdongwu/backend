Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardInstance.RechargeableCardInstanceList', {
    extend: 'Ext.grid.Panel',
    xtype: 'rechargeablecrdinstancelist',

    header: false,

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
            text: '批次',
            dataIndex: 'id',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '名称',
            dataIndex: 'name',
            width: 180,
            sortable: false,
            align: 'center',
            
        },
        {
            text: '充值有效期开始时间',
            dataIndex: 'startTime',
            width: 130,
            sortable: false,
            align: 'center',
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
            align: 'center',
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
            align: 'center',
            
        },
        {
            text: '使用模板',
            dataIndex: 'descStrokeColor',
            width: 130,
            sortable: false,
            align: 'center',
            
        },
        {
            text: '操作',
            dataIndex: 'descDegree',
            width: 130,
            sortable: false,
            align: 'center',
        },
      
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});