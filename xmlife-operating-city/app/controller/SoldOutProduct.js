Ext.define('XMLifeOperating.controller.SoldOutProduct', {
	extend: 'Ext.app.Controller',
	views: ['soldoutProductManage.soldoutRecord.soldoutRecordList'],
	stores: ['OfflineProductGetOfflineRecords'],
	models: ['OfflineProductGetOfflineRecords'],
	refs: [{
		ref: 'soldoutRecordList',
		selector: 'soldoutRecordList',
		xtype: 'soldoutRecordList'
	}],
	init: function() {
		var me = this;
		me.control({
			'soldoutRecordList': {
				show: me.showSoldoutRecordList
			},
			'soldoutRecordList #queryRecordBtn': {
				click: me.querySoldoutRecordList
			},
			'soldoutRecordList #recordSearchBtn': {
				click: me.searchSoldoutRecordList
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

	}


})