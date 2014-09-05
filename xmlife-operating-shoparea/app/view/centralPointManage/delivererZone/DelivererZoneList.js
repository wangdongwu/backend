Ext.define('XMLifeOperating.view.centralPointManage.delivererZone.DelivererZoneList', {
    extend: 'Ext.grid.Panel',
    closable : true,
    xtype: 'delivererZoneList',
    title: '线路管理',
    store: 'DelivererZone',
    id:'delivererZoneList',
    tbar: [
        {
            xtype: 'button',
            text: '添加线路',
            itemId: 'add'
        },
        {
            xtype:'combobox',
            name:'shopArea',
            itemId:'shopArea',
            store:'ShopArea',
            emptyText:'请选择中心',
            margin:10,
            editable: false,
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
            text: 'ID',
            dataIndex: 'id',
            width: 50,
            sortable: false,
            align: 'left'
        },
        {
            text: '线路名称',
            dataIndex: 'name',
            width: 100,
            sortable: false,
            align: 'left',
            itemId:'lineName'
        },
        /*{
            text: '中心点',
            dataIndex: 'shopAreaName',
            width: 60,
            sortable: false,
            align: 'left'
        },*/
        {
            text: '小区数',
            dataIndex: 'districts',
            width: 60,
            sortable: false,
            align: 'left',
            itemId:'bindCommunity'
        },
        {
            text: '配送员',
            dataIndex: 'deliverers',
            width: 60,
            sortable: false,
            align: 'left',
            itemId:'bindCourier'
        },
        {
            xtype: 'actioncolumn',
            text: '操作',
            width: 40,
            icon: 'resources/images/delete.png',
            tooltip: 'Delete',
            menuDisabled: true,
            sortable: false,
            itemId: 'deleteLineId',
            // hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
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
            // if(XMLifeOperating.generic.Global.operating_type != 'center') {
            //     return;
            // }
            if(XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    columnLines: true,
    
    
});
