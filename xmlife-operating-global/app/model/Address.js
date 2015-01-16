Ext.define('XMLifeOperating.model.Address', {
    extend: 'Ext.data.Model',
    fields: ['addrdesc', 'addressDetail', 'addressId'],
    proxy: new XMLifeOperating.generic.BaseProxy('address')
});
