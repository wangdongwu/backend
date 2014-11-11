Ext.define('XMLifeOperating.controller.Coupon', {
    extend: 'Ext.app.Controller',

    views: ['couponManage.coupon.CouponList',
            'couponManage.coupon.CouponEditStep1',
            'couponManage.coupon.CouponEditStep2',
            'couponManage.coupon.CouponEditStep3',
            'couponManage.coupon.CouponShopEditSearch',
            'couponManage.coupon.CouponGoodsShelfEditSearch',
            'couponManage.coupon.CouponTemplatesEditSearch',
            'couponManage.coupon.CouponSkuEditSearch'],

    stores: ['Coupon',
             // 'ProductSkuPids'
             ],
    models: ['Coupon',
             // 'ProductSkuPids'
             ],
    refs: [{
            ref: 'couponList',
            selector: 'couponList',
            xtype: 'couponList',
            autoCreate: true
        },{
            ref: 'couponEditStep1',
            selector: 'couponEditStep1',
            xtype: 'couponEditStep1',
            autoCreate: true
        },{
            ref: 'couponEditStep2',
            selector: 'couponEditStep2',
            xtype: 'couponEditStep2',
            autoCreate: true
        },{
            ref: 'couponEditStep3',
            selector: 'couponEditStep3',
            xtype: 'couponEditStep3',
            autoCreate: true
        },{
            ref: 'gainNewCityIds',
            selector: '#gainNewCityIds',
        },{
            ref: 'keywordShop',
            selector: '#keywordShop',
        },{
            ref: 'couponShopEditSearch',
            selector: 'couponShopEditSearch',
            xtype: 'couponShopEditSearch',
            autoCreate: true
        },{
            ref: 'gainShopId',
            selector: '#gainShopId',
        },{
            ref: 'searchShopList',
            selector: '#searchShopList',
        },{
            ref: 'keywordGoodsShelf',
            selector: '#keywordGoodsShelf',
        },{
            ref: 'couponGoodsShelfEditSearch',
            selector: 'couponGoodsShelfEditSearch',
            xtype: 'couponGoodsShelfEditSearch',
            autoCreate: true
        },{
            ref: 'searchGoodsShelfList',
            selector: '#searchGoodsShelfList',
        },{
            ref: 'gainGoodsShelfId',
            selector: '#gainGoodsShelfId',
        },{
            ref: 'couponTemplatesEditSearch',
            selector: 'couponTemplatesEditSearch',
            xtype: 'couponTemplatesEditSearch',
            autoCreate: true
        },{
            ref: 'keywordTemplates',
            selector: '#keywordTemplates',
        },{
            ref: 'searchTemplatesList',
            selector: '#searchTemplatesList',
        },{
            ref: 'couponSkuEditSearch',
            selector: 'couponSkuEditSearch',
            xtype: 'couponSkuEditSearch',
            autoCreate: true
        },{
            ref: 'searchSkuList',
            selector: '#searchSkuList',
        },{
            ref: 'gainTemplatesSkuId',
            selector: '#gainTemplatesSkuId',
        }],
    init: function() {
        var self= this,
            categoryShopNameStoreArray = [],
            productSkuPidsStoreArray = [];

        this.control({
            // 'couponList': {
            //     added: me.onShow,
            // },
            'couponList' : {
                added : self.rendenCouponList,
            },
            'couponList #statusComboCoupon':{
                // change :self.onStatusCombo
                change:function(combo){
                    // self.onStatusCombo(combo);
                    var self = this;
                    var comboValue = combo.lastValue;
                    var store = self.getCouponList().store;
                    store.getProxy().extraParams={
                                        status:comboValue
                                      }
                    store.loadPage(1);
                }
            },
            'couponList #add':{
                click:self.onCouponEditStep1
            },
            'couponEditStep1 #nextButton':{
                click:self.onCouponEditStep1Next
            },
            //优惠券类型
            'couponEditStep1 #couponTypeId':{
                change:self.onCouponTypeId
            },
            'couponEditStep2 #nextButton':{
                click:self.onCouponEditStep2Next
            },
            'couponEditStep2 #prevButton':{
                click:self.onCouponEditStep2prev
            },
            'couponEditStep2 #bindTypeId':{
                change:self.onBindType
            },
            //搜索店铺
            'couponEditStep2 #searchShop':{
                click:self.onSearchShop
            },
            //确认搜索店铺
            'couponShopEditSearch #searchShopSure-btn':{
                click:self.onSearchShopSure
            },
            'couponEditStep3 #prevButton':{
                click:self.onCouponEditStep3prev
            },
            'couponEditStep2 #choiceCityId':{
                click:self.onChoiceCity
            },
            //搜索货架
            'couponEditStep2 #searchGoodsShelf':{
                click:self.onSearchGoodsShelf
            },
            'couponGoodsShelfEditSearch #searchGoodsShelfSure-btn':{
                //click:self.onSearchGoodsShelfSure
                click:function(){

                    self.onSearchGoodsShelfSure(categoryShopNameStoreArray)
                }
            },
            //搜索模板
            'couponEditStep2 #searchTemplates':{
                click:self.onSearchTemplates
            },
            'couponTemplatesEditSearch #searchTemplatesSure-btn':{
                click:self.onSearchTemplatesSure
            },
            'couponSkuEditSearch #searchSkuSure-btn':{
                // click:self.onSearchSkuSure
                click:function(){

                    self.onSearchSkuSure(productSkuPidsStoreArray)
                }
            },
            //确认
            'couponEditStep3 #ensureButton':{
                click:self.onEnsureButton
            }

        });
    },
    rendenCouponList:function(grid){
        var store = grid.store;
        // store.loadPage(1);
        store.getProxy().extraParams={
                            status:1
                          };
        store.loadPage(1);
    },
    onStatusCombo:function(combo){
        var self = this;
        var comboValue = combo.lastValue;
        var store = self.getCouponList().store;
        store.getProxy().extraParams={
                            status:comboValue
                          }
        store.loadPage(1);
    },
    onCouponEditStep1:function(){
        //var cClass = me.getShopBannerTemplateModel();
        //var template = new cClass();
        var win = this.getCouponEditStep1();
        //win.down('form').loadRecord(template);
        win.show();
    },
    onCouponEditStep1Next:function(){
        var editWindow = this.getCouponEditStep1(),
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            self = this;
            // debugger
        if (form.isValid()) {
            /*var name = editWindow.down('[name=name]').getValue(),
                desc = editWindow.down('[name=desc]').getValue(),
                type = editWindow.down('[name=type]').getValue(),
                type = editWindow.down('[name=benchMark]').getValue(),//满_元
                discountValue = editWindow.down('[name=discountValue]').getValue(),//打_折 / 减_元
                value = editWindow.down('[name=value]').getValue(),
                maxDiscount = editWindow.down('[name=maxDiscount]').getValue(),
                isNew = editWindow.down('[name=isNew]').getValue(),
                maxCouponNumHold = editWindow.down('[name=maxCouponNumHold]').getValue(),
                expireStartDate = editWindow.down('[name=expireStartDate]').getValue(),
                expireEndDate = editWindow.down('[name=expireEndDate]').getValue(),
                delayUseStartHours = editWindow.down('[name=delayUseStartHours]').getValue(),
                delayUseEndHours = editWindow.down('[name=delayUseEndHours]').getValue(),

                delayUseStartHours = editWindow.down('[name=globalCouponNum]').getValue(),//全局总共可领
                delayUseEndHours = editWindow.down('[name=globalDailyCouponNum]').getValue(),//全局每天可领
                delayUseStartHours = editWindow.down('[name=globalUserCouponNumHold]').getValue(),//每人终身可领
                delayUseEndHours = editWindow.down('[name=userDailyCouponNumHold]').getValue();//每人每天可领*/
            //form.updateRecord(cardGroup);
            //console.log(cardGroup);




        }else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
            return;
        }






        var winStep1 = this.getCouponEditStep1();
        winStep1.close();
        var winStep2 = this.getCouponEditStep2();
        winStep2.show();
        var couponType=winStep1.down('#couponTypeId').getValue();
        var choiceCityId = winStep2.down('#choiceCityId'),
            bindTypeId=winStep2.down('#bindTypeId'),


            choiceShopTextId = winStep2.down('#choiceShopTextId'),//选择店铺
            searchShopTextId = winStep2.down('#searchShopTextId'),//搜索店铺
            gainShopId = winStep2.down('#gainShopId'),//获得店铺列表
            choiceGoodsShelfTextId = winStep2.down('#choiceGoodsShelfTextId'),//选择货架
            searchGoodsShelfTextId = winStep2.down('#searchGoodsShelfTextId'),//搜索货架
            gainGoodsShelfId = winStep2.down('#gainGoodsShelfId'),//货架列表

            choiceTemplatesTextId = winStep2.down('#choiceTemplatesTextId'),//选择模板
            searchTemplatesfTextId = winStep2.down('#searchTemplatesfTextId'),//搜索模板
            gainTemplatesSkuId = winStep2.down('#gainTemplatesSkuId');//sku列表
        var bindTypeIdValue = bindTypeId.getValue();

        if(couponType==3){
            bindTypeId.setVisible(false);
        }else{
            bindTypeId.setVisible(true);
        }

        if(bindTypeIdValue<=0){
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
            this.getGainNewCityIds().bindStore(store,false);
            store.load();
        }

        
        

        



        
    },
    //优惠券类型
    onCouponTypeId:function(combo){
        var grid = this.getCouponEditStep1(),
            couponCost_m = grid.down('#couponCost_m'),//满
            couponCost_my = grid.down('#couponCost_my'),//满_元
            couponCost_y = grid.down('#couponCost_y'),//元
            couponCost_d = grid.down('#couponCost_d'),//打/减
            couponCost_dz = grid.down('#couponCost_dz'),//打_折/减_元
            couponCost_z = grid.down('#couponCost_z');//折/元
        var comboValue = combo.getValue();
        switch(comboValue){
            case 1:
                couponCost_m.setVisible(true);
                couponCost_my.setVisible(true);
                couponCost_y.setVisible(true);
                couponCost_d.setVisible(true);
                couponCost_dz.setVisible(true);
                couponCost_z.setVisible(true);
                couponCost_d.setValue('减');
                couponCost_z.setValue('元');
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
                break;
            case 3:
                couponCost_m.setVisible(false);
                couponCost_my.setVisible(false);
                couponCost_y.setVisible(false);
                couponCost_d.setVisible(false);
                couponCost_dz.setVisible(false);
                couponCost_z.setVisible(false);
                break;
        }
    },
    onCouponEditStep2Next:function(){
        
        var winStep2 = this.getCouponEditStep2(),
            editWindow = winStep2,
            windowEl = editWindow.getEl(),
            form = editWindow.down('form').getForm(),
            self = this;

        var winStep1 = this.getCouponEditStep1();
        
        var couponTypeId = winStep1.down('#couponTypeId').getValue();
        var bindingType = winStep2.down('[name=bindingType]');
        if(couponTypeId!=3){
            bindingType.allowBlank = false;
        }
        if (form.isValid()) {
            /*var selectModel = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
            var selectRecords = selectModel.getSelection();
            var shops='';
            selectRecords.forEach(function(item) {
                if (item.get("id") != null) {
                    shops+=item.get('id')+',';
                }
            });
            var s=shops;
            shops=s.substring(0,s.length-1);

            var bindings = shops;
            */

        }else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors');
            return;
        }
        winStep2.close();
        var winStep3 = this.getCouponEditStep3();
        winStep3.show();



    },
    onBindType:function(combo){
        var self = this;
        var bindType = combo.getValue();
        var winStep2 = self.getCouponEditStep2();
        var choiceCityId = winStep2.down('#choiceCityId'),
            choiceShopTextId = winStep2.down('#choiceShopTextId'),//选择店铺
            searchShopTextId = winStep2.down('#searchShopTextId'),//搜索店铺
            gainShopId = winStep2.down('#gainShopId'),//店铺列表

            choiceGoodsShelfTextId = winStep2.down('#choiceGoodsShelfTextId'),//选择货架
            searchGoodsShelfTextId = winStep2.down('#searchGoodsShelfTextId'),//搜索货架
            gainGoodsShelfId = winStep2.down('#gainGoodsShelfId'),//货架列表

            choiceTemplatesTextId = winStep2.down('#choiceTemplatesTextId'),//选择模板
            searchTemplatesfTextId = winStep2.down('#searchTemplatesfTextId'),//搜索模板
            gainTemplatesSkuId = winStep2.down('#gainTemplatesSkuId');//sku列表

        switch(bindType){
            case 1://商店
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
            case 2://货架
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
            case 3://sku
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
    onCouponEditStep2prev:function(){
        var winStep2 = this.getCouponEditStep2();
        winStep2.close();
        var winStep1 = this.getCouponEditStep1();
        winStep1.show();
    },
    onCouponEditStep3prev:function(){
        var winStep3 = this.getCouponEditStep3();
        winStep3.close();
        var winStep2 = this.getCouponEditStep2();
        winStep2.show();
    },
    onChoiceCity:function(){
        var self = this;
        var selectModel = Ext.ComponentQuery.query('#gainNewCityIds')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var cities='';
        selectRecords.forEach(function(item) {
            if (item.get("code") != null) {
                cities+=item.get('code')+',';
            }
        });
        var s=cities;
        cities=s.substring(0,s.length-1);
        this.cities = cities;
        var store = Ext.create('XMLifeOperating.store.ShopCityShops', {
            autoSync: true
        });
        self.getGainShopId().bindStore(store,false);
        store.getProxy().extraParams = {
                        cities:cities
                    }
        store.load();
        
    },
    onSearchShop:function(){
        var self = this;
        var cities = this.cities;
        if(cities==''){
            alert('请选择城市');
            return;
        }
        var keywordShopValue = self.getKeywordShop().getValue();
        if(keywordShopValue==''){
            alert('搜索为空');
            return;
        }
        var win = self.getCouponShopEditSearch();
        win.show();
        var store = Ext.create('XMLifeOperating.store.ShopNameFilter', {
            autoSync: true
        });
        store.load({
            params:{
                name:keywordShopValue,
                cities:cities
            }
        });
        self.getSearchShopList().bindStore(store, false);
    },
    onSearchShopSure:function(){
        var self = this;
        var selectModel = Ext.ComponentQuery.query('#searchShopList')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var searchShops='';
        var cities = this.cities;
        var gainShopIdStore =  self.getGainShopId().store;
        self.getGainShopId().bindStore(gainShopIdStore,false);

        gainShopIdStore.load({
            params:{
                cities:cities
            },
            callback: function(records) {
                //初始化打勾
                var model = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
                model.deselectAll();

                for (var i = 0; i < records.length; i++) {
                    for(var j=0; j< selectRecords.length; j++){
                        if(records[i].get('id')==selectRecords[j].get('id')){
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
    onSearchGoodsShelf:function(){
        var self = this;
        var cities = this.cities;
        if(cities==''){
            alert('请选择城市');
            return;
        }
        var selectModel = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var shops='';
        selectRecords.forEach(function(item) {
            if (item.get("id") != null) {
                shops+=item.get('id')+',';
            }
        });
        var s=shops;
        shops=s.substring(0,s.length-1);
        var keywordGoodsShelfValue = self.getKeywordGoodsShelf().getValue();
        if(keywordGoodsShelfValue==''){
            alert('搜索为空');
            return;
        }
        var win = self.getCouponGoodsShelfEditSearch();
        win.show();
        var store = Ext.create('XMLifeOperating.store.CategoryShopName', {
                        autoSync: true
                    });
        store.load({
            params:{
                name:keywordGoodsShelfValue,
                shops:shops
            },
            callback:function(records){
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
    onSearchGoodsShelfSure:function(categoryShopNameStoreArray){
        var self = this;
        var selectModel = Ext.ComponentQuery.query('#searchGoodsShelfList')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var categoryShopNameStore = Ext.create('XMLifeOperating.store.CategoryShopName', {
                        autoSync: true
                    });
        self.getGainGoodsShelfId().bindStore(categoryShopNameStore, false);
        for(var j=0; j< selectRecords.length; j++){
             categoryShopNameStoreArray.push(selectRecords[j]);
        }
        var model = Ext.ComponentQuery.query('#gainGoodsShelfId')[0].getSelectionModel();
                model.deselectAll();
        for(var i=0; i< categoryShopNameStoreArray.length; i++){
            categoryShopNameStore.insert(0,categoryShopNameStoreArray[i]);
            var index = categoryShopNameStore.indexOfId(categoryShopNameStoreArray[i].get('id'));
            model.select(index, true);
        }
        var win = this.getCouponGoodsShelfEditSearch();
        win.close();
        
    },
    onSearchTemplates:function(){
        var self = this;
        var keywordTemplatesValue = self.getKeywordTemplates().getValue();
        if(keywordTemplatesValue==''){
            alert('搜索为空');
            return;
        }
        var win = self.getCouponTemplatesEditSearch();
        win.show();
        var store = Ext.create('XMLifeOperating.store.ProductTemplateCoupon', {
                        autoSync: true
                    });
        store.load({
            params:{
                keyword:keywordTemplatesValue
            },
            callback:function(records){
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
    onSearchTemplatesSure:function(){
        var self = this;
        //shops
        var selectModel = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var shops='';
        selectRecords.forEach(function(item) {
            if (item.get("id") != null) {
                shops+=item.get('id')+',';
            }
        });
        var s=shops;
        shops=s.substring(0,s.length-1);
        console.log(shops);
        //templates
        var selectModel = Ext.ComponentQuery.query('#searchTemplatesList')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var templates='';
        selectRecords.forEach(function(item) {
            if (item.get("id") != null) {
                templates+=item.get('id')+',';
            }
        });
        var s=templates;
        templates=s.substring(0,s.length-1);

        // var winTemplatesEdit = self.getCouponTemplatesEditSearch();
        // winTemplatesEdit.close();
        var winSkuEdit = self.getCouponSkuEditSearch();

        winSkuEdit.show();
        var store = Ext.create('XMLifeOperating.store.ProductSkuPids', {
                        autoSync: true
                    });
        // var store = self.getProductSkuPidsStore;
        store.load({
            params:{
                shops:shops,
                templates:templates
            },
            callback:function(records){
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
    onSearchSkuSure:function(productSkuPidsStoreArray){
        var self = this;
        var selectModel = Ext.ComponentQuery.query('#searchSkuList')[0].getSelectionModel();
        var selectRecords = selectModel.getSelection();
        var productSkuPidsStore = Ext.create('XMLifeOperating.store.ProductSkuPids', {
                        autoSync: true
                    });
        self.getGainTemplatesSkuId().bindStore(productSkuPidsStore, false);


        /*if(productSkuPidsStoreArray.length==0){
            productSkuPidsStoreArray.push(selectRecords[j]);
        }*/
        for(var j=0; j< selectRecords.length; j++){
            //if(productSkuPidsStoreArray.length==0){
             //   console.log(22222);
                productSkuPidsStoreArray.push(selectRecords[j]);

            /*}else{
                console.log(111);
                console.log(productSkuPidsStoreArray);
                for(var i=0; i<productSkuPidsStoreArray.length; i++){
                    if(selectRecords[j].get('pid')){
                        return;
                    }else{
                        productSkuPidsStoreArray.push(selectRecords[j]);
                    }
                }
            }*/
            
             
        }
        var model = Ext.ComponentQuery.query('#gainTemplatesSkuId')[0].getSelectionModel();
        model.deselectAll();




        for(var i=0; i< productSkuPidsStoreArray.length; i++){


            

            var index = productSkuPidsStore.indexOfId(productSkuPidsStoreArray[i].get('pid'));
            if(index<0){
                productSkuPidsStore.insert(0,productSkuPidsStoreArray[i]);
            }
            console.log(index);
            model.select(index, true);


        }
        console.log(productSkuPidsStoreArray);
        console.log(productSkuPidsStore);






        var winTemplatesEdit = self.getCouponTemplatesEditSearch();
        winTemplatesEdit.close();
        var winSkuEdit = self.getCouponSkuEditSearch();
        winSkuEdit.close();
    },
    onEnsureButton:function(){
        var self = this,
            winStep1 = self.getCouponEditStep1(),
            winStep2 = self.getCouponEditStep2(),
            winStep3 = self.getCouponEditStep3(),
            editWindow = winStep1;
        var name = editWindow.down('[name=name]').getValue(),
            desc = editWindow.down('[name=desc]').getValue(),
            type = editWindow.down('[name=type]').getValue(),
            benchMark = editWindow.down('[name=benchMark]').getValue(),//满_元
            discountValue = editWindow.down('[name=discountValue]').getValue(),//打_折 / 减_元
            value = editWindow.down('[name=value]').getValue(),
            maxDiscount = editWindow.down('[name=maxDiscount]').getValue(),
            isNew = editWindow.down('[name=isNew]').getValue(),
            maxCouponNumHold = editWindow.down('[name=maxCouponNumHold]').getValue(),
            expireStartDate = (editWindow.down('[name=expireStartDate]').getValue()).getTime(),
            expireEndDate = (editWindow.down('[name=expireEndDate]').getValue()).getTime(),
            delayUseStartHours = editWindow.down('[name=delayUseStartHours]').getValue(),
            delayUseEndHours = editWindow.down('[name=delayUseEndHours]').getValue(),

            globalCouponNum = editWindow.down('[name=globalCouponNum]').getValue(),//全局总共可领
            globalDailyCouponNum = editWindow.down('[name=globalDailyCouponNum]').getValue(),//全局每天可领
            globalUserCouponNumHold = editWindow.down('[name=globalUserCouponNumHold]').getValue(),//每人终身可领
            userDailyCouponNumHold = editWindow.down('[name=userDailyCouponNumHold]').getValue();//每人每天可领*/

        //winStep2
        var bindingType = winStep2.down('[name=bindingType]').getValue();
        var bindings='';

        switch(bindingType){
            case 1:
                var selectModel = Ext.ComponentQuery.query('#gainShopId')[0].getSelectionModel();
                var selectRecords = selectModel.getSelection();
                var shops=[];
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
                var goodsShelfs=[];
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
                var skus=[];
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
        if(channel==true){
            channel=1;
        }else{
            channel=0;
        }
        var url = 'coupon/add/coupon';
        var params = {
                       name:name,
                       desc:desc,
                       type:type,
                       benchMark:benchMark,
                       discountValue:discountValue,
                       value:value,
                       maxDiscount:maxDiscount,
                       isNew:isNew,
                       maxCouponNumHold:maxCouponNumHold,
                       expireStartDate:expireStartDate,
                       expireEndDate:expireEndDate,
                       delayUseStartHours:delayUseStartHours,
                       delayUseEndHours:delayUseEndHours,
                       globalCouponNum:globalCouponNum,
                       globalDailyCouponNum:globalDailyCouponNum,
                       globalUserCouponNumHold:globalUserCouponNumHold,
                       userDailyCouponNumHold:userDailyCouponNumHold,
                       bindingType:bindingType,
                       bindings:bindings,
                       channel:channel};
        sendRequest(url,params,'添加优惠券','成功添加优惠券','添加优惠券失败',function(){
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
                            });
    }

});
