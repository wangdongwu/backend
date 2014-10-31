Ext.define('XMLifeOperating.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    items: [{
        xtype: 'headerToolbar',
        region: 'north'
    }, {
        xtype: 'moduleNavigation',
        region: 'west',
        width: 200,
        frame: true,
        title: '导航',
        titleAlign: 'center',
        collapsible: true
    }, {
        region: 'center',
        xtype: 'tabpanel',
        tabPosition: 'top',
        deferredRender: false,
        itemId: 'contentPanel',
        items: [{
            closable: true,
            title: '欢迎使用',
            html: '<br/><br/><br/><br/><h1 style="text-align:center">欢迎使用小美后台管理系统!! <br/><br/>⊙o⊙</h1>'
        }],
        layout: 'fit',
        header: false,
        autoScroll: true
    }]

});