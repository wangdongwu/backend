Ext.define('XMLifeOperating.store.HomePageModuleCopy', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('homepage/getModules')
});