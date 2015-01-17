Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductOffLine', {
    extend: 'Ext.grid.Panel',
    closable: true,
    xtype: 'shopProductOffLine',
    header: false,
    columnLines: true,
    store: 'ShopCategories',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [{
                xtype: 'rownumberer',
                width: 50,
                align: 'center'
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
                    var str = [];
                    for (var i = 0, len = categories.length; i < len; i++) {
                        str.push(categories[i]);
                    }
                    return str.join('<br/>');
                }
            }, {
                text: '状态',
                width: 90,
                dataIndex: 'status',
                itemId: 'putawayOrOut',
                menuDisabled: true,
                sortable: true,
                align: 'center',
                style: 'cursor:pointer',
                renderer: function() {
                    return '<a href="javascript:;">' + '雪藏' + '</a>';
                }
            }],
            bbar: [{
                xtype: 'pagingtoolbar',
                itemId: 'pagetool',
                store: 'ShopCategories',
                displayInfo: true,
                style: 'border:none'
            }],
            plugins: [{
                ptype: 'cellediting',
                clicksToEdit: 1
            }]
        });
        me.callParent(arguments);
    }
});
