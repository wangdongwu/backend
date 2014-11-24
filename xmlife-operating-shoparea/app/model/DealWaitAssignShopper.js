var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/waitAssignShopper');
Ext.define('XMLifeOperating.model.DealWaitAssignShopper', {
	extend: 'Ext.data.Model',
	fields: [
		'created',
		'customId',
		'dtoAddress',
		'dealBackendId',
		'zoneName',
		'districtName',
		'status',
		'customerName',
		'customerPhone',
		'shopAreaName',
		'shopperNames',
		'shopNames',
		'delivererName',
		'deliverTime',
		'remainTime',
		'taskDone',
		'beginDeliverTime',
		'completeTime',
		'actualDealPrice',
		'dealPrice',
		'shortId',
		'contactsPhone',
		'dtoAddress',
		'contactsName'
	],
	proxy: dataProxy
});
// 日期：created
// 订单号：shortId
// 小区：districtName
// 收货电话：contactsPhone
// 下单时间：created
// 期望送达时间：deliverTime
// 剩余时间：remainTime
// 订单号显示用shortId，重新分配操作时传dealBackendId