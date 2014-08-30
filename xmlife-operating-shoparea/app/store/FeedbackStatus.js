Ext.define('XMLifeOperating.store.FeedbackStatus', {
    extend: 'Ext.data.Store',
    fields:['name', 'value'],
 
    data:[
        { 'name': '标记','value':'0'},
        { 'name': '未标记','value':'1'},
    ],
});