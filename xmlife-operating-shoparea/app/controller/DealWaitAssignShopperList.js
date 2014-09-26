Ext.define('XMLifeOperating.controller.DealWaitAssignShopperList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealWaitAssignShopper.DealWaitAssignShopperList'],

    stores: ['DealWaitAssignShopper', 'ShopArea', 'DealStatus', 'Customer', 'DealItems'],

    models: ['DealWaitAssignShopper', 'ShopArea', 'Customer', 'DealItems'],

    refs: [{
        ref: 'dealWaitAssignShopperList',
        selector: 'dealwaitassignshopperlist',
        xtype: 'dealwaitassignshopperlist'
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
            'dealwaitassignshopperlist #shopArea': {
                select: function(combo) {
                    var sstore = this.getDealWaitAssignShopperStore();
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
                    this.areaId = combo.getValassignShopperue();
                }
            },
            'dealwaitassignshopperlist #dealSearch': {
                click: me.onWaitAssignShopperSearch
            },
            'dealwaitassignshopperlist #statusSearch': {
                select: function(combo) {
                    var sstore = this.getDealWaitAssignShopperStore();
                    sstore.getProxy().extraParams = {
                        shopArea: Ext.getCmp('dealWaitAssignShopperList').down('#shopArea').getValue(),
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
            'dealwaitassignshopperlist #dealDetail': {
                click: me.onDealDetail
            },
            'dealwaitassignshopperlist #customerDetail': {
                click: me.onCustomerDetail
            },
            'dealwaitassignshopperlist #toproblemdeal': {
                click: me.onToProblemDeal
            },
            'dealwaitassignshopperlist #oneKeyDistribute': {
                click: me.onOneKeyDistribute
            },
            'dealwaitassignshopperlist #refresh': {
                click: me.onRefresh

            }
        });
    },
    onRefresh: function(view, e, eOpts) {
        var me = this;
        if (!view.isDisabled()) {
            //发送刷新请求
            var sstore = this.getDealWaitAssignShopperStore();
            sstore.getProxy().extraParams = {
                shopArea: this.areaId
            }
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
    onWaitAssignShopperSearch: function() {

        var me = this,
            keyWords = me.getDealWaitAssignShopperList().down('#keyword').getValue(),
            store = this.getDealWaitAssignShopperStore(),
            view = this.getDealWaitAssignShopperList();
        var shopAreaId = Ext.getCmp('dealWaitAssignShopperList').down('#shopArea').getValue();
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
        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定要将<h5>'{0}'</h5>的订单转为问题订单吗？", '订单号为：' + dealitem.get('shortId') + ' 顾客为：' + dealitem.get('customerName')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest(url, {}, '转为问题订单', '转为问题订单成功', '转为问题订单失败', function() {
                        var sstore = me.getDealWaitAssignShopperStore();
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
                    });
                }
            }
        );
    },
    onOneKeyDistribute: function() {
        var me = this;
        var areaId = me.areaId;
        var data = {
            shopArea: null
        }
        var success = function() {
            var sstore = me.getDealWaitAssignShopperStore();
            sstore.getProxy().extraParams = {
                shopArea: areaId
            }
            sstore.loadPage(1, {
                params: {
                    start: 0,
                    limit: 25,
                    page: 1
                }
            });
        };
        var failure = function(message) {
            Ext.MessageBox.show({
                title: '无法上传图片',
                msg: 'Error: <br />' + message,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        };
        data.shopArea = areaId;
        sendPutRequest('deal/oneKeyAssignShopper', data, '一键分配', '一键分配成功', '一键分配失败', success, failure);
    }

});