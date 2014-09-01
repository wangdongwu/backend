Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateList', {
    extend: 'Ext.grid.Panel',
    xtype: 'rechargeablecardtemplatelist',
    header: false,
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
            text: '编号',
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
            text: '类型',
            dataIndex: 'type',
            width: 130,
            sortable: false,
            align: 'center',
           
        },
        {
            text: '面额/元',
            dataIndex: 'amount',
            width: 130,
            sortable: false,
            align: 'center',
           
        },
        {
            text: '返还规则',
            dataIndex: 'desc',
            width: 130,
            sortable: false,
            align: 'center',
            
        },
        {
            text: '是否新手卡',
            dataIndex: 'newAccount',
            width: 130,
            sortable: false,
            align: 'center',
           
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