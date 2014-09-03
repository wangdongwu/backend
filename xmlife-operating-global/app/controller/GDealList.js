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
                    sstore.load({
                        params: {
                            shopArea: combo.getValue()
                        }
                    });

                },
            },

            '#dealSearch': {
                click: me.dealSearch
            },
            '#statusSearch': {
                select: function(combo) {
                    var sstore = this.getDealStore();
                    sstore.load({
                        params: {
                            shopArea: Ext.getCmp('gDealList').down('#shopAread').getValue(),
                            status: combo.getValue()
                        }
                    });

                },
            },

            '#dealDetail': {
                click: me.onDealDetail
            },

            '#customerDetail': {
                click: me.onCustomerDetail
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
                store.load({
                    params: {
                        shopArea: shopAreaId
                    }
                });
            } else {
                return;
            }
        } else {
            store.load({
                params: {
                    phone: keyWords
                }
            });
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
                deal: gDealDetail.get('dealBackendId'),
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
        store.load({
            params: {
                uid: dealDetail.get('customId'),
            },
        });
    },

});