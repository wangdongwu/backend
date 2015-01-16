Ext.define('XMLifeOperating.store.Deal', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.Deal',
    proxy: new XMLifeOperating.generic.BaseProxy('deal', 'result')
});