Ext.define('XMLifeOperating.store.CouponSendRuleDirect', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CouponRule',
    proxy: new XMLifeOperating.generic.BaseProxy('coupon/list/rule/send?type=4')
});
