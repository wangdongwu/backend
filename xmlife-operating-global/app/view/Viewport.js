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
            // split: true,
            collapsible: true
        },
        {
            region: 'center',
            xtype: 'panel',
            itemId: 'contentPanel',
            layout: 'fit',
            header: false,
            autoScroll: false
        }
    ]

});