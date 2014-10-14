Ext.define('XMLifeOperating.controller.Freight', {
  extend: 'Ext.app.Controller',
  views: ['freightManage.freightList', 'freightManage.freightSet'],
  stores: ['SupportedCitySetShipfee'],
  models: ['SupportedCitySetShipfee'],
  refs: [{
      ref: 'freightList',
      selector: 'freightList',
      xtype: 'freightList',
      autoCreate: true
    }, {
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
  init: function() {
    var me = this;
    me.control({
      'freightList': {
        added: me.renderFreightList
      },
      '#setFreight': {
        click: me.showSetFreight
      }


    });

  },
  showSetFreight: function(view, rowIndex, colIndex, column, e) {
    var me = this;
    var customerDetail = view.getRecord(view.findTargetByEvent(e));
    var name = customerDetail.get('name');
    var store = me.getSupportedCitySetShipfeeStore();


    var win = me.getFreightSet();
    win.down('form').loadRecord(customerDetail);
    win.show();

    //win.show();
    /* store.on('load', function(store, freightList) {
            win.show();
        });*/
    /*        store.load({
            params: {
                name: name
            }
        });*/
  },
  renderFreightList: function() {
    var me = this;
    var store = me.getSupportedCitySetShipfeeStore();

    store.load({
      params: {
        code: XMLifeOperating.generic.Global.currentCity,
        shipfee: 6,
        deductd: 99

      }
    });
  }

})