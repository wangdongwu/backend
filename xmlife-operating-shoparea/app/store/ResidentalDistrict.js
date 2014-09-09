Ext.define('XMLifeOperating.store.ResidentalDistrict', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.ResidentalDistrict',
    autoLoad: {start: 0, limit: 25,page:1},
    proxy : new XMLifeOperating.generic.BaseProxy('residentalDistrict','arrayResult')
});