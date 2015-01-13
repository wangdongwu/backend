Ext.define('XMLifeOperating.store.IssueDeal', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CheckDeal',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/cancelDeals','result','report')
});
