Ext.define('XMLifeOperating.generic.BaseProxy', {
    requires: ['XMLifeOperating.generic.Global'],
    extend: 'Ext.data.proxy.Rest',
    reader: 'json',

    constructor: function(resourceURL,root) {
        if(!resourceURL || resourceURL.length < 1) {
            alert("bad resourceURL");
        }
        if(resourceURL == 'auth'){
            this.url = "http://192.168.5.190:9999/rest/";
        }else{
            this.url = XMLifeOperating.generic.Global.URL.biz + resourceURL;
        }
        var sessionId = localStorage.getItem('sessionId');
        if(sessionId){
            this.headers = {
                'auth-token' : sessionId
            };  
        }
        if(root){
          this.reader = {
            type : 'json',
            root : root,
            totalProperty : 'total'
          }
        }
        this.callParent(arguments);
    },

    listeners: {
        exception: function(proxy, response, options) {
            var title = response.statusText,
                responseText = response.responseText,
                errorObj = {},
                msg;
            try {
                var error = (responseText && responseText.length > 1) ? Ext.decode(responseText) : null;

                if (error) {
                    msg = Ext.String.format('Error Code: {0}<br />Message: {1}', error.code, error.message);
                } else {
                    errorObj = requestException(response);
                    title = errorObj.title;
                    msg = errorObj.msg;
                }
            } catch(err) {
                msg = Ext.String.format('Fail to handle exception message:<br />{0}<br /><br />URL: {1}', err.message, proxy.url);
                title = 'Unexpected Return';
            }

            var ErrorMessage = Ext.MessageBox.show({
                title: title,
                msg: msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            }).toBack();

            //if(responseText == '-3'){

              /*ErrorMessage.on('hide',function(){
              localStorage.removeItem('sessionId');
              localStorage.removeItem('username');
              window.location.reload();
            });*/  

            //}
            

        }
    }
});

//Ext.Ajax.cors = true;
function requestException(response){
  var responseText = response.responseText,
      errorObj = {};
  if(response.status == 401){
      localStorage.removeItem('sessionId');
      localStorage.removeItem('username');
      Ext.Msg.alert('提示', '用户名或者密码错误');
      return false;
    }
    if(response.status == 403){
      localStorage.removeItem('sessionId');
      localStorage.removeItem('username');
      Ext.Msg.alert('提示', 'session失效或者没有登录');
      return false;
    }
    if(response.status == 405){
      Ext.Msg.alert('提示', '访问了一个不应该被访问的路径');
      return false;
    }
    if(response.status == 0){
      Ext.Msg.alert('提示', '数据接口有问题....请找服务器端确认');
      return false;
    }
    switch (responseText) {
        case '-2':
             title = '提示';
             msg = '参数出错';
          break;
        case '-3':
          title = '请重新登录';
          msg = '您还没有登录或已登录过期请重新登录';
          break;
        case '-4':
            title = '提示';
            msg = '数据库端出错';
          break;
        case '-6':
            title = '提示';
            msg = '你没有权限做当前操作，请去申请相应的权限';
          break;
      }
  errorObj.title = title;
  errorObj.msg = msg;
  return errorObj;
}
window.sendRequest = function(url, params, title, successMsg, errorMsg, success, failure) {
    if(!url || url.length < 1) {
        alert("bad url");
    }
    var newUrl;
    if(url == 'auth'){
        newUrl = "http://192.168.5.190:9999/rest/";
    }else{
        newUrl = XMLifeOperating.generic.Global.URL.biz + url;
    }
    Ext.Ajax.request({
        url: newUrl,
        params: params,
        success: function(response){
            Ext.MessageBox.show({
                title: title,
                msg: successMsg,
                icon: Ext.Msg.INFO,
                buttons: Ext.Msg.OK
            });
            if (success) {
                success(response);
            }
        },
        failure: function(response,opts) {   
            var error = Ext.decode(response.responseText);
            var msg = Ext.String.format('{0}<br />Error Code: {1}<br />Message: {2}', errorMsg, error.code, error.message)
            Ext.MessageBox.show({
                title: title,
                msg: msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });

            if (failure) {
                failure(response);
            }
        }              
    });    
}

window.sendGetRequest = function(url, params, title, successMsg, errorMsg, success, failure) {
    var method = 'GET';
    requestAction(url, params, method, title, successMsg, errorMsg, success, failure);
}

window.sendPutRequest = function(url, params, title, successMsg, errorMsg, success, failure) {
    var method = 'PUT';
    requestAction(url, params, method, title, successMsg, errorMsg, success, failure);
}

window.sendDeleteRequest = function(url, params, title, successMsg, errorMsg, success, failure) {
    var method = 'DELETE';
    requestAction(url, params, method, title, successMsg, errorMsg, success, failure);
}

var requestAction = function(url, params, method, title, successMsg, errorMsg, success, failure) {
    if(!url || url.length < 1) {
        alert("bad url");
    }
    var newUrl;
    if(url == 'auth'){
        newUrl = "http://192.168.5.190:9999/rest/auth";
    }else{
        newUrl = XMLifeOperating.generic.Global.URL.biz + url;
    }
    Ext.Ajax.request({
        url: newUrl,
        params: params,
        method: method,
        success: function(response){
            /*Ext.MessageBox.show({
                title: title,
                msg: successMsg,
                icon: Ext.Msg.INFO,
                buttons: Ext.Msg.OK
            });*/

            if (success) {
                success(response);
            }
        },
        failure: function(response,opts) {
            var errorObj = requestException(response);
            if(response.status && response.responseText!=''){
                 var error = Ext.decode(response.responseText);
            }
            Ext.MessageBox.show({
                title: errorObj.title,
                msg: errorObj.msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
            if (failure) {
                failure(response);
            }
        }              
    });    
}