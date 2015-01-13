Ext.define('XMLifeOperating.store.OverTimeRefuseDeal', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CheckDeal',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/overTimeRefuseDeals','result','report')
});
