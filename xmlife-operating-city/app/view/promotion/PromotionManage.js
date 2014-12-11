/**
 * Created by wangdongwu on 14/12/8.
 */
Ext.define('XMLifeOperating.view.promotion.PromotionManage', {
	extend: 'Ext.grid.Panel',
	id: 'PromotionManage',
	title: '活动管理',
	xtype: 'PromotionManage',
	alias: 'widget.PromotionManage',
	store: 'Promotion',
	titleAlign: 'left',
	forceFit: true,
	closable: true,
	tbar: [{
		xtype: 'button',
		text: '新建活动',
		itemId: 'addPromotion'
	}, '->', {
		xtype: 'combo',
		emptyText: '选择状态',
		itemId: 'statusSelect',
		displayField: 'name',
		valueField: 'status',
		autoSelect: true,
		store: Ext.create('Ext.data.Store', {
			fields: ['status', 'name'],
			data: [{
				status: '',
				name: '全部'
			}, {
				status: 1,
				name: '未激活'
			}, {
				status: 2,
				name: '即将开始'
			}, {
				status: 3,
				name: '进行中'
			}, {
				status: 4,
				name: '已过期'
			}]

		})
	}, {
		xtype: 'textfield',
		name: 'seachText',
		allowBlank: false
	}, {
		xtype: 'button',
		text: '搜索',
		itemId: 'searchBt'
	}],
	bbar: [{
		xtype: 'pagingtoolbar',
		itemId: 'pagetool',
		store: '',
		displayInfo: true,
		style: 'border:none'
	}],
	columns: [{
			header: '序号',
			dataIndex: 'id'
		}, {
			header: '活动',
			dataIndex: 'name'
		}, {
			header: '备注',
			dataIndex: 'remark'
		}, {
			header: '显示时间',
			dataIndex: 'displayDate'
		}, {
			header: '开始时间',
			dataIndex: 'startDate'
		}, {
			header: '结束时间',
			dataIndex: 'endDate'
		}, {
			header: '状态',
			dataIndex: 'status'
		}, {
			header: '激活',
			dataIndex: 'activeStatus',
			itemId: 'activeBt',
			renderer: function (v) {
				if (v == 1) {
					return '<button>激活</button>'
				} else {
					return '<button>取消激活</button>'
				}
			}
		}, {
			xtype: 'actioncolumn',
			width: 40,
			text: '修改',
			tooltip: '修改',
			itemId: 'edit',
			icon: 'resources/images/edit.png',
			align: 'center'
		}

	]
});