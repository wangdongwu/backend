Ext.define('XMLifeOperating.store.ReturnGoodsAuditList', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ReturnGoodsAuditList',
    proxy: new XMLifeOperating.generic.BaseProxy('returnGoods/auditList', 'result')
});