Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopShelf', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shopshelf',
    store: 'CategoryRoots',
    id: 'ShelvesList',
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
        tdCls: 'user-td'
    }, {
        text: '是否有次级货架',
        dataIndex: 'leaf',
        align: 'center',
        tdCls: 'user-td',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            if (value) {
                return '无';
            }
            return '有';
        }
    }, {
        text: '货架图片（横）',
        dataIndex: 'xImage',
        width: 420,
        sortable: false,
        align: 'center',
        tdCls: 'user-td',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return Ext.String.format('<img src="{0}{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
        }
    }, {
        text: '货架图片（竖）',
        dataIndex: 'vImage',
        width: 420,
        sortable: false,
        align: 'center',
        tdCls: 'user-td',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return Ext.String.format('<img src="{0}{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
        }
    }, {
        text: '编辑',
        xtype: 'actioncolumn',
        width: 50,
        icon: 'resources/images/edit.png',
        tooltip: 'Edit',
        menuDisabled: true,
        sortable: false,
        itemId: 'openModifyShelvesWin',
        tdCls: 'user-td',
        align: 'center'

    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        style: {
            border: 'none'
        },
        items: [{
            text: '添加货架',
            itemId: 'openCreateShelvesWin'
        }, {
            xtype: 'button',
            text: '保存排序',
            itemId: 'saveShelvesOrder'
        }, {
            xtype: 'button',
            text: '返回',
            itemId: 'returnShopStore'
        }, '->', {
            xtype: 'button',
            text: '查看所有下架商品',
            itemId: 'viewAllSoldOutProduct'
        }, {
            xtype: 'button',
            text: '查看所有雪藏商品',
            itemId: 'viewAllHiddenProduct'
        }, {
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