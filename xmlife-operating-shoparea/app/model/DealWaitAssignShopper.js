Ext.define('XMLifeOperating.model.DealWaitAssignShopper', {
    extend: 'Ext.data.Model',
    fields: [
        'customId', // 被同名Controller使用
        'dtoAddress', // 被同名Controller使用
        'dealBackendId', // 被同名Controller使用
        'created', // 其余的被同名view使用
        'status',
        'shopAreaName',
        'superShopperName',
        'shopName',
        'deliverTime',
        'remainTime',
        'assignShopperTime',
        'buyDone',
        'completeTime',
        'contactsPhone',
        'contactsName'
    ],
    proxy: new XMLifeOperating.generic.BaseProxy('deal/getUnassignedDeals')
});
