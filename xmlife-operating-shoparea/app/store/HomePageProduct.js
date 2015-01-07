Ext.define('XMLifeOperating.store.HomePageProduct', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePageProduct',
	sorters: [{
        sorterFn: function(o1, o2){
            return o1.get('skuId') < o2.get('skuId') ? -1 : 1;
        }
    }],
	proxy: new XMLifeOperating.generic.BaseProxy('product/getValidProduct')
});
