Ext.define('XMLifeOperating.store.DealCashOnDelivery', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DealCashOnDelivery',
    proxy:new XMLifeOperating.generic.BaseProxy('deal/cashOnDelivery', 'result')
});