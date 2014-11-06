Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.ShopVersionPanel', {
  extend: 'Ext.panel.Panel',
  xtype: 'ShopVersionPanel',
  alias: 'widget.ShopVersionPanel',
  layout : 'vbox',
  defaults : {
    width : '100%'
  },
  items: [
  {
    xtype : 'ShopVersionList',
    flex : 5
  },
  {
    xtype : 'ShopModuleList',
    flex : 5
  }
  ],
});