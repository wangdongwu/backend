Ext.define('XMLifeOperating.controller.login', {
    extend: 'Ext.app.Controller',
    views : ['login','Toolbar'],
    refs : [
        {
             ref: 'login',
             selector: 'login',
             xtype: 'login',
             autoCreate: true
        },
        {
          ref : 'headerToolbar',
          selector : 'headerToolbar',
          xtype: 'headerToolbar',
          autoCreate: true
        },
        {
          ref: 'currentUsername',
          selector: '#txtUserName'
      },
      {
        ref : 'cmbGlobalCity',
        selector : '#cmbGlobalCity'
      }
    ],
    init : function(){
      var self = this;
      var sessionId = localStorage.getItem('sessionId');

      if(!sessionId){
        this.getLogin().show();
        this.control({
          '#login-bt' : {
            click : self.login
          },
          'Toolbar':{
            added : function(){
                    debugger
                  }
          }
        })
      }else{
        //self.getCurrentUsername().setText(username);
        Ext.Ajax.defaultHeaders = {
                    'auth-token' : sessionId
                  }
      }
    },
    login : function(){
      var self = this,
          view = this.getLogin(),
          username = view.down('[name=username]').getValue(),
          password = view.down('[name=password]').getValue(),
          loginUrl = XMLifeOperating.generic.Global.URL.biz + 'admin/login';

          Ext.Ajax.request({
            url: loginUrl,
            params: {user:username,pwd:password},
            method: 'post',
            success : function(response){
              if(response.responseText){
                var data =  Ext.JSON.decode(response.responseText);
                localStorage.setItem("sessionId", data.sessionId);
                localStorage.setItem("username", username);
                Ext.Ajax.defaultHeaders = {
                    'auth-token' : data.sessionId
                };
                self.getCurrentUsername().setText(username);
                view.hide();
              }
            },
            failure : function(response){
              debugger;
              if(response.status==401){
                var data = {
                  'Unauthorized' : '对不起，你登录失败了，请重新登录'
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
