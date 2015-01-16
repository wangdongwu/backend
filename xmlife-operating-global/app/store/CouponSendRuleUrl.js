Ext.define('XMLifeOperating.store.CouponSendRuleUrl', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CouponRule',
    proxy: new XMLifeOperating.generic.BaseProxy('coupon/list/rule/send?type=5')
});
