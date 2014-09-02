Ext.define('XMLifeOperating.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border'
    ],

    layout: 'border',

    items: [
        {
            xtype: 'headerToolbar',
            region: 'north'
        },
        {
            xtype: 'moduleNavigation',
            region: 'west',
            width: 200,
            title : '导航',
            // split: true,
            collapsible: true
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            tabPosition : 'top',
            deferredRender : false,
            itemId: 'contentPanel',
            items : [
            {
                title : '欢迎使用',
                html : '<br/><br/><br/><br/><h1>欢迎使用小美后台管理系统!!</h1>'
            }
            ],
            layout: 'fit',
            header: false,
            autoScroll: true
        }
    ]

});