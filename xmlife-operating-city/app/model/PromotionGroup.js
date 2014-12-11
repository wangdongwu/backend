Ext.define('XMLifeOperating.model.PromotionGroup', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: ['promotionGroupId','longName','shortName',{
    name : 'groupId',
    mapping : 'promotionGroupId'
  },{
    name : 'name',
    mapping : 'longName'
  }]
});
