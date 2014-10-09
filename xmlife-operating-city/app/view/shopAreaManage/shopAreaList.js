Ext.define('XMLifeOperating.view.shopAreaManage.shopAreaList', {
  extend: 'Ext.grid.Panel',
  id: 'shopareaList',
  xtype: 'shopareaList',
  alias: 'widget.shopareaList',
  autoScroll: true,
  store: 'ShopArea',
  title: '中心平台管理',
  titleAlign: 'left',
  closable: true,
  forceFit: true,
  requires: [
    'Ext.panel.Panel',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.RowExpander',
    'Ext.selection.CheckboxModel'
  ],
  tbar: [{
    xtype: 'button',
    text: '添加中心',
    itemId: 'addShopArea'
  }],
  columns: [{
      width: 60,
      header: '编号',
      dataIndex: 'id'
    }, {
      header: '中心名称',
      dataIndex: 'name'
    }, {
      header: '地址',
      dataIndex: 'address'
    }, {
      header: '区域',
      dataIndex: 'zoneNames',
      renderer: function(value) {
        return value.join('/');
      }
    }, {
      header: '店铺',
      dataIndex: 'shopNames',
      renderer: function(value) {
        return value.join('/');
      }
    }, {
      align: 'center',
      header: '操作',
      dataIndex: 'isActive',
      renderer: function(value) {
        return value ? '<a>关闭</a>' : '<a>开启</a>'
      }
    }

  ]
});