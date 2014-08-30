var dataProxy = new XMLifeOperating.generic.BaseProxy('refund');
Ext.define('XMLifeOperating.model.Refund', {
    extend: 'Ext.data.Model',
	fields: [ 'id', 'useId', 'mobile', 'amount', 'auditTime', 'auditor', 'createTime', 'description', 'dealId', 'refRecordId', 'refundCount', 'refundType', 'status', 'userName'],    
    proxy: dataProxy
});
 

