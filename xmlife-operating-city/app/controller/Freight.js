Ext.define('XMLifeOperating.controller.Freight', {
  extend: 'Ext.app.Controller',
  views: ['freightManage.FreightList', 'freightManage.FreightSet'],
  stores: ['SupportedcityGetByCode'],
  models: ['SupportedcityGetByCode'],
  refs: [{
      ref: 'freightList',
      selector: 'freightList',
      xtype: 'freight',
      autoCreate: true
    }, {
      ref: 'freightSet',
      selector: 'freightSet',
      xtype: 'freightSet',
      autoCreate: true
    },
  ],
  init: function() {
    var me = this;
    me.control({
      'freightList': {
        added: me.renderFreightList
      },
      '#setFreight': {
        click: me.showSetFreight
      },
      'freightSet #submitId' : {
         click: me.submitData        
      },
    });
  },
  showSetFreight: function(view, rowIndex, colIndex, column, e) {
    var me = this;
    var customerDetail = view.getRecord(view.findTargetByEvent(e));
    var name = customerDetail.get('name');
    var  amountCmp = me.getFreightSet().down('#amount');
    
    if(customerDetail.data.deductd>0){
      
    amountCmp.setValue(true);
    

      
    }
    
    var win = me.getFreightSet();
    win.down('form').loadRecord(customerDetail);
    win.show();
  },
  renderFreightList: function() {
    var me = this;
    var store = me.getSupportedcityGetByCodeStore();
    store.load({
      params: {
        code: 330100
      }
    });
  },
  submitData: function(button){
    var me = this;
    var windowEl = button.up('window');
    var form = button.up('window').down('form');
    var subData = form.getForm().getValues();
    var store = me.getSupportedcityGetByCodeStore();    
    if(form.isValid()){
    var shipfee = subData.shipfee;
    var deductd = subData.deductd;
    var amount = subData.amount;
    var ajaxData={};
      if (amount == 'on') {
              ajaxData.shipfee = shipfee;
              ajaxData.deductd = deductd;
              ajaxData.code =XMLifeOperating.generic.Global.currentCity;
      } else {
          ajaxData.shipfee = shipfee;
          ajaxData.code =XMLifeOperating.generic.Global.currentCity;
      }
       sendPutRequest('supportedcity/setShipfee',ajaxData,'编辑模板','成功编辑模板','编辑模板失败',function(){

                                                store.load({
                                                  params: {
                                                        code: 330100
                                                  }
                                                });
                                                  windowEl.close();
                                                  me.fireEvent('refreshView');
                                                 });
    }
  }

})