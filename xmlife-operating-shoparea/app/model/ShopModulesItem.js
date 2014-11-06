Ext.define('XMLifeOperating.model.ShopModulesItem', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'id',
    type: 'string'
  },
  {
    name: 'image',
    type: 'string'
  },
  {
    name: 'index'
  },
  {
    name : 'params'
  },
   {
    name : 'name'
  },
  {
    name : 'delete'
  },
  {
    name: 'titles',
    convert : function(v){
      return v.join(' ');
    }
  },
  {
    name: 'url',
    type: 'string'
  },{
    name: 'urlType',
    type: 'string'
  }]
});