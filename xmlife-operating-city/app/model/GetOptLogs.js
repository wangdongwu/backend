Ext.define('XMLifeOperating.model.GetOptLogs', {
	extend: 'Ext.data.Model',
	fields: [
		'monthOnline',
		'monthPush',
		'monthkeep',
		'phoneNum',
		'shopper',
		'todayKeep',
		'todayOnline',
		'todayPush',
		'weekKeep',
		'weekOnline',
		'weekPush'
	],
	proxy: new XMLifeOperating.generic.BaseProxy('offlineProduct/getOptLogs','result')
});