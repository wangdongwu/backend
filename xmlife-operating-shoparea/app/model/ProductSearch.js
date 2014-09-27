var dataProxy = new XMLifeOperating.generic.BaseProxy('product/search');
Ext.define('XMLifeOperating.model.ProductSearch', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','shopId','shopname','categoryname','unitname','pprice','fprice','dprice','status','productTemplateId','purchasePrice','facePrice','discountPrice','categoryId','limitType','limitCount','dayLimitCount','totalLimitCount','barCode','skuId','rank'],
    proxy: dataProxy,
});
//barCode 