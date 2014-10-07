/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopBanner', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'shopbanner',
    header: false,
    store: 'ShopBannerTemplate',
    tbar: [{
        xtype: 'button',
        text: '添加Banner',
        itemId: 'add'
    }, {
        xtype: 'button',
        text: '返回',
        itemId: 'returnShopStore'
    }],
/*    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'ShopBannerTemplate',
        displayInfo: true
    }],*/
    columns: [{
        text: '图片',
        dataIndex: 'id',
        width: 420,
        sortable: true,
        align: 'center',
        renderer: function(value) {
            return Ext.String.format('<img src="{0}{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
        }
    }, {
        text: 'title',
        dataIndex: 'title',
        sortable: true,
        width: 150
    }, {
        text: 'url',
        dataIndex: 'url',
        sortable: true,
        width: 250
    }, {
        xtype: 'actioncolumn',
        text:'编辑',
        width: 40,
        icon: 'resources/images/edit.png',
        tooltip: '编辑',
        menuDisabled: true,
        sortable: true,
        itemId: 'editShopStoreBanner'
    },{
        xtype: 'actioncolumn',
        text:'删除',
        width: 40,
        icon: 'resources/images/delete.png',
        tooltip: '删除',
        menuDisabled: true,
        sortable: true,
        itemId: 'deleteShopStoreBanner'
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});