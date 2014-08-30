Ext.define('XMLifeOperating.view.operationManage.dealCashOnDelivery.DealCashOnDeliveryListCustomerDetail', {
    extend: 'Ext.window.Window',
    xtype: 'customerDetail',
    
    closeAction: 'hide',
    modal: true,
    width: 400,
    height: 250,
    resizable: false,
    layout: 'fit',

    buttons:[
        {
            text: '知道了',
            handler:function(){
                //关闭窗口
                this.up('customerDetail').close();
            }
        }
    ],

    items:{
            xtype: 'form',
            itemId:'addCategoryForm',
            
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: false,
            defaults:{
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'displayfield',
                    name: 'customerName',
                    fieldLabel:'顾客姓名',
                    allowBlank:false,
                    labelAlign:'left'
                },
                {
                    xtype: 'displayfield',
                    name: 'customerPhone',
                    fieldLabel:'电话',
                    allowBlank:false,
                    labelAlign:'left'
                },
                {
                    xtype: 'displayfield',
                    name: 'dtoAddress',
                    fieldLabel:'地址',
                    allowBlank:false,
                    labelAlign:'left'
                },
            ]           
    }

});
