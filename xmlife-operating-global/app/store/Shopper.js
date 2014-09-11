Ext.define('XMLifeOperating.store.Shopper', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.Shopper',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy : new XMLifeOperating.generic.BaseProxy('shopper','result')
});