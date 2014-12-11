Ext.define('XMLifeOperating.store.Promotion', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.Promotion',
    proxy: new XMLifeOperating.generic.BaseProxy('promotion')
});
