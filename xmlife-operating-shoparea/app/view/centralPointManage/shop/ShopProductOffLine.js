Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductOffLine', {
    extend: 'Ext.grid.Panel',
    closable: true,
    xtype: 'shopproductoffline',
    header: false,
    store: 'ShopCategories',
   bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'ShopCategories',
        displayInfo: true,
        style: 'border:none'
    }],
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '商品ID',
        dataIndex: 'id',
        align: 'center'
    }, {
        text: '商品名称',
        dataIndex: 'name',
        align: 'center'
    }, {
        text: '所属货架',
        dataIndex: 'id',
        align: 'center'
    }, {
        text: '操作',
        width: 90,
        dataIndex: 'status',
        itemId: 'putawayOrOut',
        menuDisabled: true,
        sortable: false,
        align: 'center',
        renderer: function(value) {
            return '取消雪藏'
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});