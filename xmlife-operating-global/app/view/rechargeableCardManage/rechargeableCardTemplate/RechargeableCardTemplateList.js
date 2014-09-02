Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateList', {
    extend: 'Ext.grid.Panel',
    xtype: 'rechargeablecardtemplatelist',
    title : '充值卡模板管理',
    titleAlign : 'left',
    forceFit: true,
    store: 'CardTemplate',
    tbar: [
        {
            xtype: 'button',
            text: '添加普通充值卡模板',
            itemId: 'addCardTemplate'
        },
        {
            xtype: 'button',
            text: '添加分次返还卡模板',
            itemId: 'addReturnTemplate'
        },
    ],
    columns: [
       {
            xtype: 'rownumberer'
        }, 
        {
            text: '编号',
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
            text: '类型',
            dataIndex: 'type',
            width: 130,
            sortable: false,
             
           
        },
        {
            text: '面额/元',
            dataIndex: 'amount',
            width: 130,
            sortable: false,
             
           
        },
        {
            text: '返还规则',
            dataIndex: 'desc',
            width: 130,
            sortable: false,
             
            
        },
        {
            text: '是否新手卡',
            dataIndex: 'newAccount',
            width: 130,
            sortable: false,
             
           
           renderer: function (value) {
            console.log(value);
                if(value==true){
                    return '是';
                }else{
                    return '否';
                }
            }
                
        }
       
        
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});