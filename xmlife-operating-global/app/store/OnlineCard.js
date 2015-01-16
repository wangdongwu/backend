Ext.define('XMLifeOperating.store.OnlineCard', {
    extend: 'Ext.data.Store',
    model: 'XMLifeOperating.model.OnlineCard',
    proxy: new XMLifeOperating.generic.BaseProxy('cardBatch?bizType=1')
});
