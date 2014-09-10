Ext.define('XMLifeOperating.store.CategorySubs', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.CategorySubs',
	autoLoad: {
		start: 0,
		limit: 25,
		page: 1
	},
	proxy: new XMLifeOperating.generic.BaseProxy('category/subs', 'arrayResult')
});