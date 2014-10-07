/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.centralPointManage.shopTopShops.ShopShopGroupList', {
    extend: 'Ext.grid.Panel',
    closable: true,
    xtype: 'shopShopGroupList',
    header: false,
    store: 'ShopShopGroup',
    tbar: [{
        xtype: 'button',
        text: '添加优质店铺',
        itemId: 'add'
    }, {
        xtype: 'button',
        text: '返回',
        itemId: 'returnCentralPoint'
    }/*,{
        xtype:'button',
        text:'删除',
        itemId: 'shopShopGroupDelete'


    }*/],

    columns: [
        {
            text: '店铺名称',
            dataIndex: 'name',
            sortable: true,
            width: 150
        },
        {
            text: 'logo图片',
            dataIndex: 'logo',
            sortable: true,
            width: 250
            
        },
        {
            xtype: 'actioncolumn',
            text: '操作',
            width: 40,
            icon: 'resources/images/delete.png',
            tooltip: 'Delete',
            menuDisabled: true,
            sortable: true,
            itemId: 'shopShopGroupDelete',
            // hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});