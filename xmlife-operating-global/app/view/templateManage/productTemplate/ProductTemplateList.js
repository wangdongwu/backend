Ext.define('XMLifeOperating.view.templateManage.productTemplate.ProductTemplateList', {
    extend: 'Ext.container.Container',
    id: 'productTemplateList',
    xtype: 'productTemplateList',
    title: '商品模板管理',
    titleAlign: 'left',
    closable: true,
    layout: 'border',
    border: false,
    style: 'overflow:hidden',
    items: [{
        xtype: 'treepanel',
        region: 'west',
        store: 'ProductTemplateRoots',
        width: 200,
        frame: true,
        rootVisible: false,
        border: false,
        style: 'border:none',
        displayField: 'name',
        itemId: 'productTemplateTree'
    }, {
        xtype: 'gridpanel',
        region: 'center',
        store: 'ProductTemplateGetByCategoryId',
        itemId: 'productTemplateGrid',
        autoScroll: true,
        border: false,
        style: 'border:none',
        layout: 'fit',
        dockedItems: [{
            xtype: 'pagingtoolbar',
            itemId: 'pagetoll',
            store: 'ProductTemplateGetByCategoryId',
            dock: 'bottom',
            displayInfo: true
        }],
        columns: [{
            text: 'ID',
            dataIndex: 'id',
            width: 150,
            sortable: false,
            align: 'left'
        }, {
            text: '商品名称',
            dataIndex: 'name',
            width: 200,
            sortable: false,
        }, {
            text: '图片',
            dataIndex: 'picture',
            width: 150,
            sortable: false,
            renderer: function(value) {
                return Ext.String.format('<img src="{0}/image/id-{1}" height="100" />', XMLifeOperating.generic.Global.URL.res, value);
            }
        }, {
            text: 'rank',
            dataIndex: 'rank',
            width: 65,
            sortable: true,
            align: 'center'
        }, {
            text: 'rank2',
            dataIndex: 'rank2',
            width: 65,
            sortable: true,
            align: 'center'
        }, {
            xtype: 'actioncolumn',
            width: 24,
            icon: 'resources/images/edit.png',
            tooltip: 'Edit',
            menuDisabled: true,
            sortable: false,
            itemId: 'editProductTemplate'
        }],
        viewConfig: {
            plugins: {
                ptype: 'gridviewdragdrop',
                dragText: 'Drag and drop to reorder'
            }
        }
    }, {
        xtype: 'panel',
        frame: true,
        region: 'north',
        border: false,
        style: 'border:none',
        dockedItems: [{
            xtype: 'toolbar',
            itemId: 'topbar',
            dock: 'top',
            border: false,
            style: 'border:none;',
            items: [{
                    xtype: 'button',
                    text: '添加商品模板',
                    itemId: 'add'
                }, '-', {
                    xtype: 'textfield',
                    emptyText: '商品名称',
                    name: 'keyword',
                    itemId: 'keyword',
                }, {
                    xtype: 'button',
                    itemId: 'productSearch',
                    text: '搜索'
                },
                '->', {
                    xtype: 'button',
                    text: '批量修改商品',
                    itemId: 'batchModifi'
                }, {
                    xtype: 'button',
                    text: '添加商品属性',
                    itemId: 'batchAdd'
                }
            ]
        }]

    }],

});