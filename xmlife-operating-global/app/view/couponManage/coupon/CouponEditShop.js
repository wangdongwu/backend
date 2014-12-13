Ext.define('XMLifeOperating.view.couponManage.coupon.CouponEditShop', {
    extend: 'Ext.window.Window',
    xtype: 'couponEditShop',

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
    title: '修改优惠券-修改店铺',
    initComponent: function() {
        var bindTypeStore = Ext.create('Ext.data.Store', {
            fields: ['value', 'type'],
            data: [{
                "value": 1,
                "type": '商店'
            }, {
                "value": 2,
                "type": '货架'
            }, {
                "value": 3,
                "type": 'SKU'
            }]
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [{
                fieldLabel: '绑定到',
                labelWidth: 50,
                store: bindTypeStore,
                name: 'bindingType',
                emptyText: '请选择绑定类型',
                xtype: 'combo',
                editable: false,
                queryMode: 'local',
                triggerAction: 'all',
                displayField: 'type',
                valueField: 'value',
                itemId: 'bindTypeId',
                allowBlank: true,
                disabled:true
            }, {
                xtype: 'displayfield',
                value: '选择城市'
            }, {
                allowBlank: false,
                fieldLabel: '城市',
                xtype: 'gridpanel',
                itemId: 'gainNewCityIdsEditShop',
                height: 100,
                selModel: Ext.create('Ext.selection.CheckboxModel', {
                    mode: 'MULTI'
                }),
                columns: [{
                    xtype: 'rownumberer'
                }, {
                    text: 'code',
                    dataIndex: 'code'
                }, {
                    text: '城市名',
                    dataIndex: 'name'
                }],
            }, {
                xtype: 'button',
                text: '请点击选择城市',
                itemId: 'choiceCityId'
            }, {
                xtype: 'displayfield',
                value: '选择店铺',
                style: 'margin:5px 0',
                itemId: 'choiceShopTextId'
            }, {
                xtype: 'container',
                layout: 'column',
                style: 'margin-top:3px;margin-bottom:5px;',
                itemId: 'searchShopTextId',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: '',
                    labelWidth: 90,
                    labelAlign: 'left',
                    emptyText: '搜索店铺',
                    name: 'keywordShopEditShop',
                    itemId: 'keywordShopEditShop',
                    style: 'margin-right:10px;'
                }, {
                    xtype: 'button',
                    text: '搜索',
                    itemId: 'searchShop'
                }]
            }, {
                name: '',
                fieldLabel: '店铺',
                xtype: 'gridpanel',
                itemId: 'gainShopIdEditShop',
                height: 100,
                selModel: Ext.create('Ext.selection.CheckboxModel', {
                    mode: 'MULTI'
                }),
                columns: [{
                    xtype: 'rownumberer'
                }, {
                    text: '店铺名',
                    dataIndex: 'name',
                    width: 200,
                    renderer: function(value, grid) {
                        value = grid.record.get('cityName') + '-' + value;
                        return value;
                    }
                }, {
                    text: 'shopId',
                    dataIndex: 'id',
                    width: 100
                }]
            }],
            buttons: [{
                text: 'save',
                itemId: 'save'
            }, {
                text: 'cancle',
                itemId: '',
                handler: function(button){
                    button.up('window').close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
