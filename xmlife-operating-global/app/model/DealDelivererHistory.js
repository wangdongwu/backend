var dataProxy = new XMLifeOperating.generic.BaseProxy('deal/delivererHistory');
Ext.define('XMLifeOperating.model.DealDelivererHistory', {
    extend: 'Ext.data.Model',
    fields: ['dealBackendId','created','customerPhone','beginDeliverTime','customerName','shopNames','completeTime','taskDone','status','review'],
    proxy: dataProxy,
});