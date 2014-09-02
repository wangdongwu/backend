var dataProxy = new XMLifeOperating.generic.BaseProxy('shopbannertemplate');
Ext.define('XMLifeOperating.model.ShopBannerTemplate', {
    extend: 'Ext.data.Model',
    fields: ['id','url','image','title','areaId','name'],
    proxy: dataProxy,
});