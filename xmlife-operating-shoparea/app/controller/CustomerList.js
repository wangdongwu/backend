Ext.define('XMLifeOperating.controller.CustomerList', {
    extend: 'Ext.app.Controller',

    views: ['userManage.customer.CustomerList','userManage.customer.CustomerAddress'],

    stores: ['Customer','ShopArea','Address'],

    models: ['Customer','ShopArea','Address'],
 
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
        // {
        //      ref: 'orderHistory',
        //      selector: 'orderHistory',
        //      xtype: 'orderHistory',
        //      autoCreate: true
        // },
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
        alert(123);
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var store = this.getAddressStore();
        console.log(customerDetail.get('uid'));
        var win = this.getCustomerAddress();
        store.on('load',function (store, records, successful, eOpts ){
            store.data.items[0].data['address'] = '1233<br>fdfdfdf';
            console.log(store.data.items[0]);
            win.down('form').loadRecord(store.data.items[0]);
            win.show();
        });
        store.load({
            params: {
                customer: customerDetail.get('uid'),
            },
        });
    },

    onOrderHistory: function(view, rowIndex, colIndex, column, e) {
        alert(456);
        // var orderDetail = view.getRecord(view.findTargetByEvent(e));
        // var store = this.getCustomerStore();
        // console.log(orderDetail.get('customId'));
        // var win = this.getOrderCustomerDetail();
        // store.on('load',function (store, records, successful, eOpts ){
        //     store.data.items[0].data['dtoAddress'] = orderDetail.getData()['dtoAddress'];
        //     console.log(store.data.items[0]);
        //     win.down('form').loadRecord(store.data.items[0]);
        //     win.show();
        // });
        // store.load({
        //     params: {
        //         uid: orderDetail.get('customId'),
        //     },
        // });
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