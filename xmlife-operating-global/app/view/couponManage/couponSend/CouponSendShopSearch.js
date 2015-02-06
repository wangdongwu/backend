Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponSendShopSearch', {
    extend: 'Ext.window.Window',
    xtype: 'CouponSendShopSearch',
    
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
        var  couponTypeStore= Ext.create('Ext.data.Store', {
            fields: ['value','type'],
            data : [
                {"value": 0, "type": '优惠券'},
                {"value": 1, "type": '卡包'},
            ],
        });
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
                    name: 'searchCourierIds',
                    // store:'ResidentalDistrict',
                    allowBlank: false,
                    fieldLabel: '配送员',
                    xtype: 'gridpanel',
                    itemId: 'searchCourierId',
                    height: 150,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'SIMPLE'
                    }),
                    columns: [{
                        text: 'uid',
                        dataIndex: 'uid'
                    }, {
                        text: '配送员姓名',
                        dataIndex: 'name'
                    }, {
                        text: '手机号',
                        dataIndex: 'phone'
                    },{
                        xtype: 'actioncolumn',
                        text: '操作',
                        width: 40,
                        icon: 'resources/images/delete.png',
                        tooltip: 'Delete',
                        menuDisabled: true,
                        sortable: true,
                        itemId: 'deleteLineId',
                        // hidden:(XMLifeOperating.generic.Global.operating_type == 'center')
                    }],
                }

            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-shopper-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('CouponSendShopSearch')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});