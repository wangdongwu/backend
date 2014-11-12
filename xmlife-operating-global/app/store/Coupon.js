Ext.define('XMLifeOperating.store.Coupon', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Coupon',
    
    // proxy : new XMLifeOperating.generic.BaseProxy('Shopper','result')
    proxy : new XMLifeOperating.generic.BaseProxy('coupon/list/coupon')
});