Ext.define('XMLifeOperating.view.staffManage.deliverer.GDealItemsListDeliverer', {
    extend: 'Ext.grid.Panel',
    xtype: 'gDealItemsListDeliverer',
    id:'gDealItemsListDeliverer',
    header: false,
    title: '配送员采购清单',
    store: 'DealItems',
    
    tbar: [
        {
            xtype: 'button',
            text: '返回',
            itemId: 'dealDelivererHistoryListReturn'
        }
    ],

    columns: [
        {
            xtype: 'rownumberer'
        }, 
        {
            text: '商品名称',
            dataIndex: 'name',
            width: 100,
            sortable: false,
               
        },
        {
            text: '所属店铺',
            dataIndex: 'shopName',
            width: 100,
            sortable: false,
               
        },
        {
            text: '单位',
            dataIndex: 'unit',
            width: 50,
            sortable: false,
               
        },
        {
            text: '数量',
            dataIndex: 'num',
            width: 50,
            sortable: false,
               
        },
        {
            text: '进价',
            dataIndex: 'pprice',
            width: 100,
            sortable: false,
            renderer: function(value) {
                return value / 100;
            },
               
        },
        {
            text: '原价',
            dataIndex: 'fprice',
            width: 100,
            sortable: false,
            renderer: function(value) {
                return value / 100;
            },
               
        },
        {
            text: '售价',
            dataIndex: 'price',
            width: 80,
            sortable: false,
            renderer: function(value) {
                return value / 100;
            },
               
        },
        {
            text: '销售总价',
            dataIndex: 'dealPrice',   
            width: 80,
            sortable: false,
            renderer: function(value) {
                return value / 100;
            },
               
        },
        {
            text: '退货数量',
            dataIndex: 'returnNum',
            width: 60,
            sortable: false,
               
        },
        {
            text: '退货总价',
            dataIndex: 'returnPrice',
            width: 100,
            sortable: false,
            renderer: function(value) {
                return value / 100;
            },
               
        },
        {
            text: '取消数量',
            dataIndex: 'cancelNum',
            width: 60,
            sortable: false,
               
        },
        {
            text: '取消总价',
            dataIndex: 'cancelPrice',
            width: 100,
            sortable: false,
            renderer: function(value) {
                return value / 100;
            },
               
        },
        {
            text: '成交总价',
            dataIndex: 'actualItemPrice',
            width: 100,
            sortable: false,
            renderer: function(value) {
                return value / 100;
            },
               
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }

});