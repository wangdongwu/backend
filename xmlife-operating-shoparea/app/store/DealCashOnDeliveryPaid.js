Ext.define('XMLifeOperating.store.DealCashOnDeliveryPaid', {
    extend: 'Ext.data.Store',
    fields:['name', 'value'],
    data:[
    	{ 'name': '全部','value':null},
        { 'name': '到账','value':true},
        { 'name': '未到账','value':false},
    ],
});