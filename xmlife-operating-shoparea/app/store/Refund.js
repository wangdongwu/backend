Ext.define('XMLifeOperating.store.Refund', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Refund',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy: new XMLifeOperating.generic.BaseProxy('refund','result')
});