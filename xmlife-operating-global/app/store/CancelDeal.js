Ext.define('XMLifeOperating.store.CancelDeal', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CheckDeal',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/cancelDeals','result','report')
});
