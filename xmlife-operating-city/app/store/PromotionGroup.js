Ext.define('XMLifeOperating.store.PromotionGroup', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.PromotionGroup',
    proxy: new XMLifeOperating.generic.BaseProxy('promotion/group', 'result')
});
