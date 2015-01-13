Ext.define('XMLifeOperating.store.ReturnRecord', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ReturnRecord',
    proxy : new XMLifeOperating.generic.BaseProxy('superShopperExamine/returnRecords','result','report')
});
