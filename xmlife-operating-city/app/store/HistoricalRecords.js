Ext.define('XMLifeOperating.store.HistoricalRecords', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.ChangePriceRecord',
	proxy: new XMLifeOperating.generic.BaseProxy('changePriceRecord/historicalRecords', 'result')
});