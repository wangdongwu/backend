Ext.define('XMLifeOperating.model.AdminList', {
    extend: 'Ext.data.Model',
    fields: [],
    proxy: new XMLifeOperating.generic.BaseProxy('admin/list?type=2')
});
