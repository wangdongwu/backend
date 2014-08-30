var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/shopperHistory');
Ext.define('XMLifeOperating.model.DealShopperHistory', {
    extend: 'Ext.data.Model',
    fields: ['id','dealBackendId','created','customPhone','beginDeliverTime','customName','shopName','dealDone','taskDone','status','review','shortBackendId'],
    proxy: dataProxy,
});