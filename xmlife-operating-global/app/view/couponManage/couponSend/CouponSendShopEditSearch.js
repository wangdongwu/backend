Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponSendShopEditSearch', {
    extend: 'Ext.window.Window',
    xtype: 'couponSendShopEditSearch',
    id:'couponSendShopEditSearch',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.form.FieldSet',
        'Ext.layout.container.Column',
        'Ext.draw.Text'
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 450,
    resizable: false,
    layout: 'fit',
    title:'搜索店铺',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            /*defaults:{
                anchor: '100%'
            },*/
            items: [
                
                {
                    xtype: 'displayfield',
                    value:'选择店铺'
                },{
                    name: 'sendSearchShopList',
                    // store:'ResidentalDistrict',
                    allowBlank: false,
                    fieldLabel: '店铺list',
                    xtype: 'gridpanel',
                    itemId: 'sendSearchShopList',
                    height: 150,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns:[{
                                xtype: 'rownumberer',
                                width: 50,
                                align: 'center'
                            },{
                                text: '店铺名',
                                dataIndex: 'name',
                                renderer: function(value,grid) {
                                    value = grid.record.get('cityName')+'-'+value;
                                    return value;
                                }
                            }],
                }

            ],
            buttons: [
                {
                    text: '确认',
                    itemId: 'searchShopSure-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('#couponSendShopEditSearch')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});