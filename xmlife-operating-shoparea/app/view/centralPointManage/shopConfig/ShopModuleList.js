Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.ShopModuleList', {
  extend: 'Ext.grid.Panel',
  xtype: 'ShopModuleList',
  alias: 'widget.ShopModuleList',
  title: '积木列表',
  store :'shopModules',
  forceFit : true,
  bbar: [
  {
    xtype: 'button',
    text: '新建积木',
    disabled : true,
    itemId : 'addModule'
  },'->',{
    xtype: 'button',
    text: '从成品添加',
    disabled : true,
    itemId : 'addfromTemplate'
  }
  ],
   /*viewConfig: {
    plugins: {
        ptype: 'gridviewdragdrop',
        dragText: '拖动可排序'
    }
  },*/
  columns:[
    {
        text: '名字',
        dataIndex: 'name'
    },
    {
        text: '类型',
        dataIndex: 'type'
    },
    {
      xtype: 'actioncolumn',
      text: '修改',
      tooltip: '修改',
      dataIndex : 'typeCopy',
      width : 30,
      itemId : 'edit',
      icon: 'resources/images/edit.png',
      renderer : function(v){
        if(v == 'USERCOLLECT' || v == 'CATEGORY'){
          this.remove();
        }
      },
      align:'center'
    },
    {
      width : 30,
      dataIndex : 'typeCopy',
      renderer : function(v){
        if(v == 'USERCOLLECT' || v == 'CATEGORY' || v == 'banner'){
          this.remove();
        }
      },
      xtype: 'actioncolumn',
      text: '操作',
      tooltip: '删除',
      itemId : 'delete',
      icon: 'resources/images/delete.png',
      align:'center'
    }
  ]
});