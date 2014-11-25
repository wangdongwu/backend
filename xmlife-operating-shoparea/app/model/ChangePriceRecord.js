var dataProxy = new XMLifeOperating.generic.BaseProxy('changePriceRecord');
Ext.define('XMLifeOperating.model.ChangePriceRecord', {
    extend: 'Ext.data.Model',
    fields: ['id','shopId','shopName','skuId','productName','categoryName','shopName','proPprice','proDprice','pprice','dprice','proPrice','proDprice','dprice','updated','status','auditer','auditTime','price'],
    proxy: dataProxy,
});
//id
//shopId 冗余店铺ID
//shopName 店铺名称
//areaId 冗余中心ID
//areaName 中心名称
//cityId 冗余城市ID
//productId 冗余商品ID
//categoryName 店铺所属货架名称
//productName 商品名称
//skuId 冗余商品SKUID
//created  创建时间
//creator 创建人ID
//creatorName 创建人名称
//updated 修改时间
//updater 修改人
//updaterName 修改人名称
//status 状态 0:提交 1:通过 2:拒绝
//applyTime 申请时间
//description 描述
//proPrice 原来的 原价
//proPprice 原来的进价
//proDprice 原来的折扣价
//price 要改的价格
//pprice 要改的进价
//dprice 要改的折扣价