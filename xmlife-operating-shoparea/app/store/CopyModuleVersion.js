
Ext.define('XMLifeOperating.store.CopyModuleVersion', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ShopConfig',
    proxy : new XMLifeOperating.generic.BaseProxy('shopHomepage')
    /*data : [{
      id : 1,
      name : '测试111111111',
      enable : 0
    },{
      id : 2,
      name : '测试222222222',
      enable : 1
    },{
      id : 3,
      name : '测试333333333',
      enable : 1
    }]*/
});
