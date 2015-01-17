Ext.define('XMLifeOperating.view.centralPointManage.shopSetConfig.ShopSetConfigList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shopSetConfigList',
    title: '店铺集合管理',
    store: 'ShopSetConfig',
    id: 'shopSetConfigList',
    titleAlign: 'center',
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Shop',
        displayInfo: true,
        style: 'border:none'
    }],
    tbar: [{
        xtype: 'button',
        text: '新增店铺集合',
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
        text: '编号',
        dataIndex: 'id',
        width: 100,
        sortable: true,
        align: 'center'
    }, {
        text: '店铺集合名',
        dataIndex: 'name',
        width: 100,
        sortable: true,
        align: 'left',
        itemId: 'seeShopSetConfigSon',
        renderer: function(v) {
            return '<a href="javascript:;">' + v + '</a>';
        }
    }, {
        text: '查看集合',
        dataIndex: '',
        width: 100,
        sortable: true,
        align: 'center',
        itemId: 'seeShopSetConfigSonLookOver',
        renderer: function(v) {
            return '<a href="javascript:;">查看</a>';
        }
    }, {
        text: '操作',
        xtype: 'actioncolumn',
        width: 50,
        icon: 'resources/images/edit.png',
        tooltip: 'Edit',
        menuDisabled: true,
        sortable: true,
        itemId: 'edit',
        align: 'center'
    }, {
        text: '删除',
        xtype: 'actioncolumn',
        width: 50,
        icon: 'resources/images/delete.png',
        tooltip: 'Edit',
        menuDisabled: true,
        sortable: true,
        itemId: 'delete',
        align: 'center'
    }],
    viewConfig: {
        enableTextSelection: true,
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
    forceFit: true,
    columnLines: true
});
