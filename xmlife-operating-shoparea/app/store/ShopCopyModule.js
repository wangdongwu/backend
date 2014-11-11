Ext.define('XMLifeOperating.store.ShopCopyModule', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.shopModules',
    proxy : new XMLifeOperating.generic.BaseProxy('shopHomepage/getCopyModules')
});
