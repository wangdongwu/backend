Ext.define('XMLifeOperating.store.ProductTemplateCoupon', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.ProductTemplate',
    proxy: new XMLifeOperating.generic.BaseProxy('producttemplate')
});