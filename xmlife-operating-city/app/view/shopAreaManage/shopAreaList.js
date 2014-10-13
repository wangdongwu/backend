Ext.define('XMLifeOperating.view.shopAreaManage.shopAreaList', {
  extend: 'Ext.grid.Panel',
  id: 'shopAreaList',
  xtype: 'shopAreaList',
  alias: 'widget.shopAreaList',
  store: 'ShopArea',
  title: '中心平台管理',
  titleAlign: 'left',
  closable: true,
  forceFit: true,
  tbar: [{
    xtype: 'button',
    text: '添加中心',
    itemId: 'addShopArea'
  }],
  columns: [{
      width: 30,
      header: '编号',
      dataIndex: 'id'
    }, {
      header: '中心名称',
      dataIndex: 'name'
    },{
      header:'中心门店名称'
    },{
      header:'中心门店电话'
    },{
      header: '中心门店地址',
      dataIndex: 'address'
    }, {
      header: '管辖线路',
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
    },/* {
      align: 'center',
      header: '操作',
      dataIndex: 'isActive',
      itemId:'openAndCloseCenterBtn',
      renderer: function(value) {
        return value ? '<button>关闭</button>' : '<button>开启</button>'
      }
    }*/

  ]
});