Ext.define('XMLifeOperating.store.CustomerUserCoupon', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.CustomerUserCoupon',
    
    proxy : new XMLifeOperating.generic.BaseProxy('customer/user/coupon')
});
