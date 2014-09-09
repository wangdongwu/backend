Ext.define('XMLifeOperating.store.ShopperWorkTime', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.ShopperWorkTime',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy : new XMLifeOperating.generic.BaseProxy('shopper/worktime','arrayResult')
});