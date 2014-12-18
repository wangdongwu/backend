Ext.define('XMLifeOperating.store.HomePageUrlType', {
    extend: 'Ext.data.Store',
    fields:['name', 'urlType'],
    data:[
    	{ 'name': '店铺集合', 'urlType': 'SHOPSET'},
        { 'name': '店铺', 'urlType': 'SHOP'},
        { 'name': '货架', 'urlType': 'CATEGORY'},
        { 'name': '商品', 'urlType': 'SKU'},
        { 'name': '功能页面', 'urlType': 'FUNCTION'},
        { 'name': '限购活动', 'urlType': 'PROMOTION'},
        { 'name': 'url', 'urlType': 'HTML'}						
    ]
});