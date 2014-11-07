Ext.define('XMLifeOperating.store.HomePagePreview', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('homepage/getHomePage', 'modules')
});