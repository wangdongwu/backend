Ext.define('XMLifeOperating.model.ShopConfig', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'id',
    type: 'string'
  },
  {
    name :'modules'
  },
  {
    name : 'hierarchy'
  },
  {
    name : 'shopId'
  },
  {
    name: 'version',
    type: 'string'
  },
  {
    name: 'enable',
    type: 'boolean'
  }]
});
'enable','hierarchy','id','modules','shopId','version'