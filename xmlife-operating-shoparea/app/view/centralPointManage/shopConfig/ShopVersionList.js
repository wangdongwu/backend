Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.ShopVersionList', {
  extend: 'Ext.grid.Panel',
  xtype: 'ShopVersionList',
  alias: 'widget.ShopVersionList',
  title: '版本列表',
  store: 'ShopConfig',
  forceFit: true,
  bbar: [{
    xtype: 'button',
    text: '新建版本',
    itemId: 'addVersion'
  }],
  columns: [{
    text: '编号',
    dataIndex: 'id'
  }, {
    text: '名字',
    dataIndex: 'version'
  }, {
    text: '类型',
    dataIndex: 'default',
    itemId: 'setDefault',
    renderer: function (v) {
      return v ? '<span style="color:green">默认</span>' : '<button>设为默认</button>'
    }
  }, {
    text: '时间',
    width: 150,
    itemId: 'modifyTime',
    dataIndex: 'time'
  }, {
    text: '状态',
    width: 100,
    dataIndex: 'status',
    itemId: 'enableBt',
    renderer: function (v) {
      var str = '';
      switch (v) {
      case 0:
        str = '<button>启用</button>';
        break;
      case 1:
        str = '<span style="color:green">启用中</span>';
        break;
      case 2:
        str = '<button>取消定时</button>';
        break;
      }
      return str;
    }
  }, {
    xtype: 'actioncolumn',
    width: 40,
    text: '修改',
    tooltip: '修改',
    itemId: 'edit',
    icon: 'resources/images/edit.png',
    align: 'center'
  }, {
    xtype: 'actioncolumn',
    width: 40,
    text: '操作',
    tooltip: '删除',
    itemId: 'delete',
    icon: 'resources/images/delete.png',
    align: 'center'
  }]
});