Ext.define('XMLifeOperating.store.DealDelivererHistory', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DealDelivererHistory',
    
    proxy : new XMLifeOperating.generic.BaseProxy('deal/delivererHistory','result')
});