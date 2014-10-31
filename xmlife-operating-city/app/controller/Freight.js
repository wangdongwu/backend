Ext.define('XMLifeOperating.controller.Freight', {
  extend: 'Ext.app.Controller',
  views: ['freightManage.FreightList', 'freightManage.FreightSet','Toolbar'],
  stores: ['SupportedcityGetByCode','SupportedCity'],
  models: ['SupportedcityGetByCode','SupportedCity'],
  refs: [{
      ref: 'freightList',
      selector: 'freightList',
      xtype: 'freight',
      autoCreate: true
    },{
      ref:'Toolbar',
      selector:'Toolbar',
      xtype:'headerToolbar'
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
      'freightSet #shipfee':{
        keyup:me.shipfeeKeyUp
       },
      'freightSet #submitId' : {
         click: me.submitData        
      },
    });
  },
  shipfeeKeyUp:function(view,e,opts){
    var me = this;
    var win = me.getFreightSet();
    var amountCmp = win.down('#amount');
    var deductdCmp = win.down('#deductd'); 
    var shipfeeDeductd = win.down('#shipfeeDeductd');
    var shipfee = win.down('#shipfee').getValue();
     if(shipfee > 0){
      amountCmp.setDisabled(false);
      amountCmp.setVisible(true);
      deductdCmp.setVisible(true);
      shipfeeDeductd.setVisible(true);
     }else{
      amountCmp.setDisabled(true);
      amountCmp.setVisible(false);
      deductdCmp.setVisible(false);
      shipfeeDeductd.setVisible(false); 
     }
  },
  showSetFreight: function(view, rowIndex, colIndex, column, e) {
    var me = this;
    var win = me.getFreightSet();
    var customerDetail = view.getRecord(view.findTargetByEvent(e));
    var name = customerDetail.get('name');
    var amountCmp = win.down('#amount');
    var deductdCmp = win.down('#deductd'); 
    var shipfeeDeductd = win.down('#shipfeeDeductd');
    //运费为0时，隐藏
    if(customerDetail.data.shipfee == 0){
      amountCmp.setDisabled(true);
      amountCmp.setVisible(false);
      deductdCmp.setVisible(false);
      shipfeeDeductd.setVisible(false);        
    }else{
      amountCmp.setDisabled(false);
      amountCmp.setVisible(true);
      deductdCmp.setVisible(true);
      shipfeeDeductd.setVisible(true);   
    }
    //满免大于0，自动选中
    if(customerDetail.data.deductd>0){     
      amountCmp.setValue(true);
    }else{
      amountCmp.setValue(false);
    }
    win.down('form').loadRecord(customerDetail);
    win.show();
  },
  renderFreightList: function() {
    var me = this;
    var store = me.getSupportedcityGetByCodeStore();
    store.load({
      params: {
        code: XMLifeOperating.generic.Global.currentCity
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
                                                        code: XMLifeOperating.generic.Global.currentCity
                                                  }
                                                });
                                                  windowEl.close();
                                                  me.fireEvent('refreshView');
                                                 });
    }
  }

})