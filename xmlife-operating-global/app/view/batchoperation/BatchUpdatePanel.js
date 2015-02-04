Ext.define('XMLifeOperating.view.batchoperation.BatchUpdatePanel', {
    extend: 'Ext.tab.Panel',
    layout: 'fit',
    closable: true,
    alias: 'widget.BatchUpdatePanel',
    xtype: 'BatchUpdatePanel',
    id: 'BatchUpdatePanel',
    autoScroll: true,
    title: '批量修改',
    tabPosition: 'top',
    initComponent: function() {
        this.items = [{
            xtype: 'ProductPriceUpdateBatch'
        }, {
            xtype: 'ProductStatusUpdateBatch'
        }, {
            xtype: 'ProductStockUpdateBatch'
        }, {
            xtype: 'ProductCategoryUpdateBatch'
        }, {
            xtype: 'ProductCategoryTemplateUpdateBatch'
        }, {
            xtype: 'ProductRankUpdateBatch'
        }, {
            xtype: 'ProductRank2UpdateBatch'
        }, {
            xtype: 'ProductBarCodeUpdateBatch'
        }, {
            xtype: 'ProductNameUpdateBatch'
        }, {
            xtype: 'ProductDescriptionUpdateBatch'
        }, {
            xtype: 'ProductTagUpdateBatch'
        }, {
            xtype: 'ProductPictureUpdateBatch'
        }, {
            xtype: 'DistributionTypeUpdateBatch'
        }, {
            xtype: 'ProductSellerUpdateBatch'
        }];
        this.callParent(arguments);
    }
});
