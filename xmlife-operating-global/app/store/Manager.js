Ext.define('XMLifeOperating.store.Manager', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.Manager',
    proxy: new XMLifeOperating.generic.BaseProxy('manager', 'result')
});
