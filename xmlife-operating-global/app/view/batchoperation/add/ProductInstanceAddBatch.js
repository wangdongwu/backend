Ext.define('XMLifeOperating.view.batchoperation.add.ProductInstanceAddBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductInstanceAddBatch',
  xtype : 'ProductInstanceAddBatch',
  alias : 'widget.ProductInstanceAddBatch',
  title : '商品实例',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype: 'BatchUploadWithLocation'
    }
  ]
});
