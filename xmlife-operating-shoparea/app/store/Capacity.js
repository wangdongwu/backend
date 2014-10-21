Ext.define('XMLifeOperating.store.Capacity', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.Capacity',
	proxy: new XMLifeOperating.generic.BaseProxy('shopArea/dealLimit')
});