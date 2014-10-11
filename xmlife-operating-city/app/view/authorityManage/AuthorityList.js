Ext.define('XMLifeOperating.view.authorityManage.AuthorityList', {
  extend: 'Ext.grid.Panel',
  id: 'authorityList',
  xtype: 'authorityList',
  alias: 'widget.authorityList',
  store: 'AdminList',
  title: '中心权限管理',
  titleAlign: 'left',
  closable: true,
  tbar: [{
    xtype: 'button',
    text: '创建中心长账号',
    itemId: 'createCenterExecutive'
  },{
    xtype: 'button',
    text: '查看开启账号',
    itemId: 'centerExecutiveOpenCount'
  },{
    xtype: 'button',
    text: '查看注销账号',
    itemId: 'centerExecutiveCloseCount'
  },'->',{
    xtype: 'textfield',
    text: '搜索姓名/账号',
    itemId: 'centerExecutiveNameOrCount'
  },{
    xtype: 'button',
    text: '搜索',
    itemId: 'searchCenterExecutive'
  }],
  columns: [{
      header: '姓名',
      dataIndex: 'name'
    }, {
      header: '账号',
      dataIndex: 'acount'
    },{
      header:'管辖中心',
      dataIndex:'shopAreaName'
    }, {
      align: 'center',
      header: '编辑',
      itemId:'editCenterExecutive',
      renderer:function(){
        return '<a style="cursor:pointer;text-decoration:none">编辑</a>'
      }
    },{
      align: 'center',
      header: '操作',
      dataIndex: 'enable',
      itemId:'openAndCloseCountBtn',
      renderer: function(value) {

        return value ? '<button>开启</button>' : '<button>注销</button>'
      }
    }

  ]
});