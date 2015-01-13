Ext.define('XMLifeOperating.store.ReturnedDeal', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CheckDeal',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/returnedDeals','result','report')
});
