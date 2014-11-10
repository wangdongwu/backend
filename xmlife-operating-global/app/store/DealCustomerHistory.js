

Ext.define('XMLifeOperating.store.DealCustomerHistory', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DealCustomerHistory',
    proxy: new XMLifeOperating.generic.BaseProxy('deal/customerHistory','result')
});
