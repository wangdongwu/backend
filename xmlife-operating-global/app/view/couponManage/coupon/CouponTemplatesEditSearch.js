Ext.define('XMLifeOperating.view.couponManage.coupon.CouponTemplatesEditSearch', {
    extend: 'Ext.window.Window',
    xtype: 'couponTemplatesEditSearch',
    id:'couponTemplatesEditSearch',
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
    title:'搜索模板',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [
                
                {
                    xtype: 'displayfield',
                    value:'选择模板'
                },{
                    name: 'searchGoodsShelfList',
                    // store:'ResidentalDistrict',
                    allowBlank: false,
                    fieldLabel: '模板list',
                    xtype: 'gridpanel',
                    itemId: 'searchTemplatesList',
                    height: 350,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns:[{
                                xtype: 'rownumberer',
                                width: 50,
                                align: 'center'
                            },{
                                text: '商品模板',
                                dataIndex: 'name',
                                width:200,
                                renderer: function(value,grid) {
                                    // value = grid.record.get('cityName')+'-'+value;
                                    return value;
                                }
                            }],
                }
            ],
            buttons: [
                {
                    text: '确认',
                    itemId: 'searchTemplatesSure-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('#couponTemplatesEditSearch')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});