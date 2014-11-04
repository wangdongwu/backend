Ext.define('XMLifeOperating.store.HomePageModuleList', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('homepage/getModules')
});