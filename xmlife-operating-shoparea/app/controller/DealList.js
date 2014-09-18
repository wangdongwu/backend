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
                    sstore.getProxy().extraParams = {
                        shopArea: combo.getValue()
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
            'dealList #productInvoice': {
                click: function() {
                    var me = this;
                    var dealList = me.getDealList();
                    var beginTime = dealList.down('[name=beginTime]').rawValue;
                    var endTime = dealList.down('[name=endTime]').rawValue;

                    Ext.MessageBox.confirm('提示', '确认导出昨日商品对货单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportProductStatistic?' + 'shopArea=' + me.areaId + '&dayType=1' + '&sessionId=' + sessionId + '&username=' + username+'&beginTime='+beginTime+'&endTime='+endTime;
                            window.open(url, '昨日商品对货单', '', '_blank');
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
                    Ext.MessageBox.confirm('提示', '确认导出昨日支付对账单？', function(btn) {
                        if (btn == 'yes') {
                            var sessionId = localStorage.getItem('sessionId');
                            var username = localStorage.getItem('username');
                            var url = XMLifeOperating.generic.Global.URL.biz + 'deal/exportDealCashflow?' + 'shopArea=' + me.areaId + '&dayType=1'+ '&sessionId=' + sessionId + '&username=' + username+'&beginTime='+beginTime+'&endTime='+endTime;
                            window.open(url, '昨日支付对账单', '', '_blank');
                        } else {
                            return;
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
                    sstore.getProxy().extraParams = {
                        shopArea: Ext.getCmp('dealList').down('#shopArea').getValue(),
                        status: combo.getValue()
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
            /*'dealList #checkUnallocatedOrder':{
                click:{
                    
                }
            }*/
        });
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
                    phone: keyWords
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
        /*sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败', function() {
            var sstore = me.getDealStore();
            sstore.getProxy().extraParams = {
                shopArea: combo.getValue()
            }
            sstore.loadPage(1, {
                params: {
                    start: 0,
                    limit: 25,
                    page: 1
                }
            });
        });*/
        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定要将<h5>'{0}'</h5>的订单转为问题订单吗？", '订单号为：'+dealitem.get('shortId')+' 顾客为：'+dealitem.get('customerName')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败',
                    function(response) {
                        // alert(response);
                        if(response.responseText!=0){
                            Ext.MessageBox.show({
                                title: '订单操作',
                                msg: '转为问题订单失败',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }else{
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

});