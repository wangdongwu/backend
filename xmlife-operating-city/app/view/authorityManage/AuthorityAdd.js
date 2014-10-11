Ext.define('XMLifeOperating.view.authorityManage.AuthorityAdd', {
  extend: 'Ext.window.Window',
  id: 'authorityAdd',
  xtype: 'authorityAdd',
  alias: 'widget.authorityAdd',
  title: '创建中心长账号',
  width: 300,
  height: 350,
  resizable: false,
  layout: 'fit',
  items: [{
    xtype: 'form',
    frame: true,
    style: 'border:none;padding:10px',
    id:'authorityAddForm',
    items: [{
      xtype: 'textfield',
      name: 'name',
      fieldLabel: '姓名',
      allowBlank: false
    }, {
      xtype: 'textfield',
      name: 'account',
      fieldLabel: '账号',
      allowBlank: false,
      validator: function(value) {
        var value = value;
        var length = 0;
        for (var i = 0, len = value.length; i < len; i++) {
          var chart = value.charCodeAt(i);
          if (chart >= 0 && chart <= 255) {
            length = length + 1;
          } else {
           return '账号只能为2~12位数字或字母'
          }
        }
        if (length < 2) {
          return '账号最小长度为2位数字或字母'
        }
        if (length > 12) {
          return '账号最大长度为12位数字或字母'
        } else {
          return true
        }
      }
    }, {
      xtype: 'textfield',
      name: 'password',
      fieldLabel: '密码',
      allowBlank: false,
      validator: function(value) {
        var value = value;
        var length = 0;
        for (var i = 0, len = value.length; i < len; i++) {
          var chart = value.charCodeAt(i);
          if (chart >= 0 && chart <= 255) {
            length = length + 1;
          } else {
          return '密码只能为6~32位数字或字母'
          }
        }
        if (length < 6) {
          return '密码最小长度为6位数字或字母'
        }
        if (length > 32) {
          return '密码最大长度为32位数字或字母'
        } else {
          return true
        }
      }
    }, {
      xtype: 'combo',
      name: 'shoparea',
      fieldLabel: '中心',
      store: 'ShopArea',
      valueField: 'id',
      displayField: 'name',
      allowBlank: false
    }],
    buttons: [{
      text: '保存',
      itemId: 'save'
    }, {
      text: '取消',
      handler: function() {
        //关闭窗口
        Ext.ComponentQuery.query('authorityAdd')[0].close();
      }
    }]
  }]

});