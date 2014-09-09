Ext.define('XMLifeOperating.store.DealShopperHistory', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DealShopperHistory',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy : new XMLifeOperating.generic.BaseProxy('deal/shopperHistory','arrayResult'),
    sorters: [{
    	property: 'created',
    	direction: 'DESC',
    }]
});