Ext.define('XMLifeOperating.store.ComplainRecord', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ComplainRecord',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/complainRecords','result','report')
});
