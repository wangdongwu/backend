Ext.define('XMLifeOperating.store.CouponSend', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CouponSend',
    proxy: new XMLifeOperating.generic.BaseProxy('shopper', 'result')
});
