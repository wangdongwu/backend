Ext.define('XMLifeOperating.view.sProductManage.SShopShelfTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'sShopShelfTab',
    title: '商品管理',
    itemId: 'sShopShelfTab',
    plain: false,
    id: 'sShopShelfTab',
    layout: 'fit',
    enableTabScroll: true,
    bodyStyle: {
        border: 'none'
    },
    items: [{
        title: '一级货架',
        id: 'tab2',
        layout: 'fit',
        items: [{
            xtype: 'sShopShelf'
        }]
    }]
});