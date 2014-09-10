Ext.define('XMLifeOperating.store.Deal', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.Deal',
	autoLoad: {
		start: 0,
		limit: 25,
		page: 1
	},
	proxy: new XMLifeOperating.generic.BaseProxy('deal', 'result')
});