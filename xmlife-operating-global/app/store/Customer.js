Ext.define('XMLifeOperating.store.Customer', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.Customer',
    pageSize: 50,
    proxy: new XMLifeOperating.generic.BaseProxy('customer', 'result')
});
