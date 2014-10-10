Ext.define('XMLifeOperating.controller.Freight', {
  extend: 'Ext.app.Controller',
  views: ['freightManage.freightList','freightManage.freightSet'],
  stores: ['SupportedCitySetShipfee'],
  models: ['SupportedCitySetShipfee'],
  refs : [
    {
      ref: 'freightList',
      selector: 'freightList',
      xtype: 'freightList',
      autoCreate: true
    },
    {
        ref: 'freightSet',
        selector: 'freightSet',
        xtype: 'freightSet',
        autoCreate: true
    },
    /*{
      ref: 'addShopArea',
      selector: 'addShopArea',
      xtype: 'addShopArea',
      autoCreate: true
    }*/
  ],
  init : function(){
    var me = this;
    me.control({
      'freightList' : {
          added : me.renderFreightList       
      },
      '#addressFreight': {
                click: me.onAddressFreight
            },

      
    });

  },
  onAddressFreight: function(view, rowIndex, colIndex, column, e) {
        var self = this;
        var customerDetail = view.getRecord(view.findTargetByEvent(e));
        var uid = customerDetail.get('uid');
        var store = self.getSupportedCitySetShipfeeStore();
        var win = self.getFreightSet();
        store.on('load', function(store, addressList) {
            win.show();
        });
        store.load({
            params: {
                customer: uid
            }
        });
    },
  renderFreightList : function(){
    var me = this;
    var store = me.getSupportedCitySetShipfeeStore();
    
    store.load({

      /*params:{

        code:XMLifeOperating.generic.Global.currentCity,
        shipfee:6,
        deductd:99

      }*/
    });
  }
    
})