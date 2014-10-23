/**
 * wangdongwu
 * @class XMLifeOperating.model.OnlineCard
 * @extends extendsClass
 * Description 
 */
Ext.define('XMLifeOperating.model.OnlineCard', {
    extend: 'Ext.data.Model',
    fields : [
      {
        name:'amount',
        convert : function(v){
          return (v/100).toFixed(2);
        }
      },
      {
        name:'batchName'
      },
      {
        name:'bizType'
      },
      {
        name:'create',
        convert : function(v){ 
          var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
           return format(new Date(v))
         }
      },
      {
        name:'creator'
      },
      {
        name:'desc'
      },
      {
        name:'endTime',
        dateFormat : 'Y-m-d H:i:s',
        convert : function(v){ 
          var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
           return format(new Date(v))
         }
      },
      {
        name:'id'
      },
      {
        name:'name'
      },
      {
        name:'newAccount',
        convert : function(v){
          return v ? '是' : '否';
        }
      },
      {
        name:'order'
      },
      {
        name:'rule'
      },
      {
        name:'simpleDesc'
      },
      {
        name:'soldPrice',
        convert : function(v){
          return (v/100).toFixed(2);
        }
      },
      {
        name:'startTime',
        convert : function(v){
         var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
          return format(new Date(v))
        }
      },
      {
        name:'status'
      },
      {
        name:'tid'
      },
      {
        name : 'tname'
      },
      {
        name:'total'
      },
      {
        name:'type',
        convert : function(v){
          var str = '';
          if(v==0){
            str = '普通卡'
          };
          if(v == 2){
            str = '返现卡'
          }
          return str;
        }
      },
      {
        name:'updated'
      },
      {
        name:'updater'
      },
      {
        name : 'displayEndTime',
        convert : function(v){
         var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
          return format(new Date(v))
        }
      },
      {
        name : 'displayStartTime',
        convert : function(v){
         var format = Ext.util.Format.dateRenderer('Y-m-d H:i:s');
          return format(new Date(v))
        }
      },
      {
        name : 'displayFlag'
      }
 ]
});
