Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductOnline', {
    extend: 'Ext.grid.Panel',
    closable: true,
    xtype: 'shopproductonline',
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
        align: 'center',
        renderer: function(value, e) {
            var categories = e.record.get('categoryNames');
            var str = [];

            for (var i = 0, len = categories.length; i < len; i++) {
                str.push(categories[i]);
            }
            return str.join('<br/>');
        }
    }, {
        text: '操作',
        width: 90,
        dataIndex: 'status',
        itemId: 'putawayOrOut',
        menuDisabled: true,
        sortable: true,
        align: 'center',
        style: 'cursor:pointer',
        renderer: function(value,cmp,record,rowIndex,colIndex,store,grid) {
            return '<input type="button" value="下架" class="putaway" />';
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});