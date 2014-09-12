

Ext.define('XMLifeOperating.generic.BaseProxy', {
    requires: ['XMLifeOperating.generic.Global'],
    extend: 'Ext.data.proxy.Rest',
    reader: 'json',

    constructor: function(resourceURL,root) {
      //Ext.Ajax.useDefaultXhrHeader = false;
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
                msg;
            try {
                var error = (response.responseText && response.responseText.length > 1) ? Ext.decode(response.responseText) : null;

                if (error) {
                    msg = Ext.String.format('Error Code: {0}<br />Message: {1}', error.code, error.message);
                } else {
                    title = '请重新登录';
                    msg = '您还没有登录或已登录过期请重新登录';

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
            });
            ErrorMessage.on('hide',function(){
              localStorage.removeItem('sessionId');
              localStorage.removeItem('username');
              window.location.reload();
            })
        }
    }
});

//Ext.Ajax.cors = true;

var sendRequest = function(url, params, title, successMsg, errorMsg, success, failure) {
    if(!url || url.length < 1) {
        alert("bad url");
    }
    var newUrl;
    if(url == 'auth'){
        newUrl = "http://192.168.5.190:9999/rest/";
    }else{
        newUrl = XMLifeOperating.generic.Global.URL.biz + url;
    }
    var sessionId = localStorage.getItem('sessionId');
        if(sessionId){
            this.headers = {
                'auth-token' : sessionId
            };  
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

var sendGetRequest = function(url, params, title, successMsg, errorMsg, success, failure) {
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
        method: 'GET',
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
            var error = Ext.decode(response.responseText);
            var msg = Ext.String.format('{0}<br />Error Code: {1}<br />Message: {2}', errorMsg, error.code, error.message)
            /*Ext.MessageBox.show({
                title: title,
                msg: msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });*/

            if (failure) {
                failure(response);
            }
        }              
    });    
}

var sendPutRequest = function(url, params, title, successMsg, errorMsg, success, failure) {
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
        method: 'PUT',
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
            var error = Ext.decode(response.responseText);
            var msg = Ext.String.format('{0}<br />Error Code: {1}<br />Message: {2}', errorMsg, error.code, error.message)
            /*Ext.MessageBox.show({
                title: title,
                msg: msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });*/

            if (failure) {
                failure(response);
            }
        }              
    });    
}
var sendDeleteRequest = function(url, params, title, successMsg, errorMsg, success, failure) {
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
        method: 'DELETE',
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
            var error = Ext.decode(response.responseText);
            var msg = Ext.String.format('{0}<br />Error Code: {1}<br />Message: {2}', errorMsg, error.code, error.message)
            /*Ext.MessageBox.show({
                title: title,
                msg: msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });*/

            if (failure) {
                failure(response);
            }
        }              
    });    
}