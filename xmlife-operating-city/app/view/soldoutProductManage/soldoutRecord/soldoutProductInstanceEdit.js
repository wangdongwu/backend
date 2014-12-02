Ext.define('XMLifeOperating.view.soldoutProductManage.soldoutRecord.soldoutProductInstanceEdit', {
    extend: 'Ext.window.Window',
    xtype: 'soldoutProductInstanceEdit',
    itemId: 'soldoutProductInstanceEdit',
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
            },{
                xtype:'textfield',
                name:'id',
                readOnly: true,
                hidden:true
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
                }, {
                    xtype: 'numberfield',
                    name: 'discountPrice',
                    fieldLabel: '折扣价',
                    allowBlank: true,
                    step: 0.1,
                    labelWidth: 90
                }]
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
            }],
            buttons: [{
                text: 'Save',
                itemId: 'editShelvesGoodsWin'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('soldoutProductInstanceEdit')[0].close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
