Ext.define('XMLifeOperating.store.ShopperWorkTime', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.ShopperWorkTime',
    
    proxy : new XMLifeOperating.generic.BaseProxy('superShopper/worktime','arrayResult')
});