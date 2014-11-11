Ext.define('XMLifeOperating.model.DamagedProduct', {
  extend: 'Ext.data.Model',
  //  private int status;//0:提交未审核状态 1:审核通过 2:审核拒绝
  fields: ['id', 'applyTime', 'productName', 'productId', 'count', 'fprice', 'pprice', 'dprice', 'totalPrice', 'shopId', 'shopName', 'reasonCode', 'status', 'areaName']
});
