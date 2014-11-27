Ext.define('XMLifeOperating.store.CustomerUserCashflow', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.CustomerUserCashflow',
    
    proxy : new XMLifeOperating.generic.BaseProxy('customer/user/cashflow')
});
