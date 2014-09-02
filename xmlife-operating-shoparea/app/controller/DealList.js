Ext.define('XMLifeOperating.controller.DealList', {
    extend: 'Ext.app.Controller',

    views: ['dealManage.DealList','dealManage.DealDetail','dealManage.DealCustomerDetail'],

    stores: ['Deal', 'ShopArea', 'DealStatus', 'Customer', 'DealItems'],

    models: ['Deal', 'ShopArea', 'Customer', 'DealItems'],

    refs: [
        {
            ref: 'dealList',
            selector: 'dealList',
            xtype: 'dealList'
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
            ref: 'dealCustomerDetail',
            selector: 'dealCustomerDetail',
            xtype: 'dealCustomerDetail',
            autoCreate: true
        }, 
        {
            ref: 'dealDetail',
            selector: 'dealDetail',
            xtype: 'dealDetail',
            autoCreate: true
        }
    ],

    init: function() {

        var me = this;
        this.control({

            'dealList #shopArea': {
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
                            shopArea: Ext.getCmp('dealList').down('#shopAread').getValue(),
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
            keyWords = me.getDealList().down('#keyword').getValue(),
            store = this.getDealStore(),
            view = this.getDealList();
        var shopAreaId = Ext.getCmp('dealList').down('#shopAread').getValue();

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
        var dealDetail = view.getRecord(view.findTargetByEvent(e));
        var win = this.getDealDetail();
        win.down('form').loadRecord(dealDetail);
        win.show();
        var store = this.getDealItemsStore();

        store.load({
            params: {
                deal: dealDetail.get('dealBackendId'),
            },

            callback: function(records) {
                console.log(records);
                var model = Ext.ComponentQuery.query('#dealDetails')[0].getSelectionModel();
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
        var win = this.getDealCustomerDetail();
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