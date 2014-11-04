Ext.define('XMLifeOperating.view.batchoperation.update.ProductTagUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductTagUpdateBatch',
  xtype : 'ProductTagUpdateBatch',
  alias : 'widget.ProductTagUpdateBatch',
  title : '商品标签',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype: 'BatchUploadSimple'
    }
  ]
});
