Ext.define('XMLifeOperating.view.dealManage.DealCustomerDetail', {
    extend: 'Ext.window.Window',
    xtype: 'dealCustomerDetail',
    
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
            title:'顾客详情',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,
            
            defaults:{
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'displayfield',
                    name: 'name',
                    fieldLabel: '姓名:',
                    allowBlank:false,
                    labelAlign:'left'
                },
                {
                    xtype: 'displayfield',
                    name: 'phone',
                    fieldLabel: '电话:',
                    allowBlank:false,
                    labelAlign:'left'
                },
                {
                    xtype: 'displayfield',
                    name: 'dtoAddress',
                    fieldLabel: '地址',
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
                        Ext.ComponentQuery.query('dealCustomerDetail')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});

