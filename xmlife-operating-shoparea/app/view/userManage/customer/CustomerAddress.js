Ext.define('XMLifeOperating.view.userManage.customer.CustomerAddress', {
    extend: 'Ext.window.Window',
    xtype: 'customerAddress',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'destroy',
    modal: true,
    width: 400,
    height: 240,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype : 'grid',
            store : 'Address',
            layout: 'fit',
            forceFit: true,
                columns: [
                     {
                        text: '收货地址',
                        dataIndex: 'addressDetail',
                    }
                ]
        }]

        this.callParent(arguments);

    }

        
});

