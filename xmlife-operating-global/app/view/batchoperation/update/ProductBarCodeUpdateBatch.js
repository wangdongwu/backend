Ext.define('XMLifeOperating.view.batchoperation.update.ProductBarCodeUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductBarCodeUpdateBatch',
  xtype : 'ProductBarCodeUpdateBatch',
  alias : 'widget.ProductBarCodeUpdateBatch',
  title : '商品条形码',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype: 'BatchUploadSimple'
    }
  ]
});
