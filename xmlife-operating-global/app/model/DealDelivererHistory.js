Ext.define('XMLifeOperating.model.DealDelivererHistory', {
    extend: 'Ext.data.Model',
    fields: ['dealBackendId','created','customerPhone','beginDeliverTime','customerName','shopNames','completeTime','taskDone','status','review'],
    proxy: new XMLifeOperating.generic.BaseProxy('deal/delivererHistory'),
});