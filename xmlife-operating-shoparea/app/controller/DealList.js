Ext.define('XMLifeOperating.controller.DealList', {
    extend: 'Ext.app.Controller',
    statics: {
        // 指定store读取一页时的参数
        PARAM_1PAGE: {
            start: 0,
            limit: 25,
            page: 1
        }
    },

    views: ['dealManage.DealList', 'dealManage.DealDetail', 'dealManage.DealCustomerDetail', 'dealManage.DealSuperShopperDetail'],

    stores: ['Deal', 'ShopArea', 'DealStatus', 'DealItems'],

    models: ['Deal', 'ShopArea', 'DealItems'],

    // 注意到这个control引用的component也有可能定义在commonDealList里。
    refs: [{
        ref: 'dealList',
        selector: 'dealList',
        xtype: 'dealList'
    }, {
        ref: 'dealCustomerDetail',
        selector: 'dealCustomerDetail',
        xtype: 'dealCustomerDetail',
        autoCreate: true
    }, {
        ref: 'dealSuperShopperDetail',
        selector: 'dealSuperShopperDetail',
        xtype: 'dealSuperShopperDetail',
        autoCreate: true
    }, {
        ref: 'dealDetail',
        selector: 'dealDetail',
        xtype: 'dealDetail',
        autoCreate: true
    }],

    init: function() {
        var me = this;

        this.control({
            'dealList #shopArea': {
                select: function(combo) {
                    var sstore = me.getDealStore();

                    me.dateReset();
                    sstore.getProxy().extraParams = {
                        shopArea: combo.getValue(),
                        beginTime: me.beginTime,
                        endTime: me.endTime
                    };
                    sstore.loadPage(1, {
                        params: me.self.PARAM_1PAGE
                    });
                    me.areaId = combo.getValue();
                }
            },
            'dealList #productInvoice': {
                click: Ext.pass(me.showExportPopup, ['deal/exportProductStatistic', '商品对货单'])
            },
            'dealList #paymentInvoice': {
                click: Ext.pass(me.showExportPopup, ['deal/exportDealCashflow', '支付对账单'])
            },
            'dealList #deallistInvoice': {
                click: Ext.pass(me.showExportPopup, ['deal/exportDeal', '订单'])
            },
            'dealList #getDealListByDate': {
                click: function() {
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    var sstore = me.getDealStore();

                    sstore.getProxy().extraParams = {
                        shopArea: me.areaId,
                        beginTime: beginTime,
                        endTime: endTime
                    };
                    sstore.loadPage(1, {
                        params: me.self.PARAM_1PAGE
                    });
                }
            },
            'dealList #dealSearch': {
                click: me.dealSearch
            },
            'dealList #statusSearch': {
                select: function(combo) {
                    var sstore = me.getDealStore();
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;

                    sstore.getProxy().extraParams = {
                        shopArea: dealList.down('#shopArea').getValue(),
                        status: combo.getValue(),
                        beginTime: beginTime,
                        endTime: endTime
                    };
                    sstore.loadPage(1, {
                        params: me.self.PARAM_1PAGE
                    });
                },
            },
            'dealList #dealDetail': {
                click: me.onDealDetail
            },
            'dealList #customerDetail': {
                click: me.onCustomerDetail
            },
            'dealList #superShopperName': {
                click: me.onSuperShopperDetail
            },
            'dealList #toproblemdeal': {
                click: me.onToProblemDeal
            },
            'dealList #refresh': {
                click: me.onRefresh

            },
            'dealList #cancalDealId': {
                click: me.onCancalDeal
            }
        });
    },
    showExportPopup: function(urlPath, itemName) {
        var me = this,
            msg = '确认导出' + itemName + '？';

        Ext.MessageBox.confirm('提示', msg, function(btn) {
            if (btn !== 'yes') {
                return;
            }

            var dealList = me.getDealList(),
                queryObj = {
                    'shopArea': me.areaId,
                    'dayType': 1,
                    'sessionId': localStorage.getItem('sessionId'),
                    'username': localStorage.getItem('username'),
                    'beginTime': dealList.down('[name=beginTime]').rawValue,
                    'endTime': dealList.down('[name=endTime]').rawValue
                },
                url = XMLifeOperating.generic.Global.URL.biz + urlPath + '?' + Ext.Object.toQueryString(queryObj);

            window.open(url, itemName, '', '_blank');
        });
    },
    dateReset: function() {
        var dealList = this.getDealList();
        var beginTimeCmp = dealList.down('[name=beginTime]');
        var endTimeCmp = dealList.down('[name=endTime]');

        beginTimeCmp.reset();
        endTimeCmp.reset();
        this.beginTime = beginTimeCmp.rawValue;
        this.endTime = endTimeCmp.rawValue;
    },
    onRefresh: function(view) {
        var me = this;

        if (view.isDisabled()) {
            return;
        }
        //发送刷新请求
        var sstore = me.getDealStore();

        me.dateReset(); //日期号码重置
        sstore.getProxy().extraParams = {
            shopArea: me.areaId,
            endTime: me.endTime,
            beginTime: me.beginTime
        };
        sstore.loadPage(1, {
            params: me.self.PARAM_1PAGE
        });

        var countDownFn = function(sec) {
            if (sec > 0) {
                view.setText(sec + 's');
                countTimer = setTimeout(function() {
                    countDownFn(sec - 1);
                }, 1000);
            } else {
                view.enable();
                view.setText('刷新');
            }
        };

        //禁用按钮并进入倒计时
        view.disable();
        countDownFn(5);
    },
    dealSearch: function() {
        var me = this,
            dealListView = me.getDealList(),
            keyWords = dealListView.down('#keyword').getValue(),
            shopAreaId = dealListView.down('#shopArea').getValue(),
            store = me.getDealStore();

        if (keyWords == '') {
            if (shopAreaId) {
                store.getProxy().extraParams = {
                    shopArea: shopAreaId
                };
                store.loadPage(1, {
                    params: me.self.PARAM_1PAGE
                });
            }
        } else {
            store.load({
                params: {
                    shopArea: shopAreaId,
                    phoneOrDealId: keyWords
                }
            });
        }
    },
    onDealDetail: function(view, cellEl, rowIndex, colIndex, e, record) {
        var win = this.getDealDetail(),
            form = win.down('form').getForm();

        // 单独获取详情的接口
        Ext.Ajax.request({
            method: 'GET',
            url: XMLifeOperating.generic.Global.URL.biz + 'deal/' + record.get('dealBackendId'),
            params: {},
            success: function(response) {
                if (response.status == 200 && response.statusText == 'OK') {
                    var data = Ext.decode(response.responseText);

                    form.setValues(data);
                }
            },
            failure: function() {
                Ext.Msg.alert('获取订单详情失败！');
            }
        });

        var store = this.getDealItemsStore();

        store.load({
            params: {
                deal: record.get('dealBackendId'),
            },
            callback: function(records) {
                var model = win.down('#dealDetails').getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });

        win.show();
    },
    onCustomerDetail: function(view, cellEl, rowIndex, colIndex, e, record) {
        var win = this.getDealCustomerDetail();

        win.down('form').loadRecord(record);
        win.show();
    },
    onSuperShopperDetail: function(view, cellEl, rowIndex, colIndex, e, record) {
        if (!record.get('superShopperName')) {
            return;
        }
        var win = this.getDealSuperShopperDetail();

        win.down('form').loadRecord(record);
        win.show();
    },
    onToProblemDeal: function(view, cellEl, rowIndex, colIndex, e, record) {
        var dealBackendId = record.get('dealBackendId');
        var url = 'deal/transToProblem/' + dealBackendId;
        var me = this;
        var status = record.get('status');

        if (status == 7 || status == 4 || status == 6) {
            return;
        }
        Ext.MessageBox.confirm(
            '确认转为问题订单',
            Ext.String.format("确定要将<h5>'{0}'</h5>的订单转为问题订单吗？", '订单号为：' + record.get('shortId') + ' 收货人为：' + record.get('customerName')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败',
                        function(response) {
                            if (response.responseText != 0) {
                                Ext.MessageBox.show({
                                    title: '订单操作',
                                    msg: '转为问题订单失败',
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            } else {
                                Ext.MessageBox.show({
                                    title: '订单操作',
                                    msg: '该订单被成功标记为问题订单',
                                    icon: Ext.Msg.INFO,
                                    buttons: Ext.Msg.OK
                                });
                                var sstore = me.getDealStore();
                                sstore.getProxy().extraParams = {
                                    shopArea: me.areaId
                                };
                                sstore.loadPage(1, {
                                    params: me.self.PARAM_1PAGE
                                });
                            }

                        });
                }
            }
        );
    },
    onCancalDeal: function(view, cellEl, rowIndex, colIndex, e, record) {
        var dealBackendId = record.get('dealBackendId');
        var url = 'deal/cancelDeal';
        var me = this;
        var status = record.get('status');

        if (status != 20 && status != 31) {
            return;
        }
        Ext.MessageBox.confirm(
            '确认取消订单',
            Ext.String.format("确定要取消<h5>'{0}'</h5>的订单吗？", '订单号为：' + record.get('shortId') + ' 收货人为：' + record.get('customerName')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest(url, {
                            dealId: dealBackendId
                        }, '取消订单', '取消订单成功', '取消订单失败',
                        function(response) {
                            if (response.responseText != 1) {
                                Ext.MessageBox.show({
                                    title: '订单操作',
                                    msg: '取消订单失败',
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            } else {
                                Ext.MessageBox.show({
                                    title: '订单操作',
                                    msg: '该订单被成功取消',
                                    icon: Ext.Msg.INFO,
                                    buttons: Ext.Msg.OK
                                });
                                var sstore = me.getDealStore();
                                sstore.getProxy().extraParams = {
                                    shopArea: me.areaId
                                };
                                sstore.loadPage(1, {
                                    params: me.self.PARAM_1PAGE
                                });
                            }
                        });
                }
            }
        );
    }
});