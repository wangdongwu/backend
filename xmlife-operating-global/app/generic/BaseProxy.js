Ext.define('XMLifeOperating.generic.BaseProxy', {
    requires: ['XMLifeOperating.generic.Global'],
    extend: 'Ext.data.proxy.Rest',
    reader: 'json',

    constructor: function(resourceURL, root) {
        if (!resourceURL || resourceURL.length < 1) {
            Ext.msg.alert('提示', '缺少请求url路径！');
            return;
        } else {
            this.url = XMLifeOperating.generic.Global.URL.biz + resourceURL;
        }

        var sessionId = localStorage.getItem('sessionId');
        if (sessionId) {
            this.headers = {
                'auth-token': sessionId
            };
        }
        if (root) {
            this.reader = {
                type: 'json',
                root: root,
                totalProperty: 'total'
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
            } catch (err) {
                msg = Ext.String.format('Fail to handle exception message:<br />{0}<br /><br />URL: {1}', err.message, proxy.url);
                title = 'Unexpected Return';
            }

            var ErrorMessage = Ext.MessageBox.show({
                title: title,
                msg: msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            }).toBack();

            ErrorMessage.on('hide', function() {
                localStorage.removeItem('sessionId');
                localStorage.removeItem('username');
                window.location.reload();
            });
        }
    }
});


// @params: url, params, title, successMsg, errorMsg, success, failure
window.sendRequest = function() {
    requestAction('POST', arguments);
}

window.sendGetRequest = function() {
    requestAction('GET', arguments);
}

window.sendPutRequest = function() {
    requestAction('PUT', arguments);
}

window.sendDeleteRequest = function() {
    requestAction('DELETE', arguments);
}

var requestAction = function(method, args) {
    var url = args[0],
        params = args[1],
        title = args[2],
        successMsg = args[3],
        errorMsg = args[4],
        success = args[5],
        failure = args[6];

    // url处理
    if (url) {
        url = XMLifeOperating.generic.Global.URL.biz + url;
    } else {
        Ext.MessageBox.alert('提示', '缺少请求url路径！');
        return;
    }

    Ext.Ajax.request({
        url: url,
        params: params,
        method: method,
        success: function(response) {
            // post需要提示
            if (method == 'POST') {
                Ext.MessageBox.show({
                    title: title,
                    msg: successMsg,
                    icon: Ext.Msg.INFO,
                    buttons: Ext.Msg.OK
                });
            }
            if (response.responseText == '-2') {
                Ext.MessageBox.alert('错误提示', '参数出错!');
            } else if (success) {
                success(response);
            }
        },
        failure: function(response, opts) {
            // 过滤错误类型
            var error = requestException(response);

            Ext.MessageBox.show({
                title: error.title || title,
                msg: error.msg || errorMsg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
            if (failure) {
                failure(response);
            }
        }
    });
}

// Ext.Ajax.cors = true;
// 过滤错误器
function requestException(response) {
    var status = response.status,
        responseText = response.responseText,
        error = {};

    if (status == 401) {
        localStorage.removeItem('sessionId');
        localStorage.removeItem('username');
        error = {title: '提示', msg: '用户名或者密码错误!'};

    } else if (status == 403) {
        localStorage.removeItem('sessionId');
        localStorage.removeItem('username');
        error = {title: '提示', msg: 'session失效或者没有登录!'};

    } else if (status == 404) {
        error = {title: '提示', msg: '请求方法找不到(404错误)，请找服务端确认!'};

    } else if (status == 405) {
        error = {title: '提示', msg: '访问了一个不应该被访问的路径!'};

    } else if (status == 0) {
        error = {title: '提示', msg: '数据接口有问题，请找服务器端确认!'};

    } else {
        switch (responseText) {
            case '':
                error = {title: '提示', msg: '服务重启中，请稍候...'};
                break;
            case '-2':
                error = {title: '提示', msg: '参数出错！'};
                break;
            case '-3':
                error = {title: '请重新登录', msg: '您还没有登录或已登录过期请重新登录！'};
                break;
            case '-4':
                error = {title: '提示', msg: '数据库端出错！'};
                break;
            case '-6':
                error = {title: '提示', msg: '你没有权限做当前操作，请去申请相应的权限！'};
                break;
        }
    }

    return error;
}
