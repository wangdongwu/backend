Ext.define('XMLifeOperating.controller.CouponSend', {
  extend: 'Ext.app.Controller',

  views: [
    'couponManage.couponSend.CouponSendRuleCreateSimple',
    'couponManage.couponSend.CouponSendEditShopping',
    'couponManage.couponSend.CouponSendRuleCreateDirect',
    'couponManage.couponSend.CouponSendEditRegister',
    'couponManage.couponSend.CouponSendShopSearch',
    'couponManage.couponSend.CouponDirectRelease',
    'couponManage.couponSend.CouponRegisterRelease',
    'couponManage.couponSend.CouponShoppingRelease',
    'couponManage.couponSend.CouponUrlRelease',
    'couponManage.couponSend.CouponSendEditUrl',
    'couponManage.couponSend.CouponReleaseDirect',
    'couponManage.couponSend.CouponSendRuleUpdateSimple',
    'couponManage.couponSend.CouponSendShopEditSearch'
  ],

  stores: [
    'Coupon',
    'SupportedCityCoupon',
    'CouponSendRuleDirect',
    'CouponSendRuleUrl',
    'CouponSendRuleRegister',
    'CouponSendRuleShopping',
    'CouponSendRuleDirectStatus'
  ],
  models: ['Coupon'],
  refs: [
    {
      ref: 'CouponSendEditShopping',
      selector: 'CouponSendEditShopping',
      xtype: 'CouponSendEditShopping',
      autoCreate: true
    },
    {
      ref: 'CouponSendRuleCreateDirect',
      xtype: 'CouponSendRuleCreateDirect',
      autoCreate: true
    },
    {
      ref: 'CouponSendEditRegister',
      selector: 'CouponSendEditRegister',
      xtype: 'CouponSendEditRegister',
      autoCreate: true
    },
    {
      ref: 'CouponSendEditUrl',
      selector: 'CouponSendEditUrl',
      xtype: 'CouponSendEditUrl',
      autoCreate: true
    },
    {
      ref: 'CouponSendShopSearch',
      selector: 'CouponSendShopSearch',
      xtype: 'CouponSendShopSearch',
      autoCreate: true
    },
    {
      ref: 'CouponSendRuleUpdateSimple',
      xtype: 'CouponSendRuleUpdateSimple',
      autoCreate: true
    },
    {
      ref: 'couponReleaseDirect',
      xtype: 'couponReleaseDirect',
      autoCreate: true
    },
    {
      ref: 'searchCourierId',
      selector: '#searchCourierId'
    },
    {
      ref: 'gainShopId',
      selector: '#gainShopId'
    },
    {
      ref: 'curCity',
      selector: '#curCity'
    },
    {
      ref: 'shopList',
      selector: '#shopList'
    },
    {
      ref: 'keywordShop',
      selector: '#keywordShop'
    },
    {
      ref: 'couponSendShopEditSearch',
      selector: 'couponSendShopEditSearch',
      xtype: 'couponSendShopEditSearch',
      autoCreate: true
    },
    {
      ref: 'sendSearchShopList',
      selector: '#sendSearchShopList'
    }
  ],
  init: function () {
    var self = this;

    this.control({
      /*'gShopperList': {
       added: me.onShow,
       },*/
      'couponDirectRelease': {
        activate: function () {
          self.getCouponSendRuleDirectStore().load();
        }
      },
      'couponShoppingRelease': {
        activate: function () {
          self.getCouponSendRuleShoppingStore().load();
        }
      },
      'couponRegisterRelease': {
        activate: function () {
          self.getCouponSendRuleRegisterStore().load();
        }
      },
      'couponUrlRelease': {
        activate: function () {
          self.getCouponSendRuleUrlStore().load();
        }
      },
      'couponShoppingRelease #add': {
        click: function () {
          self.cleanWin(self.getCouponSendEditShopping());
          self.getSupportedCityCouponStore().load();
          self.getCouponSendEditShopping().show();
        }
      },
      'couponDirectRelease #add': {
        click: function () {
          self.getCouponSendRuleCreateDirect().show();
        }
      },

      'couponRegisterRelease #add': {
        click: function () {
          self.getCouponSendEditRegister().show();
        }
      },
      'couponUrlRelease #add': {
        click: function () {
          self.getCouponSendEditUrl().show();
        }
      },
      'couponShoppingRelease #update': {
        click: function () {
            self.updateSendRuleSimple(arguments[5]);
        }
      },
      'couponShoppingRelease #lookOver': {
        click: function () {
            // self.getCouponSendEditShopping().show();
            var model = arguments[5];
            // debugger
            var panel = this.getCouponSendEditShopping(),
            ruleId = panel.down('#ruleId'),
            name = panel.down('[name=name]'),
            startTime = panel.down('[name=startTime]'),
            endTime = panel.down('[name=endTime]'),
            saveButton = panel.down('#save'),
            subType = panel.down('[name=subType]'),
            couponId = panel.down('[name=couponId]'),
            benchMark = panel.down('[name=benchMark]');
            ruleId.setValue(model.get('id'));
            name.setValue(model.get('name'));
            subType.setValue(model.get('subType'));
            startTime.setValue(new Date(model.get('startTime')));
            endTime.setValue(new Date(model.get('endTime')));
            couponId.setValue(model.get('couponId'));
            benchMark.setValue(model.get('benchMark')/100);
            ruleId.setVisible(true);
            saveButton.setVisible(false);
            panel.show();


        }
      },
      'couponDirectRelease #update': {
        click: function () {
          self.updateSendRuleSimple(arguments[5]);
        }
      },

      'couponRegisterRelease #update': {
        click: function () {

          self.updateSendRuleSimple(arguments[5]);
        }
      },
      'couponUrlRelease #update': {
        click: function () {
          self.updateSendRuleSimple(arguments[5]);
        }
      },
      'couponShoppingRelease #toggleStatus': {
        click: function () {
          self.toggleSendRuleStatus(self.getCouponSendRuleShoppingStore(), arguments[5]);
        }
      },
      'couponDirectRelease #toggleStatus': {
        click: function () {
          self.toggleSendRuleStatus(self.getCouponSendRuleDirectStore(), arguments[5]);
        }
      },

      'couponRegisterRelease #toggleStatus': {
        click: function () {
          self.toggleSendRuleStatus(self.getCouponSendRuleRegisterStore(), arguments[5]);
        }
      },
      'couponUrlRelease #toggleStatus': {
        click: function () {
          self.toggleSendRuleStatus(self.getCouponSendRuleUrlStore(), arguments[5]);
        }
      },
      'CouponSendRuleUpdateSimple #update': {
        click: function (button) {
          var form = button.up('form').getForm();
          data = form.getValues();

          data.start = Date.parse(data.start);
          data.end = Date.parse(data.end);
          Ext.Ajax.request({
            url: XMLifeOperating.generic.Global.URL.biz + 'coupon/modify/rule/send',
            method: 'POST',
            params: data,
            success: function () {
              self.getCouponSendRuleDirectStore().load();
              self.getCouponSendRuleShoppingStore().load();
              self.getCouponSendRuleRegisterStore().load();
              self.getCouponSendRuleUrlStore().load();
              self.getCouponSendRuleUpdateSimple().close();
            }
          })
        }
      },
      'couponDirectRelease #release': {
        click: function () {
            self.getCouponReleaseDirect().show();
        }
      },
      'CouponSendRuleCreateDirect #save': {
        click: function (button) {
          self.createSendRuleSimple(4, button);
          button.up('window').close();
          self.getCouponSendRuleDirectStore().load();
        }
      },
      'CouponSendEditShopping #save': {
        click: function (button) {


          var editWindow = this.getCouponSendEditShopping(),
            form = editWindow.down('form').getForm(),
            self = this;
          var curCity = editWindow.down('#curCity').getValue();

          var shopList = self.getShopList(),
            selectedShopList = shopList.getSelectionModel().getSelection();

          var data = button.up('form').getForm().getValues();
          console.log(data);
          data.startTime = Date.parse(data.startTime);
          data.endTime = Date.parse(data.endTime);
          var shopIds = [];
          for (var i = 0; i < selectedShopList.length; i++) {
            shopIds.push(selectedShopList[i].get('id'))
          }
          data.shopIds = shopIds;
          data.sendType = 1;
          
          if (form.isValid()) {
              if(shopIds.length<=0){
                  alert('请选择店铺');
                  return;
              }
          }else {
              Ext.Msg.alert('Invalid Data', 'Please correct form errors');
              return;
          }

          Ext.Ajax.request({
            url: XMLifeOperating.generic.Global.URL.biz + 'coupon/add/rule/send',
            method: 'PUT',
            params: data,
            success: function () {
              button.up('window').close();
              self.getCouponSendRuleShoppingStore().load();
            }
          })

        }
      },
      'CouponSendEditUrl #save': {
        click: function (button) {
          self.createSendRuleSimple(5, button);
          button.up('window').close();
          self.getCouponSendRuleUrlStore().load();
        }
      },
      'CouponSendEditRegister #save': {
        click: function (button) {
          self.createSendRuleSimple(3, button);
          button.up('window').close();
          self.getCouponSendRuleRegisterStore().load();
        }
      },
      'CouponSendEditShopping #searchShop': {
          click:self.onSearchShop
      },
      'couponSendShopEditSearch #searchShopSure-btn':{
          click:self.onSearchShopSure
      },
      'couponReleaseDirect #ruleId': {
        click: function () {
          self.getCouponSendRuleDirectStatusStore().load();
        }
      },
      'couponReleaseDirect #release': {
        click: function (button) {
          var form = button.up('form').getForm();

          form.url = XMLifeOperating.generic.Global.URL.biz + 'coupon/send/target/user';
          var sessionId = localStorage.getItem('sessionId') || '';
          if (form.isValid()) {
            if (form.url.indexOf('sessionId') < 0) {
              form.url = form.url + '?sessionId=' + sessionId;
            }
          }
          form.submit({
            success: function () {
              button.up('window').close();
            },
            failure: function () {
              button.up('window').close();
            }
          })
        }
      },
      'CouponSendEditShopping #curCity':{
          change:self.onCurCity
      }
    });
  },
  createSendRuleSimple: function (type, button) {
    var form = button.up('form').getForm();

    form.url = XMLifeOperating.generic.Global.URL.biz + 'coupon/add/rule/send';
    var data = form.getValues();
    data.startTime = Date.parse(data.startTime);
    data.endTime = Date.parse(data.endTime);
    data.sendType = type;
    Ext.Ajax.request({
      url: form.url,
      method: 'PUT',
      params: data,
      success: function () {
        Ext.Msg.alert("success", 'success');
      }
    });
  },
  updateSendRuleSimple: function (model) {
    var panel = this.getCouponSendRuleUpdateSimple(),
      ruleId = panel.down('#ruleId'),
      name = panel.down('#name'),
      startTime = panel.down('#startTime'),
      endTime = panel.down('#endTime');

    ruleId.setValue(model.get('id'));
    name.setValue(model.get('name'));
    startTime.setValue(new Date(model.get('startTime')));
    endTime.setValue(new Date(model.get('endTime')));

    panel.show();
  },
  toggleSendRuleStatus: function (store, model) {
    var url = XMLifeOperating.generic.Global.URL.biz + 'coupon/modify/rule/send/status',
      ruleId = model.get('id'),
      status = model.get('status');

    if (status == 1) {
      params = {'ruleId': ruleId, 'enable': false};
    } else {
      params = {'ruleId': ruleId, 'enable': true};
    }
    Ext.Ajax.request({
      url: url,
      method: 'POST',
      params: params,
      success: function () {
        store.clearFilter();
        store.load();
      }
    })
  },
  onCurCity:function(combo){
      var self = this;
      var comboValue = combo.getValue();
      var store = Ext.create('XMLifeOperating.store.ShopCityShops', {
            autoSync: false
        });
      var cities = comboValue;
        self.getShopList().bindStore(store,false);
        store.getProxy().extraParams = {
                        cities:cities
                    }
        store.load();
  },
  onSearchShop:function(){
      var self = this;
      var keywordShopValue = self.getKeywordShop().getValue();
      if(keywordShopValue==''){
          alert('搜索为空');
          return;
      }
      var win = self.getCouponSendShopEditSearch();
      win.show();
      var store = Ext.create('XMLifeOperating.store.Shop', {
          proxy: new XMLifeOperating.generic.BaseProxy('shop/name/filter'),
          autoSync: false
      });
      self.getSendSearchShopList().bindStore(store, false);
      store.load({
          params: {
              name: self.getKeywordShop().getValue(),
              cities: self.getCurCity().getValue()
          },
          callback:function(records){
              //初始化打勾
              var model = Ext.ComponentQuery.query('#sendSearchShopList')[0].getSelectionModel();
              model.deselectAll();
              for (var i = 0; i < records.length; i++) {
                  var index = store.indexOfId(records[i].get('id'));
                  model.select(index, true);      
              }
          }
      });
  },
  onSearchShopSure:function(){
      var self = this;
      var selectModel = Ext.ComponentQuery.query('#sendSearchShopList')[0].getSelectionModel();
      var selectRecords = selectModel.getSelection();
      var searchShops='';
      var cities = self.getCurCity().getValue();
      var gainShopIdStore =  self.getShopList().store;

      var selectModelGainShops = Ext.ComponentQuery.query('#shopList')[0].getSelectionModel();
      var selectRecordsGainShops = selectModelGainShops.getSelection();
      
      gainShopIdStore.load({
          params:{
              cities:cities
          },
          callback: function(records) {
              //初始化打勾
              var model = Ext.ComponentQuery.query('#shopList')[0].getSelectionModel();
              model.deselectAll();

              for (var i = 0; i < records.length; i++) {
                  for(var j=0; j< selectRecords.length; j++){

                      if(records[i].get('id')==selectRecords[j].get('id')){
                          var index = gainShopIdStore.indexOfId(records[i].get('id'));
                          model.select(index, true);
                      }

                  }
                  
              }

              for(var i= 0; i<records.length;i++){
                  for(var j=0; j< selectRecordsGainShops.length; j++){

                      if(records[i].get('id')==selectRecordsGainShops[j].get('id')){
                          var index = gainShopIdStore.indexOfId(records[i].get('id'));
                          model.select(index, true);
                      }

                  }
              }

          }
      });
      var win = this.getCouponSendShopEditSearch()
      win.close();
  },
  cleanWin:function(grid){
      var self = this;
      var saveButton = grid.down('#save'),
          name = grid.down('[name=name]'),
          ruleId = grid.down('#ruleId'),
          benchMark = grid.down('[name=benchMark]'),
          curCity = grid.down('#curCity');
          /*name = grid.down('[name=name]'),
          name = grid.down('[name=name]');*/
      saveButton.setVisible(true);
      name.setValue('');
      ruleId.setVisible(false);
      self.getShopList().store.removeAll();
  }
});