/**
 * Created by wangdongwu on 14/12/8.
 */
Ext.define('XMLifeOperating.view.promotion.PromotionGroupPanel', {
	extend: 'Ext.panel.Panel',
	id: 'PromotionGroupPanel',
	title: '活动商品管理',
	xtype: 'PromotionGroupPanel',
	alias: 'widget.PromotionGroupPanel',
	titleAlign: 'left',
	layout: 'border',
	height: '100%',
	forceFit: true,
	closable: true,
	collapsible: true,
	tbar: [{
		xtype: 'form',
		width: '100%',
		url: XMLifeOperating.generic.Global.URL.biz + 'promotion/group/add',
		bodyStyle: 'background:transparent;border:0',
		layout: 'hbox',
		defaults: {
			labelWidth: 50
		},
		items: [{
			xtype: 'combo',
			autoSelect: true,
			fieldLabel: '选择活动',
			name: 'promotionId',
			store: 'Promotion',
			itemId: 'promotionSelect',
			displayField: 'name',
			valueField: 'id'
		}, {
			xtype: 'filefield',
			name: 'file',
			width: 300,
			fieldLabel: '文件路径',
			emptyText: '从svn中选择上传',
			labelWidth: 50,
			allowBlank: false,
			buttonText: '选择excel文件'
		}, {
			xtype: 'button',
			itemId: 'addPromotionBtn',
			text: '上传/修改'
		}]
	}, {
		xtype: 'button',
		text: '刷新商品'
	}],
	defaults: {
		height: '100%'
	},
	items: [{
		xtype: 'PromotionGroup',
		collapsible: true,
		region: 'west',
		width: 300
	}, {
		xtype: 'PromotionProduct',
		region: 'center'
	}],
});