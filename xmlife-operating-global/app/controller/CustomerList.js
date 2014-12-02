Ext.define('XMLifeOperating.controller.CustomerList', {
    extend: 'Ext.app.Controller',
    views: ['userManage.customer.CustomerList',
        'userManage.customer.CustomerAddress',
        'userManage.customer.CustomerDealList',
        'userManage.customer.CustomerConsumePayList',
        'userManage.customer.CustomerCouponList'
    ],

    stores: ['Customer', 'ShopArea', 'Address', 'Deal', 'DealCustomerHistory', 'CustomerUserCashflow', 'CustomerUserCoupon'],

    models: ['Customer', 'ShopArea', 'Address', 'Deal', 'DealCustomerHistory', 'CustomerUserCashflow', 'CustomerUserCoupon'],

    refs: [{
        ref: 'shopAreac',
        selector: '#shopAreac',
    }, {
        ref: 'keywordc',
        selector: '#keywordc',
    }, {
        ref: 'customerTitle',
        selector: '#customerTitle',
    }, {
        ref: 'customerAddress',
        selector: 'customerAddress',
        xtype: 'customerAddress',
        autoCreate: true
    }, {
        ref: 'CustomerDealList',
        selector: 'CustomerDealList',
        xtype: 'CustomerDealList',
        autoCreate: true
    }, {
        ref: 'CustomerList',
        selector: 'CustomerList',
        xtype: 'CustomerList',
        autoCreate: true
    }, {
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel'
    }, {
        ref: 'customerCouponList',
        selector: 'customerCouponList',
        xtype: 'customerCouponList',
        autoCreate: true
    }, {
        ref: 'customerConsumePayList',
        selector: 'customerConsumePayList',
        xtype: 'customerConsumePayList',
        autoCreate: true
    }],

    init: function() {

        var me = this;
        this.control({

            '#shopAreac': {
                select: function(combo) {
                    var store = this.getCustomerStore();
                    me.shopArea = combo.getValue();
                    store.getProxy().extraParams = {
                        shopArea: me.shopArea
                    };
                    store.loadPage(1);
                },
            },

            '#customerSearch': {
                click: function() {
                    var type = this.getCustomerList().down('#statusUidOrMobile').getValue(),
                        store = this.getCustomerStore(),
                        params = {
                            uid: me.getKeywordc().getValue()
                        };
                    if (type == 'mobile') {
                        params = {
                            nameOrPhone: me.getKeywordc().getValue()
                        };
                    }
                    store.getProxy().extraParams = params;
                    store.loadPage(1);
                }
            },

            '#returnCustomerList': {
                click: function() {
                    var tab = me.getCustomerList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            },

            '#customerTitle': {
                click: function() {
                    var store = this.getCustomerStore();
                    store.getProxy().extraParams = {
                        enable: false
                    };
                    store.loadPage(1);
                }
            },

            '#addressCustomer': {
                click: me.onAddressCustomer
            },

            '#orderHistory': {
                click: me.onOrderHistory
            },

            'CustomerList #operationc': {
                click: me.onOperationc
            },

            'CustomerList #consumePayListId': {
                click: me.onConsumePayListId
            },

            'CustomerList #couponListId': {
                click: me.onCouponListId
            },

        });
    },

    onAddressCustomer: function(view, rowIndex, colIndex, column, e) {
        var self = this,
            customerDetail = view.getRecord(view.findTargetByEvent(e)),
            uid = customerDetail.get('uid'),
            store = self.getAddressStore(),
            win = self.getCustomerAddress();
        store.on('load', function(store, addressList) {
            win.show();
        });
        store.load({
            params: {
                customer: uid
            },
        });
    },

    onOrderHistory: function(view, rowIndex, colIndex, column, e) {
        var self = this,
            customerDetail = view.getRecord(view.findTargetByEvent(e)),
            uid = customerDetail.get('uid'),
            store = self.getDealCustomerHistoryStore(),
            win = self.getCustomerDealList(),
            content = self.getContentPanel(),
            oldProxyUrl = store.getProxy().url;

        win.setTitle('用户详细信息—' + customerDetail.get('phone'));
        if (!content.items.get(win.getId())) {
            content.add(win);
        }
        content.setActiveTab(win.getId());

        store.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'deal/customerHistory';
        store.on('load', function() {
            store.getProxy().url = oldProxyUrl;
        });
        store.load({
            params: {
                customer: uid,
                assignShopper: true
            }
        });
    },

    onOperationc: function(view, rowIndex, colIndex, column, e) {
        var customerDetail = view.getRecord(view.findTargetByEvent(e)),
            uid = customerDetail.get('uid'),
            enable = customerDetail.get('enable'),
            me = this,
            url = 'customer/enable/' + uid,
            str = '确认要此操作吗？';
        if (enable == true) {
            str = '确认要封号吗？';
            enable = false;
        } else {
            str = '确认要解封?';
            enable = true;
        }
        Ext.MessageBox.confirm("选择框", str, function(str) {
            if (str != 'yes') {
                return;
            }
            sendPutRequest(url, {
                enable: enable
            }, '操作封号或解封', '成功操作用户', '操作用户失败', function() {
                var store = me.getCustomerStore();
                store.getProxy().extraParams = {
                    shopArea: Ext.getCmp('CustomerList').down('#shopAreac').getValue(),
                    nameOrPhone: me.getKeywordc().getValue()
                };
                store.loadPage(1);
            });
        });
    },

    onConsumePayListId: function(view, rowIndex, colIndex, column, e) {
        var self = this,
            customerDetail = view.getRecord(view.findTargetByEvent(e)),
            uid = customerDetail.get('uid'),
            store = self.getCustomerUserCashflowStore(),
            win = self.getCustomerConsumePayList(),
            content = self.getContentPanel(),
            oldProxyUrl = store.getProxy().url;
        win.setTitle('充值和消费—' + customerDetail.get('phone'));
        if (!content.items.get(win.getId())) {
            content.add(win);
        }
        content.setActiveTab(win.getId());
        store.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'customer/user/cashflow';
        store.on('load', function() {
            store.getProxy().url = oldProxyUrl;
        })
        store.load({
            params: {
                uid: uid
            }
        });
    },

    onCouponListId: function(view, rowIndex, colIndex, column, e) {
        var self = this,
            customerDetail = view.getRecord(view.findTargetByEvent(e)),
            uid = customerDetail.get('uid'),
            store = self.getCustomerUserCouponStore(),
            win = self.getCustomerCouponList(),
            content = self.getContentPanel(),
            oldProxyUrl = store.getProxy().url;
        win.setTitle('优惠券—' + customerDetail.get('phone'));
        if (!content.items.get(win.getId())) {
            content.add(win);
        }
        content.setActiveTab(win.getId());
        store.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'customer/user/coupon';
        store.on('load', function() {
            store.getProxy().url = oldProxyUrl;
        })
        store.load({
            params: {
                uid: uid
            }
        });
    },

});
