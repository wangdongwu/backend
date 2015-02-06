Ext.define('XMLifeOperating.store.SuperShopper', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.SuperShopper',
    proxy: new XMLifeOperating.generic.BaseProxy('superShopper', 'result')
});
