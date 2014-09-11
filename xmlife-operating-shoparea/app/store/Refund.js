Ext.define('XMLifeOperating.store.Refund', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Refund',
    proxy: new XMLifeOperating.generic.BaseProxy('refund','result')
});