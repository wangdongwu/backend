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
            xtype : 'grid',
            store : 'Address',
            layout: 'fit',
            forceFit: true,
                columns: [
                {
                    xtype: 'rownumberer'
                }, 
                    {
                        text: '属性',
                        renderer : function(a,b,c,row){
                            return row == 0 ? ' 默认地址' : '其他地址';
                        }
                    },
                     {
                        text: '收货地址',
                        dataIndex: 'addressDetail',
                        renderer : function(value){
                            return value ? value : '暂时还没有地址';
                        }
                    }
                ]
        }]

        this.callParent(arguments);

    }

        
});

