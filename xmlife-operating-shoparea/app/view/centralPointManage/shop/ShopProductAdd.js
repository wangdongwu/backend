/*
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductAdd', {
    extend: 'Ext.window.Window',
    xtype: 'shopproductadd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel',
    ],
    closeAction: 'hide',
    modal: true,
    width: 500,
    height: 650,
    resizable: false,
    layout: 'fit',
    bodyStyle: 'text-align:center;border-style: none;',
    initComponent: function() {
        var leafStore = Ext.create('Ext.data.Store', {
            fields: ['value', 'leaf'],
            data: [{
                "value": false,
                "leaf": '是'
            }, {
                "value": true,
                "leaf": '否'
            }]
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,
            bodyBorder: false,
            items: [{
                    xtype: 'fieldset',
                    labelWidth: 90,
                    border: false,
                    padding: 0,
                    items: [

                        {
                            layout: 'column',
                            xtype: 'fieldset',
                            border: false,
                            padding: 0,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: '商品模板',
                                labelWidth: 90,
                                labelAlign: 'left',
                                name: 'keywordProductTemplate',
                                itemId: 'keywordProductTemplate',
                            }, {
                                xtype: 'button',
                                text: '搜索',
                                itemId: 'reseachProductTemplate'

                            }]

                        }
                    ]
                }, {
                    name: 'productTemplateId',
                    store: 'ProductTemplate',
                    allowBlank: false,
                    fieldLabel: '商品模板',
                    xtype: 'gridpanel',
                    itemId: 'productTemplateId',
                    height: 150,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: "SINGLE",
                        allowDeselect: true
                    }),
                    columns: [{
                        text: 'id',
                        dataIndex: 'id'
                    }, {
                        text: '商品名称',
                        dataIndex: 'name'
                    }]
                }, {
                    xtype: 'numberfield',
                    name: 'purchasePrice',
                    fieldLabel: '进价',
                    labelWidth: 90,
                    step: 0.1,
                    allowBlank: false
                }, {
                    xtype: 'numberfield',
                    name: 'facePrice',
                    fieldLabel: '原价',
                    labelWidth: 90,
                    step: 0.1,
                    allowBlank: false
                },

                {
                    xtype: 'numberfield',
                    name: 'discountPrice',
                    fieldLabel: '折扣价',
                    allowBlank: true,
                    step: 0.1,
                    labelWidth: 90
                }, {
                    xtype: 'numberfield',
                    name: 'stock',
                    fieldLabel: '库存',
                    allowBlank: true,
                    step: 1,
                    labelWidth: 90,
                    itemId: 'stock',
                    disabled: true,
                    maxValue: 999999,
                    emptyText: '1~999999'
                }, {
                    xtype: 'fieldset',
                    border: false,
                    padding: 0,
                    itemId: 'limitTypeFieldset',
                    hidden: true,
                    items: [{
                        layout: 'column',
                        xtype: 'fieldset',
                        border: false,
                        padding: 0,
                        items: [{
                            xtype: 'radio',
                            labelAlign: 'right',
                            name: 'limitType',
                            inputValue: 1,
                            itemId: 'limitType1',
                        }, {
                            xtype: 'numberfield',
                            name: 'dayLimitCount',
                            fieldLabel: '每人当日限购数量',
                            labelWidth: 120,
                            labelAlign: 'left',
                            width: 200,
                            minValue: 1,
                            validator: function(value) {
                                var me = this;
                                var limitType = me.previousSibling();
                                var dayTodayLimitCount = me.nextSibling().getValue();
                                if (limitType.checked) {
                                    if (value) {
                                        if (dayTodayLimitCount) { //当日限购数量已填
                                            return value > dayTodayLimitCount ? '每人当日限购应小于当日限购' : true;
                                        } else {
                                            return true;
                                        }
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return true
                                }
                            }

                        }, {
                            xtype: 'numberfield',
                            name: 'dayTodayLimitCount',
                            fieldLabel: '当日限购数量',
                            labelWidth: 110,
                            labelAlign: 'left',
                            width: 200,
                            minValue: 1,
                            validator: function(value) {
                                var me = this;
                                var dayLimitCount = me.previousSibling().getValue();
                                var limitType = me.previousSibling().previousSibling();
                                if (limitType.checked) {
                                    if (value) {
                                        if (dayLimitCount) { //每人当日限购数量已填
                                            return value < dayLimitCount ? '每人当日限购应小于当日限购' : true;
                                        } else {
                                            return true;
                                        }
                                    } else {
                                        return false
                                    }
                                } else {
                                    return true
                                }
                            }

                        }]

                    }, {
                        layout: 'column',
                        xtype: 'fieldset',
                        border: false,
                        padding: 0,
                        items: [{
                            xtype: 'radio',
                            labelAlign: 'right',
                            name: 'limitType',
                            inputValue: 2,
                            itemId: 'limitType2',
                        }, {
                            xtype: 'numberfield',
                            name: 'totalLimitCount',
                            fieldLabel: '每人累计限购数量',
                            labelWidth: 120,
                            labelAlign: 'left',
                            width: 200,
                            minValue: 1,
                            validator: function(value) {
                                var me = this;
                                var limitType = me.previousSibling();
                                var totalTodayLimitCount = me.nextSibling().getValue();
                                if (limitType.checked) {
                                    if (value) {
                                        if (totalTodayLimitCount) { //当日限购数量已填
                                            return value > totalTodayLimitCount ? '每人累计限购应小于当日限购' : true;
                                        } else {
                                            return true;
                                        }
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return true
                                }
                            }
                        }, {
                            xtype: 'numberfield',
                            name: 'totalTodayLimitCount',
                            fieldLabel: '当日限购数量',
                            labelWidth: 110,
                            labelAlign: 'left',
                            width: 200,
                            minValue: 1,
                            validator: function(value) {
                                var me = this;
                                var totalLimitCount = me.previousSibling().getValue();
                                var limitType = me.previousSibling().previousSibling();
                                if (limitType.checked) {
                                    if (value) {
                                        if (totalLimitCount) { //每人累计限购数量已填
                                            return value >= totalLimitCount ? true : '当日限购应大于每人累计限购';
                                        } else {
                                            return true;
                                        }
                                    } else {
                                        return false
                                    }

                                } else {
                                    return true
                                }
                            }
                        }]
                    }]

                }
            ],
            buttons: [{
                text: 'Save',
                itemId: 'addShelvesGoodsWin'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('shopproductadd')[0].close();
                }
            }]
        }]
        this.callParent(arguments);

    }


});
