Ext.define('XMLifeOperating.store.WechatRefund', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Refund',
    proxy: new XMLifeOperating.generic.BaseProxy('refund','result')
});