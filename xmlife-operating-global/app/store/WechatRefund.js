Ext.define('XMLifeOperating.store.WechatRefund', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Refund',
    pageSize: 50,
    proxy: new XMLifeOperating.generic.BaseProxy('refund','result')
});