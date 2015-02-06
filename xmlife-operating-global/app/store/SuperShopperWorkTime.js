Ext.define('XMLifeOperating.store.SuperShopperWorkTime', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.SuperShopperWorkTime',
    
    proxy : new XMLifeOperating.generic.BaseProxy('superShopper/worktime','result')
});
