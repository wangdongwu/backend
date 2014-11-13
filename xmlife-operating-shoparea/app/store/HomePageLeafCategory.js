Ext.define('XMLifeOperating.store.HomePageLeafCategory', {
	extend: 'Ext.data.Store',
	model: 'XMLifeOperating.model.CategoryLeaf',
	proxy: new XMLifeOperating.generic.BaseProxy('category/leafCategorys')
});