Ext.define('XMLifeOperating.controller.CustomerList', {
    extend: 'Ext.app.Controller',
    views: ['userManage.customer.CustomerList',
            'userManage.customer.CustomerAddress',
            'userManage.customer.CustomerDealList'],

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
        {
             ref: 'CustomerList',
             selector: 'CustomerList',
             xtype: 'CustomerList',
             autoCreate: true
        },{
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
        }
    ],

    init: function() {

        var me=this;
        this.control({

            '#shopAreac': {
                select: function (combo) {
                    var store = this.getCustomerStore();
                    me.shopArea = combo.getValue();
                    store.getProxy().extraParams={
                        shopArea: me.shopArea
                    };
                    store.loadPage(1);
                },
            }, 
       
            '#customerSearch':{
                click: function(){
                    var store = this.getCustomerStore();
                    
                    store.getProxy().extraParams={
                        shopArea: Ext.getCmp('customerList').down('#shopAreac').getValue(),
                        nameOrPhone: me.getKeywordc().getValue()
                    };
                    store.loadPage(1);
                }
            },
            '#returnCustomerList' : {
                click : function(){
                    var tab=me.getCustomerList();
                    var content = this.getContentPanel();
                    content.removeAll(false);
                    content.add(tab);
                }
            }
            ,
            '#customerTitle':{
                click: function(){
                    var store = this.getCustomerStore();
                    store.getProxy().extraParams={
                        enable:false
                    };
                    store.loadPage(1);
                }
            },

            '#addressCustomer':{
                 click: me.onAddressCustomer
            },

            '#orderHistory':{
                 click: me.onOrderHistory
            },

            'CustomerList #operationc':{
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
        var content = self.getContentPanel();
        var oldProxyUrl = store.getProxy().url;
        store.getProxy().url = XMLifeOperating.generic.Global.URL.biz+'deal/customerHistory';
        store.on('load',function(){
                content.removeAll(false);
                content.add(win);
                /*
                还原原来的deal url
                 */
                //store.getProxy().url = oldProxyUrl;             
        })
        store.load({
            params: {
                customer: uid,
                assignShopper : true
            }
        });

    },

    onOperationc: function(view, rowIndex, colIndex, column, e) {
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var uid = customerDetail.get('uid');
        var enable = customerDetail.get('enable');
        var me = this;
        var url = 'customer/enable/'+uid;
        var str='确认要此操作吗？';
        if(enable == true){
            str='确认要封号吗？';
            enable =false;
        }else{
            str='确认要解封?';
            enable =true;
        }
        Ext.MessageBox.confirm("选择框", str,function(str){
            if(str!='yes'){
                return;
            }
            sendPutRequest(url,{enable:enable},'操作封号或解封','成功操作用户','操作用户失败',function(){
                var store = me.getCustomerStore();
               
                store.getProxy().extraParams={
                        shopArea: Ext.getCmp('CustomerList').down('#shopAreac').getValue(),
                        nameOrPhone: me.getKeywordc().getValue()
                    };
                store.loadPage(1);
            });
        });
    }

});