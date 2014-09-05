/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.centralPointManage.centralPointConfigure.CentralPointConfigureBannerList', {
    extend: 'Ext.grid.Panel',
    closable : true,
    xtype: 'centralpointconfigurebannerlist',
    header: false,
    store: 'ShopAreaBanner',
    tbar: [
        {
            xtype: 'button',
            text: '添加Banner',
            itemId: 'add'
        },
        {
            xtype: 'button',
            text: '保存排序',
            itemId: 'saveOrder'
        },
        {
            xtype: 'button',
            text: '返回',
            itemId: 'returnCentralPoint'
        }
    ],
    columns: [
        {
            text: '图片',
            dataIndex: 'image',
            width: 420,
            sortable: false,
            align: 'center',
            renderer: function (value) {

                return Ext.String.format('<img src="{0}/image/id-{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
            }
        },
        {
            text: 'title',
            dataIndex: 'title',
            sortable: false,
            width: 150
        },
        {
            text: 'url',
            dataIndex: 'url',
            sortable: false,
            width: 250
            
        },
        {
            xtype: 'actioncolumn',
            width: 24,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: false,
            itemId: 'editCentralPointBanner'
        },
        {
            xtype: 'actioncolumn',
            text: '操作',
            width: 40,
            icon: 'resources/images/delete.png',
            tooltip: 'Delete',
            menuDisabled: true,
            sortable: false,
            itemId: 'deleteBannerId',
            align: 'center',
            // hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
        },
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});