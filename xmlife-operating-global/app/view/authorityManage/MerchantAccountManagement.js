/*
  商户账号管理表格 MerchantAccountManagement
 */
Ext.define('XMLifeOperating.view.authorityManage.MerchantAccountManagement', {
  extend: 'Ext.grid.Panel',
  xtype: 'MerchantAccountManagement',
  alias : 'widget.MerchantAccountManagement',
  id : 'MerchantAccountManagement',
  title : '商户账号管理 for tutorial',
  store : 'Account',
  forceFit: true,
  closable : true,
  bbar: [{
    xtype: 'pagingtoolbar',
    itemId: 'pagetool',
    store: 'Account',
    displayInfo: true
  }],
  tbar : [{
    xtype : 'button',
    text : '创建商户账号',
    itemId : 'addMerchantAccount'
  },
    {
      xtype : 'button',
      text : '查看开启账号',
      itemId : 'lookActiveAccount'
    },
    {
      xtype : 'button',
      text : '查看关闭账号',
      itemId : 'lookDisableAccount'
    },
    {
      xtype : 'textfield',
      itemId : 'seachKeyword'

    },
    {
      xtype : 'button',
      text : '搜索',
      itemId : 'seachAccount'
    }
  ],
  columns : [{
    xtype: 'rownumberer'
  },
    {
      text : '账号',
      dataIndex : 'account'
    },{
      text : '联系电话',
      dataIndex : 'phoneNum'
    },
    {
      text : '城市',
      dataIndex : 'cities',
      renderer: function (v) {
        return v[0];
      }
    },
    {
      text : '中心',
      dataIndex : 'shopAreaName'
    },
    {
      text : '店铺',
      dataIndex : 'shopName'
    },
    {
      text : '创建者',
      dataIndex : 'creater'
    },
    {
      text : '修改',
      align : 'center',
      itemId : 'edit',
      renderer : function(){
        return '<a href="#">修改</a>';
      }
    },
    {
      text: '操作',
      align : 'center',
      itemId : 'handel',
      dataIndex : 'enable',
      renderer: function(val,meta,rec) {
        var text = '<a href="#">开启</a>';
        if(val){
          text = '<a href="#">关闭</a>';
        }
        return text;
      }}
  ]
});
