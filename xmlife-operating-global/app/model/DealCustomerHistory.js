Ext.define('XMLifeOperating.model.DealCustomerHistory', {
    extend: 'Ext.data.Model',
    fields: [
        'created',
        'customId',
        'dtoAddress',
        'dealBackendId',
        'zoneName',
        'status',
        'customerName',
        'customerPhone',
        'shopAreaName',
        'shopperNames',
        'shopNames',
        'delivererName',
        'deliverTime',
        'remainTime',
        'taskDone',
        'beginDeliverTime',
        'completeTime',
        'actualDealPrice',
        'dealPrice',
        'contactsName',
        'contactsPhone',
        'shortId'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('deal/customerHistory')
});
