/**
 * 商品名称批量修改
 */
Ext.define('XMLifeOperating.view.batchoperation.update.ProductNameUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductNameUpdateBatch',
  xtype : 'ProductNameUpdateBatch',
  alias : 'widget.ProductNameUpdateBatch',
  title : '商品名称',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype: 'BatchUploadSimple'
    }
  ]
});
