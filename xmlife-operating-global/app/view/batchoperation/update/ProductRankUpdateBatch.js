Ext.define('XMLifeOperating.view.batchoperation.update.ProductRankUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductRankUpdateBatch',
  xtype : 'ProductRankUpdateBatch',
  alias : 'widget.ProductRankUpdateBatch',
  title : '商品rank',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype: 'BatchUploadSimple'
    }
  ]
});
