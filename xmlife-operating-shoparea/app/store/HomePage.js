Ext.define('XMLifeOperating.store.HomePage', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.HomePage',
	proxy: new XMLifeOperating.generic.BaseProxy('homepage')
});