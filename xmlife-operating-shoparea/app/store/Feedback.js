Ext.define('XMLifeOperating.store.Feedback', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.Feedback',
	autoLoad: {
		start: 0,
		limit: 25,
		page: 1
	},
	proxy: new XMLifeOperating.generic.BaseProxy('feedback', 'result')

});