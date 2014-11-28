Ext.define('XMLifeOperating.model.ShopConfig', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'id',
    type: 'string'
  }, {
    name: 'layoutId',
    mapping: 'id'
  }, {
    name: 'status'
    /*,
    convert : function(v){
      var str = '';
      switch(v){
        case 0:
          str = '未启用';
          break;
        case 1:
          str = '启用';
          break;
        case 2:
          str = '定时中';
          break;
      }
      return str;
    }*/
  }, {
    name: 'statusBack',
    mapping: 'status'
  }, {
    name: 'modules'
  }, {
    name: 'default'
  }, {
    name: 'type'
  }, {
    name: 'startTime',
    convert: function (v) {
      if (!v) {
        return '';
      }
      var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
      return format(new Date(v))
    }
  }, {
    name: 'endTime',
    convert: function (v) {
      if (!v) {
        return '';
      }
      var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
      return format(new Date(v))
    }
  }, {
    name: 'time',
    convert: function (v, model) {
      return model.get('startTime') + '<br/>' + model.get('endTime');
    }
  }, {
    name: 'hierarchy'
  }, {
    name: 'shopId'
  }, {
    name: 'version',
    type: 'string'
  }, {
    name: 'enable',
    type: 'boolean'
  }]
});