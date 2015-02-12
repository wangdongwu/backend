Ext.define('XMLifeOperating.controller.DealProblemDealsList', {
    extend: 'Ext.app.Controller',
    statics: {
        getProblemDesc: function(code) {
            switch (code) {
                case 1:
                    return '分配失败';
                case 2:
                    return '超时，未打开';
                case 3:
                    return '超时，未购买完成';
                case 4:
                    return '超时，未送达';
                case 5:
                    return '人工置为问题单';
                case 6:
                    return '支付异常';
                default:
                    return '未定义原因';
            }
        }
    },
    views: ['operationManage.dealProblemDeals.DealProblemDealsList',
        'operationManage.dealProblemDeals.DealProblemDealsReapportion',
        'operationManage.dealProblemDeals.DealProblemDealsReapportionShopper'
    ],
    stores: [
        'DealProblemDeals',
        'DealTasks',
        'SuperShopper'
    ],
    models: [
        'DealProblemDeals',
        'DealTasks',
        'SuperShopper',
        'DealWaitAssignShopper'
    ],
    refs: [{
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel',
        autoCreate: true
    }, {
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
    }],
    init: function() {
        var me = this;

        this.control({
            'dealProblemDealsList #shopArea': {
                select: function(combo) {
                    var sstore = me.getDealProblemDealsStore(),
                        areaId = combo.getValue();

                    sstore.load({
                        params: {
                            areaId: areaId
                        }
                    });
                    me.areaId = areaId;
                }
            },
            //刷新按钮
            'dealProblemDealsList #update': {
                click: function() {
                    var store = me.getDealProblemDealsStore();
                    var shopAreaId = me.getDealProblemDealsList().down('#shopArea').getValue();

                    if (shopAreaId) {
                        store.load({
                            params: {
                                areaId: shopAreaId
                            }
                        });
                    }
                }
            },
            'dealProblemDealsList #refresh': {
                click: me.onRefresh
            },
            'dealProblemDealsList #cancellation': {
                click: me.onCancellation
            },
            'dealProblemDealsList #superShopperName': {
                click: me.onAutoAllocation
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
                click: function() {
                    // 这里引用了订单管理的control方法
                    var ctrlDealList = me.getController('DealList');

                    ctrlDealList.onDealDetail.apply(ctrlDealList, arguments);
                }
            },
            'dealProblemDealsList #dealSearch': {
                click: me.onProblemDealsSearch
            },
            'dealProblemDealsList #customerDetail': {
                click: function() {
                    // 这里引用了订单管理的control方法
                    var controllerDealList = me.getController('DealList');

                    controllerDealList.onCustomerDetail.apply(controllerDealList, arguments);
                }
            },
            'dealProblemDealsList #recheckPayment': {
                click: me.onRecheckPayment
            },
            'dealProblemDealsList #getProblemDealListByDate': {
                click: function() {
                    var problemDealList = me.getDealProblemDealsList(),
                        beginTime = problemDealList.down('[name=beginTime]').rawValue,
                        endTime = problemDealList.down('[name=endTime]').rawValue,
                        sstore = me.getDealProblemDealsStore();

                    sstore.getProxy().extraParams = {
                        areaId: me.areaId,
                        beginTime: beginTime,
                        endTime: endTime
                    };
                    sstore.loadPage(1);
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
                setTimeout(function() {
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
    onAutoAllocation: function(view, cellEl, rowIndex, colIndex, e, record) {
        // 如果有买手分配，则显示买手详情
        if (record.get('superShopperName')) {
            // 这里引用了订单管理的control方法
            var ctrlDealList = this.getController('DealList');

            ctrlDealList.onSuperShopperDetail.apply(ctrlDealList, arguments);
            return;
        }

        var me = this,
            dealId = record.get('dealBackendId');

        Ext.MessageBox.confirm(
            '确认自动分配',
            Ext.String.format("确定要对该'{0}'订单自动分配买手吗？", dealId),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/assignSuperShopper', {
                        dealId: dealId
                    }, '自动分配', '自动分配成功', '自动分配失败', function(response) {
                        if (response.responseText != 1) {
                            Ext.MessageBox.show({
                                title: '订单自动分配',
                                msg: '订单自动分配失败',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        } else {
                            Ext.MessageBox.show({
                                title: '',
                                msg: '订单自动分配成功',
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
    onReapportion: function(view, cellEl, rowIndex, colIndex, e, record) {
        var dealId = record.get('dealBackendId');
        var win = this.getReapportion();

        win.reapportionDealId = dealId;
        // 服务器端在deal/tasks接口中传人problem字段有困难，这里将“问题类型“描述绑定在”重新分配“窗口上供其子控件访问。
        win.problemText = this.self.getProblemDesc(record.get('problem'));
        win.down('form').loadRecord(record);
        win.show();

        var store = this.getDealTasksStore();
        store.load({
            params: {
                dealId: dealId
            },

            callback: function(records) {
                var model = win.down('#dealTasks').getSelectionModel();

                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },
    onReapportionShopper: function(view, cellEl, rowIndex, colIndex, e, record) {

        var win = this.getReapportionDealTasksShopper();

        // 将taskId和dealId传递给最终的表单
        win.taskId = record.get('taskId');
        win.reapportionDealId = view.up('window').reapportionDealId;
        win.down('form').loadRecord(record);
        win.show();

        var store = this.getSuperShopperStore();

        store.getProxy().extraParams = {};
        store.load({
            params: {
                shopId: record.get('shopId')
            },
            callback: function(records) {
                var model = win.down('#reapportionShoppers').getSelectionModel();

                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },
    onPutReapportionShopper: function(view, cellEl, rowIndex, colIndex, e, record) {
        if (!record.get('online')) {
            return;
        }

        var uid = record.get('uid');
        var me = this,
            win = view.up('window'),
            localPage = this.getContentPanel().child().xtype;

        Ext.MessageBox.confirm(
            '确认订单重新分配',
            Ext.String.format("确定该订单重新分配给'{0}'吗？", record.get('name')),
            function(result) {
                if (result == 'yes') {
                    sendPutRequest('deal/reAssignSuperShopper', {
                        dealId: win.reapportionDealId,
                        taskId: win.taskId,
                        superShopperId: uid
                    }, '分单', '分单成功', '分单失败', function(response) {

                        if (response.responseText != 1) {
                            Ext.MessageBox.show({
                                title: '订单重新分配失败',
                                msg: '订单重新分配失败',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        } else {
                            Ext.MessageBox.show({
                                title: '',
                                msg: '该订单重新分配成功',
                                icon: Ext.Msg.INFO,
                                buttons: Ext.Msg.OK
                            });
                            var store, areaId;
                            if (localPage == 'dealwaitassignshopperlist') {
                                store = me.getController('DealWaitAssignShopperList').getDealWaitAssignShopperStore();

                                areaId = me.getController('DealWaitAssignShopperList').getDealWaitAssignShopperList().down('#shopArea').getValue();
                            } else {
                                store = me.getDealProblemDealsStore();

                                areaId = me.getDealProblemDealsList().down('#shopArea').getValue();
                            }
                            store.load({
                                params: {
                                    areaId: areaId
                                }
                            });
                        }
                        me.getReapportionDealTasksShopper().getEl().unmask();
                        me.getReapportionDealTasksShopper().close();
                        me.getReapportion().close();
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
    onCancellation: function(view, cellEl, rowIndex, colIndex, e, record) {
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
    },
    onRecheckPayment: function(view, cellEl, rowIndex, colIndex, e, record) {
        var anchorEl = cellEl.getElementsByTagName('a')[0];

        // 10 － 等待支付确认
        if (record.get('status') !== 10 || !anchorEl) {
            return;
        }

        var me = this,
            dealId = record.get('dealBackendId'),
            textContainerEl = anchorEl.parentNode,
            countDownTimer,
            countDownFn = function(time) {
                if (time > 0) {
                    textContainerEl.innerHTML = '<span style="color:grey">' + time + 's</span>';
                    countDownTimer = setTimeout(function() {
                        countDownFn(time - 1);
                    }, 1000);
                } else {
                    textContainerEl.innerHTML = '<a href="javascript:;">重新确认</a>';
                }
            };

        Ext.Ajax.request({
            url: XMLifeOperating.generic.Global.URL.biz + 'deal/manualCheckPayment',
            params: {
                dealId: dealId
            },
            method: 'POST',
            callback: function(options, success, response) {
                var error = requestException(response),
                    statusUpdated = success && response.responseText === '0';

                Ext.MessageBox.show({
                    title: error.title || '支付状态确认',
                    msg: statusUpdated ? '确认为支付成功，该订单将转入正常单' : error.msg || '仍未确认成功支付，请稍后再试',
                    icon: error.msg ? Ext.Msg.ERROR : Ext.Msg.INFO,
                    buttons: Ext.Msg.OK
                });

                if (statusUpdated) {
                    clearTimeout(countDownTimer);
                    me.getDealProblemDealsStore().load({
                        params: {
                            areaId: me.areaId
                        }
                    });
                }
            }
        });
        countDownFn(10);
    }
});
