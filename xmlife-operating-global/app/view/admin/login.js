Ext.define('XMLifeOperating.view.admin.login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal : true,
    width: 400,
    resizable: false,
    layout: 'card',
    buttonAlign : 'center',
    initComponent : function(){
      this.items = [
      {
            xtype: 'form',
            
            bodyPadding: 10,
            border: false,
            
          items : [
              {
                fieldLabel : '帐号',
                labelAlign : 'right',
                width : 300,
                name : 'username',
                xtype : 'textfield',
                valueField: 'value',
                queryMode:'local',
                allowBlank: false
              },
              {
                fieldLabel : '用户名',
                labelAlign : 'right',
                width : 300,
                name : 'nick',
                hidden : true,
                xtype : 'textfield',
                valueField: 'value',
                allowBlank: false
              },
              {
                fieldLabel : '密码',
                labelAlign : 'right',
                width : 300,
                name : 'password',
                xtype : 'textfield',
                inputType: 'password',
                valueField: 'value',
                allowBlank: false
              },
              {
                fieldLabel : '新密码',
                labelAlign : 'right',
                width : 300,
                name : 'newPassword',
                xtype : 'textfield',
                hidden :true,
                inputType: 'password',
                valueField: 'value',
                allowBlank: false
              },
              {
                fieldLabel : '再次输入新密码',
                labelAlign : 'right',
                width : 300,
                hidden :true,
                name : 'reNewPassword',
                xtype : 'textfield',
                inputType: 'password',
                valueField: 'value',
                allowBlank: false
              }

        ]
      }
    ];
    
    this.callParent(arguments);
    }
    ,
    buttons: [
                {
                    text: '登录',
                    itemId: 'login-bt'
                }
            ]
})