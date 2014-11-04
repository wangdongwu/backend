Ext.define('XMLifeOperating.view.batchoperation.BatchAddPanel',{
  extend : 'Ext.tab.Panel',
  layout : 'fit',
  closable : true,
  alias : 'widget.BatchAddPanel',
  xtype : 'BatchAddPanel',
  id : 'BatchAddPanel',
  autoScroll: true,
  title : '批量添加',
  tabPosition: 'left',
  initComponent : function(){
    this.items = [
      {
        xtype : 'ProductTemplateAddBatch'
      },{
        xtype: 'ProductInstanceAddBatch'
      },{
        xtype: 'DistributionLocationAddBatch'
      }
    ];
    this.callParent(arguments);
  }


})
