Ext.define('XMLifeOperating.view.damagedProductApply.AddDamagedProductApply', {
    extend: 'Ext.window.Window',
    xtype: 'addDamagedProductApply',
    id: 'addDamagedProductApply',
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
    maxHeight: 550,
    resizable: false,
    layout: 'fit',
    title: '申报残损',
    initComponent: function() {
        var reasonCodeStore = Ext.create('Ext.data.Store', {
            fields: ['value', 'type'],
            data: [{
                "value": 1,
                "type": '过期'
            }, {
                "value": 2,
                "type": '无法退货'
            }]
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [{
                    xtype: 'combo',
                    itemId: 'chooseShopList',
                    fieldLabel: '选择店铺',
                    autoSelect: true,
                    labelWidth: 60,
                    maxWidth: 80,
                    editable: false,
                    triggerAction: 'all',
                    displayField: 'name',
                    queryMode: 'local',
                    valueField: 'id',
                    value: '请选择店铺',
                    tooltip: '请选择店铺'
                }, {
                    xtype: 'displayfield',
                    value: '选择商品实例',
                    width: 80
                }, {
                    xtype: 'container',
                    layout: 'column',
                    style: 'margin-top:5px;margin-bottom:10px;',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: '搜索商品',
                        labelWidth: 60,
                        labelAlign: 'left',
                        emptyText: '搜索商品',
                        name: 'keywordShop',
                        itemId: 'keywordShop',
                        style: 'margin-right:10px;'
                    }, {
                        xtype: 'button',
                        text: '搜索',
                        itemId: 'reseachShopProduct'
                    }]
                }, {
                    name: '',
                    store: 'ProductSearch',
                    allowBlank: false,
                    fieldLabel: '店铺',
                    xtype: 'gridpanel',
                    itemId: 'chooseShopProductId',
                    height: 100,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'MULTI'
                    }),
                    columns: [{
                        text: 'id',
                        dataIndex: 'id'
                    }, {
                        text: '商品名称',
                        dataIndex: 'name'
                    }]
                }, {
                    fieldLabel: '选择残损理由',
                    labelWidth: 80,
                    maxWidth: 100,
                    itemId: 'reasonCodeitem',
                    store: reasonCodeStore,
                    name: 'gender',
                    allowBlank: false,
                    xtype: 'combo',
                    editable: false,
                    queryMode: 'local',
                    triggerAction: 'all',
                    displayField: 'type',
                    valueField: 'value',
                    allowBlank: false,
                    style: 'margin-top:10px;margin-bottom:10px;'
                }, {
                    xtype: 'numberfield',
                    itemId: 'totalCount',
                    fieldLabel: '填写残损数量',
                    labelWidth: 80,
                    labelAlign: 'left',
                    emptyText: '请输入残损数量',
                    width: 140,
                    minValue: 1,
                    maxValue: 1000
                }
            ],
            buttons: [{
                text: 'Save',
                itemId: 'saveDamagedProductApplyBtn'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    this.up('window').close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
