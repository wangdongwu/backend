Ext.define('XMLifeOperating.model.shopModules', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'id',
    type: 'string'
  },
  {
    name : 'moduleId',
    mapping : 'id'
  },
  {
    name:'isAdvert',
    type : 'boolean'
  },
  {
    name : 'items',
    type : 'array'
  },
  {
    name : 'layoutId',
    type : 'string'
  },
  {
    name: 'name',
    type: 'string'
  },
  {
    name : 'typeCopy',
    mapping : 'type'
  },
  {
    name: 'type',
    type: 'string',
    convert : function(v){
      var str = '';
      switch(v){
          case 'TYPE0':
            str = 'banner';
            break;
          case 'TYPE8':
            str = '大空格';
            break;
          case 'TYPE9':
            str = '小空格';
            break;
          case 'USERCOLLECT':
            str = '收藏货架'
            break;
          case 'CATEGORY':
            str = '普通货架'
            break;
          default:
            str = v
          }
      return str;
    }
  },
  {
    name :'order',
    type : 'number'
  },{
    name : 'position',
    mapping : 'order'
  }]
});
