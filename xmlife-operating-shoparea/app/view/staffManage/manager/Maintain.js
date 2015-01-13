Ext.define('XMLifeOperating.view.staffManage.manager.Maintain', {
    extend: 'Ext.grid.Panel',
    closable: false,
    xtype: 'maintain',
    title: '维护记录',
    store: 'Maintain',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'Maintain',
        dock: 'bottom',
        displayInfo: true,
        style: 'border:none'
    }],
    tbar: [{
        xtype: 'button',
        text: '返回',
        itemId: 'managerReturn'
    }],
    columns: [{
        text: '买手姓名',
        dataIndex: '',
        width: 100,
        sortable: true,
        align: 'center'
    },{
        text: '今日推送任务数',
        dataIndex: '',
        width: 100,
        sortable: true,
        align: 'center'
    },{
        text: '今日重新上架数',
        dataIndex: '',
        width: 100,
        sortable: true,
        align: 'center'
    },{
        text: '本周推送任务数',
        dataIndex: '',
        width: 100,
        sortable: true,
        align: 'center'
    },{
        text: '本周重新上架数',
        dataIndex: '',
        width: 100,
        sortable: true,
        align: 'center'
    },{
        text: '本月推送任务数',
        dataIndex: '',
        width: 100,
        sortable: true,
        align: 'center'
    },{
        text: '本月重新上架数',
        dataIndex: '',
        width: 100,
        sortable: true,
        align: 'center'
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    },
    columnLines: true,
    frame: true,
    iconCls: 'icon-grid'
});
