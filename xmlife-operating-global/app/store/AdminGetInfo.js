Ext.define('XMLifeOperating.store.AdminGetInfo', {
    extend: 'Ext.data.Store',
    model : 'XMLifeOperating.model.AdminGetInfo',
    proxy : new XMLifeOperating.generic.BaseProxy('admin/getInfo')
});