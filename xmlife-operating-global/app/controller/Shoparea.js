Ext.define('XMLifeOperating.controller.Shoparea', {
  extend: 'Ext.app.Controller',
  views: ['shopareaManage.shopareaList','shopareaManage.addShopArea'],
  stores: ['ShopArea'],
  models: ['ShopArea'],
  refs : [
    {
      ref: 'shopareaList',
      selector: 'shopareaList',
      xtype: 'shopareaList',
      autoCreate: true
    },
    {
      ref: 'addShopArea',
      selector: 'addShopArea',
      xtype: 'addShopArea',
      autoCreate: true
    }
  ],
  init : function(){
    var self = this;
    self.control({
      'shopareaList' : {
          added : self.rendenShopareaList
      },
      'shopareaList #addShopArea' : {
        click : function(){
          this.getAddShopArea().show();
        }
      }
    });
  },
  rendenShopareaList : function(){
  }
})