Ext.define('XMLifeOperating.model.CardTemplate', {
    extend: 'Ext.data.Model',
    fields: ['amount', 'batchBackType', 'create', 'creator', 'desc', 'id', 'name', 'newAccount', 'rule', 'simpleDesc', 'status', 'type', 'updated', 'updater'],
    proxy: new XMLifeOperating.generic.BaseProxy('cardTemplate')
});
