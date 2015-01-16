Ext.define('XMLifeOperating.controller.DealWaitAssignShopperList', {
    extend: 'Ext.app.Controller',

    views: ['operationManage.dealWaitAssignShopper.DealWaitAssignShopperList',
        'operationManage.dealWaitAssignShopper.DWSDealDetail'
    ],

    stores: ['DealWaitAssignShopper', 'DealItems'],

    models: ['DealWaitAssignShopper', 'DealItems'],

    // 注意到这个control引用的component也有可能定义在commonDealList里。
    refs: [{
        ref: 'dealWaitAssignShopperList',
        selector: 'dealwaitassignshopperlist'
    }, {
        ref: 'dWSDealDetail',
        selector: 'dWSDealDetail',
        xtype: 'dWSDealDetail',
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
                    };
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
            'dealwaitassignshopperlist #dealSearch': {
                click: me.onWaitAssignShopperSearch
            },
            'dealwaitassignshopperlist #dealDetail': {
                click: me.onDealDetail
            },
            'dealwaitassignshopperlist #customerDetail': {
                click: function() {
                    var controllerDealList = this.getController('DealList');
                    controllerDealList.onCustomerDetail.apply(controllerDealList, arguments);
                }
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
        if (view.isDisabled()) {
            return;
        }
        //发送刷新请求
        var sstore = this.getDealWaitAssignShopperStore();

        sstore.getProxy().extraParams = {
            shopArea: this.areaId
        };
        sstore.loadPage(1, {
            params: {
                start: 0,
                limit: 25,
                page: 1
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
    onWaitAssignShopperSearch: function() {
        var me = this,
            view = this.getDealWaitAssignShopperList(),
            keyWords = view.down('#keyword').getValue(),
            shopAreaId = view.down('#shopArea').getValue(),
            store = this.getDealWaitAssignShopperStore();
        if (Ext.isEmpty(keyWords)) {
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
        var record = view.getRecord(view.findTargetByEvent(e)),
            win = this.getDWSDealDetail(),
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
                deal: record.get('dealBackendId')
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
    onOneKeyDistribute: function() {
        var me = this;
        var areaId = me.areaId;
        var success = function() {
            var sstore = me.getDealWaitAssignShopperStore();
            sstore.getProxy().extraParams = {
                shopArea: areaId
            };
            sstore.loadPage(1, {
                params: {
                    start: 0,
                    limit: 25,
                    page: 1
                }
            });
        };
        var failure = function(response) {
            Ext.MessageBox.show({
                title: '一键分配失败',
                msg: '服务器返回了错误:<br />' + (response.responseText || response.statusText),
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        };
        sendPutRequest('deal/oneKeyAssignShopper', {shopArea: areaId}, '一键分配', '一键分配成功', '一键分配失败', success, failure);
    }
});
