Ext.define('XMLifeOperating.controller.BatchUpdatePrice', {
    extend: 'Ext.app.Controller',

    views: ['BatchUpdatePrice'],

    stores: ['Shop','ShopArea'],

    models: ['Shop','ShopArea'],

    refs: [{
        ref: 'BatchUpdatePrice',
        selector: 'BatchUpdatePrice',
        xtype: 'BatchUpdatePrice',
        autoCreate: true
    }],

    init: function() {
      
      var self = this;
      var shopStore = self.getShopStore();
      shopStore.on('load',function(store,data){
                  var ShopSelect = self.getBatchUpdatePrice().down('#ShopSelect');
                    data.length > 0 ? ShopSelect.setValue(data[0].data.id) : ShopSelect.setValue('');
                  });

      self.control(
        {
          'BatchUpdatePrice' : {
            added : function(){
              var shopStore = self.getShopStore();
                  shopStore.getProxy().extraParams = {
                    city: XMLifeOperating.generic.Global.currentCity,
                    areaId: self.areaId
                };
                shopStore.load();
            }
          }
        ,
          'BatchUpdatePrice #shopArea': {
                select: function(combo) {
                    var store = self.getShopStore();
                    store.getProxy().extraParams = {
                        city: XMLifeOperating.generic.Global.currentCity,
                        areaId: combo.getValue()
                    }
                    store.load();
                    
                    self.areaId = combo.getValue();
                }
            },
        'BatchUpdatePrice #ShopSelect' : {
            select : function(combo){
              //self.shopId = combo.getValue();
            }
          },
        'BatchUpdatePrice button':{
          click : function(gird){
            
            var config = {
              uploadPrice : 'backdoor/update/product/price',
              uploadStatus : 'backdoor/update/product/status',
            }
            var sessionId = localStorage.getItem('sessionId') || '';
            var form = gird.up('form').getForm();
            if(form.isValid()){
              form.submit({
                url : XMLifeOperating.generic.Global.URL.biz+config[gird.name]+'?/sessionId='+sessionId,
                params: {'sessionId':sessionId},
                waitMsg : '正在上传您的文件......',
                success : function(form, action){

                  var data = action.response.responseText;
                  console.log(data);
                },
                failure : function(form, action){
                  var data = action.response.responseText;
                  console.log(data);
                }
              });
            }
          }
        }
      })
    },
});