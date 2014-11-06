Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.ShopModuleDetail', {
  extend: 'Ext.grid.Panel',
  xtype: 'ShopModuleDetail',
  alias: 'widget.ShopModuleDetail',
  title: '积木详情',
  html: '积木详情',
  layout : 'fit',
  store : 'ShopModulesItem',
   viewConfig: {
    plugins: {
        ptype: 'gridviewdragdrop',
        dragText: '拖动可排序'
    }
  },
   bbar : [
      {
        itemId : 'addNewModuleItem',
        xtype : 'button',
        text: '新建小积木',
        disabled : true
    },
    {
        itemId : 'refreshPriview',
        xtype : 'button',
        text: '刷新预览'
    }
  ],
  forceFit : true,
  columns:[
    {
            text: '图片',
            dataIndex: 'image',
            renderer: function(value) {
              return '<img src="'+ XMLifeOperating.generic.Global.URL.res + '/image/id-'+ value +'" width="50%" />';
            }
        }, {
            text: '标题',
            dataIndex: 'titles',
        }, {
            text: '详情url',
            dataIndex: 'url',
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
      dataIndex : 'delete',
      renderer : function(v){ 
        if(v){
          this.remove();
        }
      },
      itemId : 'delete',
      icon: 'resources/images/delete.png',
      align:'center'
    }
      
  ]
});