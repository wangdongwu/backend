Ext.define('XMLifeOperating.store.CategoryRoots', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.CategoryRoots',

	proxy: new XMLifeOperating.generic.BaseProxy('category/roots', 'result')
});