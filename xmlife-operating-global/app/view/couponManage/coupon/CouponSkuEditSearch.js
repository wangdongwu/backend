Ext.define('XMLifeOperating.view.couponManage.coupon.CouponSkuEditSearch', {
    extend: 'Ext.window.Window',
    xtype: 'couponSkuEditSearch',
    id:'couponSkuEditSearch',
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
                    name: 'searchskuList',
                    // store:'ProductSkuPids',
                    allowBlank: false,
                    fieldLabel: 'skulist',
                    xtype: 'gridpanel',
                    itemId: 'searchSkuList',
                    height: 350,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns:[{
                                xtype: 'rownumberer'
                            },{
                                text: 'sku',
                                dataIndex: 'pname',
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
                    itemId: 'searchSkuSure-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('#couponSkuEditSearch')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});