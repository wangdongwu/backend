Ext.define('XMLifeSeller.view.tablet.Main', {
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
            width: '20%',
            listeners: {
                leafitemtap: function(nestedList, list, index, target, record) {
                   var xtype = record.get('xtype');
                    if (xtype) {
                        Ext.getCmp('content').removeAll(false);
                        Ext.getCmp('content').add({
                            xtype: xtype
                        });
                    }
                }
            }
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