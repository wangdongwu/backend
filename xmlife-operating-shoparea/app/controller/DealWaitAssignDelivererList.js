Ext.define('XMLifeOperating.controller.DealWaitAssignDelivererList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealWaitAssignDeliverer.DealWaitAssignDelivererList',
            'operationManage.dealWaitAssignDeliverer.DWDealDetail',
            'operationManage.dealWaitAssignDeliverer.DealWaitReapportionDeliverer'
    ],

    stores: [
        'DealWaitAssignDeliverer',
        'ShopArea',
        'DealItems',
        'Deliverer',

    ],

    models: [
        'DealWaitAssignDeliverer',
        'ShopArea',
		'DealItems',
        'Deliverer',

    ],

    refs: [
    {
        ref: 'dealWaitAssignDelivererList',
        selector: 'dealWaitAssignDelivererList',
        xtype: 'dealWaitAssignDelivererList',
        autoCreate: true
    },
    {
        ref: 'shopArea',
        selector: '#shopArea',
    },
    {
        ref: 'dWDealDetail',
        selector: 'dWDealDetail',
        xtype: 'dWDealDetail',
        autoCreate: true
    },
    {
        ref: 'dealWaitReapportionDeliverer',
        selector: 'dealWaitReapportionDeliverer',
        xtype: 'dealWaitReapportionDeliverer',
        autoCreate: true
    }
    ],

    init: function() {

        var me = this;
        this.control({
            'dealWaitAssignDelivererList #shopArea': {
                select: function(combo) {
                    var sstore = this.getDealWaitAssignDelivererStore();

                    sstore.load({
                        params: {
                            shopArea: combo.getValue()
                        }
                    });
                    this.shopArea = combo.getValue();

                },
            },
            //刷新按钮
            'dealWaitAssignDelivererList #update': {
                click: function() {

                    var me = this;
                    var store = this.getDealWaitAssignDelivererStore()

                    var shopAreaId = Ext.getCmp('dealWaitAssignDelivererList').down('#shopArea').getValue();

                    if (shopAreaId) {
                        store.load({
                            params: {
                                shopArea: shopAreaId
                            }
                        });
                    } else {
                        return;
                    }


                },
            },
            'dealWaitAssignDelivererList #refresh': {
                click: me.onRefresh

            },

            'dealWaitReapportionDeliverer #putReapportionDeliverer': {
                click: me.onPutReapportionDeliverer
            },

            'dealWaitAssignDelivererList #reapportion': {
                click: me.onReapportionDeliverer
            },
           
            'dealWaitAssignDelivererList #dealDetail': {
                click: me.onDealDetail
            }
        });
    },
    onRefresh: function(view, e, eOpts) {
        var me = this;
        if (!view.isDisabled()) {
            //发送刷新请求
            var sstore = this.getDealWaitAssignDelivererStore();

            sstore.load({
                params: {
                    shopArea: this.shopArea
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

    onDealDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDWDealDetail();
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

    onReapportionDeliverer: function(view, rowIndex, colIndex, column, e) {
        var me = this;
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDealWaitReapportionDeliverer();
        win.down('form').loadRecord(dealDetail);
        win.show();
        this.reapportionDealId = dealDetail.get('dealBackendId');

        var store = this.getDelivererStore();

        store.load({
            params: {
                area: me.getDealWaitAssignDelivererList().down('#shopArea').getValue(),
                isForAssign: true
            },

            callback: function(records) {
                var model = Ext.ComponentQuery.query('#reapportionDeliverers')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    records[i].parentStore = dealDetail;
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },

    onPutReapportionDeliverer: function(view, rowIndex, colIndex, column, e) {
        var editWindow1 = this.getDealWaitReapportionDeliverer();
 
        var windowEl = editWindow1.getEl();
        var reapportionDeliverer = view.getRecord(view.findTargetByEvent(e));
        var uid = reapportionDeliverer.get('uid');
        var dealId = this.reapportionDealId;
        var me = this;
        console.log('分配配送员时的订单号：' + dealId);
        console.log('uid' + uid);

        Ext.MessageBox.confirm(
            '确认删除',
            Ext.String.format("确定该订单分配给'{0}'吗？", reapportionDeliverer.get('name')),
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
                         } else {
                            // Ext.MessageBox.show({
                            //     title: '',
                            //     msg: '该订单重新分配成功',
                            //     icon: Ext.Msg.INFO,
                            //     buttons: Ext.Msg.OK
                            // });
                            windowEl.unmask();
                            editWindow1.close();
                             var sstore = me.getDealWaitAssignDelivererStore();
                            sstore.load({
                                params: {
                                    shopArea: Ext.getCmp('dealWaitAssignDelivererList').down('#shopArea').getValue()
                                }
                            });
                        }
                    });
                }
            }
        );
    },
});