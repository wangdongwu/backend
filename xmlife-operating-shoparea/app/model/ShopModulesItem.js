Ext.define('XMLifeOperating.model.ShopModulesItem', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'id',
    type: 'string'
  },
  {
    name : 'shopId'
  },
  {
    name : 'cid'
  },
  {
    name : 'pid'
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
      if(typeof(v) == 'object' && v.length >0){
            return v.join(';');
          } else {
            return v;
          }
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