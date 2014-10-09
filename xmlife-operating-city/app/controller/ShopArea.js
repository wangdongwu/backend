Ext.define('XMLifeOperating.controller.ShopArea', {
  extend: 'Ext.app.Controller',
  views: ['shopAreaManage.shopAreaList','shopAreaManage.addShopArea'],
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
          added : self.renderShopareaList
      },
      'shopareaList #addShopArea' : {
        click : function(){
          this.getAddShopArea().show();
        }
      }
    });
  },
  renderShopareaList : function(){
    var me  = this ;
    var store = me.getShopAreaStore();
    store.load();
  }
})