Ext.define('XMLifeOperating.controller.GDealList', {
    extend: 'Ext.app.Controller',

    views: ['dealManage.GDealList','dealManage.GDealDetail','dealManage.GDealCustomerDetail'],

    stores: ['Deal', 'ShopArea', 'DealStatus', 'Customer', 'DealItems'],

    models: ['Deal', 'ShopArea', 'Customer', 'DealItems'],

    refs: [
        {
            ref: 'gDealList',
            selector: 'gDealList',
            xtype: 'gDealList'
        }, 
        {
            ref: 'shopAread',
            selector: '#shopAread',
        }, 
        {
            ref: 'keyword',
            selector: '#keyword',
        }, 
        {
            ref: 'statusSearch',
            selector: '#statusSearch',
        },  
        {
            ref: 'gDealCustomerDetail',
            selector: 'gDealCustomerDetail',
            xtype: 'gDealCustomerDetail',
            autoCreate: true
        }, 
        {
            ref: 'gDealDetail',
            selector: 'gDealDetail',
            xtype: 'gDealDetail',
            autoCreate: true
        }
    ],

    init: function() {

        var me = this;
        this.control({

            'gDealList #shopAread': {
                select: function(combo) {
                    var sstore = this.getDealStore();
                    sstore.getProxy().extraParams={
                        shopArea: combo.getValue()
                    };
                  sstore.loadPage(1);
                },
            },

            '#dealSearch': {
                click: me.dealSearch
            },
            '#statusSearch': {
                select: function(combo) {
                    var sstore = this.getDealStore();
                    sstore.getProxy().extraParams={
                        shopArea: Ext.getCmp('gDealList').down('#shopAread').getValue(),
                        status: combo.getValue()
                    };
                  sstore.loadPage(1);
              },
            },

            '#dealDetail': {
                click: me.onDealDetail
            },

            '#customerDetail': {
                click: me.onCustomerDetail
            },

            '#toproblemdeal':{
                 click: me.onToProblemDeal
            },  
        });
    },
    dealSearch: function() {
        var me = this,
            keyWords = me.getGDealList().down('#keyword').getValue(),
            store = this.getDealStore(),
            view = this.getGDealList();
        var shopAreaId = Ext.getCmp('gDealList').down('#shopAread').getValue();

        if (keyWords == '') {
            if (shopAreaId) {
                store.getProxy().extraParams={
                        shopArea: shopAreaId
                    };
                store.loadPage(1);

            } else {
                return;
            }
        } else {
            store.getProxy().extraParams={
                phone: keyWords
            };
            store.loadPage(1);
        }
    },

    onDealDetail: function(view, rowIndex, colIndex, column, e) {
        var gDealDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getGDealDetail();
        win.down('form').loadRecord(gDealDetail);
        win.show();
        var store = this.getDealItemsStore();
        store.load({
            params: {
                deal: gDealDetail.get('dealBackendId') || gDealDetail.get('dealId'),
            },

            callback: function(records) {
                console.log(records);
                var model = Ext.ComponentQuery.query('#gDealDetails')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
    },

    onCustomerDetail: function(view, rowIndex, colIndex, column, e) {
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var store = this.getCustomerStore();
        console.log(dealDetail.get('customId'));
        var win = this.getGDealCustomerDetail();
        store.on('load', function(store, records, successful, eOpts) {
            store.data.items[0].data['dtoAddress'] = dealDetail.getData()['dtoAddress'];
            console.log(store.data.items[0]);
            win.down('form').loadRecord(store.data.items[0]);
            win.show();
        });
        store.getProxy().extraParams={
          uid: dealDetail.get('customId'),
        };
        store.loadPage(1);
    },


    onToProblemDeal: function(view, rowIndex, colIndex, column, e) {
        var dealitem = view.getRecord(view.findTargetByEvent(e));
        var dealBackendId = dealitem.get('dealBackendId');
        var url = 'deal/transToProblem/'+ dealBackendId;
        var me = this;
        sendPutRequest(url,{},'转为问题订单','转为问题订单成功','转为问题订单失败',function(){
                    var sstore = me.getDealStore();
                    sstore.getProxy().extraParams = {
                        shopArea: Ext.getCmp('gDealList').down('#shopAread').getValue()
                    }
                    sstore.loadPage(1, {
                        params: {
                            start: 0,
                            limit: 25,
                            page: 1
                        }
                    });
            });
    },
});