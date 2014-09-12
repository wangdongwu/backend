Ext.define('XMLifeOperating.store.AssignedCity', {
    extend: 'Ext.data.Store',
    storeId:'assignedCity',
    model:'XMLifeOperating.model.SupportedCity',
    autoLoad: false,
    proxy: new XMLifeOperating.generic.BaseProxy('assignedcity'),
});