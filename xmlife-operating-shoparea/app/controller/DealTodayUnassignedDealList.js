Ext.define('XMLifeOperating.controller.DealTodayUnassignedDealList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealTodayUnassignedDeal.DealTodayUnassignedDealList'],

    stores: ['Deal', 'ShopArea', 'DealStatus', 'Customer', 'DealItems'],

    models: ['Deal', 'ShopArea', 'Customer', 'DealItems'],

    refs: [{
        ref: 'dealTodayUnassignedDealList',
        selector: 'dealtodayunassigneddeallist',
        xtype: 'dealtodayunassigneddeallist'
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
            'dealtodayunassigneddeallist #shopArea': {
                select: function(combo) {
                    var sstore = this.getDealStore();
                    sstore.getProxy().extraParams = {
                        shopArea: combo.getValue(),
                        assignShopper:false
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
            'dealtodayunassigneddeallist #dealSearch': {
                click: me.todayUnassignedDealSearch
            },
            'dealtodayunassigneddeallist #statusSearch': {
                select: function(combo) {
                    var sstore = this.getDealStore();
                    sstore.getProxy().extraParams = {
                        shopArea: Ext.getCmp('dealTodayUnassignedDealList').down('#shopArea').getValue(),
                        status: combo.getValue(),
                        assignShopper : false
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
            'dealtodayunassigneddeallist #dealDetail': {
                click: me.onDealDetail
            },
            'dealtodayunassigneddeallist #customerDetail': {
                click: me.onCustomerDetail
            },
            'dealtodayunassigneddeallist #toproblemdeal': {
                click: me.onToProblemDeal
            }
        });
    },
    todayUnassignedDealSearch: function() {
        console.log(123);
        var me = this,
            keyWords = me.getDealTodayUnassignedDealList().down('#keyword').getValue(),
            store = this.getDealStore(),
            view = this.getDealTodayUnassignedDealList();
        var shopAreaId = Ext.getCmp('dealTodayUnassignedDealList').down('#shopArea').getValue();
        if (keyWords == '') {
            if (shopAreaId) {
                store.getProxy().extraParams = {
                    shopArea: shopAreaId,
                    assignShopper:false
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
                    phone: keyWords,
                    assignShopper:false
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
                    sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败', function() {
                        var sstore = me.getDealStore();
                        sstore.getProxy().extraParams = {
                            shopArea: me.areaId,
                            assignShopper:false
                        }
                        sstore.loadPage(1, {
                            params: {
                                start: 0,
                                limit: 25,
                                page: 1
                            }
                        });
                    });
                }
            }
        );
    },

});