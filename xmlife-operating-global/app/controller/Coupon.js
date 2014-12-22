Ext.define('XMLifeOperating.controller.Coupon', {
    extend: 'Ext.app.Controller',

    views: ['couponManage.coupon.CouponList',
        'couponManage.coupon.CouponEditStep1',
        'couponManage.coupon.CouponEditStep2',
        'couponManage.coupon.CouponEditStep3',
        'couponManage.coupon.CouponShopEditSearch',
        'couponManage.coupon.CouponGoodsShelfEditSearch',
        'couponManage.coupon.CouponTemplatesEditSearch',
        'couponManage.coupon.CouponSkuEditSearch',
        'couponManage.coupon.CouponEdit',
        'couponManage.coupon.CouponEditShop',
        'couponManage.coupon.CouponShopEditSearchEditShop'
    ],
    stores: ['Coupon'],
    models: ['Coupon'],
    refs: [{
        ref: 'couponList',
        selector: 'couponList',
        xtype: 'couponList',
        autoCreate: true
    }, {
        ref: 'couponEditStep1',
        selector: 'couponEditStep1',
        xtype: 'couponEditStep1',
        autoCreate: true
    }, {
        ref: 'couponEditStep2',
        selector: 'couponEditStep2',
        xtype: 'couponEditStep2',
        autoCreate: true
    }, {
        ref: 'couponEditStep3',
        selector: 'couponEditStep3',
        xtype: 'couponEditStep3',
        autoCreate: true
    }, {
        ref: 'gainNewCityIds',
        selector: '#gainNewCityIds'
    }, {
        ref: 'keywordShop',
        selector: '#keywordShop'
    }, {
        ref: 'couponShopEditSearch',
        selector: 'couponShopEditSearch',
        xtype: 'couponShopEditSearch',
        autoCreate: true
    }, {
        ref: 'gainShopId',
        selector: '#gainShopId'
    }, {
        ref: 'searchShopList',
        selector: '#searchShopList'
    }, {
        ref: 'keywordGoodsShelf',
        selector: '#keywordGoodsShelf'
    }, {
        ref: 'couponGoodsShelfEditSearch',
        selector: 'couponGoodsShelfEditSearch',
        xtype: 'couponGoodsShelfEditSearch',
        autoCreate: true
    }, {
        ref: 'searchGoodsShelfList',
        selector: '#searchGoodsShelfList'
    }, {
        ref: 'gainGoodsShelfId',
        selector: '#gainGoodsShelfId'
    }, {
        ref: 'couponTemplatesEditSearch',
        selector: 'couponTemplatesEditSearch',
        xtype: 'couponTemplatesEditSearch',
        autoCreate: true
    }, {
        ref: 'keywordTemplates',
        selector: '#keywordTemplates'
    }, {
        ref: 'searchTemplatesList',
        selector: '#searchTemplatesList'
    }, {
        ref: 'couponSkuEditSearch',
        selector: 'couponSkuEditSearch',
        xtype: 'couponSkuEditSearch',
        autoCreate: true
    }, {
        ref: 'searchSkuList',
        selector: '#searchSkuList'
    }, {
        ref: 'gainTemplatesSkuId',
        selector: '#gainTemplatesSkuId'
    }, {
        ref: 'couponEdit',
        selector: 'couponEdit',
        xtype: 'couponEdit',
        autoCreate: true
    }, {
        ref: 'gainNewCityIdsEdit',
        selector: '#gainNewCityIdsEdit'
    }, {
        ref: 'gainShopIdEdit',
        selector: '#gainShopIdEdit'
    }, {
        ref: 'gainGoodsShelfIdEdit',
        selector: '#gainGoodsShelfIdEdit'
    }, {
        ref: 'gainTemplatesSkuIdEdit',
        selector: '#gainTemplatesSkuIdEdit'
    }, {
        ref: 'couponEditShop',
        selector: 'couponEditShop',
        xtype: 'couponEditShop',
        autoCreate: true
    }, {
        ref: 'gainNewCityIdsEditShop',
        selector: '#gainNewCityIdsEditShop'
    }, {
        ref: 'gainShopIdEditShop',
        selector: '#gainShopIdEditShop'
    }, {
        ref: 'couponShopEditSearchEditShop',
        selector: 'couponShopEditSearchEditShop',
        xtype: 'couponShopEditSearchEditShop',
        autoCreate: true
    }],

    init: function() {
        var self = this,
            categoryShopNameStoreArray = [],
            productSkuPidsStoreArray = [],
            gainShopStoreArray = [];

        this.control({
            'couponList': {
                added: self.rendenCouponList
            },
            'couponList #statusComboCoupon': {
                change: function(combo) {
                    var self = this;
                    var comboValue = combo.lastValue;
                    var store = self.getCouponList().store;
                    store.getProxy().extraParams = {
                        status: comboValue
                    };
                    store.loadPage(1);
                }
            },
            'couponList #add': {
                click: function() {
                    self.onCouponEditStep1();
                    categoryShopNameStoreArray = [];
                    productSkuPidsStoreArray = [];
                    gainShopStoreArray = [];
                }
            },
            'couponEditStep1 #nextButton': {
                click: self.onCouponEditStep1Next
            },
            //优惠券类型
            'couponEditStep1 #couponTypeId': {
                change: self.onCouponTypeId
            },
            'couponEditStep2 #nextButton': {
                click: self.onCouponEditStep2Next
            },
            'couponEditStep2 #prevButton': {
                click: self.onCouponEditStep2prev
            },
            'couponEditStep2 #bindTypeId': {
                change: self.onBindType
            },
            //搜索店铺
            'couponEditStep2 #searchShop': {
                click: self.onSearchShop
            },
            //确认搜索店铺
            'couponShopEditSearch #searchShopSure-btn': {
                click: self.onSearchShopSure
            },
            'couponEditStep3 #prevButton': {
                click: self.onCouponEditStep3prev
            },
            'couponEditStep2 #choiceCityId': {
                click: self.onChoiceCity
            },
            //搜索货架
            'couponEditStep2 #searchGoodsShelf': {
                click: self.onSearchGoodsShelf
            },
            'couponGoodsShelfEditSearch #searchGoodsShelfSure-btn': {
                click: function() {
                    self.onSearchGoodsShelfSure(categoryShopNameStoreArray);
                }
            },
            //搜索模板
            'couponEditStep2 #searchTemplates': {
                click: self.onSearchTemplates
            },
            'couponTemplatesEditSearch #searchTemplatesSure-btn': {
                click: self.onSearchTemplatesSure
            },
            'couponSkuEditSearch #searchSkuSure-btn': {
                click: function() {
                    self.onSearchSkuSure(productSkuPidsStoreArray);
                }
            },
            //确认
            'couponEditStep3 #ensureButton': {
                click: self.onEnsureButton
            },
            'couponList #editCouponId': {
                click: self.onCouponEdit
            },
            'couponEdit #save-coupon-edit-btn': {
                click: self.onSaveCouponEdit
            },
            'couponEdit #editShopBtn': {
                click: self.onEditShopBtn
            },
            'couponEditShop #choiceCityId': {
                click: self.onChoiceCityEditShop
            },
            //修改店铺
            'couponEditShop #save': {
                click: self.onSaveEditShop
            },
            'couponEditShop #searchShop': {
                click: self.onSearchShopEditShop
            },
            'couponShopEditSearchEditShop #searchShopSure-btn': {
                click: self.onSearchShopSureEditShop
            }
        });
    },
    rendenCouponList: function(grid) {
        var store = grid.store;
        store.getProxy().extraParams = {
            status: 1
        };
        store.loadPage(1);
    },
    onStatusCombo: function(combo) {
        var self = this;
        var comboValue = combo.lastValue;
        var store = self.getCouponList().store;
        store.getProxy().extraParams = {
            status: comboValue
        };
        store.loadPage(1);
    },
    onCouponEditStep1: function(categoryShopNameStoreArray) {
        var winStep1 = this.getCouponEditStep1();
        winStep1.show();
        this.cleanWin();
    },
    onCouponEditStep1Next: function() {
        var editWindow = this.getCouponEditStep1(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            self = this;
        if (form.isValid()) {

        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
            return;
        }
        var winStep1 = this.getCouponEditStep1();
        winStep1.close();
        var winStep2 = this.getCouponEditStep2();
        winStep2.show();
        var couponType = winStep1.down('#couponTypeId').getValue();
        var choiceCityId = winStep2.down('#choiceCityId'),
            bindTypeId = winStep2.down('#bindTypeId'),
            choiceShopTextId = winStep2.down('#choiceShopTextId'), //选择店铺
            searchShopTextId = winStep2.down('#searchShopTextId'), //搜索店铺
            gainShopId = winStep2.down('#gainShopId'), //获得店铺列表
            choiceGoodsShelfTextId = winStep2.down('#choiceGoodsShelfTextId'), //选择货架
            searchGoodsShelfTextId = winStep2.down('#searchGoodsShelfTextId'), //搜索货架
            gainGoodsShelfId = winStep2.down('#gainGoodsShelfId'), //货架列表

            choiceTemplatesTextId = winStep2.down('#choiceTemplatesTextId'), //选择模板
            searchTemplatesfTextId = winStep2.down('#searchTemplatesfTextId'), //搜索模板
            gainTemplatesSkuId = winStep2.down('#gainTemplatesSkuId'); //sku列表
        var bindTypeIdValue = bindTypeId.getValue();

        if (couponType == 3) {
            bindTypeId.setVisible(false);
        } else {
            bindTypeId.setVisible(true);
        }

        if (bindTypeIdValue <= 0) {
            choiceCityId.setVisible();
            choiceShopTextId.setVisible(false);
            searchShopTextId.setVisible(false);
            gainShopId.setVisible(false);

            choiceGoodsShelfTextId.setVisible(false);
            searchGoodsShelfTextId.setVisible(false);
            gainGoodsShelfId.setVisible(false);

            choiceTemplatesTextId.setVisible(false);
            searchTemplatesfTextId.setVisible(false);
            gainTemplatesSkuId.setVisible(false);

            var store = Ext.create('XMLifeOperating.store.SupportedCityCoupon', {
                autoSync: true
            });
            this.getGainNewCityIds().bindStore(store, false);
            store.load();
        }
    },
    //优惠券类型
    onCouponTypeId: function(combo) {
        var grid = this.getCouponEditStep1(),
            couponCost_m = grid.down('#couponCost_m'), //满
            couponCost_my = grid.down('#couponCost_my'), //满_元
            couponCost_y = grid.down('#couponCost_y'), //元
            couponCost_d = grid.down('#couponCost_d'), //打/减
            couponCost_dz = grid.down('#couponCost_dz'), //打_折/减_元
            couponCost_z = grid.down('#couponCost_z'), //折/元
            maxDiscountTextId = grid.down('#maxDiscountTextId'), //最多优惠
            couponCost_v = grid.down('#couponCost_v'); //优惠券价值
        var comboValue = combo.getValue();
        switch (comboValue) {
            case 1:
                couponCost_m.setVisible(true);
                couponCost_my.setVisible(true);
                couponCost_y.setVisible(true);
                couponCost_d.setVisible(true);
                couponCost_dz.setVisible(true);
                couponCost_z.setVisible(true);
                couponCost_d.setValue('减');
                couponCost_z.setValue('元');
                maxDiscountTextId.setVisible(false);
                maxDiscountTextId.allowBlank = false;
                couponCost_my.setValue('');
                couponCost_dz.setValue('');
                couponCost_v.setValue('');
                break;
            case 2:
                couponCost_m.setVisible(true);
                couponCost_my.setVisible(true);
                couponCost_y.setVisible(true);
                couponCost_d.setVisible(true);
                couponCost_dz.setVisible(true);
                couponCost_z.setVisible(true);
                couponCost_d.setValue('打');
                couponCost_z.setValue('折');
                maxDiscountTextId.setVisible(true);
                maxDiscountTextId.allowBlank = true;
                couponCost_my.setValue('');
                couponCost_dz.setValue('');
                couponCost_v.setValue('');
                break;
            case 3:
                couponCost_m.setVisible(false);
                couponCost_my.setVisible(false);
                couponCost_y.setVisible(false);
                couponCost_d.setVisible(false);
                couponCost_dz.setVisible(false);
                couponCost_z.setVisible(false);
                maxDiscountTextId.setVisible(false);
                maxDiscountTextId.allowBlank = true;
                couponCost_my.setValue('');
                couponCost_dz.setValue('');
                couponCost_v.setValue('');
                break;
        }
    },
    onCouponEditStep2Next: function() {

        var winStep2 = this.getCouponEditStep2(),
            editWindow = winStep2,
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            self = this;

        var winStep1 = this.getCouponEditStep1();

        var couponTypeId = winStep1.down('#couponTypeId').getValue();
        var bindingType = winStep2.down('[name=bindingType]');

        var cityIsChosen = self.onIsChosen('gainNewCityIds', '请选择城市');
        if (cityIsChosen === true) {
            return;
        }
        if (couponTypeId != 3) {
            bindingType.allowBlank = false;
        } else {
            bindingType.allowBlank = true;
        }
        switch (bindingType.getValue()) {
            case 1:
                var isChosen = self.onIsChosen('gainShopId', '请选择店铺');
                if (isChosen === true) {
                    return;
                }
                break;
            case 2:
                var isChosen = self.onIsChosen('gainShopId', '请选择店铺');
                if (isChosen === true) {
                    return;
                }
                var isChosen = self.onIsChosen('gainGoodsShelfId', '请选择货架');
                if (isChosen === true) {
                    return;
                }
                break;
            case 3:
                var isChosen = self.onIsChosen('gainShopId', '请选择店铺');
                if (isChosen === true) {
                    return;
                }
                var isChosen = self.onIsChosen('gainTemplatesSkuId', '请选择sku');
                if (isChosen === true) {
                    return;
                }
                break;
        }
        if (form.isValid()) {} else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
            return;
        }
        winStep2.close();
        var winStep3 = this.getCouponEditStep3();
        winStep3.show();
    },
    onIsChosen: function(ids, errorStr) {
        var selectModel = Ext.ComponentQuery.query('#' + ids + '')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var citiesLen = selectRecords.length;
        if (citiesLen == 0) {
            Ext.MessageBox.show({
                title: 'Edit Task Failed',
                msg: errorStr,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
            return true;
        }
        return false;
    },
    onBindType: function(combo) {
        var self = this;
        var bindType = combo.getValue();
        var winStep2 = self.getCouponEditStep2();
        var choiceCityId = winStep2.down('#choiceCityId'),
            choiceShopTextId = winStep2.down('#choiceShopTextId'), //选择店铺
            searchShopTextId = winStep2.down('#searchShopTextId'), //搜索店铺
            gainShopId = winStep2.down('#gainShopId'), //店铺列表

            choiceGoodsShelfTextId = winStep2.down('#choiceGoodsShelfTextId'), //选择货架
            searchGoodsShelfTextId = winStep2.down('#searchGoodsShelfTextId'), //搜索货架
            gainGoodsShelfId = winStep2.down('#gainGoodsShelfId'), //货架列表

            choiceTemplatesTextId = winStep2.down('#choiceTemplatesTextId'), //选择模板
            searchTemplatesfTextId = winStep2.down('#searchTemplatesfTextId'), //搜索模板
            gainTemplatesSkuId = winStep2.down('#gainTemplatesSkuId'); //sku列表

        switch (bindType) {
            case 1: //商店
                choiceCityId.setVisible(true);

                choiceShopTextId.setVisible(true);
                searchShopTextId.setVisible(true);
                gainShopId.setVisible(true);

                choiceGoodsShelfTextId.setVisible(false);
                searchGoodsShelfTextId.setVisible(false);
                gainGoodsShelfId.setVisible(false);

                choiceTemplatesTextId.setVisible(false);
                searchTemplatesfTextId.setVisible(false);
                gainTemplatesSkuId.setVisible(false);

                break;
            case 2: //货架
                choiceCityId.setVisible(true);

                choiceShopTextId.setVisible(true);
                searchShopTextId.setVisible(true);
                gainShopId.setVisible(true);

                choiceGoodsShelfTextId.setVisible(true);
                searchGoodsShelfTextId.setVisible(true);
                gainGoodsShelfId.setVisible(true);

                choiceTemplatesTextId.setVisible(false);
                searchTemplatesfTextId.setVisible(false);
                gainTemplatesSkuId.setVisible(false);
                break;
            case 3: //sku
                choiceCityId.setVisible(true);

                choiceShopTextId.setVisible(true);
                searchShopTextId.setVisible(true);
                gainShopId.setVisible(true);

                choiceGoodsShelfTextId.setVisible(false);
                searchGoodsShelfTextId.setVisible(false);
                gainGoodsShelfId.setVisible(false);

                choiceTemplatesTextId.setVisible(true);
                searchTemplatesfTextId.setVisible(true);
                gainTemplatesSkuId.setVisible(true);
                break;
            default:
                choiceCityId.setVisible(false);

                choiceShopTextId.setVisible(false);
                searchShopTextId.setVisible(false);
                gainShopId.setVisible(false);

                choiceGoodsShelfTextId.setVisible(false);
                searchGoodsShelfTextId.setVisible(false);
                gainGoodsShelfId.setVisible(false);

                choiceTemplatesTextId.setVisible(false);
                searchTemplatesfTextId.setVisible(false);
                gainTemplatesSkuId.setVisible(false);
                break;
        }
    },
    onCouponEditStep2prev: function() {
        var winStep2 = this.getCouponEditStep2();
        winStep2.close();
        var winStep1 = this.getCouponEditStep1();
        winStep1.show();
    },
    onCouponEditStep3prev: function() {
        var winStep3 = this.getCouponEditStep3();
        winStep3.close();
        var winStep2 = this.getCouponEditStep2();
        winStep2.show();
    },
    onChoiceCity: function() {
        var self = this;
        var selectModel = Ext.ComponentQuery.query('#gainNewCityIds')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var cities = '';
        selectRecords.forEach(function(item) {
            if (item.get("code") != null) {
                cities += item.get('code') + ',';
            }
        });
        var s = cities;
        cities = s.substring(0, s.length - 1);
        this.cities = cities;
        if (cities == '') {
            alert('请选择城市');
            return;
        }
        var store = Ext.create('XMLifeOperating.store.ShopCityShops', {
            autoSync: false
        });
        self.getGainShopId().bindStore(store, false);
        store.getProxy().extraParams = {
            cities: cities
        }
        store.load();

    },
    onSearchShop: function() {
        var self = this;
        var cities = this.cities;
        if (cities == '') {
            alert('请选择城市');
            return;
        }
        var keywordShopValue = self.getKeywordShop().getValue();
        // console.log(keywordShopValue);
        if (keywordShopValue == '') {
            alert('搜索为空');
            return;
        }
        var win = self.getCouponShopEditSearch();
        win.show();
        var store = Ext.create('XMLifeOperating.store.ShopNameFilter', {
            autoSync: true
        });
        store.load({
            params: {
                name: keywordShopValue,
                cities: cities
            },
            callback: function(records) {
                //初始化打勾
                var model = Ext.ComponentQuery.query('#searchShopList')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
        self.getSearchShopList().bindStore(store, false);
    },
    onSearchShopSure: function() {
        var self = this;
        var selectModel = Ext.ComponentQuery.query('#searchShopList')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var searchShops = '';
        var cities = this.cities;
        var gainShopIdStore = self.getGainShopId().store;

        var selectModelGainShops = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
        var selectRecordsGainShops = selectModelGainShops.getSelection();

        gainShopIdStore.load({
            params: {
                cities: cities
            },
            callback: function(records) {
                console.log(records.length);
                //初始化打勾
                var model = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
                model.deselectAll();

                for (var i = 0; i < records.length; i++) {
                    for (var j = 0; j < selectRecords.length; j++) {

                        if (records[i].get('id') == selectRecords[j].get('id')) {
                            var index = gainShopIdStore.indexOfId(records[i].get('id'));
                            model.select(index, true);
                        }

                    }

                }

                for (var i = 0; i < records.length; i++) {
                    for (var j = 0; j < selectRecordsGainShops.length; j++) {

                        if (records[i].get('id') == selectRecordsGainShops[j].get('id')) {
                            var index = gainShopIdStore.indexOfId(records[i].get('id'));
                            model.select(index, true);
                        }

                    }
                }

            }
        });
        var win = this.getCouponShopEditSearch()
        win.close();
    },
    onSearchGoodsShelf: function() {
        var self = this;
        var cities = this.cities;
        if (cities == '') {
            alert('请选择城市');
            return;
        }
        var selectModel = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var shops = '';
        selectRecords.forEach(function(item) {
            if (item.get("id") != null) {
                shops += item.get('id') + ',';
            }
        });
        var s = shops;
        shops = s.substring(0, s.length - 1);
        var keywordGoodsShelfValue = self.getKeywordGoodsShelf().getValue();
        if (keywordGoodsShelfValue == '') {
            alert('搜索为空');
            return;
        }
        var win = self.getCouponGoodsShelfEditSearch();
        win.show();
        var store = Ext.create('XMLifeOperating.store.CategoryShopName', {
            autoSync: true
        });
        store.load({
            params: {
                name: keywordGoodsShelfValue,
                shops: shops
            },
            callback: function(records) {
                //初始化打勾
                var model = Ext.ComponentQuery.query('#searchGoodsShelfList')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
        self.getSearchGoodsShelfList().bindStore(store, false);
    },
    onSearchGoodsShelfSure: function(categoryShopNameStoreArray) {
        var self = this;
        var selectModel = Ext.ComponentQuery.query('#searchGoodsShelfList')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var categoryShopNameStore = Ext.create('XMLifeOperating.store.CategoryShopName', {
            autoSync: false
        });
        self.getGainGoodsShelfId().bindStore(categoryShopNameStore, false);
        for (var j = 0; j < selectRecords.length; j++) {
            categoryShopNameStoreArray.push(selectRecords[j]);
        }
        var model = Ext.ComponentQuery.query('#gainGoodsShelfId')[0].getSelectionModel();
        model.deselectAll();
        for (var i = 0; i < categoryShopNameStoreArray.length; i++) {
            categoryShopNameStore.insert(0, categoryShopNameStoreArray[i]);
            var index = categoryShopNameStore.indexOfId(categoryShopNameStoreArray[i].get('id'));
            model.select(index, true);
        }
        var win = this.getCouponGoodsShelfEditSearch();
        win.close();

    },
    onSearchTemplates: function() {
        var self = this;
        var keywordTemplatesValue = self.getKeywordTemplates().getValue();
        if (keywordTemplatesValue == '') {
            alert('搜索为空');
            return;
        }
        var win = self.getCouponTemplatesEditSearch();
        win.show();
        var store = Ext.create('XMLifeOperating.store.ProductTemplateCoupon', {
            autoSync: true
        });
        store.load({
            params: {
                keyword: keywordTemplatesValue
            },
            callback: function(records) {
                //初始化打勾
                var model = Ext.ComponentQuery.query('#searchTemplatesList')[0].getSelectionModel();
                model.deselectAll();

                for (var i = 0; i < records.length; i++) {

                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
        self.getSearchTemplatesList().bindStore(store, false);
    },
    onSearchTemplatesSure: function() {
        var self = this;
        //shops
        var selectModel = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var shops = '';
        selectRecords.forEach(function(item) {
            if (item.get("id") != null) {
                shops += item.get('id') + ',';
            }
        });
        var s = shops;
        shops = s.substring(0, s.length - 1);
        console.log(shops);
        //templates
        var selectModel = Ext.ComponentQuery.query('#searchTemplatesList')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var templates = '';
        selectRecords.forEach(function(item) {
            if (item.get("id") != null) {
                templates += item.get('id') + ',';
            }
        });
        var s = templates;
        templates = s.substring(0, s.length - 1);

        var winSkuEdit = self.getCouponSkuEditSearch();

        winSkuEdit.show();
        var store = Ext.create('XMLifeOperating.store.ProductSkuPids', {
            autoSync: false
        });
        // var store = self.getProductSkuPidsStore;
        store.load({
            params: {
                shops: shops,
                templates: templates
            },
            callback: function(records) {
                //初始化打勾
                var model = Ext.ComponentQuery.query('#searchSkuList')[0].getSelectionModel();
                model.deselectAll();
                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
        self.getSearchSkuList().bindStore(store, false);
    },
    onSearchSkuSure: function(productSkuPidsStoreArray) {
        var self = this;
        var selectModel = Ext.ComponentQuery.query('#searchSkuList')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var productSkuPidsStore = Ext.create('XMLifeOperating.store.ProductSkuPids', {
            autoSync: false
        });
        self.getGainTemplatesSkuId().bindStore(productSkuPidsStore, false);
        for (var j = 0; j < selectRecords.length; j++) {
            productSkuPidsStoreArray.push(selectRecords[j]);
        }
        var model = Ext.ComponentQuery.query('#gainTemplatesSkuId')[0].getSelectionModel();
        model.deselectAll();
        for (var i = 0; i < productSkuPidsStoreArray.length; i++) {
            var index = productSkuPidsStore.indexOfId(productSkuPidsStoreArray[i].get('pid'));
            if (index < 0) {
                productSkuPidsStore.insert(0, productSkuPidsStoreArray[i]);
            }
            model.select(index, true);
        }
        var winTemplatesEdit = self.getCouponTemplatesEditSearch();
        winTemplatesEdit.close();
        var winSkuEdit = self.getCouponSkuEditSearch();
        winSkuEdit.close();
    },
    onEnsureButton: function() {
        var self = this,
            winStep1 = self.getCouponEditStep1(),
            winStep2 = self.getCouponEditStep2(),
            winStep3 = self.getCouponEditStep3(),
            editWindow = winStep1;
        var name = editWindow.down('[name=name]').getValue(),
            desc = editWindow.down('[name=desc]').getValue(),
            type = editWindow.down('[name=type]').getValue(),
            benchMark = editWindow.down('[name=benchMark]').getValue(), //满_元
            discountValue = editWindow.down('[name=discountValue]').getValue(), //打_折 / 减_元
            value = editWindow.down('[name=value]').getValue(),
            maxDiscount = editWindow.down('[name=maxDiscount]').getValue(),
            isNew = editWindow.down('[name=isNew]').getValue(),
            maxCouponNumHold = editWindow.down('[name=maxCouponNumHold]').getValue(),
            expireStartDate = (editWindow.down('[name=expireStartDate]').getValue()).getTime(),
            expireEndDate = (editWindow.down('[name=expireEndDate]').getValue()).getTime(),

            delayUseStartHours = editWindow.down('[name=delayUseStartHours]').getValue(),
            delayUseEndHours = editWindow.down('[name=delayUseEndHours]').getValue(),

            globalCouponNum = editWindow.down('[name=globalCouponNum]').getValue(), //全局总共可领
            globalDailyCouponNum = editWindow.down('[name=globalDailyCouponNum]').getValue(), //全局每天可领
            globalUserCouponNumHold = editWindow.down('[name=globalUserCouponNumHold]').getValue(), //每人终身可领
            userDailyCouponNumHold = editWindow.down('[name=userDailyCouponNumHold]').getValue(); //每人每天可领*/
        delayUseStartHours = delayUseStartHours.replace(/(^s*)|(s*$)/g, '');
        delayUseEndHours = delayUseEndHours.replace(/(^s*)|(s*$)/g, '');
        if (delayUseStartHours == '') {
            delayUseStartHours = -1
        }
        if (delayUseEndHours == '') {
            delayUseEndHours = -1
        }
        //winStep2
        var selectModel = Ext.ComponentQuery.query('#gainNewCityIds')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var cities = [];
        selectRecords.forEach(function(item) {
            if (item.get("code") != null) {
                cities.push(item.get('code'));
            }
        });
        var bindingType = winStep2.down('[name=bindingType]').getValue();
        var bindings = '';

        switch (bindingType) {
            case 1:
                var selectModel = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
                var selectRecords = selectModel.getSelection();
                var shops = [];
                selectRecords.forEach(function(item) {
                    if (item.get("id") != null) {
                        shops.push(item.get('id'));
                    }
                });
                bindings = shops;
                break;
            case 2:
                var selectModel = Ext.ComponentQuery.query('#gainGoodsShelfId')[0].getSelectionModel();
                var selectRecords = selectModel.getSelection();
                var goodsShelfs = [];
                selectRecords.forEach(function(item) {
                    if (item.get("id") != null) {
                        goodsShelfs.push(item.get('id'));
                    }
                });
                bindings = goodsShelfs;
                break;
            case 3:
                var selectModel = Ext.ComponentQuery.query('#gainTemplatesSkuId')[0].getSelectionModel();
                var selectRecords = selectModel.getSelection();
                var skus = [];
                selectRecords.forEach(function(item) {
                    if (item.get("pid") != null) {
                        skus.push(item.get('pid'));
                    }
                });
                bindings = skus;
                break;
        }
        //winStep3
        var channel = winStep3.down('[name=channel]').getValue();
        if (channel == true) {
            channel = 1;
        } else {
            channel = 0;
        }
        var url = 'coupon/add/coupon';
        var params = {
            name: name,
            desc: desc,
            type: type,
            benchMark: benchMark,
            discountValue: discountValue,
            value: value,
            maxDiscount: maxDiscount,
            isNew: isNew,
            maxCouponNumHold: maxCouponNumHold,
            expireStartDate: expireStartDate,
            expireEndDate: expireEndDate,
            delayUseStartHours: delayUseStartHours,
            delayUseEndHours: delayUseEndHours,
            globalCouponNum: globalCouponNum,
            globalDailyCouponNum: globalDailyCouponNum,
            globalUserCouponNumHold: globalUserCouponNumHold,
            userDailyCouponNumHold: userDailyCouponNumHold,
            cities: cities,
            bindingType: bindingType,
            bindings: bindings,
            channel: channel
        };
        sendRequest(url, params, '添加优惠券', '成功添加优惠券', '添加优惠券失败', function() {
            /*windowEl.unmask();
            editWindow.close();*/
            /*switch(operation.response.responseText){
                case '1':
                    errorStr='创建成功';
                    break;
                case '-2':
                    errorStr='传参错误';
                    break;
                case '-24':
                    errorStr='手机已注册';
                    break;
                case '-28':
                    errorStr='手机号码格式错误';
                    break;
            }
            if(operation.response.responseText<0){
                Ext.MessageBox.show({
                    title: 'Edit Task Failed',
                    msg: errorStr,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                windowEl.unmask();
                return;
            }*/
            winStep1.close();
            winStep2.close();
            winStep3.close();
            self.rendenCouponList(self.getCouponList());
            self.cleanWin();
        });
    },
    cleanWin: function() {
        var self = this,
            winStep1 = self.getCouponEditStep1(),
            winStep2 = self.getCouponEditStep2(),
            winStep3 = self.getCouponEditStep3();
        winStep1.down('[name=name]').setValue('');
        winStep1.down('[name=desc]').setValue('');
        winStep1.down('[name=type]').setValue('');
        winStep1.down('[name=benchMark]').setValue('');
        winStep1.down('[name=discountValue]').setValue('');
        winStep1.down('[name=value]').setValue('');
        winStep1.down('[name=maxDiscount]').setValue(50);
        winStep1.down('[name=isNew]').setValue('');
        winStep1.down('[name=maxCouponNumHold]').setValue('');

        winStep1.down('[name=expireStartDate]').setValue(new Date());
        winStep1.down('[name=expireEndDate]').setValue();

        winStep1.down('[name=delayUseStartHours]').setValue('');
        winStep1.down('[name=delayUseEndHours]').setValue('');
        winStep1.down('[name=globalCouponNum]').setValue('');
        winStep1.down('[name=globalDailyCouponNum]').setValue('');
        winStep1.down('[name=globalUserCouponNumHold]').setValue('');
        winStep1.down('[name=userDailyCouponNumHold]').setValue('');
        winStep1.down('[name=globalUserCouponNumHold]').setDisabled(false);
        winStep1.down('[name=userDailyCouponNumHold]').setDisabled(false);

        winStep2.down('[name=bindingType]').setValue('');
        winStep2.down('[name=keywordShop]').setValue('');
        self.getGainShopId().store.removeAll();
        winStep2.down('[name=keywordGoodsShelf]').setValue('');
        self.getGainGoodsShelfId().store.removeAll();

        winStep2.down('[name=keywordTemplates]').setValue('');
        self.getGainTemplatesSkuId().store.removeAll();

        winStep3.down('[name=channel]').setValue(false);

    },
    onCouponEdit: function(view, column, rowIndex, colIndex, e) {
        var self = this;
        var records = view.getRecord(view.findTargetByEvent(e));
        var win = this.getCouponEdit();
        win.down('form').loadRecord(records);
        var expireEndDate = new Date(records.get('expireEndDate'));
        var expireStartDate = new Date(records.get('expireStartDate'));
        win.down('[name=expireEndDate]').setValue(expireEndDate);
        win.down('[name=expireStartDate]').setValue(expireStartDate);

        //先判断优惠券类型
        var type = records.get('type');
        self.onDecideType(win, type, records);
        var store = Ext.create('XMLifeOperating.store.SupportedCityCoupon', {
            autoSync: false
        });
        this.getGainNewCityIdsEdit().store.removeAll();
        this.getGainNewCityIdsEdit().bindStore(store, false);
        var citiesArray = records.get('cities');
        store.load({
            callback: function(records) {
                //初始化打勾
                var model = Ext.ComponentQuery.query('#gainNewCityIdsEdit')[0].getSelectionModel();
                model.deselectAll();
                model.setLocked(false);

                for (var j = 0; j < citiesArray.length; j++) {
                    var index = store.indexOfId(citiesArray[j]);
                    model.select(index, true);
                }

                model.setLocked(true);
            }
        });
        win.down('#editShopBtn').setVisible(false);
        if (type == 3) {
            win.height = 500;
            win.show();
            return;
        } else {
            win.height = 700;
            win.show();
        }
        //判断绑定类型
        var bindingType = records.get('bindingType');
        var gainShopIdEdit = win.down('#gainShopIdEdit'),
            gainGoodsShelfIdEdit = win.down('#gainGoodsShelfIdEdit'),
            gainTemplatesSkuIdEdit = win.down('#gainTemplatesSkuIdEdit');
        switch (bindingType) {
            case 1:
                //判断能否有修改shop权限
                // var username = localStorage.getItem('username');
                // if (records.get('createrName') == username) {
                    win.down('#editShopBtn').setVisible(true);
                // }
                gainShopIdEdit.setVisible(true);
                gainGoodsShelfIdEdit.setVisible(false);
                gainTemplatesSkuIdEdit.setVisible(false);
                var cities = citiesArray.join(',');
                var store1 = Ext.create('XMLifeOperating.store.ShopCityShops', {
                    autoSync: false
                });
                var shopsArray = records.get('shops');
                self.getGainShopIdEdit().store.removeAll();
                self.getGainShopIdEdit().bindStore(store1, false);
                store1.getProxy().extraParams = {
                    cities: cities
                }
                store1.load({
                    callback: function() {
                        //初始化打勾
                        var model = Ext.ComponentQuery.query('#gainShopIdEdit')[0].getSelectionModel();
                        model.deselectAll();
                        model.setLocked(false);

                        for (var j = 0; j < shopsArray.length; j++) {
                            var index = store1.indexOfId(shopsArray[j].shopId);
                            model.select(index, true);
                        }

                        model.setLocked(true);
                    }
                });
                break;
            case 2:
                gainShopIdEdit.setVisible(true);
                gainGoodsShelfIdEdit.setVisible(true);
                gainTemplatesSkuIdEdit.setVisible(false);
                var cities = citiesArray.join(',');
                var store1 = Ext.create('XMLifeOperating.store.ShopCityShops', {
                    autoSync: false
                });
                var categoriesArray = records.get('categories');
                var mapArray = {};
                self.getGainShopIdEdit().store.removeAll();
                self.getGainShopIdEdit().bindStore(store1, false);
                store1.getProxy().extraParams = {
                    cities: cities
                }
                store1.load({
                    callback: function() {
                        //初始化打勾
                        var model = Ext.ComponentQuery.query('#gainShopIdEdit')[0].getSelectionModel();
                        model.deselectAll();
                        model.setLocked(false);

                        for (var j = 0; j < categoriesArray.length; j++) {
                            var index = store1.indexOfId(categoriesArray[j].shopId);
                            model.select(index, true);
                            categoriesArray[j].cityName = store1.data.items[index].get('cityName');
                            categoriesArray[j].shopName = store1.data.items[index].get('name');
                        }

                        model.setLocked(true);
                    }
                });
                var categoryShopNameStore = Ext.create('XMLifeOperating.store.CategoryShopName', {
                    autoSync: false
                });
                self.getGainGoodsShelfIdEdit().store.removeAll();
                self.getGainGoodsShelfIdEdit().bindStore(categoryShopNameStore, false);
                var modelGoodsShelf = Ext.ComponentQuery.query('#gainGoodsShelfIdEdit')[0].getSelectionModel();
                modelGoodsShelf.deselectAll();
                modelGoodsShelf.setLocked(false);

                var cateArray = categoriesArray;
                for (var i = 0; i < cateArray.length; i++) {
                    categoryShopNameStore.insert(0, cateArray[i]);
                    var index = categoryShopNameStore.indexOfId(cateArray[i].id);
                    modelGoodsShelf.select(index, true);
                }

                modelGoodsShelf.setLocked(true);
                break;
            case 3:
                gainShopIdEdit.setVisible(true);
                gainGoodsShelfIdEdit.setVisible(false);
                gainTemplatesSkuIdEdit.setVisible(true);
                self.getGainShopIdEdit().store.removeAll();
                var cities = citiesArray.join(',');
                var store1 = Ext.create('XMLifeOperating.store.ShopCityShops', {
                    autoSync: false
                });
                var productsArray = records.get('products');
                self.getGainShopIdEdit().store.removeAll();
                self.getGainShopIdEdit().bindStore(store1, false);
                store1.getProxy().extraParams = {
                    cities: cities
                }
                store1.load({
                    callback: function() {
                        //初始化打勾
                        var model = Ext.ComponentQuery.query('#gainShopIdEdit')[0].getSelectionModel();
                        model.deselectAll();
                        model.setLocked(false);

                        for (var j = 0; j < productsArray.length; j++) {
                            var index = store1.indexOfId(productsArray[j].shopId);
                            model.select(index, true);
                            productsArray[j].cityName = store1.data.items[index].get('cityName');
                            productsArray[j].shopName = store1.data.items[index].get('name');
                            productsArray[j].pname = productsArray[j].names[0] + ' ' + productsArray[j].names[1];
                        }

                        model.setLocked(true);
                    }
                });


                var productSkuPidsStore = Ext.create('XMLifeOperating.store.ProductSkuPids', {
                    autoSync: false
                });
                self.getGainTemplatesSkuIdEdit().store.removeAll();
                self.getGainTemplatesSkuIdEdit().bindStore(productSkuPidsStore, false);
                var modelProductSkuPids = Ext.ComponentQuery.query('#gainTemplatesSkuIdEdit')[0].getSelectionModel();
                modelProductSkuPids.deselectAll();
                modelProductSkuPids.setLocked(false);

                for (var i = 0; i < productsArray.length; i++) {
                    productSkuPidsStore.insert(0, productsArray[i]);
                    var index = productSkuPidsStore.indexOfId(productsArray[i].id);
                    modelProductSkuPids.select(index, true);
                }

                modelProductSkuPids.setLocked(true);
                break;
        }
    },
    onDecideType: function(grid, type) {
        var couponCost_m = grid.down('#couponCost_m'), //满
            couponCost_my = grid.down('#couponCost_my'), //满_元
            couponCost_y = grid.down('#couponCost_y'), //元
            couponCost_d = grid.down('#couponCost_d'), //打/减
            couponCost_dz = grid.down('#couponCost_dz'), //打_折/减_元
            couponCost_z = grid.down('#couponCost_z'), //折/元
            maxDiscountTextId = grid.down('#maxDiscountTextId'), //最多优惠
            maxDiscount = grid.down('[name=maxDiscount]'), //最多优惠_
            gainShopIdEdit = grid.down('#gainShopIdEdit'),
            gainGoodsShelfIdEdit = grid.down('#gainGoodsShelfIdEdit'),
            gainTemplatesSkuIdEdit = grid.down('#gainTemplatesSkuIdEdit');
        switch (type) {
            case 1:
                couponCost_m.setVisible(true);
                couponCost_my.setVisible(true);
                couponCost_y.setVisible(true);
                couponCost_d.setVisible(true);
                couponCost_dz.setVisible(true);
                couponCost_z.setVisible(true);
                maxDiscountTextId.setVisible(false);
                couponCost_d.setValue('减');
                couponCost_z.setValue('元');
                couponCost_my.setValue(couponCost_my.getValue() / 100);
                couponCost_dz.setValue(couponCost_dz.getValue() / 100);
                break;
            case 2:
                couponCost_m.setVisible(true);
                couponCost_my.setVisible(true);
                couponCost_y.setVisible(true);
                couponCost_d.setVisible(true);
                couponCost_dz.setVisible(true);
                couponCost_z.setVisible(true);
                maxDiscountTextId.setVisible(true);
                couponCost_d.setValue('打');
                couponCost_z.setValue('折');
                couponCost_my.setValue(couponCost_my.getValue() / 100);
                couponCost_dz.setValue(couponCost_dz.getValue() / 10);
                maxDiscount.setValue(maxDiscount.getValue() / 100);
                break;
            case 3:
                couponCost_m.setVisible(false);
                couponCost_my.setVisible(false);
                couponCost_y.setVisible(false);
                couponCost_d.setVisible(false);
                couponCost_dz.setVisible(false);
                couponCost_z.setVisible(false);
                maxDiscountTextId.setVisible(false);
                gainShopIdEdit.setVisible(false);
                gainGoodsShelfIdEdit.setVisible(false);
                gainTemplatesSkuIdEdit.setVisible(false);
                break;
        }
    },
    onSaveCouponEdit: function() {
        var editWindow = this.getCouponEdit(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            coupon = form.getRecord(),
            self = this;
        var url = 'coupon/modify/coupon';
        var id = coupon.get('id'),
            name = editWindow.down('[name=name]').getValue(),
            desc = editWindow.down('[name=desc]').getValue(),
            expireStartDate = (editWindow.down('[name=expireStartDate]').getValue()).getTime(),
            expireEndDate = (editWindow.down('[name=expireEndDate]').getValue()).getTime(),
            delayUseStartHours = editWindow.down('[name=delayUseStartHours]').getValue(),
            delayUseEndHours = editWindow.down('[name=delayUseEndHours]').getValue();
        var params = {
            id: id,
            name: name,
            desc: desc,
            expireStartDate: expireStartDate,
            expireEndDate: expireEndDate,
            delayUseStartHours: delayUseStartHours,
            delayUseEndHours: delayUseEndHours
        };
        sendRequest(url, params, '修改优惠券', '成功修改优惠券', '修改优惠券失败', function() {
            editWindow.close();
            self.rendenCouponList(self.getCouponList());
        });
    },

    onEditShopBtn: function() {
        var self = this,
            win = self.getCouponEdit(),
            form = win.down('form').getForm(),
            coupon = form.getRecord(),
            bindingType = coupon.get('bindingType'),
            username = localStorage.getItem('username'),
            createrName = coupon.get('createrName'),
            editShopWin = self.getCouponEditShop();

        // if (bindingType != 1 || username != createrName) {
        //     Ext.Msg.alert('提示', '你没有权限修改商店！');
        //     return;
        // }
        editShopWin.down('#bindTypeId').setValue(1);
        editShopWin.down('#keywordShopEditShop').setValue('');

        var store = Ext.create('XMLifeOperating.store.SupportedCityCoupon', {
            autoSync: false
        });
        self.getGainNewCityIdsEditShop().store.removeAll();
        self.getGainNewCityIdsEditShop().bindStore(store, false);
        var citiesArray = coupon.get('cities');
        store.load({
            callback: function(records) {
                //初始化打勾
                var model = editShopWin.down('#gainNewCityIdsEditShop').getSelectionModel();
                model.deselectAll();
                for (var j = 0; j < citiesArray.length; j++) {
                    var index = store.indexOfId(citiesArray[j]);
                    model.select(index, true);
                }
            }
        });

        var cities = citiesArray.join(',');
        var store1 = Ext.create('XMLifeOperating.store.ShopCityShops', {
            autoSync: false
        });
        var shopsArray = coupon.get('shops');
        self.getGainShopIdEditShop().store.removeAll();
        self.getGainShopIdEditShop().bindStore(store1, false);
        store1.getProxy().extraParams = {
            cities: cities
        }
        store1.load({
            callback: function() {
                //初始化打勾
                var model = editShopWin.down('#gainShopIdEditShop').getSelectionModel();
                model.deselectAll();

                for (var j = 0; j < shopsArray.length; j++) {
                    var index = store1.indexOfId(shopsArray[j].shopId);
                    model.select(index, true);
                }
            }
        });
        editShopWin.show();
    },

    onChoiceCityEditShop: function() {
        var self = this,
            couponEditWin = self.getCouponEdit(),
            form = couponEditWin.down('form').getForm(),
            coupon = form.getRecord(),
            editShopWin = self.getCouponEditShop(),
            selectModel = editShopWin.down('#gainNewCityIdsEditShop').getSelectionModel(),
            selectRecords = selectModel.getSelection(),
            cities = '';
        selectRecords.forEach(function(item) {
            if (item.get("code") != null) {
                cities += item.get('code') + ',';
            }
        });
        var s = cities;
        cities = s.substring(0, s.length - 1);
        this.cities = cities;
        if (cities == '') {
            alert('请选择城市');
            return;
        }
        var store = Ext.create('XMLifeOperating.store.ShopCityShops', {
            autoSync: false
        });
        var shopsArray = coupon.get('shops');
        self.getGainShopIdEditShop().store.removeAll();
        self.getGainShopIdEditShop().bindStore(store, false);
        store.getProxy().extraParams = {
            cities: cities
        }
        store.load({
            callback: function() {
                //初始化打勾
                var model = editShopWin.down('#gainShopIdEditShop').getSelectionModel();
                model.deselectAll();

                for (var j = 0; j < shopsArray.length; j++) {
                    var index = store.indexOfId(shopsArray[j].shopId);
                    model.select(index, true);
                }
            }
        });
    },

    onSaveEditShop: function() {
        var self = this,
            couponEditWin = self.getCouponEdit(),
            form = couponEditWin.down('form').getForm(),
            coupon = form.getRecord(),
            editShopWin = self.getCouponEditShop(),
            selectModel = editShopWin.down('#gainNewCityIdsEditShop').getSelectionModel(),
            selectRecords = selectModel.getSelection(),
            cities = [];
        selectRecords.forEach(function(item) {
            if (item.get("code") != null) {
                cities.push(item.get('code'));
            }
        });

        var shops = [];
        var selectModelShop = editShopWin.down('#gainShopIdEditShop').getSelectionModel(),
            selectRecordsShop = selectModelShop.getSelection();
        selectRecordsShop.forEach(function(item) {
            if (item.get("id") != null) {
                shops.push(item.get('id'));
            }
        });

        var params = {
            useRuleId: coupon.get('useRuleId'),
            couponId: coupon.get('id'),
            cities: cities,
            shops: shops
        };

        /*sendRequest('coupon/modify/binding/shop', params, '修改优惠券店铺', '成功修改优惠券店铺', '修改优惠券店铺失败', function(response) {
            alert(111);
            debugger;
            couponEditWin.close();
            editShopWin.close();
            self.rendenCouponList(self.getCouponList());
        },function(response){
            alert(22);
            debugger;
        });*/

        Ext.Ajax.request({
            url: XMLifeOperating.generic.Global.URL.biz + 'coupon/modify/binding/shop',
            params: params,
            method: 'POST',
            success: function(response) {
                Ext.Msg.alert('修改优惠券店铺', '成功修改优惠券店铺');
                couponEditWin.close();
                editShopWin.close();
                self.rendenCouponList(self.getCouponList());
            },
            failure: function(response, opts) {
                if(response.status == 400){
                    Ext.MessageBox.show({
                        title: '提示错误',
                        msg: '你没有权限修改商店！',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    couponEditWin.close();
                    editShopWin.close();
                }
            }
        });
    },

    onSearchShopEditShop: function() {
        var self = this,
            win = self.getCouponShopEditSearchEditShop(),
            editShopWin = self.getCouponEditShop(),
            selectModel = editShopWin.down('#gainNewCityIdsEditShop').getSelectionModel(),
            selectRecords = selectModel.getSelection(),
            cities = '';
        selectRecords.forEach(function(item) {
            if (item.get("code") != null) {
                cities += item.get('code') + ',';
            }
        });
        var s = cities;
        cities = Ext.util.Format.trim(s.substring(0, s.length - 1));
        if (cities == '') {
            alert('请选择城市');
            return;
        }

        var keywordShopValue = Ext.util.Format.trim(editShopWin.down('#keywordShopEditShop').getValue());
        if (keywordShopValue == '') {
            alert('搜索为空');
            return;
        }

        var store = Ext.create('XMLifeOperating.store.ShopNameFilter', {
            autoSync: true
        });
        store.load({
            params: {
                name: keywordShopValue,
                cities: cities
            },
            callback: function(records) {
                //初始化打勾
                var model = win.down('#searchShopListEditShop').getSelectionModel();
                model.deselectAll();

                for (var i = 0; i < records.length; i++) {
                    var index = store.indexOfId(records[i].get('id'));
                    model.select(index, true);
                }
            }
        });
        win.down('#searchShopListEditShop').bindStore(store, false);
        win.show();
    },

    onSearchShopSureEditShop: function() {

        var self = this;
        editShopWin = self.getCouponEditShop(),
            selectModelCitys = editShopWin.down('#gainNewCityIdsEditShop').getSelectionModel(),
            selectRecordsCitys = selectModelCitys.getSelection(),
            cities = '';
        selectRecordsCitys.forEach(function(item) {
            if (item.get("code") != null) {
                cities += item.get('code') + ',';
            }
        });
        var s = cities;
        cities = Ext.util.Format.trim(s.substring(0, s.length - 1));

        var editShopSearchWin = self.getCouponShopEditSearchEditShop(),
            selectModel = editShopSearchWin.down('#searchShopListEditShop').getSelectionModel(),
            selectRecords = selectModel.getSelection(),
            store = editShopWin.down('#gainShopIdEditShop').store,
            selectModelGainShops = editShopWin.down('#gainShopIdEditShop').getSelectionModel(),
            selectRecordsGainShops = selectModelGainShops.getSelection();

        store.load({
            params: {
                cities: cities
            },
            callback: function(records) {

                //初始化打勾
                var model = editShopWin.down('#gainShopIdEditShop').getSelectionModel();
                model.deselectAll();

                for (var i = 0, len = records.length; i < len; i++) {
                    for (var j = 0, lenj = selectRecords.length; j < lenj; j++) {

                        if (records[i].get('id') == selectRecords[j].get('id')) {
                            var index = store.indexOfId(records[i].get('id'));
                            model.select(index, true);
                        }

                    }

                }

                for (var i = 0, len = records.length; i < len; i++) {
                    for (var j = 0, lenj = selectRecordsGainShops.length; j < lenj; j++) {

                        if (records[i].get('id') == selectRecordsGainShops[j].get('id')) {
                            var index = store.indexOfId(records[i].get('id'));
                            model.select(index, true);
                        }

                    }
                }

            }
        });

        editShopSearchWin.close();
    }
});
