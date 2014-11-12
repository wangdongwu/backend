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
    'couponManage.couponSend.CouponSendRuleUpdateSimple'
  ],

  stores: [
    'Coupon',
    'SupportedCityCoupon',
    'Deliverer',
    'CouponSendRuleDirect',
    'CouponSendRuleUrl',
    'CouponSendRuleRegister',
    'CouponSendRuleShopping'
  ],
  models: ['Coupon',
    'Deliverer'],
  refs: [
    {
      ref: 'couponSendEditShopping',
      selector: 'couponSendEditShopping',
      xtype: 'couponSendEditShopping',
      autoCreate: true
    },
    {
      ref: 'couponSendRuleCreateDirect',
      xtype: 'CouponSendRuleCreateDirect',
      autoCreate: true
    },
    {
      ref: 'couponSendEditRegister',
      selector: 'couponSendEditRegister',
      xtype: 'couponSendEditRegister',
      autoCreate: true
    },
    {
      ref: 'couponSendEditUrl',
      selector: 'couponSendEditUrl',
      xtype: 'couponSendEditUrl',
      autoCreate: true
    },
    {
      ref: 'couponSendShopSearch',
      selector: 'couponSendShopSearch',
      xtype: 'couponSendShopSearch',
      autoCreate: true
    },
    {
      ref: 'couponSendRuleUpdateSimple',
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
      'couponSendEditShopping #save': {
        click: function (button) {
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
      'couponSendEditUrl #save': {
        click: function (button) {
          self.createSendRuleSimple(5, button);
          button.up('window').close();
          self.getCouponSendRuleUrlStore().load();
        }
      },
      'couponSendEditRegister #save': {
        click: function (button) {
          self.createSendRuleSimple(3, button);
          button.up('window').close();
          self.getCouponSendRuleRegisterStore().load();
        }
      },
      'couponSendEditShopping #searchShop': {
        click: function () {
          var store1 = Ext.create('XMLifeOperating.store.Shop', {
            proxy: new XMLifeOperating.generic.BaseProxy('shop/name/filter'),
            autoSync: true
          });
          self.getShopList().bindStore(store1, false);

          var store = this.getShopList().store;
          store.load({
            params: {
              name: self.getKeywordShop().getValue(),
              cities: self.getCurCity().getValue()
            }
          });
        }
      },
      'couponReleaseDirect #ruleId': {
        click: function () {
          self.getCouponSendRuleDirectStore().load();
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
  }
});