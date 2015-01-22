Ext.define('XMLifeOperating.model.ReturnGoodsAuditList', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'dealId',
        'num',
        'creator',
        'creatorName',
        'createTime',
        'auditor',
        'auditorName',
        'auditTime',
        'status', {
            name: 'dealBackendId',
            convert: function(v, r) {
                return r.get('dealId');
            }
        }
    ]
});
//状态 0:等待审核 1:审核通过 2:审核拒绝 -1:已取消
