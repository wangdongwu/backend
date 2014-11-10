Ext.define('XMLifeOperating.store.HomePageUrlType', {
    extend: 'Ext.data.Store',
    fields:['name', 'urlType'],
    data:[
        { 'name': '店铺', 'urlType': 'SHOP'},
        { 'name': '货架', 'urlType': 'CATEGORY'},
        { 'name': 'SKU', 'urlType': 'SKU'},
        //{ 'name': '功能页面', 'urlType': 'FUNCTION'},
        { 'name': 'url', 'urlType': 'HTML'}						
    ]
});