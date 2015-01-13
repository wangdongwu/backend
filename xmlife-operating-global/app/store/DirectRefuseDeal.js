Ext.define('XMLifeOperating.store.DirectRefuseDeal', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CheckDeal',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/directRefuseDeals','result','report')
});
