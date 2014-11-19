Ext.define('XMLifeOperating.controller.SoldOutProduct', {
	extend: 'Ext.app.Controller',
	views: [
		'soldoutProductManage.soldoutRecord.soldoutRecordList',
		'soldoutProductManage.shopperRecord.shopperRecordList'
	],
	stores: [
		'OfflineProductGetOfflineRecords',
		'GetOptLogs'
	],
	models: [
		'OfflineProductGetOfflineRecords',
		'GetOptLogs'
	],
	refs: [{
		ref: 'soldoutRecordList',
		selector: 'soldoutRecordList',
		xtype: 'soldoutRecordList'
	}, {
		ref: 'shopperRecordList',
		selector: 'shopperRecordList',
		xtype: 'shopperRecordList'
	}],
	init: function() {
		var me = this;
		me.control({
			'soldoutRecordList': {
				show: me.showSoldoutRecordList
			},
			'shopperRecordList': {
				show: me.showShopperRecordList
			},
			'soldoutRecordList #queryRecordBtn': {
				click: me.querySoldoutRecordList
			},
			'shopperRecordList #queryRecordBtn': {
				click: me.queryShopperRecordList
			},
			'soldoutRecordList #recordSearchBtn': {
				click: me.searchSoldoutRecordList
			},
			'shopperRecordList #recordSearchBtn': {
				click: me.searchShopperRecordList
			}
		});
	},
	showSoldoutRecordList: function() {
		var me = this;
		var store = me.getOfflineProductGetOfflineRecordsStore(),
			recordList = me.getSoldoutRecordList(),
			startTimePicker = recordList.down('[name="startTime"]'),
			endTimePicker = recordList.down('[name="endTime"]');
		store.getProxy().extraParams = {
			startTime: startTimePicker.getValue().getTime(),
			endTime: endTimePicker.getValue().getTime() + 86400000
		}
		store.loadPage(1, {
			params: {
				page: 1,
				start: 0,
				limit: 25
			}
		});
	},
	showShopperRecordList: function() {
		var me = this;
		var store = me.getGetOptLogsStore(),
			recordList = me.getShopperRecordList();
		store.load();
	},
	querySoldoutRecordList: function() {
		var me = this;
		var store = me.getOfflineProductGetOfflineRecordsStore(),
			recordList = me.getSoldoutRecordList(),
			keyWords = recordList.down('#recordSearchKeyWords').setValue(''),
			startTimePicker = recordList.down('[name="startTime"]'),
			endTimePicker = recordList.down('[name="endTime"]');
		store.getProxy().extraParams = {
			startTime: startTimePicker.getValue().getTime(),
			endTime: endTimePicker.getValue().getTime() + 86400000
		}
		store.loadPage(1, {
			params: {
				page: 1,
				start: 0,
				limit: 25
			}
		});
	},
	queryShopperRecordList: function() {
		var me = this;
		var store = me.getGetOptLogsStore(),
			recordList = me.getShopperRecordList(),
			keyWords = recordList.down('#recordSearchKeyWords').setValue('');
		store.load();
	},
	searchSoldoutRecordList: function() {
		var me = this;
		var store = me.getOfflineProductGetOfflineRecordsStore(),
			recordList = me.getSoldoutRecordList(),
			keyWords = recordList.down('#recordSearchKeyWords').getValue(),
			keyType = null,
			startTimePicker = recordList.down('[name="startTime"]'),
			endTimePicker = recordList.down('[name="endTime"]');
		if (keyWords.length == 11 && isNaN(keyWords)) {
			keyType = 1
		} else {
			keyType = 0;
		}
		store.getProxy().extraParams = {
			startTime: startTimePicker.getValue().getTime(),
			endTime: endTimePicker.getValue().getTime() + 86400000,
			keyword: keyWords,
			keyType: keyType
		}
		store.loadPage(1, {
			params: {
				page: 1,
				start: 0,
				limit: 25
			}
		})

	},
	searchShopperRecordList: function() {
		var me = this;
		var store = me.getGetOptLogsStore(),
			recordList = me.getShopperRecordList(),
			keyWords = recordList.down('#recordSearchKeyWords').getValue(),
			keyType = null;
		if (keyWords == '') {
			store.load();
		} else {
			if (keyWords.length == 11 && isNaN(keyWords)) {
				keyType = 1
			} else {
				keyType = 0;
			}
			store.load({
				params: {
					keyword: keyWords,
					keyType: keyType
				}
			});

		}

	}


})