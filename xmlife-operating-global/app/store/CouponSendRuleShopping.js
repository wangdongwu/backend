Ext.define('XMLifeOperating.store.CouponSendRuleShopping', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CouponRule',
    proxy: new XMLifeOperating.generic.BaseProxy('coupon/list/rule/send?type=1')
});