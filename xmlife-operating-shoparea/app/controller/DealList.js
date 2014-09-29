Ext.define('XMLifeOperating.controller.DealList', {
    extend: 'Ext.app.Controller',

    views: ['dealManage.DealList', 'dealManage.DealDetail', 'dealManage.DealCustomerDetail'],

    stores: ['Deal', 'ShopArea', 'DealStatus', 'Customer', 'DealItems'],

    models: ['Deal', 'ShopArea', 'Customer', 'DealItems'],

    refs: [{
        ref: 'dealList',
        selector: 'dealList',
        xtype: 'dealList'
    }, {
        ref: 'shopArea',
        selector: '#shopArea',
    }, {
        ref: 'keyword',
        selector: '#keyword',
    }, {
        ref: 'statusSearch',
        selector: '#statusSearch',
    }, {
        ref: 'dealCustomerDetail',
        selector: 'dealCustomerDetail',
        xtype: 'dealCustomerDetail',
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
                    var sstore = this.getDealStore();
                    me.dateReset();
                    sstore.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'deal';
                    sstore.getProxy().extraParams = {
                        shopArea: combo.getValue(),
                        beginTime:me.beginTime,
                        endTime:me.endTime
                    }
                    sstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                    this.areaId = combo.getValue();
                }
            },
            'dealList':{

            },
            'dealList #productInvoice': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;

                    Ext.MessageBox.confirm('提示', '确认导出商品对货单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportProductStatistic?' + 'shopArea=' + me.areaId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username + '&beginTime=' + beginTime + '&endTime=' + endTime;
                            window.open(url, '商品对货单', '', '_blank');
                        } else {
                            return;
                        }
                    });
                }
            },
            'dealList #paymentInvoice': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    Ext.MessageBox.confirm('提示', '确认导出支付对账单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportDealCashflow?' + 'shopArea=' + me.areaId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username + '&beginTime=' + beginTime + '&endTime=' + endTime;
                            window.open(url, '支付对账单', '', '_blank');
                        } else {
                            return;
                        }
                    });
                }
            },
            'dealList #deallistInvoice': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    Ext.MessageBox.confirm('提示', '确认导出订单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportDeal?' + 'shopArea=' + me.areaId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username + '&beginTime=' + beginTime + '&endTime=' + endTime;
                            window.open(url, '订单', '', '_blank');
                        } else {
                            return;
                        }
                    });
                }
            },
            'dealList #getDealListByDate': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    var sstore = this.getDealStore();
                    sstore.getProxy().extraParams = {
                        shopArea: this.areaId,
                        beginTime: beginTime,
                        endTime: endTime
                    }
                    sstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
                }

            },
            'dealList #dealSearch': {
                click: me.dealSearch
            },
            'dealList #statusSearch': {
                select: function(combo) {
                    var sstore = this.getDealStore();
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;
                    sstore.getProxy().extraParams = {
                        shopArea: Ext.getCmp('dealList').down('#shopArea').getValue(),
                        status: combo.getValue(),
                        beginTime:beginTime,
                        endTime:endTime
                    }
                    sstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });

                },
            },
            'dealList #dealDetail': {
                click: me.onDealDetail
            },
            'dealList #customerDetail': {
                click: me.onCustomerDetail
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
dateReset:function(){

    var me =this;
    var dealList = me.getDealList();
    var beginTimeCmp = dealList.down('[name=beginTime]');
    var endTimeCmp  = dealList.down('[name=endTime]');
    beginTimeCmp.reset();
    endTimeCmp.reset();
    this.beginTime = beginTimeCmp.rawValue;
    this.endTime = endTimeCmp.rawValue;
    
},

dateString: function(date) {
    var date  = date||{};
    return date.getFullYear() + '-' + (date.getMonth() + 1) +'-'+ date.getDate();
},
onRefresh: function(view, e, eOpts) {
    var me = this;
    if (!view.isDisabled()) {
            //发送刷新请求
            var sstore = this.getDealStore();
            me.dateReset();//日期号码重置
            sstore.getProxy().extraParams = {
                shopArea: this.areaId,
                endTime:me.endTime,
                beginTime:me.beginTime
            };
            sstore.loadPage(1, {
                params: {
                    start: 0,
                    limit: 25,
                    page: 1
                }
            });
            //禁用按钮并进入倒计时
            var count = function(t) {
                var time = 5 - t;
                view.setText(time + 's');
            }
            view.setDisabled(true);
            for (var i = 0; i < 5; i++) {
                (function(t) {
                    setTimeout(function() {
                        count(t)
                    }, t * 1000);
                }(i))
            }
            setTimeout(function() {
                view.setDisabled(false);
                view.setText('刷新');
            }, 5000);
        } else {
            return
        }
    },
    dealSearch: function() {
        var me = this,
        keyWords = me.getDealList().down('#keyword').getValue(),
        store = this.getDealStore(),
        view = this.getDealList();
        var shopAreaId = Ext.getCmp('dealList').down('#shopArea').getValue();
        if (keyWords == '') {
            if (shopAreaId) {
                store.getProxy().extraParams = {
                    shopArea: shopAreaId
                };
                store.loadPage(1, {
                    params: {
                        start: 0,
                        limit: 25,
                        page: 1
                    }
                });
            } else {
                return;
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

    onDealDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDealDetail();
        win.down('form').loadRecord(dealDetail);
        win.show();
        var store = this.getDealItemsStore();
        store.load({
            params: {
                deal: dealDetail.get('dealBackendId'),
            },

            callback: function(records) {
                console.log(records);
                var model = Ext.ComponentQuery.query('#dealDetails')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },

    onCustomerDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var store = this.getCustomerStore();
        console.log(dealDetail.get('customId'));
        var win = this.getDealCustomerDetail();
        store.on('load', function(store, records, successful, eOpts) {
            store.data.items[0].data['dtoAddress'] = dealDetail.getData()['dtoAddress'];
            console.log(store.data.items[0]);
            win.down('form').loadRecord(store.data.items[0]);
            win.show();
        });
        store.load({
            params: {
                uid: dealDetail.get('customId'),
            },
        });
    },

    onToProblemDeal: function(view, rowIndex, colIndex, column, e) {
        var dealitem = view.getRecord(view.findTargetByEvent(e));
        var dealBackendId = dealitem.get('dealBackendId');
        var url = 'deal/transToProblem/' + dealBackendId;
        var me = this;
        var status = dealitem.get('status');
        if (status == 7 || status == 4) {
            return;
        }
        Ext.MessageBox.confirm(
            '确认转为问题订单',
            Ext.String.format("确定要将<h5>'{0}'</h5>的订单转为问题订单吗？", '订单号为：' + dealitem.get('shortId') + ' 顾客为：' + dealitem.get('customerName')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败',
                        function(response) {
                            // alert(response);
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
                                }
                                sstore.loadPage(1, {
                                    params: {
                                        start: 0,
                                        limit: 25,
                                        page: 1
                                    }
                                });
                            }

                        });
}
}
);
},
onCancalDeal: function(view, rowIndex, colIndex, column, e) {
    var dealitem = view.getRecord(view.findTargetByEvent(e));
        //var dealBackendId = dealitem.get('dealBackendId');
        //var url = 'deal/transToProblem/' + dealBackendId;
        // deal/cancelDeal PUT参数{dealId}
        var dealBackendId = dealitem.get('dealBackendId');
        var url = 'deal/cancelDeal';
        var me = this;
        var status = dealitem.get('status');
        if (status != 20 && status != 31) {
            return;
        }
        Ext.MessageBox.confirm(
            '确认取消订单',
            Ext.String.format("确定要取消<h5>'{0}'</h5>的订单吗？", '订单号为：' + dealitem.get('shortId') + ' 顾客为：' + dealitem.get('customerName')),
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
                            }
                            sstore.loadPage(1, {
                                params: {
                                    start: 0,
                                    limit: 25,
                                    page: 1
                                }
                            });
                        }

                    });
}
}
);
},

});