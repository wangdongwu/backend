Ext.define('XMLifeOperating.view.batchoperation.update.ProductSellerUpdateBatch', {
    extend: 'Ext.panel.Panel',
    id: 'ProductSellerUpdateBatch',
    xtype: 'ProductSellerUpdateBatch',
    title: '商品实例商家',
    closeAction: 'hide',
    resizable: false,
    forceFit: true,
    items: [{
        xtype: 'BatchUploadWithLocation'
    }]
});
