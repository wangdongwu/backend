Ext.define('XMLifeOperating.store.MessageStatus', {
    extend: 'Ext.data.Store',
    fields: ['name', 'value'],
    data: [{
        'name': '未发布',
        'value': 0
    }, {
        'name': '处理中',
        'value': 1
    }, {
        'name': '已发布',
        'value': 2
    }]
});
