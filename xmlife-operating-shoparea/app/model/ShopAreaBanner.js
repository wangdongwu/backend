var dataProxy = new XMLifeOperating.generic.BaseProxy('shopArea/banner');
Ext.define('XMLifeOperating.model.ShopAreaBanner', {
    extend: 'Ext.data.Model',
    fields: ['id','url','image','title','area','oldUrl'],
    proxy: dataProxy,
});