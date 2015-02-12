Ext.define('XMLifeOperating.view.centralPointManage.delivererZone.DelivererZoneList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'delivererZoneList',
    title: '线路管理',
    store: 'DelivererZone',
    id: 'delivererZoneList',
    tbar: [{
        xtype: 'button',
        text: '添加线路',
        itemId: 'add'
    }, {
        xtype: 'combobox',
        name: 'shopArea',
        itemId: 'shopArea',
        store: 'ShopArea',
        emptyText: '请选择中心',
        margin: 10,
        editable: false,
        displayField: 'name',
        valueField: 'id',
        hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
    }],
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        text: 'ID',
        dataIndex: 'id',
        width: 50,
        sortable: true,
        align: 'left'
    }, {
        text: '线路名称',
        dataIndex: 'name',
        width: 100,
        sortable: true,
        align: 'left',
        itemId: 'lineName'
    }, {
        text: '小区数',
        dataIndex: 'districts',
        width: 60,
        sortable: true,
        align: 'left',
        itemId: 'bindCommunity',
        renderer: function(value) {
            return '<a href="javascript:;">' + value + '</a>';
        }
    }, {
        text: '配送员',
        dataIndex: 'deliverers',
        width: 60,
        sortable: true,
        align: 'left',
        itemId: 'bindCourier'
    }, {
        xtype: 'actioncolumn',
        text: '操作',
        width: 40,
        icon: 'resources/images/delete.png',
        tooltip: 'Delete',
        menuDisabled: true,
        sortable: true,
        itemId: 'deleteLineId'
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    },
    columnLines: true
});
