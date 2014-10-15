Ext.define('XMLifeOperating.controller.ShopArea', {
  extend: 'Ext.app.Controller',
  views: ['shopAreaManage.shopAreaList', 'shopAreaManage.addShopArea'],
  stores: ['ShopArea'],
  models: ['ShopArea'],
  refs: [{
    ref: 'shopAreaList',
    selector: 'shopAreaList',
    xtype: 'shopAreaList',
    autoCreate: true
  }, {
    ref: 'addShopArea',
    selector: 'addShopArea',
    xtype: 'addShopArea',
    autoCreate: true
  }],
  init: function() {
    var self = this;
    self.control({
      'shopAreaList': {
        show: self.onShow
      },
      'shopAreaList #addShopArea': {
        click: function() {
          this.getAddShopArea().show();
        }
      },
      'shopAreaList #openAndCloseCenterBtn': {
        click: self.openAndCloseCenter
      },
      'shopAreaList #jumpToCenter': {
        click: self.jumpToCenter
      },
      'addShopArea #add-new-shopArea': {
        click: self.addShopArea
      }
    });
  },
  renderShopareaList: function() {
    var me = this;
    var store = me.getShopAreaStore();
    store.load({
      params: {
        city: XMLifeOperating.generic.Global.currentCity,
      }
    });
  },
  onShow: function() {
    var me = this;
    var store = me.getShopAreaStore();
    store.load();
  },
  openAndCloseCenter: function(view, column, rowIndex, colIndex, e) {
    var me = this;
    var store = me.getShopAreaStore();
    var clickDom = view.getRecord(view.findTargetByEvent(e));

    var areaId = clickDom.get('id');
    var isActive = clickDom.get('isActive');
    var success = function(responseText) {
      me.renderShopareaList();

    };
    var failure = function(responseText) {
      Ext.MessageBox.show({
        title: '提示',
        msg: '操作失败',
        icon: Ext.Msg.ERROR,
        buttons: Ext.Msg.OK
      });

    };
    var data = {
      areaId: null,
      city: null,
      isActive: null
    }
    data.areaId = areaId;
    data.city = XMLifeOperating.generic.Global.currentCity;
    data.isActive = isActive ? false : true;
    sendPutRequest('shopArea/enable/' + areaId, data, '中心操作', '操作中心成功', '操作中心失败', success, failure);
  },
  addShopArea: function() {
    var me = this;
    var store = me.getShopAreaStore();
    var addWindow = me.getAddShopArea();
    var form = addWindow.down('form');
    var data = form.getForm().getValues();

    if (form.getForm().isValid()) {
      var ajaxParamas = {
        city: XMLifeOperating.generic.Global.currentCity,
        name: data.areaName,
        address: data.shopAreaAddress
      }
      var success = function(responseText) {
        me.renderShopareaList();
        addWindow.close();
      }
      var failure = function(responseText) {
        Ext.MessageBox.show({
          title: '提示',
          msg: '操作失败',
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK
        });
      }
      sendRequest('shopArea', ajaxParamas, '添加中心', '添加中心成功', '添加中心失败', success, failure);
    } else {
      Ext.Msg.alert('Invalid Data', 'Please correct form errors');
    }

  },
  jumpToCenter: function(view, column, rowIndex, colIndex, e) {
    var me = this;
    var store = me.getShopAreaStore();
    var clickDom = view.getRecord(view.findTargetByEvent(e));
    var areaId = clickDom.get('id');
    var host = window.location.host;
    console.log(host);
    if (host.match('localhost')) {
      window.open('http://' + host + '/xmlife-operating-shoparea/'); //本地
    } else if (host.match('citybc')) {
      if (host.match('rc')) {
        
        window.open('http://cbc.rc.xiaomei.com/center-backend-client/'); //rc

      } else {
        window.open('http://cbc.xiaomei.com/center-backend-client/'); //正式
      }

    } else {
      window.open('http://' + host + '/center-backend-client/'); //dev
    }

  }
})