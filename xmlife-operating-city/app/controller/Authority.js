Ext.define('XMLifeOperating.controller.Authority', {
  extend: 'Ext.app.Controller',
  views: [
    'authorityManage.AuthorityList',
    'authorityManage.AuthorityAdd',
    'authorityManage.AuthorityEdit'
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
  }, {
    ref: 'authorityEdit',
    selector: '#authorityEdit',
    xtype: 'authorityEdit',
    autoCreate: true
  }],
  init: function() {
    var self = this;
    self.control({
      'authorityList': {
        show: self.renderAuthorityList
      },
      'authorityList #createCenterExecutive': {
        click: self.showAddAuthorityWindow
      },
      'authorityList #editCenterExecutive': {
        click: self.showEditAuthorityWindow
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
      'authorityList #searchCenterExecutive': {
        click: self.searchCount
      },
      'authorityAdd #save': {
        click: self.addAuthority
      },
      'authorityEdit #save': {
        click: self.editAuthority
      }
    });
  },
  renderAuthorityList: function() {
    var me = this;
    var store = me.getAdminListStore();
    store.getProxy().extraParams = {
      page: 1,
      limit: 25,
      start: 0
    }
    store.loadPage(1,{
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
  showEditAuthorityWindow: function(view, column, rowIndex, colIndex, e) {
    var me = this;
    var editWindow = me.getAuthorityEdit();
    var form = editWindow.down('form');
    var record = view.getRecord(view.findTargetByEvent(e));
    var shopAreaComboxStore = me.getShopAreaStore();
    var data = {
      account: record.get('account'),
      name: record.get('name'),
      shoparea: record.get('areaId'),
    };
    shopAreaComboxStore.load({
      callback: function() {
        form.getForm().setValues(data);
        editWindow.show();
      }
    })
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
  searchCount: function() {
    var me = this;
    var store = me.getAdminListStore();
    var view = me.getAuthorityList();
    var keywords = view.down('#centerExecutiveNameOrCount').getValue();

    store.getProxy().extraParams = {
      page: 1,
      limit: 25,
      start: 0
    }
    if (!keywords) {
      store.loadPage(1,{
        params: {
          city: XMLifeOperating.generic.Global.currentCity,
          type: 'Area'
        }
      });
    } else {
      store.loadPage(1,{
        params: {
          city: XMLifeOperating.generic.Global.currentCity,
          type: 'Area',
          keyword:keywords
        }
      })
    }
  },
  openAndCloseCount: function(view, column, rowIndex, colIndex, e) {
    var me = this;
    var store = me.getAdminListStore();
    var row = view.getRecord(view.findTargetByEvent(e));
    var account = row.get('account');
    var status = row.get('enable');
    var success = function() {
      store.getProxy().extraParams = {
        page: 1,
        limit: 25,
        start: 0
      }
      store.loadPage(1, {
        params: {
          city: XMLifeOperating.generic.Global.currentCity,
          type: 'Area'
        }
      });
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
      /*      //判断是否有该商圈账号
      store.each(function(index){
        console.log(index)
      })*/

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
        } else if (returnObj.responseText == -6) {
          Ext.MessageBox.show({
            title: '提示',
            msg: '该中心已存在账号',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });
        }
        store.getProxy().extraParams = {
          page: 1,
          limit: 25,
          start: 0
        }
        store.loadPage(1, {
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
  },
  editAuthority: function() {
    var me = this;
    var editWindow = me.getAuthorityEdit();
    var form = editWindow.down('form');
    var data = form.getForm().getValues();
    var store = me.getAdminListStore();


    var ajaxParams = {
      account: null,
      name: null,
      areaId: null
    };
    var success = function() {
      store.getProxy().extraParams = {
        page: 1,
        limit: 25,
        start: 0
      }
      store.loadPage(1, {
        params: {
          city: XMLifeOperating.generic.Global.currentCity,
          type: 'Area'
        }
      });
      editWindow.close();
    };
    var failure = function() {
      Ext.MessageBox.show({
        title: '提示',
        msg: '修改失败',
        icon: Ext.Msg.ERROR,
        buttons: Ext.Msg.OK
      });
    };
    ajaxParams.account = data.account;
    ajaxParams.name = data.name;
    ajaxParams.areaId = data.shoparea;
    if (data.password) {
      ajaxParams.pwd = data.password;
    }
    sendPutRequest('admin/update/areaAdmin', ajaxParams, '修改中心长账号', '修改中心长账号成功', '修改中心长账号失败', success, failure);

  }
})