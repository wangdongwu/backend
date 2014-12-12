Ext.define('XMLifeOperating.view.dealManage.CustomerSales', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.data.*',
        'Ext.form.field.Hidden'
    ],
    xtype: 'CustomerSales',
    alias: 'widget.CustomerSales',
    title: '用户总览',
    closeAction: 'hide',
    resizable: false,
    forceFit: true,
    width: '100%',
    style: 'padding-top: 20px;',
    items: [{
        xtype: 'form',
        edit: false,
        border: 0,
        defaults: {
            bodyPadding: 5
        },
        items: [{
            xtype: 'container',
            defaultType: 'textfield',
            border: 0,
            defaults: {
                width: 500
            },
            items: [{
                xtype: 'container',
                layout: 'column',
                items: [{
                    xtype: 'radio',
                    name: 'rangeType',
                    listeners: {
                        change: function(radio, newValue, oldValue, e) {
                            var customerFile = Ext.getCmp('customerFile');
                            var city = radio.nextSibling();
                            var register = city.nextSibling();
                            var beginTime = register.nextSibling();
                            var arrive = beginTime.nextSibling();
                            var endTime = arrive.nextSibling();
                            var customer = customerFile.previousSibling();
                            
                            if (newValue == true) {
                                city.setDisabled(false);
                                register.setDisabled(false);
                                beginTime.setDisabled(false);
                                arrive.setDisabled(false);
                                endTime.setDisabled(false);
                                customer.setDisabled(true);
                                customerFile.setDisabled(true);
                                customerFile.inputEl.dom.value = '';
                                customerFile.allowBlank = true;
                            } else {
                                customerFile.allowBlank = false;
                                city.setDisabled(true);
                                register.setDisabled(true);
                                beginTime.setDisabled(true);
                                arrive.setDisabled(true);
                                endTime.setDisabled(true);
                                customer.setDisabled(false);
                                customerFile.setDisabled(false);
                            }
                        }
                    }
                }, {
                    xtype: 'combo',
                    fieldLabel: '选择城市',
                    store: 'SupportedCity',
                    name: 'cityCode',
                    itemId: 'city',
                    allowBlank: false,
                    disabled: true,
                    blankText: '请选择城市',
                    width: 480,
                    editable: false,
                    triggerAction: 'all',
                    displayField: 'name',
                    valueField: 'code',
                    listeners: {
                        afterrender: function(combo, e) {
                            var me = this,
                                store = combo.getStore();

                            store.on('load', function(st, items) {
                                var me = this;
                                me.setValue(330100);
                            }, me);
                            store.load();
                        },
                    }
                }, {
                    xtype: 'displayfield',
                    value: '注册时间:',
                    disabled: true,
                    style: 'margin-left:15px',
                }, {
                    xtype: 'datefield',
                    name: 'beginTime',
                    disabled: true,
                    style: 'margin-left: 50px',
                    width: 180,
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
                             var endDate = function(){
                                var date = new Date();
                                date.setDate(date.getDate()-1);
                                return date;
                            }();
                            var end = datefield.nextSibling().nextSibling();
                            var start = Ext.Date.add(newValue, Ext.Date.DAY, 31);
                            end.setMinValue(newValue);
                            end.setValue('');
                            if (start > end.maxValue) {
                                end.setMaxValue(endDate);
                            } else {
                                end.setMaxValue(start);
                            }
                        }
                    }
                }, {
                    xtype: 'displayfield',
                    value: '到',
                    disabled: true,
                    style: 'margin-left:2px'
                }, {
                    xtype: 'datefield',
                    name: 'endTime',
                    width: 180,
                    disabled: true,
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
                    format: 'Y-m-d'
                }]
            }, {
                xtype: 'container',
                layout: 'column',
                padding: 0,
                style: 'margin-top:5px',
                border: false,
                items: [{
                    xtype: 'radio',
                    name: 'rangeType'
                }, {
                    xtype: 'displayfield',
                    fieldLabel: '指定用户',
                    disabled: true,
                    labelWidth: 78
                }, {
                    xtype: 'filefield',
                    name: 'file',
                    allowBlank: false,
                    blankText: '请上传文件',
                    disabled: true,
                    itemId: 'file',
                    width: 375,
                    style: 'margin-left:20px',
                    id: 'customerFile',
                    buttonText: '上传文件',
                    listeners: {
                        change: function(value) {
                            var file = value.fileInputEl.dom.files[0].name;
                            this.inputEl.dom.value = file;
                        }
                    }
                }]
            }, {
                xtype: 'button',
                text: '用户导出表',
                width: 375,
                style: 'margin-top:20px;margin-left:120px',
                itemId: 'export'
            }]
        }]
    }]
});
