Ext.define('XMLifeOperating.store.CouponSendRuleDirectStatus', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CouponRule',
    proxy: new XMLifeOperating.generic.BaseProxy('coupon/list/rule/send?type=4&status=1')
});
