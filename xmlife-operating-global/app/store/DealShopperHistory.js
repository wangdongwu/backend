Ext.define('XMLifeOperating.store.DealShopperHistory', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.DealShopperHistory',
    proxy: new XMLifeOperating.generic.BaseProxy('deal/shopperHistory', 'result'),
    sorters: [{
        property: 'created',
        direction: 'DESC'
    }]
});