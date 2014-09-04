Ext.define('XMLifeOperating.store.refundStore', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.refundModel',
    autoLoad: {start: 0, limit: 20},
    proxy: new XMLifeOperating.generic.BaseProxy('refund','result')
});