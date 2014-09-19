var dataProxy = new XMLifeOperating.generic.BaseProxy('product');
Ext.define('XMLifeOperating.model.Product', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name','shopId','shopname','unitname','pprice','fprice','dprice','status','productTemplateId','purchasePrice','facePrice','discountPrice','categoryId','limitType','limitCount','dayLimitCount','totalLimitCount','barCode','skuId','rank'],
    proxy: dataProxy,
});
//barCode 