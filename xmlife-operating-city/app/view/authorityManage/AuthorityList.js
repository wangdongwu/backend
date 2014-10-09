Ext.define('XMLifeOperating.view.authorityManage.AuthorityList', {
  extend: 'Ext.grid.Panel',
  id: 'authorityList',
  xtype: 'authorityList',
  alias: 'widget.authorityList',
  store: '',
  title: '中心权限管理',
  titleAlign: 'left',
  closable: true,
  forceFit: true,
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
    text: '查看关闭账号',
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
      dataIndex: 'name'
    },{
      header:'管辖中心'
    }, {
      align: 'center',
      header: '编辑',
      renderer:function(){
        return '<a>编辑</a>'
      }
    },{
      align: 'center',
      header: '操作',
      dataIndex: 'isActive',
      renderer: function(value) {
        return value ? '<a>注销</a>' : '<a>开启</a>'
      }
    }

  ]
});