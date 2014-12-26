Ext.define('XMLifeOperating.view.batchoperation.update.ProductRank2UpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductRank2UpdateBatch',
  xtype : 'ProductRank2UpdateBatch',
  alias : 'widget.ProductRank2UpdateBatch',
  title : '商品rank2',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype: 'BatchUploadSimple'
    }
  ]
});
