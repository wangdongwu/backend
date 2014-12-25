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
			labelWidth: 60
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
			allowBlank: false,
			buttonText: '选择excel文件'
		}, {
			xtype: 'button',
			itemId: 'addPromotionBtn',
			text: '上传/修改'
		},{
    bodyStyle: 'background:transparent;border:0;line-height:22px;margin-left:5px',
    html : '<span style="color:red"> 注:正在进行中的活动，上传excel前请先将活动【取消激活】</span>'
  }]
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