Ext.define('XMLifeOperating.view.batchoperation.BatchUpdatePanel',{
  extend : 'Ext.tab.Panel',
  layout : 'fit',
  closable : true,
  alias : 'widget.BatchUpdatePanel',
  xtype : 'BatchUpdatePanel',
  id : 'BatchUpdatePanel',
  autoScroll: true,
  title : '批量修改',
  tabPosition: 'left',
  initComponent : function(){
    this.items = [
      {
        xtype : 'ProductPriceUpdateBatch'
      },{
        xtype: 'ProductStatusUpdateBatch'
      },{
        xtype: 'ProductStockUpdateBatch'
      },{
        xtype: 'ProductCategoryUpdateBatch'
      },{
        xtype : 'ProductRankUpdateBatch'
      },{
        xtype : 'ProductNameUpdateBatch'
      },{
        xtype : 'ProductDescriptionUpdateBatch'
      },{
        xtype : 'ProductTagUpdateBatch'
      },{
        xtype : 'ProductPictureUpdateBatch'
      },{
        xtype : 'DistributionTypeUpdateBatch'
      }
    ];
    this.callParent(arguments);
  }


})
