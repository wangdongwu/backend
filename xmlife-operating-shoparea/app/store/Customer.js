Ext.define('XMLifeOperating.store.Customer', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Customer',
    proxy: new XMLifeOperating.generic.BaseProxy('customer', 'result')
});
