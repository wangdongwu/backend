Ext.define('XMLifeOperating.store.Product', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.Product',
	proxy: new XMLifeOperating.generic.BaseProxy('product', 'result')
});