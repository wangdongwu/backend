Ext.define('XMLifeOperating.store.DealDelivererHistory', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DealDelivererHistory',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy : new XMLifeOperating.generic.BaseProxy('deal/delivererHistory','arrayResult')
});