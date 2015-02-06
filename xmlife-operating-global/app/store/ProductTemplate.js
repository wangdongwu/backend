Ext.define('XMLifeOperating.store.ProductTemplate', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.ProductTemplate',
    proxy: new XMLifeOperating.generic.BaseProxy('producttemplate/pageSearch', 'result')
});
