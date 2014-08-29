var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/shopArea');
Ext.define('XMLifeOperating.model.DealShopArea', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','shopName','created','dealBackendId','deliveryZoneName','status','customName','customPhone','shopAreaName','shopperName','delivererName','deliTime','remainTime','taskDone','taskId','shortBackendId'],
    proxy: dataProxy
});
