Ext.define('XMLifeOperating.controller.login', {
  extend: 'Ext.app.Controller',
  views: ['login', 'Toolbar','Navigation'],
  stores:['ShopArea','Navigation'],
  models:['ShopArea'],
  refs: [{
    ref: 'login',
    selector: 'login',
    xtype: 'login',
    autoCreate: true
  }, {
    ref: 'headerToolbar',
    selector: 'headerToolbar',
    xtype: 'headerToolbar',
    autoCreate: true
  }, {
    ref: 'currentUsername',
    selector: '#txtUserName'
  }, {
    ref: 'cmbGlobalCity',
    selector: '#cmbGlobalCity'
  }, {
    ref: 'cmbGlobalCenter',
    selector: 'headerToolbar #cmbGlobalCenter',
  },{
    ref: 'txtShopAreaName',
    selector:'headerToolbar #txtShopAreaName'
  }],
  init: function() {
    var self = this;
    var sessionId = localStorage.getItem('sessionId');
    var areaId = localStorage.getItem('areaId');

    XMLifeOperating.generic.Global.current_operating = areaId;
    if (!sessionId) {
      this.getLogin().show();
      this.control({
        '#login-bt': {
          click: self.login
        }
      })
    } else {
      Ext.Ajax.defaultHeaders = {
        'auth-token': sessionId
      };
      this.getShopAreaStore().load();
      //Ext.getCmp('cmbGlobalCenter').setValue(areaId);
      self.getNavigationStore().setRootNode({expanded:true});
    }
  },
  login: function() {
    var self = this,
      view = this.getLogin(),
      username = view.down('[name=username]').getValue(),
      password = view.down('[name=password]').getValue(),
      loginUrl = XMLifeOperating.generic.Global.URL.biz + 'admin/login';
    Ext.Ajax.request({
      url: loginUrl,
      params: {
        user: username,
        pwd: password
      },
      method: 'post',
      success: function(response) {
        if (response.responseText) {
          var data = Ext.JSON.decode(response.responseText);
          localStorage.setItem("sessionId", data.sessionId);
          localStorage.setItem("username", username);
          localStorage.setItem("areaId",data.areaId);
          localStorage.setItem("areaName",data.areaName);
          XMLifeOperating.generic.Global.current_operating=data.areaId;
          Ext.Ajax.defaultHeaders = {
            'auth-token': data.sessionId
          };
          self.getCurrentUsername().setText(username);
          /*加载tree*/
          self.getNavigationStore().setRootNode({expanded:true});

          view.hide();
          self.getShopAreaStore().load();
          //Ext.getCmp('cmbGlobalCenter').setValue(data.areaId);
          self.getTxtShopAreaName().setText(data.areaName);
          console.log(Ext.getCmp('cmbGlobalCenter').getValue());
        }
      },
      failure: function(response) {
        if (response.status == 401) {
          var data = {
            'Unauthorized': '对不起，你登录失败了，请重新登录'
          }
          Ext.MessageBox.show({
            title: '登录失败',
            msg: data[response.statusText],
            buttons: Ext.Msg.OK
          });
        }
      }
    });
  }
});