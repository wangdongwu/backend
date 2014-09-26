var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/shopArea');
Ext.define('XMLifeOperating.model.DealShopArea', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','shopName','created','actualDealPrice','dealBackendId','districtName','deliveryZoneName','status','customName','customPhone','shopAreaName','shopperName','delivererName','deliTime','remainTime','taskDone','taskId','taskPrice','shortBackendId'],
    proxy: dataProxy
});
