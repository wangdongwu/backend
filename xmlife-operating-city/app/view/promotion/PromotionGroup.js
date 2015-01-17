/**
 * Created by wangdongwu on 14/12/8.
 */
Ext.define('XMLifeOperating.view.promotion.PromotionGroup', {
	extend: 'Ext.grid.Panel',
	id: 'PromotionGroup',
	title: '活动商品管理',
	xtype: 'PromotionGroup',
	alias: 'widget.PromotionGroup',
	store: 'PromotionGroup',
	titleAlign: 'left',
	forceFit: true,
	columns: [{
		xtype: 'rownumberer',
		width: 50,
        align: 'center'
	}, {
		text: '长命名',
		dataIndex: 'name',
		editor: {
			xtype: 'textfield',
			allowBlank: false
		}
	}, {
		text: '短命名',
		dataIndex: 'shortName',
		editor: {
			xtype: 'textfield',
			allowBlank: false
		}
	}],
	selType: 'rowmodel',
	plugins: [
		Ext.create('Ext.grid.plugin.RowEditing', {
			saveBtnText: '保存',
			cancelBtnText: "取消",
			clicksToEdit: 2
		})
	]
});