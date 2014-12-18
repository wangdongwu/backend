Ext.define('XMLifeOperating.store.HomePageFunction', {
	extend: 'Ext.data.Store',
	fields:['name', 'value'],
    data:[
        { 'name': '钱包页面', 'value': 'WALLET'},
        { 'name': '我的足迹', 'value': 'MYFOOT'},
        { 'name': '热卖', 'value': 'HOTSALE'}
    ]
});