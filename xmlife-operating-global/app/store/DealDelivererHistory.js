Ext.define('XMLifeOperating.store.DealShopperHistory', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.DealShopperHistory',
    autoLoad: true,
    sorters: [{
    	property: 'created',
    	direction: 'DESC',
    }],
});