Ext.define('XMLifeOperating.model.refundModel', {
    extend: 'Ext.data.Model',
    fields: [
    'id',
    'useId',
    'mobile',
    'amount',
    'auditTime',
    'auditor',
    'createTime',
    'description',
    'dealId',
    'dealBackendId',
    'shortId',
    'refRecordId',
    'refundCount',
    'refundType',
    'status',
    'userName'],
    proxy: new XMLifeOperating.generic.BaseProxy('refund')
});