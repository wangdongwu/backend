Ext.define('XMLifeOperating.controller.CustomerList', {
    extend: 'Ext.app.Controller',
    views: ['userManage.customer.CustomerList',
        'userManage.customer.CustomerAddress',
        'userManage.customer.CustomerDealList',
        'userManage.customer.CustomerConsumePayList',
        'userManage.customer.CustomerCouponList'
    ],

    stores: ['Customer', 'ShopArea', 'Address', 'DealCustomerHistory', 'CustomerUserCashflow', 'CustomerUserCoupon'],

    models: ['Customer', 'ShopArea', 'Address', 'DealCustomerHistory', 'CustomerUserCashflow', 'CustomerUserCoupon'],

    refs: [{
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
            'CustomerList': {
                added: me.onShow
            },
            'CustomerList #shopAreac': {
                select: function(combo) {
                    var store = me.getCustomerStore();

                    me.shopArea = combo.getValue();
                    store.getProxy().extraParams = {
                        shopArea: me.shopArea
                    };
                    store.loadPage(1);
                },
            },
            'CustomerList #customerSearch': {
                click: function() {
                    var customerList = me.getCustomerList(),
                        keyword = customerList.down('#keywordc').getValue(),
                        type = customerList.down('#statusUidOrMobile').getValue(),
                        store = me.getCustomerStore(),
                        params = {
                            uid: keyword
                        };

                    if (type == 'mobile') {
                        params = {
                            nameOrPhone: keyword
                        };
                    }
                    store.getProxy().extraParams = params;
                    store.loadPage(1);
                }
            },
            'CustomerCouponList #returnCustomerList': {
                click: function() {
                    var tab = me.getCustomerList();
                    var content = me.getContentPanel();

                    content.removeAll(false);
                    content.add(tab);
                }
            },
            'CustomerList #customerTitle': {
                click: function() {
                    var store = me.getCustomerStore();

                    store.getProxy().extraParams = {
                        enable: false
                    };
                    store.loadPage(1);
                }
            },
            'CustomerList #addressCustomer': {
                click: me.onAddressCustomer
            },
            'CustomerList #orderHistory': {
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
            'CustomerDealList #dealDetail': {
                click: function() {
                    // 这里引用了订单管理的control方法
                    var ctrlGDealList = this.getController('GDealList');
                    ctrlGDealList.onDealDetail.apply(ctrlGDealList, arguments);
                }
            },
            'CustomerDealList #superShopperName': {
                click: function() {
                    // 这里引用了订单管理的control方法
                    var ctrlGDealList = this.getController('GDealList');
                    ctrlGDealList.onSuperShopperDetail.apply(ctrlGDealList, arguments);
                }
            }
        });
    },
    onShow: function() {
        var store = this.getCustomerStore();
        store.removeAll();
    },
    onAddressCustomer: function(view, cellEl, rowIndex, colIndex, e, record) {
        var me = this,
            uid = record.get('uid'),
            store = me.getAddressStore(),
            win = me.getCustomerAddress();

        store.on('load', function(store, addressList) {
            win.show();
        });
        store.load({
            params: {
                customer: uid
            },
        });
    },
    onOrderHistory: function(view, cellEl, rowIndex, colIndex, e, record) {
        var me = this,
            uid = record.get('uid'),
            store = me.getDealCustomerHistoryStore(),
            win = me.getCustomerDealList(),
            content = me.getContentPanel(),
            oldProxyUrl = store.getProxy().url;

        win.setTitle('用户详细信息—' + record.get('phone'));
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

    onOperationc: function(view, cellEl, rowIndex, colIndex, e, record) {
        var uid = record.get('uid'),
            currentEnabled = record.get('enable'),
            me = this,
            url = 'customer/enable/' + uid,
            str = currentEnabled ? '确认要封号吗？' : '确认要解封?';

        Ext.MessageBox.confirm("选择框", str, function(btnId) {
            if (btnId != 'yes') {
                return;
            }
            sendPutRequest(url, {
                enable: !currentEnabled
            }, '操作封号或解封', '成功操作用户', '操作用户失败', function() {
                var customerList = me.getCustomerList(),
                    store = me.getCustomerStore();
                store.getProxy().extraParams = {
                    shopArea: customerList.down('#shopAreac').getValue(),
                    nameOrPhone: customerList.down('#keywordc').getValue()
                };
                store.loadPage(1);
            });
        });
    },

    onConsumePayListId: function(view, cellEl, rowIndex, colIndex, e, record) {
        var me = this,
            uid = record.get('uid'),
            store = me.getCustomerUserCashflowStore(),
            win = me.getCustomerConsumePayList(),
            content = me.getContentPanel(),
            oldProxyUrl = store.getProxy().url;

        win.setTitle('充值和消费—' + record.get('phone'));
        if (!content.items.get(win.getId())) {
            content.add(win);
        }
        content.setActiveTab(win.getId());
        store.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'customer/user/cashflow';
        store.on('load', function() {
            store.getProxy().url = oldProxyUrl;
        });

        store.load({
            params: {
                uid: uid
            }
        });
        // 这两个是CustomerConsumePayList的全局变量，下次优化的时候至少改成view的statics。
        consumePayCount = 1;
        consumePayMark = '';
    },

    onCouponListId: function(view, cellEl, rowIndex, colIndex, e, record) {
        var me = this,
            uid = record.get('uid'),
            store = me.getCustomerUserCouponStore(),
            win = me.getCustomerCouponList(),
            content = me.getContentPanel(),
            oldProxyUrl = store.getProxy().url;

        win.setTitle('优惠券—' + record.get('phone'));
        if (!content.items.get(win.getId())) {
            content.add(win);
        }
        content.setActiveTab(win.getId());
        store.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'customer/user/coupon';
        store.on('load', function() {
            store.getProxy().url = oldProxyUrl;
        });
        store.load({
            params: {
                uid: uid
            }
        });
    },
});
