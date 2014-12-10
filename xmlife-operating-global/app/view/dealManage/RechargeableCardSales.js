Ext.define('XMLifeOperating.view.dealManage.RechargeableCardSales', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.data.*',
        'Ext.form.field.Hidden'
    ],
    xtype: 'RechargeableCardSales',
    alias: 'widget.RechargeableCardSales',
    title: '充值卡清单',
    closeAction: 'hide',
    resizable: false,
    forceFit: true,
    width: '100%',
    style: 'padding-top: 20px;',
    items: [{
        xtype: 'form',
        edit: false,
        border: 0,
        items: [{
            xtype: 'fieldcontainer',
            defaultType: 'textfield',
            border: 0,
            defaults: {
                labelWidth: 80,
                width: 600
            },
            items: [{
                xtype: 'combo',
                name: 'bizType',
                fieldLabel: '选择类型:',
                itemId: 'bizType',
                queryMode: 'local',
                triggerAction: 'all',
                allowBlank: false,
                displayField: 'type',
                width: 460,
                valueField: 'value',
                value: "0",
                store: Ext.create('Ext.data.Store', {
                    fields: ['value', 'type'],
                    data: [{
                        "value": '0',
                        "type": '实体卡'
                    }, {
                        "value": '1',
                        "type": '在线充值卡'
                    }],
                })
            }, {
                xtype: 'container',
                layout: 'column',
                padding: 0,
                style: 'margin-top:5px;',
                border: false,
                items: [{
                    xtype: 'displayfield',
                    value: '指定范围:'
                }, {
                    xtype: 'radio',
                    name: 'rangeType',
                    inputValue: 1,
                    style: 'margin-left:30px',
                    listeners: {
                        change: function(radio, newValue, oldValue, e) {
                            if (newValue == true) {
                                Ext.getCmp('batchId').setValue('');
                            }
                        }
                    }
                }, {
                    xtype: 'displayfield',
                    fieldLabel: '指定卡号',
                    labelWidth: 78
                }, {
                    xtype: 'form',
                    border: false,
                    items: [{
                        xtype: 'filefield',
                        itemId: 'file',
                        name: 'file',
                        id: 'rechargeableCardFile',
                        width: 280,
                        hideLabel: true,
                        buttonText: '上传文件',
                        listeners: {
                            change: function(value) {
                                var file = value.fileInputEl.dom.files[0].name;
                                this.inputEl.dom.value = file;
                            }
                        }
                    }]
                }]
            }, {
                xtype: 'container',
                layout: 'column',
                style: 'margin-left:55px',
                items: [{
                    xtype: 'radio',
                    name: 'rangeType',
                    inputValue: 2,
                    style: 'margin-left:27px',
                    listeners: {
                        change: function(radio, newValue, oldValue, e) {
                            if (newValue == true) {
                                Ext.getCmp('rechargeableCardFile').inputEl.dom.value = '';
                            }
                        }
                    }
                }, {
                    xtype: 'textfield',
                    name: 'batchId',
                    fieldLabel: '指定批次和时间',
                    itemId: 'batchId',
                    id: 'batchId',
                    labelWidth: 80,
                    width: 365,
                    allowBlank: true,
                    validator: function(value) {
                        var limitType = this.previousSibling();
                        if (limitType.checked) {
                            if (value) {
                                return true;
                            } else {
                                return false;
                            }
                        } else {
                            return true;
                        }
                    }
                }, {
                    xtype: 'datefield',
                    name: 'startTime',
                    style: 'margin-left: 125px',
                    width: 133,
                    emptyText: '开始时间',
                    maxValue: (function() {
                        var date = new Date();
                        date.setDate(date.getDate() - 1);
                        return date;
                    })(),
                    value: (function() {
                        var date = new Date();
                        date.setDate(date.getDate() - 1);
                        return date;
                    })(),
                    format: 'Y-m-d',
                    listeners: {
                        change: function(datefield, newValue, oldValue) {
                            var end = datefield.nextSibling().nextSibling().nextSibling();
                            var start = Ext.Date.add(newValue, Ext.Date.DAY, 31);
                            var begin = datefield.nextSibling();
                            begin.setValue(datefield.value.getTime());
                            end.setMinValue(newValue);
                            end.setValue('');
                            if (start > end.maxValue) {
                                end.setMaxValue(end.maxValue);
                            } else {
                                end.setMaxValue(start);
                            }                      
                        }
                    }
                },{
                    xtype: 'textfield',
                    name: 'start',
                    fieldLabel: '开始时间毫秒数',
                    hidden: true
                }, {
                    xtype: 'displayfield',
                    value: '到',
                    style: 'margin-left:2px'
                }, {
                    xtype: 'datefield',
                    name: 'endTime',
                    width: 132,
                    emptyText: '结束时间',
                    maxValue: (function() {
                        var date = new Date();
                        date.setDate(date.getDate() - 1);
                        return date;
                    })(),
                    value: (function() {
                        var date = new Date();
                        date.setDate(date.getDate() - 1);
                        return date;
                    })(),
                    format: 'Y-m-d',
                    listeners: {
                        change: function(datefield, newValue, oldValue) {
                            var end = datefield.nextSibling();
                            if(datefield.value == null){
                                end.setValue('');
                            }else{
                                end.setValue(datefield.value.getTime() + 86400000);
                            }                           
                        }
                    }
                }, {
                    xtype: 'textfield',
                    name: 'end',
                    fieldLabel: '结束时间毫秒数',
                    hidden: true
                }]
            }, {
                xtype: 'button',
                text: '充值卡导出表',
                width: 380,
                style: 'margin-top:20px;margin-left:83px',
                itemId: 'export'
            }]
        }]
    }]
});
