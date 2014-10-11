Ext.define('XMLifeOperating.model.AdminList', {
    extend: 'Ext.data.Model',
    fields: ['account','adminType','creater','enable','models','name','shopAreaName','areaId','pwd'],
    proxy: new XMLifeOperating.generic.BaseProxy('admin/list')
});
