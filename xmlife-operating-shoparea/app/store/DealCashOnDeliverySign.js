Ext.define('XMLifeOperating.store.DealCashOnDeliverySign', {
    extend: 'Ext.data.Store',
    fields:['name', 'value'],
    data:[
    	{ 'name': '全部','value':'all'},
        { 'name': '标记','value':true},
        { 'name': '未标记','value':false},  
    ],
});