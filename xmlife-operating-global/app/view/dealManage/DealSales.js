Ext.define('XMLifeOperating.view.dealManage.DealSales', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.data.*',
        'Ext.form.field.Hidden'
    ],
    xtype: 'DealSales',
    alias: 'widget.DealSales',
    title: '订单清单',
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
                labelWidth: 80,
                width: 600
            },
            items: [{
                xtype: 'combo',
                fieldLabel: '选择城市',
                store: 'SupportedCity',
                name: 'cityCode',
                itemId: 'city',
                allowBlank: false,
                blankText: '请选择城市',
                editable: false,
                triggerAction: 'all',
                queryMode: 'local',
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
                    change: function(combo, records, e) {
                        var me = this,
                            areaSelection = combo.nextSibling(),
                            areaStore = areaSelection.getStore();

                        areaStore.on('load', function(st, items) {
                            var me = this;
                            st.add({
                                name: '全部',
                                id: 'all'
                            });
                            me.setValue('all');
                        }, areaSelection);
                        areaStore.load();
                    }
                }
            }, {
                xtype: 'combo',
                fieldLabel: '选择商圈',
                store: 'ShopArea',
                name: 'areaId',
                itemId: 'areaId',
                allowBlank: true,
                editable: false,
                triggerAction: 'all',
                displayField: 'name',
                valueField: 'id',
                queryMode: 'local',
                listeners: {
                    change: function(combo, records, e) {
                        var me = this,
                            shopSelection = combo.nextSibling(),
                            shopStore = shopSelection.getStore();

                        shopStore.on('load', function(st, items) {
                            shopSelection.setValue('5412fb110364452d87bd21c3');
                        }, shopSelection);
                        shopStore.load();
                    }
                }
            }, {
                xtype: 'combo',
                fieldLabel: '选择商店',
                store: 'ShopBannerTemplate',
                name: 'shopId',
                itemId: 'shopId',
                allowBlank: true,
                editable: false,
                triggerAction: 'all',
                displayField: 'name',
                valueField: 'id'
            }, {
                xtype: 'container',
                layout: 'column',
                items: [{
                    xtype: 'displayfield',
                    value: '查询时间:'
                }, {
                    xtype: 'datefield',
                    name: 'beginTime',
                    style: 'margin-left: 32px',
                    width: 250,
                    emptyText: '开始时间',
                    minValue: (function() {
                        var date = new Date();
                        date.setMonth(date.getMonth() - 1);
                        date.setDate(1);
                        return date;
                    })(),
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
                            var end = datefield.nextSibling().nextSibling();
                            var start = Ext.Date.add(newValue, Ext.Date.DAY, 31);
                            end.setMinValue(newValue);
                            end.setValue('');
                            if (start > end.maxValue) {
                                end.setMaxValue(end.maxValue);
                            } else {
                                end.setMaxValue(start);
                            }
                        }
                    }
                }, {
                    xtype: 'displayfield',
                    value: '到',
                    style: 'margin-left:2px'
                }, {
                    xtype: 'datefield',
                    name: 'endTime',
                    width: 250,
                    emptyText: '结束时间',
                    minValue: (function() {
                        var date = new Date();
                        date.setMonth(date.getMonth() - 1);
                        date.setDate(1);
                        return date;
                    })(),
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
                }, ]
            }, {
                xtype: 'container',
                layout: 'column',
                style: 'margin-top:20px',
                items: [{
                    xtype: 'button',
                    text: '导出小单',
                    width: 200,
                    isBigDeal: false,
                    style: 'margin-left:85px',
                    itemId: 'exportsmall'
                }, {
                    xtype: 'button',
                    text: '导出大单',
                    width: 200,
                    isBigDeal: true,
                    style: 'margin-left:110px',
                    itemId: 'exportbig'
                }]
            }]
        }]
    }]
});
