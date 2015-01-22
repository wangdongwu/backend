Ext.define('XMLifeOperating.view.dealManage.DamagedAddSalesDefeat', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.data.*',
        'Ext.form.field.Hidden'
    ],
    xtype: 'DamagedAddSalesDefeat',
    alias: 'widget.DamagedAddSalesDefeat',
    title: '商品残损与退货失败清单',
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
                width: 630
            },
            items: [{
                xtype: 'combo',
                fieldLabel: '选择城市',
                store: 'SupportedCity',
                name: 'cityCode',
                itemId: 'city',
                allowBlank: false,
                blankText: '请选择城市',
                width: 600,
                editable: false,
                triggerAction: 'all',
                displayField: 'name',
                queryMode: 'local',
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
                allowBlank: false,
                blankText: '请选择商圈',
                width: 600,
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
                allowBlank: false,
                blankText: '请选择商店',
                width: 600,
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
                    style: 'margin-left: 30px',
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
                        date.setDate(date.getDate() - 8);
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
                            var start = Ext.Date.add(newValue, Ext.Date.DAY, 30);
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
                }]
            }, {
                xtype: 'button',
                text: '导出残损与退货失败清单',
                width: 513,
                style: 'margin-top:20px;margin-left:85px',
                itemId: 'exportDamage'
            }]
        }]
    }]
});
