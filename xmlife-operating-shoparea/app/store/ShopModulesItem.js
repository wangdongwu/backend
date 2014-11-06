Ext.define('XMLifeOperating.store.ShopModulesItem', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ShopModulesItem',
    proxy : new XMLifeOperating.generic.BaseProxy('shopHomepage/getModuleItems')
  });
