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
        border: false,
        frame: true,
        split:true,
        margins: '2 0 5 5',
        padding:0,
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
            html: '<br/><br/><br/><br/><h1 style="text-align:center">欢迎使用小美后台管理系统!! <br/><br/>⊙o⊙</h1><p style="font-size:14px;text-align:center">由于小美后台升级https，为大家更安全更正常的使用请<a target="_blank" href="http://www.xiaomei.com/downloads/%E5%B0%8F%E7%BE%8Ehttps%E8%AF%81%E4%B9%A6%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E.zip">小美https证书安装说明.zip</a></p>'
        }],
        layout: 'fit',
        header: false,
        autoScroll: true
    }]

});