Ext.define('XMLifeOperating.controller.CustomerList', {
    extend: 'Ext.app.Controller',

    views: ['userManage.customer.CustomerList', 'userManage.customer.CustomerAddress', 'userManage.customer.CustomerDealList'],

    stores: ['Customer', 'ShopArea', 'Address', 'Deal'],

    models: ['Customer', 'ShopArea', 'Address', 'Deal'],
    refs: [{
        ref: 'shopArea',
        selector: '#shopArea',
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
        ref: 'customerList',
        selector: 'customerList',
        xtype: 'customerList',
        autoCreate: true
    }, {
        ref: 'contentPanel',
        selector: '#contentPanel',
        xtype: 'panel'
    }],

    init: function() {

        var me = this;
        this.control({

            'customerList #shopArea': {
                select: function(combo) {
                    var sstore = this.getCustomerStore();
                    me.shopArea = combo.getValue();
                    sstore.getProxy().extraParams = {
                        shopArea: me.shopArea
                    };
                    // sstore.load();
                     sstore.loadPage(1);
                }
            },

            '#customerSearch': {
                click: function() {
                    var store = this.getCustomerStore();
                    store.load({
                        params: {
                            shopArea: Ext.getCmp('customerList').down('#shopArea').getValue(),
                            nameOrPhone: me.getKeywordc().getValue()
                        }
                    });
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
                    store.load({
                        params: {
                            enable: false,
                        }
                    });
                }
            },

            '#addressCustomer': {
                click: me.onAddressCustomer
            },

            '#orderHistory': {
                click: me.onOrderHistory
            },

            '#operationc': {
                click: me.onOperationc
            },

        });
    },

    onAddressCustomer: function(view, rowIndex, colIndex, column, e) {
        var self = this;
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var uid = customerDetail.get('uid');
        var store = self.getAddressStore();
        var win = self.getCustomerAddress()
        store.on('load', function(store, addressList) {
            win.show();
        });
        store.load({
            params: {
                customer: uid
            }
        });
    },

    onOrderHistory: function(view, rowIndex, colIndex, column, e) {
        var self = this;
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var uid = customerDetail.get('uid');
        var store = self.getDealStore();
        var win = self.getCustomerDealList()
        var content = self.getContentPanel();
        var oldProxyUrl = store.getProxy().url;
        store.getProxy().url = XMLifeOperating.generic.Global.URL.biz + 'deal/customerHistory';
        store.on('load', function() {
            content.removeAll(false);
            content.add(win);
            /*
                还原原来的deal url
                 */
            //store.getProxy().url = oldProxyUrl;             
        })
        store.load({
            params: {
                customer: uid
            }
        });

    },

    onOperationc: function(view, rowIndex, colIndex, column, e) {
        alert(789);
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var uid = customerDetail.get('uid');
        var enable = !customerDetail.get('enable');
        var me = this;
        var url = 'customer/enable/' + uid;
        alert(url);

        sendPutRequest(url, {
            enable: enable
        }, '封号', '封号成功', '封号失败', function() {
            var store = me.getCustomerStore();
            store.load({
                params: {
                    shopArea: Ext.getCmp('customerList').down('#shopArea').getValue(),
                    nameOrPhone: me.getKeywordc().getValue()
                }
            });
        });
    },

});