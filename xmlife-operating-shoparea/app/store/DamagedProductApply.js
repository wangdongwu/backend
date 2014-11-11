Ext.define('XMLifeOperating.store.DamagedProductApply', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.DamagedProductApply',
	proxy: new XMLifeOperating.generic.BaseProxy('damagedProductApply/applyList', 'result')
});