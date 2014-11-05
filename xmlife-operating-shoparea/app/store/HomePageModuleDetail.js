Ext.define('XMLifeOperating.store.HomePageModuleDetail', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('homepage/getModuleItems')
});