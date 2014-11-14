Ext.define('XMLifeOperating.view.batchoperation.update.ProductCategoryTemplateUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductCategoryTemplateUpdateBatch',
  xtype : 'ProductCategoryTemplateUpdateBatch',
  alias : 'widget.ProductCategoryTemplateUpdateBatch',
  title : '商品分类(模板)',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype: 'BatchUploadSimple'
    }
  ]
});
