Ext.define('XMLifeOperating.model.CategoryLeaf', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [
  'barCode',
  'categoryId',
  'categoryIds',
  'categoryNames',
  'categoryname',
  'dprice',
  'dprice2',
  'fprice',
  'fprice2',
  'id',
  'limitCount',
  'limitType',
  'pprice',
  'pprice2',
  'productLimitCount',
  'rank',
  'rank2',
  'shopId',
  'shopname',
  'skuId',
  'soldCount',
  'status',
  'statusCn',
  'stock',
  'templateId',
  'top',
  'transferDprice',
  'transferFprice',
  'transferPprice',
  'unit',
  'unitname',
  'pid',
  {
    name : 'name',
    convert : function(v){
      return v.replace(/\n/g,'');
    }
  }
  ]
});

