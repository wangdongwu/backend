Ext.define('XMLifeOperating.store.refundStore', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.refundModel',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy: new XMLifeOperating.generic.BaseProxy('refund','result')
});