Ext.define('XMLifeOperating.store.CompletedDeal', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CheckDeal',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/completedDeals','result','report')
});
