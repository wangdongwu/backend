Ext.define('XMLifeOperating.controller.Shopper', {
    extend: 'Ext.app.Controller',
    
    views: ['staffManage.shopper.ShopperList'],

    stores: ['Shopper'],

    models: ['Shopper'],
/*
    views: ['buyer.BuyerList', 'buyer.EditBuyer', 'buyer.BuyerHistory', 'buyer.BuyerClock', 'buyer.ShoppingList'],

    stores: ['Buyer', 'BuyerHistory', 'BuyerClock', 'ShoppingList'],

    models: ['Buyer', 'BuyerHistory', 'BuyerClock', 'ShoppingList'],*/

/*    refs: [{
            ref: 'buyerList',
            selector: 'buyerList',
            xtype: 'buyerList',
            autoCreate: true

        }, {
            ref: 'businessArea',
            selector: '#businessArea',
        }, {
            ref: 'editWindow',
            selector: 'editBuyer',
            xtype: 'editBuyer',
            autoCreate: true
        }, {
            ref: 'buyerHistory',
            selector: 'buyerHistory',
            xtype: 'buyerHistory',
            autoCreate: true
        }, {
            ref: 'buyerClock',
            selector: 'buyerClock',
            xtype: 'buyerClock',
            autoCreate: true
        }, {
            ref: 'shoppingList',
            selector: 'shoppingList',
            xtype: 'shoppingList',
            autoCreate: true
        }, {
            ref: 'contentPanel',
            selector: '#contentPanel',
            xtype: 'panel'
        },

    ],*/
/*    init: function() {

        var me = this;
        var isActive = true,
            isUnbind = true;
        this.control({

            'buyerList': {
                added: me.onShow,
            },



        });
    },
*/


});