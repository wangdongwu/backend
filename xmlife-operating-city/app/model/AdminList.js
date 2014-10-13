Ext.define('XMLifeOperating.model.AdminList', {
    extend: 'Ext.data.Model',
    fields: ['account','adminType','creater','enable','models','name','shopAreaName','areaId','pwd'],
    idProperty:'account',
    proxy: new XMLifeOperating.generic.BaseProxy('admin/list')
});
