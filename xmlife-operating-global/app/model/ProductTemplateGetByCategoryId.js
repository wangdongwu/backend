Ext.define('XMLifeOperating.model.ProductTemplateGetByCategoryId', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'rank',
        'rank2',
        'name',
        'picture',
        'unit',
        'unitname',
        'canPartiallyReturn',
        'desc',
        'tag',
        'name1',
        'name2',
        'name3',
        'names',
        'skuId',
        'barCode',
        'maxPrice',
        'minPrice'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('producttemplate/getByCategoryId', 'result'),
});
