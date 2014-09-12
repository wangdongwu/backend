Ext.define('XMLifeOperating.model.Shop', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'templateId', 'templateName','desc','openTime','closeTime','lng','lat','url','city','areaNames','banners','address','time','areaIds','shopBannerTemplateId','shopperCount','shopId','status','areas'],
    idProperty:'shopId',
    proxy: new XMLifeOperating.generic.BaseProxy('shop'),
});