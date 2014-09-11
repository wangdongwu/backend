Ext.define('XMLifeOperating.store.Shop', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.Shop',

	proxy: new XMLifeOperating.generic.BaseProxy('shop', 'result')
});