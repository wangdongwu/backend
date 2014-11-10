Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductAbandoned', {
    extend: 'Ext.grid.Panel',
    closable: true,
    xtype: 'shopproductabandoned',

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
            var categories = e.record.get('categoryNames');
            var str =[];

            for (var i = 0, len = categories.length; i < len; i++) {
                str.push(categories[i]);
            }
            return str.join('<br/>');
        }
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});