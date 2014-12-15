Ext.define('XMLifeSeller.view.Nav', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'nav',
    config: {
        xtype: 'nestedlist',
        title: '导航栏',
        updateTitleText: false,
        displayField: 'text',
        useTitleAsBackText: false,
        backText: '返回',
        onItemDisclosure: true,
        store: 'Nav'
    }
});
