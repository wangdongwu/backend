Ext.define('XMLifeOperating.controller.DealWaitAssignShopperList', {
    extend: 'Ext.app.Controller',
    statics: {
        // 指定store读取一页时的参数
        PARAM_1PAGE: {
            start: 0,
            limit: 25,
            page: 1
        }
    },

    views: ['operationManage.dealWaitAssignShopper.DealWaitAssignShopperList'],

    stores: ['DealWaitAssignShopper'],

    models: ['DealWaitAssignShopper'],

    // 注意到这个control引用的component也有可能定义在commonDealList里。
    refs: [{
        ref: 'dealWaitAssignShopperList',
        selector: 'dealwaitassignshopperlist'
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
                        params: me.self.PARAM_1PAGE
                    });
                    this.areaId = combo.getValue();
                }
            },
            'dealwaitassignshopperlist #dealSearch': {
                click: me.onWaitAssignShopperSearch
            },
            'dealwaitassignshopperlist #dealDetail': {
                click: function() {
                    // 这里引用了订单管理的control方法
                    var ctrlDealList = this.getController('DealList');
                    ctrlDealList.onDealDetail.apply(ctrlDealList, arguments);
                }
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
            params: this.self.PARAM_1PAGE
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
                    params: me.self.PARAM_1PAGE
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
    onOneKeyDistribute: function() {
        var me = this;
        var areaId = me.areaId;
        var success = function() {
            var sstore = me.getDealWaitAssignShopperStore();
            sstore.getProxy().extraParams = {
                shopArea: areaId
            };
            sstore.loadPage(1, {
                params: me.self.PARAM_1PAGE
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
        sendPutRequest('deal/oneKeyAssignSuperShopper', {
            shopArea: areaId
        }, '一键分配', '一键分配成功', '一键分配失败', success, failure);
    }
});
