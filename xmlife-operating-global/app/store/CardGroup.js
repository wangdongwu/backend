Ext.define('XMLifeOperating.store.CardGroup', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.CardGroup',
    proxy: new XMLifeOperating.generic.BaseProxy('coupon/list/group')
});
