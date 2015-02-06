Ext.data.Types.WEIGHT = {
    type: 'Weight',
    convert: function(v, data) {
        return (v / 1000).toFixed(3);
    },
    sortType: Ext.data.SortTypes.asFloat
};

Ext.define('XMLifeOperating.model.ProductTemplate', {
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
        'minPrice',
        'pkgSkuId',
        'pkgCount',
        'returnEnable', {
            name: 'weight',
            type: Ext.data.Types.WEIGHT
        }, {
            name: 'extraServiceCharge',
            convert: function(v) {
                return (v / 10).toFixed(1);
            }
        }

    ]
});
