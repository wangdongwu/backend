Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopShelf', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shopshelf',
    store: 'CategoryRoots',
    id: 'ShelvesList',
    features: [{
        id: 'summary',
        ftype: 'summary',
        showSummaryRow: true
    }],
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
    }, {
        text: '货架图片（横）',
        dataIndex: 'xImage',
        width: 190,
        sortable: true,
        align: 'center',
        tdCls: 'user-td',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return Ext.String.format('<img src="{0}{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
        }
    }, {
        text: '货架图片（竖）',
        dataIndex: 'vImage',
        width: 190,
        sortable: true,
        align: 'center',
        tdCls: 'user-td',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return Ext.String.format('<img src="{0}{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
        }
    }, {
        text: '在线商品数',
        dataIndex: 'onlineProductsCount',
        width: 100,
        sortable: true,
        align: 'center',
        groupable: false,
        summaryType: function(records) {
            var i = 0,
                length = records.length,
                total = 0;
            for (; i < length; i++) {
                record = records[i];
                total += record.get('onlineProductsCount');
            }
            return '合计' + total;
        },
        tdCls: 'user-td'
    }, {
        text: '下架商品数',
        dataIndex: 'soldoutProductsCount',
        width: 100,
        sortable: true,
        align: 'center',
        summaryType: 'sum',
        summaryType: function(records) {
            var i = 0,
                length = records.length,
                total = 0;
            for (; i < length; i++) {
                record = records[i];
                total += record.get('soldoutProductsCount');
            }
            return '合计' + total;
        },
        tdCls: 'user-td'
    }, {
        text: '雪藏商品数',
        dataIndex: 'unlineProductsCount',
        width: 100,
        sortable: true,
        align: 'center',
        summaryType: function(records) {
            var i = 0,
                length = records.length,
                total = 0;
            for (; i < length; i++) {
                record = records[i];
                total += record.get('unlineProductsCount');
            }
            return '合计' + total;
        },
        tdCls: 'user-td'
    }, {
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
            icon: 'resources/images/edit.png'
        }]
    }, {
        text: '状态',
        dataIndex: 'status',
        itemId: 'showOrHide',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            var record = model,
                isLeaf = record.get('leaf');
            var returnStr = '';

            if (value == 0) { //隐藏
                if (isLeaf) {
                    returnStr = '<button>显示</button>';
                } else {
                    metaData.css = 'x-hide-display';
                    returnStr = '<button disabled >显示</button>';
                }
            } else if (value == 1) { //显示
                if (isLeaf) {
                    returnStr = '<button>隐藏</button>';
                } else {
                    metaData.css = 'x-hide-display';
                    returnStr = '<button disabled >隐藏</button>';
                }
            }
            return returnStr;
        },
        tdCls: 'user-td'
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
            text: '状态查看',
            menu: {
                xtype: 'menu',
                items: [{
                    text: '所有下架商品',
                    itemId: 'viewAllSoldOutProduct'
                }, {
                    text: '所有上架商品',
                    itemId: 'viewAllOnlineProduct'
                }, {

                    text: '所有雪藏商品',
                    itemId: 'viewAllHiddenProduct'
                }, {
                    text: '所有废弃商品',
                    itemId: 'viewAllAbandonedProduct'
                }]
            }
        }, {
            xtype: 'button',
            text: '保存排序',
            itemId: 'saveShelvesOrder'
        }, {
            xtype: 'button',
            text: '返回',
            itemId: 'returnShopStore'
        }, '->', {
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