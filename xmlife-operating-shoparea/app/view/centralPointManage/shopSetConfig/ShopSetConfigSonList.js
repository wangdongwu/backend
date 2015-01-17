Ext.define('XMLifeOperating.view.centralPointManage.shopSetConfig.ShopSetConfigSonList', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shopSetConfigSonList',
    title: '店铺管理',
    store: 'ShopSetItem',
    id: 'shopSetConfigSonList',
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
            text: '返回',
            itemId: 'return'
    }, {
        xtype: 'button',
        text: '新增店铺',
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
        text: '店铺链接',
        dataIndex: 'name',
        width: 100,
        sortable: true,
        align: 'left'
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
            dragText: '拖拽排序'
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
    columnLines: true,
});
