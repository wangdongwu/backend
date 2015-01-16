Ext.define('XMLifeOperating.model.Coupon', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'name',
        'desc',
        'type',
        'benchMark',
        'discountValue',
        'value',
        'maxDiscount',
        'isNew',
        'maxCouponNumHold',
        'expireStartDate',
        'expireEndDate',
        'delayUseStartHours',
        'delayUseEndHours',
        'globalCouponNum',
        'globalDailyCouponNum',
        'globalUserCouponNumHold',
        'userDailyCouponNumHold',
        'bindings',
        'channel',
        'groupName',
        'gmtCreate',
        'createrName',
        'products',
        'categories',
        'shops',
        'cities',
        'categories',
        'bindingType',
        'useRuleId',
        'sendNum',
        'usedNum'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('Shopper')
});
