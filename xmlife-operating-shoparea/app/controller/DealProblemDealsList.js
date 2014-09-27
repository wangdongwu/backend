Ext.define('XMLifeOperating.controller.DealProblemDealsList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealProblemDeals.DealProblemDealsList',
        'operationManage.dealProblemDeals.DealProblemDealsReapportion',
        'operationManage.dealProblemDeals.DealProblemDealsReapportionShopper',
        'operationManage.dealProblemDeals.DealProblemDealsReapportionDeliverer',
        'operationManage.dealProblemDeals.DPDealDetail'
    ],

    stores: [
        'DealProblemDeals',
        'ShopArea',
        'DealTasks',
        'Shopper',
        'Deliverer',
        'DealItems'
    ],

    models: [
        'DealProblemDeals',
        'ShopArea',
        'DealTasks',
        'Shopper',
        'Deliverer',
        'DealItems'
    ],

    refs: [{
        ref: 'dealProblemDealsList',
        selector: 'dealProblemDealsList',
        xtype: 'dealProblemDealsList',
        autoCreate: true
    }, {
        ref: 'shopArea',
        selector: '#shopArea',
    }, {
        ref: 'reapportion',
        selector: 'reapportion',
        xtype: 'reapportion',
        autoCreate: true
    }, {
        ref: 'reapportionDealTasksShopper',
        selector: 'reapportionDealTasksShopper',
        xtype: 'reapportionDealTasksShopper',
        autoCreate: true
    }, {
        ref: 'reapportionDealTasksDeliverer',
        selector: 'reapportionDealTasksDeliverer',
        xtype: 'reapportionDealTasksDeliverer',
        autoCreate: true
    }, {
        ref: 'dPDealDetail',
        selector: 'dPDealDetail',
        xtype: 'dPDealDetail',
        autoCreate: true
    }],

    init: function() {

        var me = this;
        this.control({

            'dealProblemDealsList #shopArea': {
                select: function(combo) {
                    var sstore = this.getDealProblemDealsStore();

                    sstore.load({
                        params: {
                            areaId: combo.getValue()
                        }
                    });
                    this.areaId = combo.getValue();

                },
            },
            //刷新按钮

            'dealProblemDealsList #update': {
                click: function() {

                    var me = this;
                    var store = this.getDealProblemDealsStore()

                    var shopAreaId = Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue();

                    if (shopAreaId) {
                        store.load({
                            params: {
                                areaId: shopAreaId
                            }
                        });
                    } else {
                        return;
                    }


                },
            },
            'dealProblemDealsList #refresh': {
                click: me.onRefresh

            },


            'dealProblemDealsList #cancellation': {
                click: me.onCancellation
            },

            'dealProblemDealsList #reapportion': {
                click: me.onReapportion
            },
            '#reapportionShopper': {
                click: me.onReapportionShopper
            },
            '#putReapportionShopper': {
                click: me.onPutReapportionShopper
            },
            "#reapportionDeliverer": {
                click: me.onReapportionDeliverer
            },
            'reapportionDealTasksDeliverer #putReapportionDeliverer': {
                click: me.onPutReapportionDeliverer
            },
            'dealProblemDealsList #dealDetail': {
                click: me.onDPDealDetail
            },
            'dealProblemDealsList #dealSearch': {
                click: me.onProblemDealsSearch
            },
            'dealProblemDealsList #autoAllocation':{
                click: me.onAutoAllocation
            }
        });
    },
    onAutoAllocation:function(view, rowIndex, colIndex, column, e) {
        var record = view.getRecord(view.findTargetByEvent(e));
        var shopperNamesLen = record.get('shopperNames');
        var me = this;
        var mark=0;
        for(var j=0;j<shopperNamesLen.length;j++){
            if(shopperNamesLen[j]!=null){
                mark=1;
                break;
            }
        }
        if(mark==1){
            return;
        }
       
        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定要对该'{0}'订单自动分配买手吗？", record.get('shortId')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/assignShopper', {
                        dealId:record.get('dealBackendId')
                    }, '分单', '分单成功', '分单失败', function(response) {

                        if (response.responseText == -2) {
                            Ext.MessageBox.show({
                                title: '订单自动分配',
                                msg: '有买手未上班，无法自动分配',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        } else if(response.responseText==1){
                            Ext.MessageBox.show({
                                title: '',
                                msg: '该订单自动分配成功',
                                icon: Ext.Msg.INFO,
                                buttons: Ext.Msg.OK
                            });

                            var sstore = me.getDealProblemDealsStore();
                            sstore.load({
                                params: {
                                    areaId: me.areaId
                                }
                            });
                        }
                    });
                }
            }
        );
    },
    onRefresh: function(view, e, eOpts) {
        var me = this;
        if (!view.isDisabled()) {
            //发送刷新请求
            var sstore = this.getDealProblemDealsStore();

            sstore.load({
                params: {
                    areaId: this.areaId
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

    onReapportion: function(view, rowIndex, colIndex, column, e) {
        var reapportion = view.getRecord(view.findTargetByEvent(e));
        var win = this.getReapportion();
        var shopperNamesLen = reapportion.get('shopperNames');
        var mark=0;
        for(var j=0;j<shopperNamesLen.length;j++){
            if(shopperNamesLen[j]!=null){
                mark=1;
                break;
            }
        }
        if(mark==0){
            return;
        }
        win.down('form').loadRecord(reapportion);
        win.show();
        var store = this.getDealTasksStore();
        this.reapportionDealId = reapportion.get('dealBackendId');
        console.log('所操作订单号：' + this.reapportionDealId);
        store.load({
            params: {
                dealId: this.reapportionDealId,
            },

            callback: function(records) {
                console.log(records);
                var model = Ext.ComponentQuery.query('#dealTasks')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    records[i].parentStore = reapportion;
                    model.select(index, true);
                }
            }
        });
    },

    onReapportionShopper: function(view, rowIndex, colIndex, column, e) {
        var reapportion = view.getRecord(view.findTargetByEvent(e));

        var win = this.getReapportionDealTasksShopper();
        win.down('form').loadRecord(reapportion);
        win.show();

        var store = this.getShopperStore();
        store.getProxy().extraParams = {};
        console.log(reapportion.get('shopId'));
        store.load({
            params: {
                shopId: reapportion.get('shopId'),
            },
            callback: function(records) {
                var model = Ext.ComponentQuery.query('#reapportionShoppers')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    records[i].parentStore = reapportion;
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },
    onPutReapportionShopper: function(view, rowIndex, colIndex, column, e) {
        var editWindow1 = this.getReapportionDealTasksShopper();
        var editWindow2 = this.getReapportion();

        var windowEl = editWindow1.getEl();
        var reapportionBuyerS = view.getRecord(view.findTargetByEvent(e));
        var uid = reapportionBuyerS.get('uid');
        var taskId = reapportionBuyerS.parentStore.get('taskId');
        var dealId = this.reapportionDealId;
        var me = this;

        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定该订单重新分配给'{0}'吗？", reapportionBuyerS.get('name')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/reAssignShopper', {
                        dealId: dealId,
                        taskId: taskId,
                        shopperId: uid
                    }, '分单', '分单成功', '分单失败', function(response) {

                        if (response.responseText != 1) {
                            Ext.MessageBox.show({
                                title: '订单重新分配失败',
                                msg: '订单重新分配失败',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            editWindow1.close();
                            editWindow2.close();
                        } else {
                            Ext.MessageBox.show({
                                title: '',
                                msg: '该订单重新分配成功',
                                icon: Ext.Msg.INFO,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            editWindow1.close();
                            editWindow2.close();
                            var sstore = me.getDealProblemDealsStore();
                            sstore.load({
                                params: {
                                    areaId: Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue()
                                }
                            });
                        }
                    });
                }
            }
        );

    },

    onReapportionDeliverer: function(view, rowIndex, colIndex, column, e) {
        var me = this;
        var reapportionDeliverer = Ext.ComponentQuery.query('#dealForm')[0].getRecord();

        var win = this.getReapportionDealTasksDeliverer();
        win.down('form').loadRecord(reapportionDeliverer);
        win.show();

        var store = this.getDelivererStore();
        console.log(reapportionDeliverer.get('zoneId'));
        store.load({
            params: {
                // deliveryZone: reapportionDeliverer.get('zoneId'),
                area: me.getDealProblemDealsList().down('#shopArea').getValue(),
                isForAssign: true
            },

            callback: function(records) {
                var model = Ext.ComponentQuery.query('#reapportionDeliverers')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    records[i].parentStore = reapportionDeliverer;
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },

    onPutReapportionDeliverer: function(view, rowIndex, colIndex, column, e) {
        var editWindow1 = this.getReapportionDealTasksDeliverer();
        var editWindow2 = this.getReapportion();

        var windowEl = editWindow1.getEl();
        var reapportionDeliverer = view.getRecord(view.findTargetByEvent(e));
        var uid = reapportionDeliverer.get('uid');
        var dealId = this.reapportionDealId;
        var me = this;
        console.log('分配配送员时的订单号：' + dealId);

        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定该订单重新分配给'{0}'吗？", reapportionDeliverer.get('name')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/assignDeliverer', {
                        dealId: dealId,
                        delivererId: uid
                    }, '分单', '分单成功', '分单失败', function(response) {
                        console.log();
                        if (response.responseText != 1) {
                            Ext.MessageBox.show({
                                title: '订单重新分配失败',
                                msg: '订单重新分配失败',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            editWindow1.close();
                            editWindow2.close();
                        } else {
                            Ext.MessageBox.show({
                                title: '',
                                msg: '该订单重新分配成功',
                                icon: Ext.Msg.INFO,
                                buttons: Ext.Msg.OK
                            });
                            windowEl.unmask();
                            editWindow1.close();
                            editWindow2.close();
                            var sstore = me.getDealProblemDealsStore();
                            sstore.load({
                                params: {
                                    areaId: Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue()
                                }
                            });
                        }
                    });
                }
            }
        );

    },

    onCancellation: function(view, rowIndex, colIndex, column, e) {
        var dealitem = view.getRecord(view.findTargetByEvent(e));
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
                                var sstore = me.getDealProblemDealsStore();
                                sstore.getProxy().extraParams = {
                                    areaId: me.areaId
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
    onDPDealDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDPDealDetail();
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
    onProblemDealsSearch: function(view, e, eOpts) {
        var me = this,
            keyWords = me.getDealProblemDealsList().down('#keyword').getValue(),
            store = this.getDealProblemDealsStore(),
            view = this.getDealProblemDealsList();
        var shopAreaId = Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue();
        if (keyWords == '') {
            if (shopAreaId) {
                store.getProxy().extraParams = {
                    areaId: shopAreaId
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
                    areaId: shopAreaId,
                    phoneOrDealId: keyWords
                }
            });
        }

    }
});