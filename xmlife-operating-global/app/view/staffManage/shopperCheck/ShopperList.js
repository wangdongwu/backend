Ext.define('XMLifeOperating.view.staffManage.shopperCheck.ShopperList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.ShopperList',
	xtype: 'row-expander-grid',
	id: 'ShopperList',
	forceFit: true,
	store: 'ShopperExamine',
	tbar: [{
		xtype: 'combo',
		store: 'ShopArea',
		emptyText: '请选择中心',
		displayField: 'name',
		valueField: 'id',
		itemId: 'shopareaCombo'
	}, {
		xtype: 'datefield',
		name: 'startTime',
		itemId: 'startTime',
		format: 'Y-m-d',
    value : new Date(Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.DAY, -1),'Y-m-d')),
		emptyText: '选择起始时间',
		maxValue: Ext.Date.add(new Date(), Ext.Date.DAY, 1)
	}, {
		xtype: 'datefield',
		name: 'endTime',
		itemId: 'endTime',
		format: 'Y-m-d',
    value : new Date(Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.DAY, -1),'Y-m-d')),
		emptyText: '选择结束时间',
		maxValue: Ext.Date.add(new Date(), Ext.Date.DAY, 1)
	}, {
    text: '本月',
    handler: function () {
      var date = new Date(),
          newTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + 1;

          this.up('panel').changeDateValue(new Date(newTime), date);
    }
  },{
		text: '上月',
		handler: function () {
		  var date = new Date(),
          newTime,
          endTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + 1;
          endTime = Ext.Date.add(new Date(endTime), Ext.Date.DAY, -1)

          if(date.getMonth()){
            newTime = date.getFullYear() + '-' + date.getMonth() + '-' + 1;
          }else{
            newTime = (date.getFullYear()-1) + '-12-1';
          }

          this.up('panel').changeDateValue(new Date(newTime), endTime);
		}
	},{
    text : '加载数据',
    itemId : 'loadShopperBt'
  },'->',{
    text : '导出汇总表',
    itemId : 'exportGather'
  },{
    text : '导出明细表',
    itemId : 'exportGatherList'
  }],
	changeDateValue: function (startTime, endTime) {
		var $startTime = this.down('#startTime'),
			  $endTime = this.down('#endTime');
        
		    $startTime.setValue(startTime);
		    $endTime.setValue(endTime);
	},
  changeColor : function(v){
      return '<span style="color:blue;cursor:pointer">'+v+'</span>'
  },
	columns: [{
		text: '编号',
    width : 60,
		dataIndex: 'superShopperId',
    itemId : 'shopperDetail',
    renderer : function(v){
      return this.changeColor(v);
    }
	}, {
		text: '姓名',
		dataIndex: 'superShopperName'
	}, {
		text: '注册时间',
    width : 120,
		dataIndex: 'registerTime'
	}, {
    text: '总订单量',
    dataIndex : 'totalDeals'
  },{
		text: '完成单数',
    align : 'center',
		dataIndex: 'completeDeals',
		itemId: 'completeDeals',
    renderer : function(v){
      return this.changeColor(v)
    }
	}, {
		text: '取消单数',
    align : 'center',
		dataIndex: 'cancelDeals',
		itemId: 'cancelDeal',
    renderer : function(v){
      return this.changeColor(v)
    }
	}, {
		text: '主动据单',
    align : 'center',
		dataIndex: 'directRefuseDeals',
		itemId: 'closeDeall',
    renderer : function(v){
      return this.changeColor(v)
    }
	}, {
		text: '超时据单',
    align : 'center',
		dataIndex: 'refuseForTimeoutDeals',
		itemId: 'outtimeDeal',
    renderer : function(v){
      return this.changeColor(v)
    }
	}, {
		text: '全部退货单数',
    align : 'center',
		dataIndex: 'returnGoodsDeals',
		itemId: 'returnDeal',
    renderer : function(v){
      return this.changeColor(v)
    }
	}, {
		text: '问题单数',
    align : 'center',
		dataIndex: 'problemDeals',
		itemId: 'issueDeal',
    renderer : function(v){
      return this.changeColor(v)
    }
	}, {
		text: '部分退货商品数',
    align : 'center',
		dataIndex: 'patitalReturnGoods',
		itemId: 'partReturnDeal',
    renderer : function(v){
      return this.changeColor(v)
    }
	}, {
		text: '投诉次数',
    align : 'center',
		dataIndex: 'complainCount',
		itemId: 'complainDeal',
    renderer : function(v){
      return this.changeColor(v)
    }
	}],
	plugins: [{
		ptype: 'rowexpander',
		rowBodyTpl: new Ext.XTemplate(
			'<p><b>一星:</b> {oneStarCount} | <b>二星:</b> {twoStarCount} | <b>三星:</b> {threeStarCount} | <b>四星:</b> {fourStarCount} | <b>五星:</b> {fiveStarDeals}</p>'
			, {}
		)
	}]
});