Ext.define('XMLifeOperating.view.batchoperation.update.ProductStockUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductStockUpdateBatch',
  xtype : 'ProductStockUpdateBatch',
  alias : 'widget.ProductStockUpdateBatch',
  title : '商品库存',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items: [
    {
      xtype: 'BatchUploadWithLocation'
    }
  ]
});
