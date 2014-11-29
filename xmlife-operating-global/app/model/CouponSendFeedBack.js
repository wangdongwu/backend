Ext.define('XMLifeOperating.model.CouponSendFeedBack', {
    extend: 'Ext.data.Model',
    fields: [
        'batchNo',
        'directSendFailDetails',
        'gmtModified',
        'ruleId',
        'uid',
        'realId'
    ],
    idProperty:'realId'
});