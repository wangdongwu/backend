Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.ShopVersionList', {
  extend: 'Ext.grid.Panel',
  xtype: 'ShopVersionList',
  alias: 'widget.ShopVersionList',
  title: '版本列表',
  store : 'ShopConfig',
  forceFit : true,
   bbar: [
  {
    xtype: 'button',
    text: '新建版本',
    itemId : 'addVersion'
  }
  ],
  columns : [
    {
        text: '编号',
        dataIndex: 'id'
    },
    {
        text: '名字',
        dataIndex: 'version'
    },
    {
        text: '状态',
        dataIndex: 'enable',
        itemId : 'enableBt',
        renderer : function(v){
            return v ? '<span style="color:green">启用中</span>' : '<button>启用</button>'
        }
    },
    {
      xtype: 'actioncolumn',
      width : 30,
      text: '修改',
      tooltip: '修改',
      itemId : 'edit',
      icon: 'resources/images/edit.png',
      align:'center'
    },
    {
      xtype: 'actioncolumn',
      width : 30,
      text: '操作',
      tooltip: '删除',
      itemId : 'delete',
      icon: 'resources/images/delete.png',
      align:'center'
    }
  ]
});