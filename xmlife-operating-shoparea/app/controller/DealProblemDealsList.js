Ext.define('XMLifeOperating.controller.DealProblemDealsList', {
    extend: 'Ext.app.Controller',
    views: ['operationManage.dealProblemDeals.DealProblemDealsList',
        'operationManage.dealProblemDeals.DealProblemDealsReapportion',
        'operationManage.dealProblemDeals.DealProblemDealsReapportionShopper',
        // 'operationManage.dealProblemDeals.DealProblemDealsReapportionDeliverer',
        'operationManage.dealProblemDeals.DPDealDetail'
    ],
    stores: [
        'DealProblemDeals',
        'DealTasks',
        'SuperShopper',
        // 'Deliverer',
        'DealItems'
    ],
    models: [
        'DealProblemDeals',
        'DealTasks',
        'SuperShopper',
        // 'Deliverer',
        'DealItems'
    ],
    refs: [{
        ref: 'dealProblemDealsList',
        selector: 'dealProblemDealsList'
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
            // }, {
            //     ref: 'reapportionDealTasksDeliverer',
            //     selector: 'reapportionDealTasksDeliverer',
            //     xtype: 'reapportionDealTasksDeliverer',
            //     autoCreate: true
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
                }
            },
            //刷新按钮
            'dealProblemDealsList #update': {
                click: function() {

                    var store = this.getDealProblemDealsStore();
                    var shopAreaId = this.up('dealProblemDealsList').down('#shopArea').getValue();

                    if (shopAreaId) {
                        store.load({
                            params: {
                                areaId: shopAreaId
                            }
                        });
                    } else {
                        return;
                    }
                }
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
            'reapportion #reapportionShopper': {
                click: me.onReapportionShopper
            },
            'reapportionDealTasksShopper #putReapportionShopper': {
                click: me.onPutReapportionShopper
            },
            // "reapportion #reapportionDeliverer": {
            //     click: me.onReapportionDeliverer
            // },
            // 'reapportionDealTasksDeliverer #putReapportionDeliverer': {
            //     click: me.onPutReapportionDeliverer
            // },
            'dealProblemDealsList #dealDetail': {
                click: me.onDPDealDetail
            },
            'dealProblemDealsList #dealSearch': {
                click: me.onProblemDealsSearch
            },
            'dealProblemDealsList #customerDetail': {
                click: function() {
                    var controllerDealList = this.getController('DealList');
                    controllerDealList.onCustomerDetail.apply(controllerDealList, arguments);
                }
            }
        });
    },
    onRefresh: function(view) {
        if (view.isDisabled()) {
            return;
        }
        //发送刷新请求
        var sstore = this.getDealProblemDealsStore();

        sstore.load({
            params: {
                areaId: this.areaId
            }
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
    onAutoAllocation: function() {
        var me = this,
            dealId = me.reapportionDealId;
        Ext.MessageBox.confirm(
            '确认自动分配',
            Ext.String.format("确定要对该'{0}'订单自动分配买手吗？", dealId),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/reAssignSuperShopper', {
                        dealId: dealId
                    }, '自动分配', '自动分配成功', '自动分配失败', function(response) {
                        if (response.responseText == -2) {
                            Ext.MessageBox.show({
                                title: '订单自动分配',
                                msg: '有买手未上班，无法自动分配',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        } else if (response.responseText == 1) {
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
    onReapportion: function(view, rowIndex, colIndex, column, e) {
        var reapportion = view.getRecord(view.findTargetByEvent(e));
        this.reapportionDealId = reapportion.get('dealBackendId');

        if (!reapportion.get('superShopperName')) {
            return this.onAutoAllocation();
        }

        var win = this.getReapportion();
        win.down('form').loadRecord(reapportion);
        win.show();
        var store = this.getDealTasksStore();

        store.load({
            params: {
                dealId: this.reapportionDealId,
            },

            callback: function(records) {
                var model = win.down('#dealTasks').getSelectionModel();
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
        if (!reapportion.get('shopperName')) {
            return;
        }

        var win = this.getReapportionDealTasksShopper();
        win.down('form').loadRecord(reapportion);
        win.show();

        var store = this.getSuperShopperStore();
        store.getProxy().extraParams = {};

        store.load({
            params: {
                shopId: reapportion.get('shopId'),
            },
            callback: function(records) {
                var model = win.down('#reapportionShoppers').getSelectionModel();
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
        var reapportionBuyerS = view.getRecord(view.findTargetByEvent(e));
        if (!reapportionBuyerS.get('online')) {
            return;
        }

        var editWindow1 = this.getReapportionDealTasksShopper();
        var editWindow2 = this.getReapportion();

        var windowEl = editWindow1.getEl();
        var uid = reapportionBuyerS.get('uid');
        var taskId = reapportionBuyerS.parentStore.get('taskId');
        var dealId = this.reapportionDealId;
        var me = this;

        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定该订单重新分配给'{0}'吗？", reapportionBuyerS.get('name')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/reAssignSuperShopper', {
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

    // onReapportionDeliverer: function(view, rowIndex, colIndex, column, e) {
    //     var me = this;
    //     var reapportionDeliverer = view.up('#dealForm').getRecord();
    //     var win = this.getReapportionDealTasksDeliverer();
    //     win.down('form').loadRecord(reapportionDeliverer);
    //     var store = this.getDelivererStore();

    //     store.load({
    //         params: {
    //             area: me.getDealProblemDealsList().down('#shopArea').getValue(),
    //             isForAssign: true
    //         },

    //         callback: function(records) {
    //             var model = win.down('#reapportionDeliverers').getSelectionModel();
    //             model.deselectAll();
    //             for (var i = 0; i < records.length; i++) {
    //                 records[i].parentStore = reapportionDeliverer;
    //                 var index = store.indexOfId(records[i].get('id'));
    //                 model.select(index, true);
    //             }
    //         }
    //     });
    //     win.show();
    // },
    // onPutReapportionDeliverer: function(view, rowIndex, colIndex, column, e) {
    //     var editWindow1 = this.getReapportionDealTasksDeliverer();
    //     var editWindow2 = this.getReapportion();

    //     var windowEl = editWindow1.getEl();
    //     var reapportionDeliverer = view.getRecord(view.findTargetByEvent(e));
    //     var uid = reapportionDeliverer.get('uid');
    //     var dealId = this.reapportionDealId;
    //     var me = this;


    //     Ext.MessageBox.confirm(
    //         '确认删除',
    //         Ext.String.format("确定该订单重新分配给'{0}'吗？", reapportionDeliverer.get('name')),
    //         function(result) {
    //             if (result == 'yes') {
    //                 sendPutRequest('deal/assignDeliverer', {
    //                     dealId: dealId,
    //                     delivererId: uid
    //                 }, '分单', '分单成功', '分单失败', function(response) {

    //                     if (response.responseText != 1) {
    //                         Ext.MessageBox.show({
    //                             title: '订单重新分配失败',
    //                             msg: '订单重新分配失败',
    //                             icon: Ext.Msg.ERROR,
    //                             buttons: Ext.Msg.OK
    //                         });
    //                         windowEl.unmask();
    //                         editWindow1.close();
    //                         editWindow2.close();
    //                     } else {
    //                         Ext.MessageBox.show({
    //                             title: '',
    //                             msg: '该订单重新分配成功',
    //                             icon: Ext.Msg.INFO,
    //                             buttons: Ext.Msg.OK
    //                         });
    //                         windowEl.unmask();
    //                         editWindow1.close();
    //                         editWindow2.close();
    //                         var sstore = me.getDealProblemDealsStore();
    //                         sstore.load({
    //                             params: {
    //                                 areaId: Ext.getCmp('dealProblemDealsList').down('#shopArea').getValue()
    //                             }
    //                         });
    //                     }
    //                 });
    //             }
    //         }
    //     );
    // },
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
                                };
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
        var record = view.getRecord(view.findTargetByEvent(e)),
            win = this.getDPDealDetail(),
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
    onProblemDealsSearch: function(view) {
        var list = view.up('dealProblemDealsList'),
            keyWords = list.down('#keyword').getValue(),
            store = this.getDealProblemDealsStore(),
            shopAreaId = list.down('#shopArea').getValue();

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
