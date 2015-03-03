Ext.define('XMLifeOperating.store.SuperShopperFeedbacks', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.SuperShopperFeedbacks',
    proxy: new XMLifeOperating.generic.BaseProxy('superShopper/feedbacks', 'result')

});
