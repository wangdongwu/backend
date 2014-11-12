Ext.define('XMLifeOperating.view.batchoperation.update.ProductCategoryUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductCategoryUpdateBatch',
  xtype : 'ProductCategoryUpdateBatch',
  alias : 'widget.ProductCategoryUpdateBatch',
  title : '商品分类',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items: [
    {
      xtype: 'form',
      edit: false,
      border: 0,
      defaults: {
        bodyPadding : 5
      },
      items: [
        {
          xtype : 'fieldcontainer',
          defaultType : 'textfield',
          defaults : {
            labelWidth : 80,
            width :600
          },
          items : [
            {
              xtype : 'combo',
              fieldLabel : '城市选择',
              store : 'SupportedCity',
              name : 'city',
              itemId: 'city',
              allowBlank : false,
              blankText: '请选择城市',
              editable : false,
              triggerAction : 'all',
              displayField: 'name',
              valueField: 'code'
            },
            {
              xtype : 'combo',
              fieldLabel : '商圈选择',
              store : 'ShopArea',
              name : 'areaId',
              itemId: 'areaId',
              allowBlank : false,
              blankText: '请选择商圈',
              editable : false,
              triggerAction : 'all',
              displayField: 'name',
              valueField: 'id'
            },
            {
              xtype : 'combo',
              fieldLabel : '商店选择',
              store : 'Shop',
              name : 'shopId',
              itemId: 'shopId',
              allowBlank : false,
              blankText: '请选择商店',
              editable : false,
              triggerAction : 'all',
              displayField: 'name',
              valueField: 'id',
              queryMode: 'local'
            },
            {
              xtype: 'radiogroup',
              fieldLabel: '文件类型',
              items: [
                {boxLabel: '<span>Excel文件[2007或以上版本](*.<span style="color:red;">xlsx</span>)</span>', name: 'workbookType', inputValue: 'XSSF', checked: true},
                {boxLabel: '<span>Excel文件(*.<span style="color:red;">xls</span>)</span>', name: 'workbookType', inputValue: 'HSSF'}
              ]
            },
            {
              xtype: 'filefield',
              fieldLabel: '文件路径',
              emptyText: '从svn中选择上传',
              name: 'file'
            },
            {
              xtype: 'radiogroup',
              fieldLabel: '一级分类图文关联',
              items: [
                {boxLabel: '<span>Excel文件[2007或以上版本](*.<span style="color:red;">xlsx</span>)</span>', name: 'workbookType2', inputValue: 'XSSF', checked: true},
                {boxLabel: '<span>Excel文件(*.<span style="color:red;">xls</span>)</span>', name: 'workbookType2', inputValue: 'HSSF'}
              ]
            },
            {
              xtype: 'filefield',
              fieldLabel: '文件路径',
              emptyText: '从svn中选择上传',
              name: 'catImg'
            },
            {
              xtype: 'radiogroup',
              fieldLabel: '压缩图片',
              items: [
                {boxLabel: '(*.zip)', name: 'filetype', inputValue: '1', checked: true}
              ]
            },
            {
              xtype: 'filefield',
              fieldLabel: '文件路径',
              emptyText: '从svn中选择上传',
              name: 'imgZip'
            },

            {
              xtype: 'textareafield',
              grow: true,
              name: 'comment',
              fieldLabel: '提交说明',
              allowBlank: false,
              emptyText: '提交说明(必填)'
            },
            {
              xtype: 'button',
              text: '提交',
              width: 50,
              style: 'margin-left: 430px; margin-top: 10px;',
              itemId: 'submit'
            },
            {
              xtype: 'textareafield',
              style: 'margin-left: 85px; margin-top: 30px;',
              edit: false,
              grow: true,
              itemId: 'resultLog',
              width: 515,
              cols: 40
            }
          ]
        }
    ]
    }
  ]
});
