Ext.define('XMLifeOperating.controller.CardGroup', {
    extend: 'Ext.app.Controller',

    views: [
        'couponManage.cardGroup.CardGroupList',
        'couponManage.cardGroup.CardGroupEdit'
    ],
    stores: ['CardGroup'],
    models: ['CardGroup'],
    refs: [{
        ref: 'cardGroupList',
        selector: 'cardGroupList',
        xtype: 'cardGroupList',
        autoCreate: true
    }, {
        ref: 'cardGroupEdit',
        selector: 'cardGroupEdit',
        xtype: 'cardGroupEdit',
        autoCreate: true
    }],
    init: function() {
        var self = this;
        self.control({
            'cardGroupList': {
                added: self.onShow,
            },
            'cardGroupList #add': {
                click: self.onCardGroupEdit
            },
            'cardGroupList #searchBtn': {
                click: self.searchCoupon
            },
            'cardGroupEdit #save-cardGroup-btn': {
                click: self.onSaveCardGroup
            }

        });
    },
    onShow: function() {
        var me = this;
        var store = me.getCardGroupStore();
        me.getCardGroupList().down('#searchKeyWords').setValue('');
        store.load({
            params: {
                name: ''
            }
        });
    },
    onCardGroupEdit: function(grid) {

        var win = this.getCardGroupEdit();
        win.down('form').getForm().reset();
        win.show();
    },
    onSaveCardGroup: function() {
        var editWindow = this.getCardGroupEdit(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            cardGroup = form.getRecord(),
            self = this,
            values = form.getValues();


        if (form.isValid()) {

            var data = {
                name: null,
                coupons: [],
                value: null
            }
            var store = self.getCardGroupStore();
            data.name = values.name;
            if (data.coupons.length <= 1) {
                data.coupons.push(values.coupons)
            } else {
                data.coupons = values.coupons;
            }
            data.value = parseInt((values.value * 100).toFixed());
            data.coupons = data.coupons[0];
            var success = function(response) {
                self.onShow();
                editWindow.close();
            }
            var failure = function(response) {
                Ext.MessageBox.show({
                    title: '提示',
                    msg: '添加失败',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
            sendRequest('coupon/add/group', data, '添加卡包', '添加卡包成功', '添加卡包失败', success, failure);
            //form.updateRecord(cardGroup);
            //console.log(cardGroup);
        }
    },
    searchCoupon: function() {
        var me = this;
        var store = me.getCardGroupStore();
        var name = me.getCardGroupList().down('#searchKeyWords').getValue();
        store.load({
            params: {
                name: name
            }
        });

    }
});