Ext.define('XMLifeOperating.view.userManage.customer.CustomerAddress', {
    extend: 'Ext.window.Window',
    xtype: 'customerAddress',
    
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 400,
    height: 240,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title:'收货地址',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,
            frame: true,
            defaults:{
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'displayfield',
                    name: 'address',
                    fieldLabel: '姓名:',
                    allowBlank:false,
                    labelAlign:'left'
                },
            ],
            buttons: [
                {
                    text: '知道了',
                    labelAlign:'center',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('customerAddress')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});

