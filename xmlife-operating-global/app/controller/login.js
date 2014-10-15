Ext.define('XMLifeOperating.controller.login', {
    extend: 'Ext.app.Controller',
    views : ['login','Toolbar','Navigation'],
    stores : ['Navigation'],
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
          'headerToolbar #txtUserName' : {
          click : function(){
            var sessionId = localStorage.getItem('sessionId');
            if(!sessionId){
              this.getLogin().show();
            }
          }
        }
        }
        )
      }else{
        //self.getCurrentUsername().setText(username);
        Ext.Ajax.defaultHeaders = {'auth-token' : sessionId};
        self.getNavigationStore().setRootNode({expanded:true});
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
            params: {user:username,pwd:password,type:"Global"},
            method: 'post',
            success : function(response){
              if(response.responseText){
                var data =  Ext.JSON.decode(response.responseText);
                /*本地储存信息*/
                localStorage.setItem("sessionId", data.sessionId);
                localStorage.setItem("username", username);
                /*更改页头*/
                Ext.Ajax.defaultHeaders = {
                    'auth-token' : data.sessionId
                };
                /*设置用户名字*/
                self.getCurrentUsername().setText(username);
                /*加载tree*/
                self.getNavigationStore().setRootNode({expanded:true});

                view.hide();
              }
            },
            failure : function(response){
              if(response.status==401){
                var data = {
                  'Unauthorized' : '对不起，你登录失败了，请重新登录'
                };
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

