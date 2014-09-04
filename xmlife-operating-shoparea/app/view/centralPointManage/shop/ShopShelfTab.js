Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopShelfTab', {
    extend: 'Ext.tab.Panel',
    xtype: 'shopshelftab',
    title:'货架列表',
    itemId:'shopStoreInfoTab',
    plain: false,
    id:'toolbar',
    layout:'fit',
    enableTabScroll:true,
    items:[
            {
                title: '一级货架',
                id:'tab2',
                layout:'fit',
                items:[{
                    xtype:'shopshelf',
                }]
            }
        ]

});