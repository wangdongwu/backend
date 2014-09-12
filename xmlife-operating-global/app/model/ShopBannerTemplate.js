Ext.define('XMLifeOperating.model.ShopBannerTemplate', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'banner','logo','inco', 'nameColor','nameStrokeColor','nameDegree','descColor','descStrokeColor','descDegree','type','response'],
    proxy: new XMLifeOperating.generic.BaseProxy('shopbannertemplate')
});
