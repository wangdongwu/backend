Ext.define('XMLifeOperating.model.ShopArea', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'address', 'zoneNames', 'shopNames', 'city'],
    proxy: new XMLifeOperating.generic.BaseProxy('shopArea?city=330100')
});
