Ext.define('XMLifeOperating.store.HomePageUrlType', {
    extend: 'Ext.data.Store',
    fields:['name', 'value'],
    data:[
        { 'name': '店铺', 'value': 'SHOP'},
        { 'name': '货架', 'value': 'CATEGORY'},
        { 'name': 'SKU', 'value': 'SKU'},
        //{ 'name': '功能页面', 'value': 'FUNCTION'},
        { 'name': 'url', 'value': 'HTML'}						
    ]
});