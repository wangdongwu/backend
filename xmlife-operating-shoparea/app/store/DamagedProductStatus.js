Ext.define('XMLifeOperating.store.DamagedProductStatus', {
    extend: 'Ext.data.Store',
    fields:['name', 'value'],
 
    data:[
        { 'name': '全部','value':''},
        { 'name': '申报中','value':'0'},
        { 'name': '审核通过','value':'1'},
        { 'name': '审核拒绝','value':'2'},
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
    
});

// status 状态 0:申报中 1:审核通过 2:审核拒绝 不填为 0 申报中