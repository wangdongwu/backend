Ext.define('XMLifeOperating.controller.DealShopAreaList', {
    extend: 'Ext.app.Controller',

    views: [
        'operationManage.dealShopArea.DealShopAreaList'
    ],

    stores: [
        'DealShopArea',
        'ShopArea'
    ],

    models: [
        'DealShopArea',
        'ShopArea'
    ],

    refs: [{
        ref: 'shopArea',
        selector: '#shopArea',
    }, {
        ref: 'dealShopAreaList',
        selector: 'dealShopAreaList'
    }],

    init: function() {
        var me = this;

        this.control({
            'dealShopAreaList #shopArea': {
                select: function(combo) {
                    var store = this.getDealShopAreaStore();
                    store.load({
                        params: {
                            city: XMLifeOperating.generic.Global.currentCity,
                            shopArea: combo.getValue()
                        }
                    });
                    this.areaId = combo.getValue();
                },
            },
            'dealShopAreaList #arrivalOnCenter': {
                click: function(component, column, rowIndex, colIndex, e) {
                    var dealShopArea = component.getRecord(component.findTargetByEvent(e));
                    if (dealShopArea.get('status') != 2) {
                        return;
                    }

                    Ext.MessageBox.confirm("选择框", "您确定您的操作么", function(str) {
                        if (str == 'yes') {
                            var url = 'deal/reachShopArea/' + dealShopArea.get('taskId');
                            sendPutRequest(url, {
                                dealId: dealShopArea.get('dealBackendId')
                            }, '', '', '', function(str) {
                                if (str.responseText != 0) {

                                    return;
                                }
                                var sstore = me.getDealShopAreaStore();
                                sstore.load({
                                    params: {
                                        city: XMLifeOperating.generic.Global.currentCity,
                                        shopArea: me.areaId
                                    }
                                });
                            }, function(str) {

                            });
                        }

                    });
                }
            },
            'dealShopAreaList #dealDetail': {
                click: function() {
                    // 这里引用了订单管理的control方法
                    var ctrlDealList = this.getController('DealList');
                    ctrlDealList.onDealDetail.apply(ctrlDealList, arguments);
                }
            },
            'dealShopAreaList #refresh': {
                click: me.onRefresh
            },
            'dealShopAreaList #dealSearch': {
                click: me.onShopAreaSearch
            }

        });

    },
    onRefresh: function(view, e, eOpts) {
        var me = this;
        if (!view.isDisabled()) {
            //发送刷新请求
            var store = this.getDealShopAreaStore();
            store.load({
                params: {
                    city: XMLifeOperating.generic.Global.currentCity,
                    shopArea: this.areaId
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
    onShopAreaSearch: function(view, e, eOpts) {
        var me = this,
            keyWords = me.getDealShopAreaList().down('#keyword').getValue(),
            store = this.getDealShopAreaStore(),
            view = this.getDealShopAreaList();
        var shopAreaId = Ext.getCmp('dealShopAreaList').down('#shopArea').getValue();
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

    }
});
