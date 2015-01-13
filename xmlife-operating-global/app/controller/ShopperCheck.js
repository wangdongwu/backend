Ext.define('XMLifeOperating.controller.ShopperCheck', {
	extend: 'Ext.app.Controller',
	models: ['Deal','ShopperExamine','ShopperExamine'],
	stores: ['Deal',
           'ShopArea',
           'ShopperExamine',
           'CancelDeal',
           'ComplainRecord',
           'CompletedDeal',
           'DirectRefuseDeal',
           'IssueDeal',
           'OverTimeRefuseDeal',
           'ReturnedDeal',
           'ReturnRecord'
           ],
	views: [
		'staffManage.shopperCheck.ShopperCheckList',
    'staffManage.shopperCheck.ShopperDetail',
    'staffManage.shopperCheck.CheckDetailTab',
    'staffManage.shopperCheck.ShopperList',
    'staffManage.shopperCheck.CancelDealList',
    'staffManage.shopperCheck.ComplainRecordList',
    'staffManage.shopperCheck.CompletedDealList',
    'staffManage.shopperCheck.DirectRefuseDealList',
    'staffManage.shopperCheck.IssueDealList',
    'staffManage.shopperCheck.OverTimeRefuseDealList',
    'staffManage.shopperCheck.ReturnedDealList',
		'staffManage.shopperCheck.ReturnRecordList'
	],
	refs: [{
		ref: 'ShopperCheckList',
		selector: 'ShopperCheckList',
		xtype: 'ShopperCheckList',
    autoCreate: true
	},{
    ref: 'ShopperDetail',
    selector: 'ShopperDetail',
    xtype: 'ShopperDetail',
    autoCreate: true
  }, {
    ref: 'CheckDetailTab',
    selector: 'CheckDetailTab',
    xtype: 'CheckDetailTab'
  }, {
    ref: 'ShopperList',
    selector: 'ShopperList',
    xtype: 'ShopperList'
  }, {
    ref: 'CancelDealList',
    selector: 'CancelDealList',
    xtype: 'CancelDealList'
  }, {
    ref: 'ComplainRecordList',
    selector: 'ComplainRecordList',
    xtype: 'ComplainRecordList',
    }, {
    ref: 'CompletedDealList',
    selector: 'CompletedDealList',
    xtype: 'CompletedDealList'
  }, {
    ref: 'DirectRefuseDealList',
    selector: 'DirectRefuseDealList',
    xtype: 'DirectRefuseDealList'
  }, {
    ref: 'IssueDealList',
    selector: 'IssueDealList',
    xtype: 'IssueDealList'
  }, {
    ref: 'OverTimeRefuseDealList',
    selector: 'OverTimeRefuseDealList',
    xtype: 'OverTimeRefuseDealList'
  }, {
    ref: 'ReturnedDealList',
    selector: 'ReturnedDealList',
    xtype: 'ReturnedDealList'
  }, {
    ref: 'ReturnRecordList',
    selector: 'ReturnRecordList',
    xtype: 'ReturnRecordList'
  }],
	init: function () {
		var self = this;
   // self.tab = self.getShopperCheckList().down('CheckDetailTab');
		self.control({
      'ShopperList' : {
        afterrender : function(){
          self.tab = self.getShopperCheckList().down('CheckDetailTab');
        }
      },
      '#shopperDetail' : {
        click : self.showShopperDetail
      },
      'ShopperList #shopareaCombo':{
        afterrender : self.selectShopArea
      },
      'ShopperList #loadShopperBt' :{
        click : self.loadShopperExamine
      },
      'ShopperList #exportGather' :{
        click : self.exportGather
      },
      'ShopperList #exportGatherList' :{
        click : self.exportGatherList
      },
      'ShopperList #completeDeals' : {
        click : self.completeDeals
      },
      'ShopperList #cancelDeal' : {
        click : self.cancelDeal
      },
      'ShopperList #closeDeall' : {
        click : self.closeDeall
      },
      'ShopperList #outtimeDeal' : {
        click : self.outtimeDeal
      },
      'ShopperList #returnDeal' : {
        click : self.returnDeal
      },
      'ShopperList #issueDeal' : {
        click : self.issueDeal
      },
      'ShopperList #partReturnDeal' : {
        click : self.partReturnDeal
      },
      'ShopperList #complainDeal' : {
        click : self.complainDeal
      }
		});
	},
  showShopperDetail : function(){
    var wins = this.getShopperDetail(),
    superShopperId = arguments[5].get('superShopperId');
    sendGetRequest('superShopperExamine/getSuperShopperInfo',{superShopperId:superShopperId},'','','',function(response){
      if(response.status == 200 && response.statusText == 'OK'){
        var data = Ext.decode(response.responseText);
        wins.update(data);
        wins.show();
      }
    },function(){
      Ext.Msg.alert('提示','加载买手信息失败!');
    },
    'report')
  },
  getParam : function(){
    var ShopperList = this.getShopperList(),
        store = this.getShopperExamineStore(),
        areaId = ShopperList.down('#shopareaCombo').getValue(),
        startTime = ShopperList.down('#startTime').getValue().getTime()/*getRawValue()*/,
        endTime = ShopperList.down('#endTime').getValue().getTime()+86400000;
        if(!areaId || !startTime || !endTime){
          return false;
        }
        return {
                areaId: areaId,
                beginTime : startTime,
                endTime : endTime
        }
  },
  loadShopperExamine : function(){
    var store = this.getShopperExamineStore(),
        param = this.getParam();
        if(!param){
          return false;
        }
        store.load({params: param})
  },
  /**
   * [selectShopArea 自动选中中心]
   * @param  {[type]} combo [当前中心下拉列表]
   * @return {[type]}       [description]
   */
  selectShopArea : function(combo){
    var store = this.getShopAreaStore();
        store.load({callback:function(){
          combo.setValue(this.getAt(0));
        }})
  },
  /**
   * [exportGather 导出汇总表]
   * @return {[type]} [description]
   */
  exportGather : function(){
    var param = this.getParam(),
        parmUrl = Ext.urlEncode(param),
        url = XMLifeOperating.generic.Global.URL.report+'superShopperExamine/exportGather?'+parmUrl;
        
        window.open(url, '_blank');
  },
  /**
   * [exportGatherList 导出明细表]
   * @return {[type]} [description]
   */
  exportGatherList : function(){
    var param = this.getParam(),
    parmUrl = Ext.urlEncode(param),
    url = XMLifeOperating.generic.Global.URL.report+'superShopperExamine/exportGatherList?'+parmUrl;

    window.open(url, '_blank');
  },
  /**
   * [completeDeals 完成单数-订单]
   * @return {[type]} [description]
   */
  completeDeals : function(){
    var model = arguments[5],
        superShopperId = model.get('superShopperId'),
        param = this.getParam();
        if(!param){
          return false;
        }
        param = Ext.Object.merge(param, {superShopperId:superShopperId});
        
        this.tab.setActiveTab(this.getCompletedDealList());
        this.getCompletedDealStore().load({
          params : param
        }) 
  },
  /**
   * [cancelDeal 取消单数-订单]
   * @return {[type]} [description]
   */
  cancelDeal : function(){
    var model = arguments[5],
        superShopperId = model.get('superShopperId'),
        param = this.getParam();
        if(!param){
          return false;
        }
        param = Ext.Object.merge(param, {superShopperId:superShopperId});
        
        this.tab.setActiveTab(this.getCancelDealList());
        this.getCancelDealStore().load({
          params : param
        })
  },
  /**
   * [closeDeall 主动据单-订单]
   * @return {[type]} [description]
   */
  closeDeall : function(){
     var model = arguments[5],
        superShopperId = model.get('superShopperId'),
        param = this.getParam();
        if(!param){
          return false;
        }
        param = Ext.Object.merge(param, {superShopperId:superShopperId});
        
        this.tab.setActiveTab(this.getDirectRefuseDealList());
        this.getDirectRefuseDealStore().load({
          params : param
        })
  },
  /**
   * [outtimeDeal 超时据单-订单]
   * @return {[type]} [description]
   */
  outtimeDeal : function(){
    var model = arguments[5],
        superShopperId = model.get('superShopperId'),
        param = this.getParam();
        if(!param){
          return false;
        }
        param = Ext.Object.merge(param, {superShopperId:superShopperId});
        
        this.tab.setActiveTab(this.getOverTimeRefuseDealList());
        this.getOverTimeRefuseDealStore().load({
          params : param
        })
  },
  /**
   * [returnDeal 全部退货单数-订单]
   * @return {[type]} [description]
   */
  returnDeal : function(){
     var model = arguments[5],
        superShopperId = model.get('superShopperId'),
        param = this.getParam();
        if(!param){
          return false;
        }
        
        param = Ext.Object.merge(param, {superShopperId:superShopperId});
        
        this.tab.setActiveTab(this.getReturnedDealList());
        this.getReturnedDealStore().load({
          params : param
        })
  },
  /**
   * [issueDeal 问题单数]
   * @return {[type]} [description]
   */
  issueDeal : function(){
    var model = arguments[5],
        superShopperId = model.get('superShopperId'),
        param = this.getParam();
        if(!param){
          return false;
        }
        
        param = Ext.Object.merge(param, {superShopperId:superShopperId});
        
        this.tab.setActiveTab(this.getIssueDealList());
        this.getIssueDealStore().load({
          params : param
        })
  },
  /**
   * [partReturnDeal 部分退货商品数]
   * @return {[type]} [description]
   */
  partReturnDeal : function(){
    var model = arguments[5],
        superShopperId = model.get('superShopperId'),
        param = this.getParam();
        if(!param){
          return false;
        }
        
        param = Ext.Object.merge(param, {superShopperId:superShopperId});
        
        this.tab.setActiveTab(this.getReturnRecordList());
        this.getReturnRecordStore().load({
          params : param
        })
  },
  /**
   * [complainDeal 投诉次数]
   * @return {[type]} [description]
   */
  complainDeal : function(){
     var model = arguments[5],
        superShopperId = model.get('superShopperId'),
        param = this.getParam();
        if(!param){
          return false;
        }
        
        param = Ext.Object.merge(param, {superShopperId:superShopperId});
        
        this.tab.setActiveTab(this.getComplainRecordList());
        this.getComplainRecordStore().load({
          params : param
        })
  }
});