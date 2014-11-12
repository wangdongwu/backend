Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.ShopConfigManage', {
  extend: 'Ext.panel.Panel',
  xtype: 'ShopConfigManage',
  id: 'ShopConfigManage',
  alias: 'widget.ShopConfigManage',
  title: '主页配置',
  layout: 'hbox',
  height : '100%',
  defaults : {
    height : '100%',
  },
  tbar : [
      {
        itemId : 'shopList',
        xtype : 'combo',
        fieldLabel: '选择店铺',
        emptyText : '选择店铺',
        store: 'Shop',
        queryMode: 'local',
        displayField: 'name',
        valueField: 'id',
    }
  ],
  items: [
    {
          xtype : 'ShopVersionPanel',
          flex: 3
        },
        {
          xtype : 'ShopModuleDetail',
          flex: 4
        },
        {
          xtype : 'ShopPreview',
          flex : 3
        }
  ],
});