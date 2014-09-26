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
        dataIndex: 'categories',
        align: 'center',
        renderer: function(value, e) {
            var categories = e.record.get('categories');
            var str = '';
            for (var i = 0, len = categories.length; i < len; i++) {
                if (i != len - 1) {
                    str += categories[len - i - 1].name + '|';

                } else {
                    str += categories[len - i - 1].name;
                }

            }
            return str;
        }
    }, {
        text: '操作',
        width: 90,
        dataIndex: 'status',
        itemId: 'frozen',
        menuDisabled: true,
        sortable: false,
        align: 'center',
        renderer: function(value) {
            return '<input type="button" value="取消雪藏" class="frozen" />'
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});