
Ext.define('XMLifeOperating.model.ProductTemplatePageSearch', {
    extend: 'XMLifeOperating.model.ProductTemplateGetByCategoryId',
    proxy: new XMLifeOperating.generic.BaseProxy('producttemplate/pageSearch', 'result')
});
