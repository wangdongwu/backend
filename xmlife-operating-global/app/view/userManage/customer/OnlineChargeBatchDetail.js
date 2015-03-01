Ext.define('XMLifeOperating.view.userManage.customer.OnlineChargeBatchDetail', {
	extend: 'XMLifeOperating.view.rechargeableCardManage.onlineCard.CardDetail',
	xtype: 'onlineChargeBatchDetail',
	buttons: [{
		text: '知道了',
		handler: function() {
			this.up('window').close();
		}
	}]
});