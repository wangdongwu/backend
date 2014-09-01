/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.staffManage.deliverer.GDealDelivererHistoryList', {
    extend: 'Ext.grid.Panel',
    xtype: 'gDealDelivererHistoryList',

    header: false,

    store: 'DealDelivererHistory',
     tbar: [
        {
            xtype: 'button',
            text: '返回',
            itemId: 'delivererReturn'
        },
        {

            xtype: 'radio',
            fieldLabel:'今天',
            itemId: 'dayType1',
            name:'dayType',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'昨天',
            name:'dayType',
            itemId: 'dayType2',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'前天',
            name:'dayType',
            itemId: 'dayType3',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'本周',
            name:'dayType',
            itemId: 'dayType4',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'上周',
            name:'dayType',
            itemId: 'dayType5',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'本月',
            name:'dayType',
            itemId: 'dayType6',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        {

            xtype: 'radio',
            fieldLabel:'上月',
            name:'dayType',
            itemId: 'dayType7',
            labelAlign: 'right',
            style : 'border:0px solid;margin-right:10px;',
        },
        
        


    ],

    columns: [
       
        {
            text: '订单号',
            dataIndex: 'dealBackendId',
            sortable: false,
            width: 150
        },
        {
            text: '下单时间',
            dataIndex: 'created',
            format:'H:i',
            sortable: false,
            width: 100
        },
        {
            text: '买完时间',
            dataIndex: 'taskDone',
            format:'H:i',
            sortable: false,
            width: 100
        },
        {
            text: '出货时间',
            dataIndex: 'beginDeliverTime',
            format:'H:i',
            sortable: false,
            width: 100
        },
        {
            text: '完成时间',
            dataIndex: 'completeTime',
            format:'H:i',
            sortable: false,
            width: 100
        },
        {
            text: '顾客',
            dataIndex: 'customerName',
            sortable: false,
            width: 100
        },
        {
            text: '联系方式',
            dataIndex: 'customerPhone',
            sortable: false,
            width: 100
        },
        {
            text: '店铺',
            dataIndex: 'shopNames',
            sortable: false,
            width: 100
        },
        {
            header:"采购清单",
            width: 90,
            itemId: 'dealItemsId',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            renderer : function(value, metadata, model, rowIndex, colIndex, store) { 

                var seeBtn = '<span style="cursor:pointer">查看</span>';
                return seeBtn; 
            } 
        },
        {
            text: '订单情况',
            dataIndex: 'status',
            sortable: false,
            width: 60
        },
        {
            text: '评价',
            dataIndex: 'review',
            sortable: false,
            width: 100
        },
        
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});