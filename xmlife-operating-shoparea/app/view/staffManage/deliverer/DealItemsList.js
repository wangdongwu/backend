Ext.define('XMLifeOperating.view.staffManage.deliverer.DealItemsList', {
    extend: 'Ext.grid.Panel',
    closable : true,
    xtype: 'dealItemsList',

    header: false,

    store: 'DealItems',
    
    tbar: [
        {
            xtype: 'button',
            text: '返回',
            itemId: 'dealDelivererHistoryListReturn'
        }
    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'DealItems',
        displayInfo: true
    }],
    columns: [

        {
            text: '商品名称',
            dataIndex: 'name',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '所属店铺',
            dataIndex: 'shopName',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '单位',
            dataIndex: 'unit',
            width: 50,
            sortable: false,
            align: 'center',  
        },
        {
            text: '数量',
            dataIndex: 'num',
            width: 50,
            sortable: false,
            align: 'center',  
        },
        {
            text: '进价',
            dataIndex: 'pprice',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '原价',
            dataIndex: 'fprice',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '售价',
            dataIndex: 'price',
            width: 80,
            sortable: false,
            align: 'center',  
        },
        {
            text: '销售总价',
            dataIndex: 'dealPrice',
            
            width: 80,
            sortable: false,
            align: 'center',  
        },
        {
            text: '退货数量',
            dataIndex: 'returnNum',
            width: 60,
            sortable: false,
            align: 'center',  
        },
        {
            text: '退货总价',
            dataIndex: 'returnPrice',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '取消数量',
            dataIndex: 'cancelNum',
            width: 60,
            sortable: false,
            align: 'center',  
        },
        {
            text: '取消总价',
            dataIndex: 'cancelPrice',
            width: 100,
            sortable: false,
            align: 'center',  
        },
        {
            text: '成交总价',
            dataIndex: 'actualItemPrice',
            width: 100,
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