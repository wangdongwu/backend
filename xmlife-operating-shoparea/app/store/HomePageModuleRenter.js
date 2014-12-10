Ext.define('XMLifeOperating.store.HomePageModuleRenter', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('homepage/getItemRenters')
});