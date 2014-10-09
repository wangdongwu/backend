var dataProxy = new XMLifeOperating.generic.BaseProxy('supportedcity');
Ext.define('XMLifeOperating.store.SupportedCity', {
    extend: 'Ext.data.Store',
    storeId:'supportedCity',
    model:'XMLifeOperating.model.SupportedCity',
    autoLoad: false,
    proxy: dataProxy,
});