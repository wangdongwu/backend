Ext.define('XMLifeOperating.store.DealShopArea', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DealShopArea',
    proxy:new XMLifeOperating.generic.BaseProxy('deal/shopArea', 'arrayResult')
});