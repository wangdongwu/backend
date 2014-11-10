Ext.define('XMLifeOperating.store.HomePageCategory', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('category/roots')
});