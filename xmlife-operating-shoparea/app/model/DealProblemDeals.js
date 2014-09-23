var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/problemDeals');
Ext.define('XMLifeOperating.model.DealProblemDeals', {
    extend: 'Ext.data.Model',
    fields: ['id', 'actualDealPrice','created','taskId','zoneId','dealId','dealBackendId','zoneName','dtoAddress','status','problem','customerName','customerPhone','shopAreaName','shopperNames','shopNames','delivererName','created','deliverTime','remainTime','taskDone','beginDeliverTime','shortId','contactsName','contactsPhone','problemMark'],
    proxy: dataProxy
});
 

