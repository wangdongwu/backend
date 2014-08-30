var dataProxy = new XMLifeOperating.generic.BaseProxy('residentalDistrict');
Ext.define('XMLifeOperating.model.ResidentalDistrict', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','lng','lat','address','isActive'],
    proxy: dataProxy,
    pruneModifiedRecords :true,
});