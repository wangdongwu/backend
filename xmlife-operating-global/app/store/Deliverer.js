Ext.define('XMLifeOperating.store.Deliverer', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Deliverer',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy : new XMLifeOperating.generic.BaseProxy('deliverer','arrayResult')
});