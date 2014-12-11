Ext.define('XMLifeOperating.store.PromotionProduct', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.PromotionProduct',
   groupField: 'skuId',
    proxy: new XMLifeOperating.generic.BaseProxy('promotion/product', 'result')
});
