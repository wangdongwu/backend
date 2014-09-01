var dataProxy = new XMLifeOperating.generic.BaseProxy('cardBatch');
Ext.define('XMLifeOperating.model.CardBatch', {
    extend: 'Ext.data.Model',
    fields: ['id','name', 'startTime','endTime','total'],
    proxy: dataProxy,
});