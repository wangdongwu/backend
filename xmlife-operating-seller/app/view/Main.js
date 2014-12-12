Ext.define('XMLifeSeller.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        layout: 'fit',
        items: [{
            xtype: 'header',
            docked: 'top'
        }, {
            xtype: 'nav',
            docked: 'left',
            width: '20%'
        }, {
            xtype: 'panel',
            id: 'content',
            docked: 'right',
            layout: 'card',
            width: '80%',
            items: [{
                closable: false,
                title: '欢迎使用',
                html: '<br/><br/><br/><br/><h1 style="text-align:center">欢迎使用小美生活商家端! <br/><br/>⊙o⊙</h1>'
            }]
        }]
    }
});
