Ext.define('XMLifeOperating.view.couponManage.coupon.CouponGoodsShelfEditSearch', {
    extend: 'Ext.window.Window',
    xtype: 'couponGoodsShelfEditSearch',
    id:'couponGoodsShelfEditSearch',
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
    resizable: false,
    layout: 'fit',
    title:'搜索货架',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [
                
                {
                    xtype: 'displayfield',
                    value:'选择店铺'
                },{
                    name: 'searchGoodsShelfList',
                    // store:'ResidentalDistrict',
                    allowBlank: false,
                    fieldLabel: '货架list',
                    xtype: 'gridpanel',
                    itemId: 'searchGoodsShelfList',
                    height: 350,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns: [{
                        text: '货架',
                        dataIndex: 'name',
                        width:200,
                        renderer: function(value,grid) {
                            value = grid.record.get('cityName')+'-'+grid.record.get('shopName')+'-'+value;
                            return value;
                        }
                    }],
                }
            ],
            buttons: [
                {
                    text: '确认',
                    itemId: 'searchGoodsShelfSure-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('#couponGoodsShelfEditSearch')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});