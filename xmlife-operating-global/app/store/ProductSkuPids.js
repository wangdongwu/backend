Ext.define('XMLifeOperating.store.ProductSkuPids', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ProductSkuPids',
    proxy: new XMLifeOperating.generic.BaseProxy('product/sku/pids')
});
