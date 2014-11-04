Ext.define('XMLifeOperating.view.batchoperation.update.ProductStatusUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductStatusUpdateBatch',
  xtype : 'ProductStatusUpdateBatch',
  alias : 'widget.ProductStatusUpdateBatch',
  title : '商品状态',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items: [
    {
      xtype: 'BatchUploadWithLocation'
    }
  ]
});
