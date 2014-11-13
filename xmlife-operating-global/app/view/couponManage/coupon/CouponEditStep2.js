Ext.define('XMLifeOperating.view.couponManage.coupon.CouponEditStep2', {
    extend: 'Ext.window.Window',
    xtype: 'couponEditStep2',
    
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
    height: 650,
    resizable: false,
    layout: 'fit',
    title:'创建优惠券step2',
    initComponent: function() {
        var  bindTypeStore= Ext.create('Ext.data.Store', {
            fields: ['value','type'],
            data : [
                {"value": 1, "type": '商店'},
                {"value": 2, "type": '货架'},
                {"value": 3, "type": 'SKU'}
            ],
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [
                {
                    fieldLabel : '绑定到',
                    labelWidth: 50,
                    store : bindTypeStore,
                    name : 'bindingType',
                    emptyText:'请选择绑定类型',
                    allowBlank : false,
                    xtype : 'combo',
                    editable : false,
                    queryMode : 'local',
                    triggerAction : 'all',
                    displayField: 'type',
                    valueField: 'value', 
                    itemId:'bindTypeId',
                    allowBlank: true              
                },
                {
                    xtype: 'displayfield',
                    value:'选择城市'
                },{
                    allowBlank: false,
                    fieldLabel: '城市',
                    xtype: 'gridpanel',
                    itemId: 'gainNewCityIds',
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
                    xtype: 'button',
                    text:'选择城市',
                    itemId:'choiceCityId'
                },{
                    xtype:'displayfield',
                    value:'选择店铺',
                    style:'margin:5px 0',
                    itemId:'choiceShopTextId'
                },{
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:3px;margin-bottom:5px;',
                    itemId:'searchShopTextId',
                    items: [{
                                xtype: 'textfield',
                                fieldLabel: '',
                                labelWidth: 90,
                                labelAlign: 'left',
                                emptyText:'搜索店铺',
                                name: 'keywordShop',
                                itemId: 'keywordShop',
                                style:'margin-right:10px;'
                            }, {
                                xtype: 'button',
                                text: '搜索',
                                itemId: 'searchShop'
                            }]
                },{
                    name: '',
                    allowBlank: false,
                    fieldLabel: '店铺',
                    xtype: 'gridpanel',
                    itemId: 'gainShopId',
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
                    xtype:'displayfield',
                    value:'选择货架',
                    style:'margin:5px 0',
                    itemId:'choiceGoodsShelfTextId'
                },{
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:3px;margin-bottom:5px;',
                    itemId:'searchGoodsShelfTextId',
                    items: [{
                                xtype: 'textfield',
                                fieldLabel: '',
                                labelWidth: 90,
                                labelAlign: 'left',
                                emptyText:'搜索货架',
                                name: 'keywordGoodsShelf',
                                itemId: 'keywordGoodsShelf',
                                style:'margin-right:10px;'
                            }, {
                                xtype: 'button',
                                text: '搜索',
                                itemId: 'searchGoodsShelf'
                            }]
                },{
                    name: '',
                    allowBlank: false,
                    fieldLabel: '货架',
                    xtype: 'gridpanel',
                    itemId: 'gainGoodsShelfId',
                    height: 100,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns: [{
                                text: '货架',
                                dataIndex: 'name',
                                width:200,
                                renderer: function(value,grid) {
                                    
                                    value = grid.record.get('cityName')+'-'+value;
                                    return value;
                                }
                            }],
                },{
                    xtype:'displayfield',
                    value:'选择模板',
                    style:'margin:5px 0',
                    itemId:'choiceTemplatesTextId'
                },{
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:3px;margin-bottom:5px;',
                    itemId:'searchTemplatesfTextId',
                    items: [{
                                xtype: 'textfield',
                                fieldLabel: '',
                                labelWidth: 90,
                                labelAlign: 'left',
                                emptyText:'搜索模板',
                                name: 'keywordTemplates',
                                itemId: 'keywordTemplates',
                                style:'margin-right:10px;'
                            }, {
                                xtype: 'button',
                                text: '搜索',
                                itemId: 'searchTemplates'
                            }]
                },{
                    name: '',
                    allowBlank: false,
                    fieldLabel: 'sku',
                    xtype: 'gridpanel',
                    itemId: 'gainTemplatesSkuId',
                    height: 100,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns: [{
                                text: 'sku',
                                dataIndex: 'pname',
                                width:200,
                                renderer: function(value,grid) {
                                    
                                    value = grid.record.get('cityName')+'-'+value;
                                    return value;
                                }
                            }],
                }

               
               
 


                
            ],
            buttons: [
                {
                    text: '上一步',
                    itemId: 'prevButton'
                },
                {
                    text: '下一步',
                    itemId: 'nextButton'
                },
                
            ]
        }]

        this.callParent(arguments);

    }

        
});