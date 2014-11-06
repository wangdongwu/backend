Ext.define('XMLifeOperating.store.shopModules', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.shopModules',
    proxy : new XMLifeOperating.generic.BaseProxy('shopHomepage/getModules')
});
