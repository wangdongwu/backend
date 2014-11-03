Ext.define('XMLifeOperating.view.sProductManage.SShopShelf', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'sShopShelf',
    id: 'sShopShelf',
    store: 'CategoryRoots',
    
    columns: [{
        xtype: 'rownumberer',
        align: 'center',
        itemId: 'rowIndex',
        id: 'rowIndex',
        tdCls: 'user-td'
    }, {
        text: '货架名称',
        dataIndex: 'name',
        align: 'center',
        width: 150,
        tdCls: 'user-td'
    }, {
        text: '是否有次级货架',
        dataIndex: 'leaf',
        align: 'center',
        width: 110,
        tdCls: 'user-td',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            if (value) {
                return '无';
            }
            return '有';
        }
    }/*, {
        text: '编辑',
        xtype: 'actioncolumn',
        dataIndex: 'type',
        width: 50,
        tooltip: 'Edit',
        menuDisabled: true,
        sortable: true,
        itemId: 'openModifyShelvesWin',
        tdCls: 'user-td',
        align: 'center',
        items: [{
            icon: 'resources/images/edit.png',
            getClass: function(value, metaData, record) {
                if (value === 0) {
                    metaData.css = 'x-hide-display';
                } else {
                    metaData.css = 'x-grid-icon';
                }
            }
        }]
    }*/],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        style: {
            border: 'none'
        },
        items: [/*{
            text: '添加货架',
            itemId: 'openCreateShelvesWin'
        }, {
            xtype: 'button',
            text: '保存排序',
            itemId: 'saveShelvesOrder'
        },*/ '->',/* {
            xtype: 'button',
            text: '查看所有下架商品',
            itemId: 'viewAllSoldOutProduct'
        }, {
            xtype: 'button',
            text: '查看所有雪藏商品',
            itemId: 'viewAllHiddenProduct'
        }, */{
            xtype: 'textfield',
            emptyText: '输入商品名称',
            name: 'keyword',
            itemId: 'keyword'

        }, {
            xtype: 'button',
            itemId: 'productSearch',
            text: '搜索',
        }]
    }, {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            xtype: 'pagingtoolbar',
            itemId: 'pagetool',
            store: 'CategoryRoots',
            displayInfo: true,
            style: 'border:none'
        }]
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        },
        listeners: {
            drop: function(node, data, dropRec, dropPosition) {
                var me = this;
                //Ext.getCmp('rowIndex').update(this);
            }
        }
    }
});