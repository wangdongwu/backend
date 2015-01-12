Ext.define('XMLifeOperating.view.batchoperation.update.ProductPictureUpdateBatch', {
	extend: 'Ext.panel.Panel',
	id: 'ProductPictureUpdateBatch',
	xtype: 'ProductPictureUpdateBatch',
	alias: 'widget.ProductPictureUpdateBatch',
	title: '商品图片',
	closeAction: 'hide',
	resizable: false,
	forceFit: true,
	items: [{
		xtype: 'form',
		border: 0,
		edit: false,
		items: [{
			xtype: 'fieldcontainer',
			defaultType: 'textfield',
			defaults: {
				labelWidth: 80,
				width: 600
			},
			items: [{
					xtype: 'panel',
					bodyPadding: '5 ,0',
					html: '<span style="color:red">自动从svn中更新图片</span>'
				}, {
					xtype: 'textareafield',
					grow: true,
					name: 'comment',
					fieldLabel: '提交说明',
					allowBlank: false,
					emptyText: '提交说明(必填)'
				}, {
					xtype: 'button',
					text: '提交',
					width: 50,
					style: 'margin-left: 430px; margin-top: 10px; color: blue;',
					itemId: 'submit'
				}, {
					xtype: 'textareafield',
					style: 'margin-left: 85px; margin-top: 30px;',
					edit: false,
					grow: true,
					blankText: '执行结果',
					itemId: 'resultLog',
					width: 515,
					cols: 40
				}

			]
		}]
	}]
});