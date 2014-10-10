Ext.define('XMLifeOperating.controller.ShopArea', {
  extend: 'Ext.app.Controller',
  views: ['shopAreaManage.shopAreaList','shopAreaManage.addShopArea'],
  stores: ['ShopArea'],
  models: ['ShopArea'],
  refs : [
  {
    ref: 'shopAreaList',
    selector: 'shopAreaList',
    xtype: 'shopAreaList',
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
      'shopAreaList' : {
        added : self.renderShopareaList,
        show:self.onShow

      },
      'shopAreaList #addShopArea' : {
        click : function(){
          this.getAddShopArea().show();
        }
      },
      'addShopArea #add-new-shopArea':{
        click : self.addShopArea
      }
    });
  },
  renderShopareaList : function(){
    var me  = this ;
    var store = me.getShopAreaStore();
    
    store.load();
    console.log(123)
  },
  onShow:function(){
    var me  = this ;
    var store = me.getShopAreaStore();
    store.load(); 
  },
  addShopArea:function(){
    var me = this;
  }
})