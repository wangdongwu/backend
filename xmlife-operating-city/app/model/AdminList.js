Ext.define('XMLifeOperating.model.AdminList', {
    extend: 'Ext.data.Model',
    fields: ['acount','adminType','name','creater','enable','models','name','shopAreaName'],
    proxy: new XMLifeOperating.generic.BaseProxy('admin/list')
});
