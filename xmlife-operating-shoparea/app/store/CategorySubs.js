Ext.define('XMLifeOperating.store.CategorySubs', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.CategorySubs',

	proxy: new XMLifeOperating.generic.BaseProxy('category/subs', 'result')
});