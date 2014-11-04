/**
 * 商品价格批量修改
 */
Ext.define('XMLifeOperating.view.batchoperation.update.ProductPriceUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductPriceUpdateBatch',
  xtype : 'ProductPriceUpdateBatch',
  alias : 'widget.ProductPriceUpdateBatch',
  title : '商品价格',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items: [
    {
      xtype: 'BatchUploadWithLocation'
    }
  ]
});
