Ext.define('XMLifeOperating.store.ResidentalDistrict', {
    extend: 'Ext.data.Store',
    model:'XMLifeOperating.model.ResidentalDistrict',
    proxy : new XMLifeOperating.generic.BaseProxy('residentalDistrict','arrayResult')
});