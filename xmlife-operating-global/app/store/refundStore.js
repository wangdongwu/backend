Ext.define('XMLifeOperating.store.refundStore', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.refundModel',
    proxy: new XMLifeOperating.generic.BaseProxy('refund', 'result')
});
