Ext.define('XMLifeOperating.store.DelivererWorkTime', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DelivererWorkTime',
    
    proxy : new XMLifeOperating.generic.BaseProxy('deliverer/worktime','result')
});