Ext.define('XMLifeOperating.store.ChangePriceRecordMyRecords', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.ChangePriceRecord',
	proxy: new XMLifeOperating.generic.BaseProxy('changePriceRecord/myRecords', 'result')
});