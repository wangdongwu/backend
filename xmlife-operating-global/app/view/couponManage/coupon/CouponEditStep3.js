Ext.define('XMLifeOperating.view.couponManage.coupon.CouponEditStep3', {
    extend: 'Ext.window.Window',
    xtype: 'couponEditStep3',
    
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
    height: 550,
    resizable: false,
    layout: 'fit',
    title:'创建优惠券step3',
    initComponent: function() {
        // var  couponTypeStore= Ext.create('Ext.data.Store', {
        //     fields: ['value','gender'],
        //     data : [
        //         {"value": 0, "gender": '打折券'},
        //         {"value": 1, "gender": '满减券'},
        //         {"value": 2, "gender": '免运费券'}
        //     ],
        // });
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
                    value:'获得渠道'
                },{
                    layout: 'hbox',
                    xtype: 'fieldset',
                    border: false,
                    padding: 0,
                    items: [{
                        xtype: 'checkbox',
                        name: 'channel',
                        allowBlank: false,
                        disabled:false,
                        style:'margin:2px 10px 0 0',
                    },{
                        xtype: 'text',
                        text: '支持URL规则编号获得',
                        textAlign: 'left',
                        style:'margin:5px 10px 0 8px'
                    }]
                }   
            ],
            buttons: [
                {
                    text: '上一步',
                    itemId: 'prevButton'
                },
                {
                    text: '确定',
                    itemId: 'ensureButton'
                },
            ]
        }]

        this.callParent(arguments);

    }

        
});