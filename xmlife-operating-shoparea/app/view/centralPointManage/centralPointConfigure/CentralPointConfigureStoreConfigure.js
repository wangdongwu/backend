/**
 * @class SimpleTasks.view.lists.Tree
 * @extends Ext.tree.Panel
 * The task list view.  A tree that displays all of the task lists.
 */
Ext.define('XMLifeOperating.view.centralPointManage.centralPointConfigure.CentralPointConfigureStoreConfigure', {
    extend: 'Ext.grid.Panel',
    closable : false,
    xtype: 'centralpointconfigurestoreconfigure',
    header: false,
    store: 'Shop',
    tbar: [
        {
            xtype: 'button',
            text: '返回',
            itemId: 'returnCentralPoint'
        }
    ],
    columns: [
        {
            text: '编号',
            dataIndex: 'id',
            width: 220,
            sortable: false,
            align: 'center',
           
        },
        {
            text: '店铺名',
            dataIndex: 'name',
            sortable: false,
            width: 150,
        }   
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});