Ext.define('XMLifeOperating.store.WaitForAudit', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.ChangePriceRecord',
	proxy: new XMLifeOperating.generic.BaseProxy('changePriceRecord/waitForAuditList', 'result')
});