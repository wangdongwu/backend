Ext.define('XMLifeOperating.store.DealReturnCheckStatus', {
    extend: 'Ext.data.Store',
    fields: ['name', 'value'],

    data: [{
        'name': '审核通过',
        'value': 1
    }, {
        'name': '等待审核',
        'value': 0
    }, {
        'name': '审核拒绝',
        'value': 2
    }, {
        'name': '全部',
        'value': 3
    }],
    idProperty:'value',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }

});
