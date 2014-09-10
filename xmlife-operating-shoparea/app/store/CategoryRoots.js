Ext.define('XMLifeOperating.store.CategoryRoots', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.CategoryRoots',
	autoLoad: {
		start: 0,
		limit: 25,
		page: 1
	},
	proxy: new XMLifeOperating.generic.BaseProxy('category/roots', 'arrayResult')
});