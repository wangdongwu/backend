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
        forceFit: true,
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
              xtype: 'rownumberer',
              align: 'center',
              width: '5%',
          }, {
              text: '版本列表',
              dataIndex: 'version',
              width: '30%',
              align: 'left',
              editor: {
                xtype: 'textfield'
              }
          }, {
              text: '角色',
              dataIndex: 'default',
              itemId: 'setDefault',
              width: '14%',
              align: 'center',
              renderer: function(value) {
                return value ? '默认' : '-';
                //return value ? '默认' : '<input type="button" value="设置" style="margin-left: -4px;" />';
              }
          }, {
              text: '定时',
              itemId: 'editTime',
              dataIndex: 'startTime',
              width: '22%',
              align: 'center',
              renderer: function(value, meta, record) {
                if (value) {
                  var startTime = Ext.Date.format(new Date(value), 'm-d H:i'),
                      endTime = Ext.Date.format(new Date( record.get('endTime') ), 'm-d H:i');
                  return '<span style="display: inline-block; margin-left: -3px;">'+ startTime + '<br />' + endTime + '</span>';
                }
              }
          }, {
              text: '选择',
              itemId: 'setEnable',
              dataIndex: 'status',
              width: '19%',
              align: 'center',
              renderer: function(value, meta, record, rowIndex, colIndex, store, view){
                return value ? (value == 2 ? '<input type="button" value="取消定时" style="margin-left: -4px; padding: 3px 2px 5px;" />' : '<span style="color:green;">启用中</span>') : '<input type="button" value="启用" style="margin-left: -3px;" />';
              },
              listeners: {
                click: function(view, meta, rowIndex, colIndex, e, record) {
                  if(record.get('status') == 1) return false;
                }
              }
          }, {
              xtype: 'actioncolumn',
              itemId: 'delVersion',
              text: '操作',
              tooltip: '删除',
              icon: 'resources/images/delete.png',
              width: '10%',
              align: 'center',
              renderer: function(value, meta, record, rowIndex, colIndex, store, view) {
                if (record.get('status') == 1) meta.style = 'display: none;';
              },
              listeners: {
                click: function(view, meta, rowIndex, colIndex, e, record) {
                  if (record.get('status') == 1) return false;
                }
              }
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
        forceFit: true,
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
              width: '10%',
              align: 'center'
          }, {
              text: '列表',
              dataIndex: 'name',
              width: '56%',
              align: 'left',
              editor: {
                xtype: 'textfield'
              }
          }, {
              text: '分割线',
              dataIndex: 'needLine',
              width: '20%',
              align: 'center',
              editor: {
                xtype: 'combo',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'value',
                store: {
                  fields: ['name', 'value'],
                  data: [{
                    name: '有',
                    value: true
                  }, {
                    name: '无',
                    value: false
                  }]
                }
              },
              renderer: function(value, meta, record) {
                if (record.get('type') == 'TYPE14') {
                  return value ? '有' : '无';
                }
              },
              listeners: {
                dblclick: function(view, meta, rowIndex, colIndex, e, record) {
                  if (record.get('type') != 'TYPE14' && colIndex == 2) {
                    return false;
                  }
                }
              }
          }/*, {
              text: '类型',
              dataIndex: 'type',
              width: '15%',
              align: 'center'
          }*/, {
              xtype: 'actioncolumn',
              itemId: 'delModule',
              text: '操作',
              tooltip: '删除',
              icon: 'resources/images/delete.png',
              width: '14%',
              align: 'center',
              renderer:function(value, meta, record, rowIndex, colIndex, store, view){
                if (record.get('type') == 'TYPE0') meta.style = 'display: none;';
              },
              listeners: {
                click: function(view, meta, rowIndex, colIndex, e, record) {
                  if (record.get('type') == 'TYPE0') return false;
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
      title: '小积木列表',
      store: 'HomePageModuleDetail',
      columnWidth: 0.43,
      height: document.body.clientHeight-68,
      forceFit: true,
      tbar: [{
            xtype: 'button',
            text: '返回上级',
            itemId: 'returnModuleItem',
            hidden: true
      }],
      bbar: ['->',{
            xtype: 'button',
            text: '新建小积木',
            itemId: 'addModuleItem',
            disabled: true
      }],
      columns: [
        {
            text: '序号',
            dataIndex: 'index',
            width: '7%',
            align: 'center'
        }, {
            text: '图片',
            dataIndex: 'image',
            width: '18%',
            align: 'center',
            renderer: function(value) {
              var imgstr =  value ? '<img src="'+ XMLifeOperating.generic.Global.URL.res + value +'" width="100%" style="min-height:20px;border:1px solid #eee;" />' : '';
              return '<span style="display:inline-block;min-height:35px;">'+ imgstr +'</span>';
            }
        }, {
            text: '名称',
            dataIndex: 'name',
            width: '14%',
            align: 'left',
        }, {
            text: 'titles',
            dataIndex: 'titles',
            width: '22%',
            align: 'left'
        }, {
            text: 'url',
            dataIndex: 'url',
            width: '20%',
            align: 'left'
        }, {
            text: '租赁期限',
            itemId: 'renterTime',
            dataIndex: 'startTime',
            width: '9%',
            align: 'center',
            hidden: true,
            renderer: function(value, meta, record) {
              if (value) {
                var startTime = Ext.Date.format(new Date(value), 'm-d H:i'),
                    endTime = Ext.Date.format(new Date( record.get('endTime') ), 'm-d H:i');
                return '<span style="display: inline-block; margin-left: -3px;">'+ startTime + '<br />' + endTime + '</span>';
              }
            }
        }, {
            text: '租客',
            dataIndex: 'url',
            itemId: 'renterView',
            width: '9%',
            align: 'center',
            renderer: function() {
              return '<a href="javascript:;">查看</a>';
            }
        }, {
            xtype: 'actioncolumn',
            itemId: 'editModuleItem',
            text: '操作',
            width: '10%',
            align: 'center',
            renderer: function(value, meta, record, rowIndex, colIndex, store, view){
              var str1 = '<img src="resources/images/edit.png" class="x-action-col-icon action-edit" style="margin-left:5px;" />',
                  str2 = '<img src="resources/images/delete.png" class="x-action-col-icon action-del" style="margin-left:5px;" />';
              return XMLifeOperating.generic.Global.isBanner || record.get('renterId') ? str1 + str2 : str1;
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
      columnWidth: 0.27,
      height: document.body.clientHeight-68,
      autoScroll: true,
      bbar: [
        '->',
        {
          xtype: 'button',
          text: '刷新预览',
          itemId: 'previewPage'
        }
      ],
      items: [{
          xtype: 'dataview',
          itemId: 'dataview',
          itemSelector: 'li',
          loadMask: true,
          loadingText: 'Loading...',
          tpl: '<div id="homePreviewList"><p style="text-align:center;">当前暂无预览</p></div>',
      }]
    }];

    this.callParent(arguments);
  }

});