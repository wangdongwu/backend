var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/items');
Ext.define('XMLifeOperating.model.DealItems', {
    extend: 'Ext.data.Model',
    fields: ['dealBackendId','unit','name','shopName','num','cancelPrice','cancelNum','returnNum','dealPrice','pprice','fprice','price','actualItemPrice','returnPrice'],
    proxy: dataProxy,
});