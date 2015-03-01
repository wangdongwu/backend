Ext.define('XMLifeOperating.view.staffManage.shopperCheck.ShopperCheckList', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.ShopperCheckList',
    xtype : 'ShopperCheckList',
    id : 'ShopperCheckList',
    closable : true,
    defaults : {
      width : '100%',
      layout :'fit'
    },
    title : '买手业绩',
    layout : 'vbox',
    items: [{
      xtype : 'ShopperList',
      flex: 6
    },{
      xtype : 'CheckDetailTab',
      flex: 4
    }]
  });
