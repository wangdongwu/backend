Ext.define('XMLifeOperating.store.DamagedProductReasonCode', {
    extend: 'Ext.data.Store',
    fields:['name', 'value'],
 
    data:[
        { 'name': '申报中','value':'0'},
        { 'name': '无法退货','value':'1'},
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