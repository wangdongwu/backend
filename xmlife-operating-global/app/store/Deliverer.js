Ext.define('XMLifeOperating.store.Deliverer', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.Deliverer',
    proxy: new XMLifeOperating.generic.BaseProxy('deliverer', 'result')
});