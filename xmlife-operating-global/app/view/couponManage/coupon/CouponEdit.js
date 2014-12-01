Ext.define('XMLifeOperating.view.couponManage.coupon.CouponEdit', {
    extend: 'Ext.window.Window',
    xtype: 'couponEdit',
    
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
    width: 500,
    height: 750,
    resizable: false,
    layout: 'fit',
    title:'修改优惠券',
    initComponent: function() {
        var  couponTypeStore= Ext.create('Ext.data.Store', {
            fields: ['value','type'],
            data : [
                {"value": 1, "type": '满减券'},
                {"value": 2, "type": '打折券'},
                {"value": 3, "type": '免运费券'}
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
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '名称',
                    labelWidth: 80,
                    allowBlank:false,
                },
                {
                    xtype: 'textfield',
                    name: 'desc',
                    fieldLabel: '描述',
                    labelWidth: 80,
                    allowBlank:false,
                },
                {
                    fieldLabel : '优惠券类型',
                    labelWidth: 80,
                    itemId:'couponTypeId',
                    store : couponTypeStore,
                    name : 'type',
                    allowBlank : false,
                    xtype : 'combo',
                    editable : false,
                    queryMode : 'local',
                    triggerAction : 'all',
                    displayField: 'type',
                    valueField: 'value',
                    allowBlank:false,
                    disabled:true,                 
                },
                {
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:3px;margin-bottom:5px;',
                    items: [{
                                xtype: 'displayfield',
                                value: '满',
                                itemId:'couponCost_m',
                                style: 'margin-right:5px'
                            },{
                                xtype: 'textfield',
                                name: 'benchMark',
                                width: 50,
                                labelWidth: 90,
                                itemId:'couponCost_my',
                                disabled:true
                            }, {
                                xtype: 'displayfield',
                                value: '元',
                                style: 'margin-left:5px',
                                itemId:'couponCost_y'

                            },{
                                xtype: 'displayfield',
                                value: '打',
                                style: 'margin:0 5px',
                                itemId:'couponCost_d'
                            },{
                                xtype: 'textfield',
                                name: 'discountValue',
                                width: 50,
                                labelWidth: 90,
                                itemId:'couponCost_dz',
                                disabled:true
                            },{
                                xtype: 'displayfield',
                                value: '折',
                                style: 'margin:0 10px',
                                itemId:'couponCost_z'
                            },{
                                xtype: 'textfield',
                                fieldLabel: '优惠券价值',
                                name: 'value',
                                width: 200,
                                labelWidth: 80,
                                allowBlank: false,
                                labelAlign:'left',
                                itemId:'couponCost_v',
                                disabled:true
                            }]
                },{
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:3px;margin-bottom:5px;',
                    itemId:'maxDiscountTextId',
                    items: [{
                                xtype: 'displayfield',
                                value: '最多优惠',
                                style: 'margin-right:5px'
                            },{
                                xtype: 'textfield',
                                name: 'maxDiscount',
                                width: 50,
                                labelWidth: 90,
                                disabled:true
                                
                            }, {
                                xtype: 'displayfield',
                                value: '元',
                                style: 'margin-left:5px'
                            },{
                                xtype: 'displayfield',
                                value: '默认50，上限300',
                                style: 'margin:0 5px'
                            }]
                },{
                    xtype: 'textfield',
                    name: 'id',
                    fieldLabel: '优惠券ID',
                    labelWidth:60,
                    width:300,
                    readOnly:true,
                    disabled:true
                },{
                    layout: 'hbox',
                    xtype: 'fieldset',
                    border: false,
                    padding: 0,
                    items: [{
                        xtype: 'checkbox',
                        itemId:'',
                        name: 'isNew',
                        allowBlank: false,
                        disabled:true,
                        style:'margin:2px 10px 0 0',
                        
                    },{
                        xtype: 'text',
                        text: '标记为新手优惠券',
                        textAlign: 'left',
                        style:'margin:5px 10px 0 8px',

                    },{
                        xtype: 'textfield',
                        itemId:'existAtSameTime',
                        name: 'maxCouponNumHold',
                        fieldLabel: '可同时存在',
                        labelSeparator: '',
                        style:'margin-left:7px',
                        labelWidth: 60,
                        minWidth: 120,
                        maxWidth: 120,
                        allowBlank: true,
                        style:'line-height:25px;',
                        disabled:true,
                    }, {
                        xtype: 'text',
                        itemId:'existAtSameTimeUnit',
                        text: '张',
                        textAlign: 'left',
                        style:'margin:5px 0 0 8px',
                    }]
                },{
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:3px;margin-bottom:5px;',
                    items: [{
                                xtype: 'displayfield',
                                value: '全局有效期:',
                                width:80
                            },{
                                xtype : 'datefield',
                                name : 'expireStartDate',
                                emptyText : '开始时间',
                                //maxValue: new Date(),
                                value: new Date(),
                                format : 'Y-m-d H:i:s',
                                width:150,
                                allowBlank: false,

                            },{
                                xtype: 'displayfield',
                                value: '到',
                                style: 'margin:0 5px'
                            },{
                                xtype : 'datefield',
                                name : 'expireEndDate',
                                emptyText : '结束时间',
                                value: new Date(),
                                format : 'Y-m-d H:i:s',
                                width:150,
                                allowBlank: false,
                                listeners: {
                                    select: function () {
                                        this.setValue(new Date(arguments[1].getTime()+  86399000 ));
                                    }
                                }
                            }]
                },{
                    xtype: 'displayfield',
                    value: '生效时间',
                    style: 'margin:0'
                },{
                    xtype: 'container',
                    layout: 'column',
                    items: [{
                                xtype: 'textfield',
                                fieldLabel:'获得后',
                                name: 'delayUseStartHours',
                                width: 120,
                                labelWidth: 60,
                            },{
                                xtype: 'displayfield',
                                value: '小时',
                                style: 'margin:0 5px'
                            },{
                                xtype: 'textfield',
                                fieldLabel:'到获得后',
                                name: 'delayUseEndHours',
                                width: 120,
                                labelWidth: 60,
                                style: 'margin-left:10px;',
                            },{
                                xtype: 'displayfield',
                                value: '小时',
                                style: 'margin:0 5px'
                            }]
                },{
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:2px;',
                    items: [{
                                xtype: 'textfield',
                                fieldLabel:'全局总共可领',
                                name: 'globalCouponNum',
                                width: 160,
                                labelWidth: 95,
                                allowBlank: false,
                                disabled:true,
                            },{
                                xtype: 'text',
                                text: '张',
                                textAlign: 'left',
                                style:'margin:5px 0 0 8px',


                            },{
                                xtype: 'textfield',
                                fieldLabel:'全局每天可领',
                                name: 'globalDailyCouponNum',
                                width: 160,
                                labelWidth: 95,
                                allowBlank: false,
                                style: 'margin-left:10px;',
                                disabled:true,
                            },{
                                xtype: 'text',
                            
                                text: '张',
                                textAlign: 'left',
                                style:'margin:5px 0 0 8px'
                            }]
                },{
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:2px;',
                    items: [{
                                xtype: 'textfield',
                                fieldLabel:'每人终身可领',
                                name: 'globalUserCouponNumHold',
                                width: 160,
                                labelWidth: 95,
                                allowBlank: false,
                                disabled:true,
                            },{
                                xtype: 'text',
                             
                                text: '张',
                                textAlign: 'left',
                                style:'margin:5px 0 0 8px'
                            },{
                                xtype: 'textfield',
                                fieldLabel:'每人每天可领',
                                name: 'userDailyCouponNumHold',
                                width: 160,
                                labelWidth: 95,
                                allowBlank: false,
                                style: 'margin-left:10px;',
                                disabled:true,
                            },{
                                xtype: 'text',
                             
                                text: '张',
                                textAlign: 'left',
                                style:'margin:5px 0 0 8px'
                            }]
                },{
                    allowBlank: false,
                    fieldLabel: '城市',
                    xtype: 'gridpanel',
                    itemId: 'gainNewCityIdsEdit',
                    height: 100,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns: [{
                        xtype: 'rownumberer'
                    },{
                        text: 'code',
                        dataIndex: 'code'
                    }, {    
                        text: '城市名',
                        dataIndex: 'name'
                    }],
                },{
                    name: '',
                    fieldLabel: '店铺',
                    xtype: 'gridpanel',
                    itemId: 'gainShopIdEdit',
                    height: 100,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns: [{
                                xtype: 'rownumberer'
                            },{
                                text: '店铺名',
                                dataIndex: 'name',
                                width:200,
                                renderer: function(value,grid) {
                                    
                                    value = grid.record.get('cityName')+'-'+value;
                                    return value;
                                }
                            },{
                                text: 'shopId',
                                dataIndex: 'id',
                                width:100, 
                            }],
                },{
                    name: '',
                    fieldLabel: '货架',
                    xtype: 'gridpanel',
                    itemId: 'gainGoodsShelfIdEdit',
                    height: 100,
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
                },{
                    name: '',
                    fieldLabel: 'sku',
                    xtype: 'gridpanel',
                    itemId: 'gainTemplatesSkuIdEdit',
                    height: 100,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns: [{
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
                    text: 'Save',
                    itemId: 'save-coupon-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('couponEdit')[0].close();
                    }
                },
                
            ]
        }]

        this.callParent(arguments);

    }

        
});