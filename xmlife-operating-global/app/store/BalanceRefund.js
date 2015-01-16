Ext.define('XMLifeOperating.store.BalanceRefund', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.Refund',
    pageSize: 50,
    proxy: new XMLifeOperating.generic.BaseProxy('refund', 'result')
});
