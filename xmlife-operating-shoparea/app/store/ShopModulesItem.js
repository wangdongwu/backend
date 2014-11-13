Ext.define('XMLifeOperating.store.ShopModulesItem', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.HomePage',
    proxy : new XMLifeOperating.generic.BaseProxy('shopHomepage/getModuleItems')
  });
