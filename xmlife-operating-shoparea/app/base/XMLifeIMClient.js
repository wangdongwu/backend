rpc.XMLifeIMClient = function() {

};

rpc.XMLifeIMClient.prototype.onPipeCreated = function(pipeKey) {
	console.log('onPipeCreated ' + pipeKey);
};

rpc.XMLifeIMClient.notificationCount = 0;

rpc.XMLifeIMClient.prototype.showNotification = function(msg) {
	var title = "新消息";
	var body = msg.toString();

	rpc.XMLifeIMClient.notificationCount++;
	var id = "" + rpc.XMLifeIMClient.notificationCount;
	var me = this;
	var msgObj = eval('(' + body + ')');
	console.log(msgObj)

	var content = msgObj.content;
	var createTime = new Date(msgObj.createTime);
	var date = createTime.toLocaleDateString();
	var dealStatus =msgObj.dealStatus;
	var msgType = msgObj.msgType;

	if (window.plugin && window.plugin.notification && window.plugin.notification.local) {
		window.plugin.notification.local.add({
			id: id,
			message: date+msgObj.content,
			title: title,
			autoCancel: true
		});
	} else {
		var NotificationCls = window.Notification || window.webkitNotification || window.mozNotification || window.msNotification;
		if (NotificationCls) {
			if (NotificationCls.permission === "granted") {
				var notify = new NotificationCls(title, {
					body:  date+msgObj.content,

					tag: id
				});
			}
		}
	}
};

rpc.XMLifeIMClient.prototype.dealWithMessage = function(msgArr) {
	console.log('dealWithMessage ' + msgArr);
	var msgIdArr = [];
	var len = msgArr.length;
	for (var i = 0; i < len; i++) {
		var msg = msgArr[i];
		var msgId = msg.getMsgId();
		msgIdArr.push(msgId);
	}
	this.sendReceived(msgIdArr);
     //消息提示
	for (var i = 0; i < len; i++) {
		var msg = msgArr[i];
		this.showNotification(msg);
	}
	//消息操作
	var obj = msg.getRpcJSONObject();
    var msgType = msg.getMsgType();
	switch(msgType){
		case rpc.BackendDealNotificationMessage.TYPE:
		Ext.getCmp('moduleNavigation').fireEvent('messagePushResponse',obj.moduleId);
	}
};

rpc.XMLifeIMClient.prototype.sendReceived = function(msgIdArr) {
	if (!msgIdArr || msgIdArr.length < 1)
		return;
	rpc.IMService.sendMessageReceived(null, null, msgIdArr, false, function(returnCode, obj) {
		console.log('sendReceived done, returnCode=' + returnCode + ", " + msgIdArr);
	}, function(error) {
		console.log('sendReceived failed, ' + msgIdArr);
	});
};