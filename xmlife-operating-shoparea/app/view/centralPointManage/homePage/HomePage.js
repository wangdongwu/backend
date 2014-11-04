Ext.define('XMLifeOperating.view.centralPointManage.homePage.HomePage', {
  extend: 'Ext.panel.Panel',
  xtype: 'homePage',
  alias: 'homePage',
  title: '主页配置',
  layout: 'column',
  width: 600,
  height: 400,

  initComponent: function() {
    this.items = [{
      xtype: 'panel',
      columnWidth: 0.3,
      border: 0,
      height: 400,

      items: [{
        xtype: 'grid',
        itemId: 'versionList',
        title: '版本选择',
        height: 200,
        store: 'HomePage',
        bbar: [
          {
            xtype: 'pagingtoolbar',
            itemId: 'pageTool',
            store: 'HomePage',
            border: 0,
            displayInfo: false
          },'->',{
            xtype: 'button',
            text: '新建版本',
            itemId: 'addVersion'
          }
        ],
        columns: [
          {
              xtype: 'rownumberer'
          }, {
              text: '版本列表',
              dataIndex: 'version',
              width: 180,
              align: 'left'
          }, {
              text: '选择',
              itemId: 'setEnable',
              dataIndex: 'enable',
              width: 60,
              align: 'center',
              renderer: function(value){
                return value ? '<span style="color:green;">启用中</span>' : '<input type="button" value="启用" />'
              }
          }, {
              xtype: 'actioncolumn',
              itemId: 'delVersion',
              text: '操作',
              tooltip: '删除',
              icon: 'resources/images/delete.png',
              width: 50,
              align: 'center'
          }
        ]

      }, {
        xtype: 'grid',
        itemId: 'moduleList',
        title: '大积木列表',
        height: 200,
        store: 'HomePageModuleList',
        bbar: ['->',
          {
            xtype: 'button',
            text: '新建大积木',
            itemId: 'addModule'
          },'-',{
              xtype: 'button',
              text: '从成品添加',
              itemId: 'copyModule'
          }
        ],
        columns: [
          {
              xtype: 'rownumberer'
          }, {
              text: '列表',
              dataIndex: 'name',
              width: 240,
              align: 'left'
          }, {
              xtype: 'actioncolumn',
              itemId: 'delModule',
              text: '操作',
              tooltip: '删除',
              icon: 'resources/images/delete.png',
              width: 50,
              align: 'center'
          }
        ],
        viewConfig: {
          plugins: {
            ptype: 'gridviewdragdrop',
            dragText: '拖拽可排序'
          }
        }

      }]

    },

    {
      xtype: 'grid',
      itemId: 'moduleDetail',
      title: '大积木详情',
      store: 'HomePageModuleDetail',
      columnWidth: 0.4,
      height: 400,
      bbar: ['->',{
            xtype: 'button',
            text: '刷新预览',
            itemId: 'addNewBlock'
      }],
      columns: [
        {
            xtype: 'rownumberer'
        }, {
            text: '图片',
            dataIndex: 'image',
            width: 120,
            align: 'center',
            renderer: function(value) {
              return '<img src="'+ XMLifeOperating.generic.Global.URL.res + '/image/id-'+ value +'" width="50%" />';
            }
        }, {
            text: 'title',
            dataIndex: 'title',
            width: 80,
            align: 'left'
        }, {
            text: '详情url',
            dataIndex: 'url',
            width: 150,
            align: 'left'
        }, {
            xtype: 'actioncolumn',
            text: '操作',
            tooltip: '编辑',
            icon: 'resources/images/edit.png',
            width: 50,
            align: 'center'
        }
      ]

    },

    {
      xtype: 'panel',
      itemId: 'indexPreview',
      title: '效果预览',
      columnWidth: 0.3,
      height: 400,
      autoScroll: true,
      items: [{
          xtype: 'dataview',
          store: 'HomePageModuleDetail',
          itemId: 'dataview',
          itemSelector: 'li',
          emptyText: '当前暂无预览',
          tpl: new Ext.XTemplate(
              '<ul id="picViewList" style="width:100%;list-style:none;text-align:center;">',
              '<tpl for=".">', // 处理数据的子节点
                  '<li class="picList" style="width:85%;border:1px solid #eee;">',
                      '<p><img src="'+ XMLifeOperating.generic.Global.URL.res + '/image/id-'+ '{image}" width="80%" /></p>',
                  '</li>',
              '</tpl>',
              '</ul'
          )
      }]
    }]

    this.callParent(arguments);

  }

});