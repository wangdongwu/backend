/*
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopproductedit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel',
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
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
            align: 'center',
            items: [{
                xtype: 'textfield',
                fieldLabel: '商品名称',
                name: 'name',
                labelWidth: 90,
                border: false,
                padding: 0,
                readOnly: true
            }, {
                xtype: 'fieldset',
                border: false,
                padding: 0,
                itemId: 'editprice',
                items: [{
                        xtype: 'numberfield',
                        name: 'purchasePrice',
                        fieldLabel: '进价',
                        labelWidth: 90,
                        step: 0.1,
                        allowBlank: false,
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
                    }
                ]
            }, {
                xtype: 'numberfield',
                name: 'stock',
                itemId: 'editstock',
                fieldLabel: '库存',
                allowBlank: true,
                step: 1,
                labelWidth: 90,
                disabled: true
            }, {
                xtype: 'fieldset',
                border: false,
                padding: 0,
                itemId: 'editlimit',
                items: [{
                    xtype: 'fieldset',
                    layout: 'column',
                    border: false,
                    padding: 0,
                    items: [{
                        xtype: 'radio',
                        labelAlign: 'right',
                        name: 'limitType',
                        inputValue: 1,
                        itemId: 'limitType1'

                    }, {
                        xtype: 'numberfield',
                        name: 'dayLimitCount',
                        fieldLabel: '每人当日限购数量',
                        labelWidth: 120,
                        labelAlign: 'left',
                        width: 180,
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
                        width: 180,
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
                        width: 180,
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
                        width: 180,
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
            }, {
                xtype: 'fieldset',
                layout: 'column',
                itemId: 'changeStorageRack',
                border: false,
                padding: 0,
                items: [{
                    xtype: 'checkbox',
                    itemId: 'changeBelongShelf',
                    name: 'changeBelongShelf',
                    handler: function(view, isChecked) {
                        var target = view.nextSibling();
                        if (isChecked == true) {
                            target.setDisabled(false)
                        } else {
                            target.setDisabled(true)
                        }
                    }
                }, {
                    xtype: 'combo',
                    name: 'belngShelf',
                    itemId: 'belngShelf',
                    displayField: 'name',
                    valueField: 'id',
                    fieldLabel: '移动货架',
                    labelWidth: 80,
                    blankText: '请选择货架',
                    editable: false,
                    width: 360,
                    disabled: true,
                    queryMode: 'local',
                    store: 'CategoryLeafCategorys',
                    triggerAction: 'all',
                    emptyText: '请选择货架'
                }]
            }],
            buttons: [{
                text: 'Save',
                itemId: 'editShelvesGoodsWin'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('shopproductedit')[0].close();
                }
            }]
        }]
        this.callParent(arguments);

    }


});