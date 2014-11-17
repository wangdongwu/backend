var dataProxy = new XMLifeOperating.generic.BaseProxy('residentalDistrict');
Ext.define('XMLifeOperating.model.ResidentalDistrict', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','lng','lat','address','isActive','city','type'],
    proxy: dataProxy,
    pruneModifiedRecords :true,
});