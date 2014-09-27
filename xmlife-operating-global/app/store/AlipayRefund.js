Ext.define('XMLifeOperating.store.AlipayRefund', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Refund',
    proxy: new XMLifeOperating.generic.BaseProxy('refund','result')
});