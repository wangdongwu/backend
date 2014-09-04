Ext.define('XMLifeOperating.model.refundModel', {
    extend: 'Ext.data.Model',
    fields: [
    'id',
    'useId',
    'userPhone',
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
    'dealPrice',
    'userName'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('refund'),
});