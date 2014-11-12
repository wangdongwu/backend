Ext.define('XMLifeOperating.view.centralPointManage.homePage.HomePage', {
  extend: 'Ext.panel.Panel',
  xtype: 'homePage',
  alias: 'homePage',
  title: '主页配置',
  layout: 'column',

  initComponent: function() {
    this.items = [{
      xtype: 'panel',
      columnWidth: 0.3,
      border: 0,

      items: [{
        xtype: 'grid',
        itemId: 'versionList',
        title: '版本选择',
        height: document.body.clientHeight/2-40,
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
              align: 'left',
              editor: {
                xtype: 'textfield'
              }
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
        ],
        plugins: [{
          ptype: 'cellediting',
          clicksToEdit: 2
        }]

      }, {
        xtype: 'grid',
        itemId: 'moduleList',
        title: '大积木列表',
        height: document.body.clientHeight/2-28,
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
              text: '序号',
              dataIndex: 'order',
              width: 40,
              align: 'center'
          }, {
              text: '列表',
              dataIndex: 'name',
              width: 180,
              align: 'left',
              editor: {
                xtype: 'textfield'
              }
          }, {
              text: '类型',
              dataIndex: 'type',
              width: 50,
              align: 'left',
              editor: {
                xtype: 'textfield'
              }
          }, {
              xtype: 'actioncolumn',
              itemId: 'delModule',
              text: '操作',
              tooltip: '删除',
              icon: 'resources/images/delete.png',
              width: 50,
              align: 'center',
              getClass:function(v, meta, record, rIndex, cIndex, store){
                if (record.get('order') == 0) {
                  meta.style = 'display:none;';
                  //view.disable();
                }
              }
          }
        ],
        plugins: [{
          ptype: 'cellediting',
          clicksToEdit: 2
        }],
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
      height: document.body.clientHeight-68,
      bbar: ['->',{
            xtype: 'button',
            text: '新建小积木',
            itemId: 'addModuleItem',
            disabled: true
      }, {
            xtype: 'button',
            text: '刷新预览',
            itemId: 'previewPage'
      }],
      columns: [
        {
              text: '序号',
              dataIndex: 'index',
              width: 35,
              align: 'center'
        }, {
            text: '图片',
            dataIndex: 'image',
            width: 60,
            align: 'center',
            renderer: function(value) {
              return '<span style="display:inline-block;min-height:35px;"><img src="'+ XMLifeOperating.generic.Global.URL.res + value +'" width="100%" style="min-height:20px;border:1px solid #eee;" /></span>';
            }
        }, {
            text: '名称',
            dataIndex: 'name',
            width: 50,
            align: 'left',
        }, {
            text: 'titles',
            dataIndex: 'titles',
            width: 115,
            align: 'left'
        }, {
            text: 'url',
            dataIndex: 'url',
            width: 110,
            align: 'left'
        }, {
            xtype: 'actioncolumn',
            itemId: 'editModuleItem',
            text: '操作',
            width: 50,
            align: 'center',
            renderer: function(){
              var str1 = '<img src="resources/images/edit.png" class="x-action-col-icon action-edit" style="margin-left:5px;" />',
                  str2 = '<img src="resources/images/delete.png" class="x-action-col-icon action-del" style="margin-left:5px;" />';
              return XMLifeOperating.generic.Global.isBanner ? str1+str2 : str1;
            }
        }
      ],
      viewConfig: {
        plugins: {
          ptype: 'gridviewdragdrop',
          dragText: '拖拽可排序'
        }
      }

    },

    {
      xtype: 'panel',
      itemId: 'homePreview',
      title: '效果预览',
      columnWidth: 0.3,
      height: document.body.clientHeight-68,
      autoScroll: true,
      items: [{
          xtype: 'dataview',
          itemId: 'dataview',
          itemSelector: 'li',
          loadMask: true,
          loadingText: 'Loading...',
          tpl: '<div id="homePreviewList"><br>当前暂无预览</div>',
      }]
    }]

    this.callParent(arguments);

  }

});