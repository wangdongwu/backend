/**
 * Created by wangdongwu on 14/12/8.
 */
Ext.define('XMLifeOperating.view.promotion.PromotionProduct', {
	extend: 'Ext.grid.Panel',
	id: 'PromotionProduct',
	title: '活动商品管理',
	xtype: 'PromotionProduct',
	alias: 'widget.PromotionProduct',
	store: 'PromotionProduct',
	titleAlign: 'left',
	forceFit: true,
	store: 'PromotionProduct',
  features: [{ftype:'grouping',groupHeaderTpl: '{columnName}: {name} ({rows.length} {[values.rows.length > 1 ? "个商圈有该产品" : ""]})'}],
	columns: [{
		xtype: 'rownumberer'
	},{
		text: '商圈',
		dataIndex: 'areaName'
	}, {
		text: '活动商品名称',
		dataIndex: 'promotionProductName'
	}, {
		text: '状态',
		dataIndex: 'status'
	}, {
		text: '所在店铺',
		dataIndex: 'shopName'
	}, {
		text: '进价',
		dataIndex: 'currentPrice'
	}, {
		text: '供应商补贴/份',
		dataIndex: 'subsidy'
	}, {
		text: '活动价',
		dataIndex: 'promotionPrice',
    width : 75
	}, {
		text: '全城每日限购',
		dataIndex: 'limitPerCityOneDay',
    width : 75
	}, {
		text: '每日每人限购',
		dataIndex: 'limitPerPersonOneDay',
    width : 75
	}, {
		text: '活动期每人限购',
		dataIndex: 'limitPerPersonInPromotion',
    width : 75
	}]
});