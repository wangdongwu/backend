Ext.define('XMLifeOperating.controller.CustomerList', {
    extend: 'Ext.app.Controller',

    views: ['userManage.customer.CustomerList','userManage.customer.CustomerAddress','userManage.customer.CustomerDealList'],

    stores: ['Customer','ShopArea','Address','Deal'],

    models: ['Customer','ShopArea','Address','Deal'],
 
    refs: [
        {
            ref: 'shopAreac',
            selector: '#shopAreac',
        },
        {
            ref: 'keywordc',
            selector: '#keywordc',
        },
        {
            ref: 'customerTitle',
            selector: '#customerTitle',
        },
        {
             ref: 'customerAddress',
             selector: 'customerAddress',
             xtype: 'customerAddress',
             autoCreate: true
        },
        {
             ref: 'CustomerDealList',
             selector: 'CustomerDealList',
             xtype: 'CustomerDealList',
             autoCreate: true
        },
    ],

    init: function() {

        var me=this;
        this.control({

            '#shopAreac': {
                select: function (combo) {
                    var sstore = this.getCustomerStore();
                    sstore.load({
                        params: {
                            shopArea: combo.getValue()
                        }
                    });

                },
            }, 
       
            '#customerSearch':{
                click: function(){
                    var store = this.getCustomerStore();
                    store.load({
                        params:{
                            shopArea: Ext.getCmp('customerList').down('#shopAreac').getValue(),
                            nameOrPhone: me.getKeywordc().getValue()
                        }
                    });
                }
            },

            '#customerTitle':{
                click: function(){
                    var store = this.getCustomerStore();
                    store.load({
                        params:{
                            enable:false,
                        }
                    });
                }
            },

            '#addressCustomer':{
                 click: me.onAddressCustomer
            },

            '#orderHistory':{
                 click: me.onOrderHistory
            },

            '#operationc':{
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
        store.on('load',function (store,addressList ){
            win.show();
        });
        store.load({
            params: {
                customer: uid
            },
        });
    },

    onOrderHistory: function(view, rowIndex, colIndex, column, e) {
        var self = this;
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var uid = customerDetail.get('uid');
        var store = self.getDealStore();
        var win = self.getCustomerDealList()
        store.on('load',function (store,addressList ){
            win.show();
        });
        store.getProxy().url += '/customerHistory';
        store.load({
            params: {
                customer: uid
            },
        });
    },

    onOperationc: function(view, rowIndex, colIndex, column, e) {
        alert(789);
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var uid = customerDetail.get('uid');
        var enable = !customerDetail.get('enable');
        var me = this;
        var url = 'customer/enable/'+uid;
        alert(url);

        sendPutRequest(url,{enable:enable},'封号','封号成功','封号失败',function(){
                var store = me.getCustomerStore();
                store.load({
                    params:{
                        shopArea: Ext.getCmp('customerList').down('#businessAreac').getValue(),
                        nameOrPhone: me.getKeywordc().getValue()
                    }
                });
            });
    },

});