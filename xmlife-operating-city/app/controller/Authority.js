Ext.define('XMLifeOperating.controller.Authority', {
  extend: 'Ext.app.Controller',
  views: [
    'authorityManage.AuthorityList',
    'authorityManage.AuthorityAdd'
  ],
  stores: ['AdminList', 'ShopArea'],
  models: ['AdminList', 'ShopArea'],
  refs: [{
    ref: 'authorityList',
    selector: 'authorityList',
    xtype: 'authorityList',
    autoCreate: true
  }, {
    ref: 'contentPanel',
    selector: '#contentPanel',
    xtype: 'panel'
  }, {
    ref: 'authorityAdd',
    selector: '#authorityAdd',
    xtype: 'authorityAdd',
    autoCreate: true
  }],
  init: function() {
    var self = this;
    self.control({
      'authorityList': {
        added: self.renderAuthorityList
      },
      'authorityList #createCenterExecutive': {
        click: self.showAddAuthorityWindow
      },
      'authorityList #centerExecutiveOpenCount': {
        click: self.showOpenCount

      },
      'authorityList #centerExecutiveCloseCount': {
        click: self.showCloseCount
      },
      'authorityList #centerExecutiveNameOrCount': {
        click: self.searchCount
      },
      'authorityList #openAndCloseCountBtn': {
        click: self.openAndCloseCount
      },
      'authorityAdd #save': {
        click: self.addAuthority
      }

    });
  },
  renderAuthorityList: function() {
    var me = this;
    var store = me.getAdminListStore();
    store.load({
      params: {
        city: XMLifeOperating.generic.Global.currentCity,
        type: 'Area'
      }
    });

  },
  showAddAuthorityWindow: function() {
    var me = this;
    var addWindow = me.getAuthorityAdd();
    var form = addWindow.down('form');
    addWindow.show();
  },
  showOpenCount: function() {
    var me = this;
    var store = me.getAdminListStore();

    store.filterBy(function(record, id) {
      return record.get('enable') == true;
    });

  },
  showCloseCount: function() {
    var me = this;
    var store = me.getAdminListStore();
    store.filterBy(function(record, id) {
      return record.get('enable') == false;
    });

  },
  searchCount: function() {},
  openAndCloseCount: function(view, column, rowIndex, colIndex, e) {
    var me = this;
    var store = me.getAdminListStore();
    var row = view.getRecord(view.findTargetByEvent(e));
    var account = row.get('acount');
    var status = row.get('enable');
    var success = function() {
      store.load({
        params: {
          city: XMLifeOperating.generic.Global.currentCity,
          type: 'Area'
        }
      })
    };
    var failure = function() {
      Ext.MessageBox.show({
        title: '提示',
        msg: '操作失败',
        icon: Ext.Msg.ERROR,
        buttons: Ext.Msg.OK
      });
    };
    if (status) {
      sendPutRequest('admin/disable/' + account, null, '注销账号', '注销账号成功', '注销账号失败', success, failure);
    } else {
      sendPutRequest('admin/enable/' + account, null, '注销账号', '注销账号成功', '注销账号失败', success, failure);
    }

  },
  addAuthority: function() {
    var me = this;
    var addWindow = me.getAuthorityAdd();
    var addWindowEl = addWindow.getEl();
    var form = addWindow.down('form').getForm();
    var data = form.getValues();
    var store = me.getAdminListStore();
    if (form.isValid()) {
      //Ajax参数
      var ajaxParams = {
        account: null,
        pwd: null,
        name: null,
        areaId: null
      };
      var success = function(returnObj) {
        if (returnObj.responseText == -2) {
          Ext.MessageBox.show({
            title: '提示',
            msg: '该账户名已存在',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });
        }
        store.load({
          params: {
            city: XMLifeOperating.generic.Global.currentCity,
            type: 'Area'
          }
        })
        addWindowEl.unmask();
        addWindow.close();
      };
      var failure = function() {
        Ext.MessageBox.show({
          title: '提示',
          msg: '添加失败',
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK
        });
        addWindowEl.unmask();
      };
      if (data.name) {
        ajaxParams.name = data.name;
      } else {
        Ext.Msg.alert('错误', '姓名为必填！');
      }
      if (data.account) {
        ajaxParams.account = data.account;
      } else {
        Ext.Msg.alert('错误', '账号为必填！');
      }
      if (data.password) {
        ajaxParams.pwd = data.password;
      } else {
        Ext.Msg.alert('错误', '密码为必填！');
      }
      if (data.shoparea) {
        ajaxParams.areaId = data.shoparea;
      } else {
        Ext.Msg.alert('错误', '中心为必填！');
      }
      addWindowEl.mask();
      sendRequest('admin/create/areaAdmin', ajaxParams, '创建中心长', '创建中心长成功', '创建中心长失败', success, failure);
    } else {
      Ext.Msg.alert('错误', '请确认表单输入格式');
    }
  }
})