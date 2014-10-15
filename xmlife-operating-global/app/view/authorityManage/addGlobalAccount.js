/**
 * @class XMLifeOperating.view.authorityManage.addGlobalAccount
 * @Ext.window.Windowss
 * Description
 */
Ext.define('XMLifeOperating.view.authorityManage.addGlobalAccount', {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    id : 'addGlobalAccount',
    xtype : 'addGlobalAccount',
    alias : 'widget.addGlobalAccount',
    title : '创建管理员账号',
    width : 350,
    closeAction: 'hide',
    modal: true,
    layout : 'fit',
    resizable: false,
    bodyPadding : '10 20',
    items : [{
      xtype : 'form',
      edit : false,
      url : XMLifeOperating.generic.Global.URL.biz+'admin/create/globalAdmin',
      editUrl : XMLifeOperating.generic.Global.URL.biz+'admin/update/globalAdmin',
      defaults : {
        bodyPadding : 5
      },
      items : [{
      xtype : 'fieldcontainer',
      defaultType : 'textfield',
      defaults : {
        labelWidth : 50,
        width : 280
      },
      items : [
        {
          fieldLabel : '姓名',
          name : 'name'
        },
        {
          fieldLabel : '账号',
          name : 'account',
          itemId : 'accountField'
        },
        {
          fieldLabel : '密码',
          inputType: 'password',
          name : 'pwd'
        }
      ]
    },
    {
      xtype : 'checkboxgroup',
      fieldLabel : '权限管理(可多选:)',
      defaultType: 'checkboxfield',
      width : 300,
      labelWidth : 60,
      columns: 2,
      vertical: true,
      items : []
    },
    {
      xtype : 'checkbox',
      boxLabel  : '城市权限管理',
      name      : 'topping',
      inputValue: '2'
      
    },
    {
        xtype: 'checkbox',
        boxLabel  : '杭州',
        name      : 'cities',
        inputValue: '330100'
      },
    {
      xtype : 'radiogroup',
      width : 300,
      columns: 4,
      vertical: true,
      items : []
    }
    ]
    }],
    buttons : [{
      text : '取消',
      handler : function(){
        this.up('window').close();
      }
    },{
      itemId : 'submit',
      text : '确定'
    }]
});