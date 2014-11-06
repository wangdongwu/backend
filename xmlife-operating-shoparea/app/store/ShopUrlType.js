Ext.define('XMLifeOperating.store.ShopUrlType', {
    extend: 'Ext.data.Store',
    fields:['name', 'urlType'],
    data:[
        { 'name': '店铺', 'urlType': 'SHOP'},
        { 'name': '货架', 'urlType': 'CATEGORY'},
        { 'name': 'SKU', 'urlType': 'SKU'},
        { 'name': 'url', 'urlType': 'HTML'}           
    ]
});