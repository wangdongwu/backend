Ext.define('XMLifeOperating.view.batchoperation.update.ProductDescriptionUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductDescriptionUpdateBatch',
  xtype : 'ProductDescriptionUpdateBatch',
  alias : 'widget.ProductDescriptionUpdateBatch',
  title : '商品描述',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype: 'BatchUploadSimple'
    }
  ]
});
