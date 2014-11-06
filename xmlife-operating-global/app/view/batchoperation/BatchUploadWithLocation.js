Ext.define('XMLifeOperating.view.batchoperation.BatchUploadWithLocation', {
  extend: 'Ext.panel.Panel',
  requires: [
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Hidden'
  ],
  xtype: 'BatchUploadWithLocation',
  alias: 'widget.BatchUploadWithLocation',
  title: '',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  width: '100%',
  style: 'padding-top: 20px;',

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
            border: 0,
            defaults : {
              labelWidth : 80,
              width :600
            },
            items : [
              {
                xtype : 'combo',
                fieldLabel : '城市选择',
                store : 'SupportedCity',
                name : 'cityCode',
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
                xtype: 'filefield',
                fieldLabel: '文件路径',
                name: 'file'
              },
              {
                xtype: 'textareafield',
                grow: true,
                name: 'description',
                fieldLabel: '文件说明'
              },
              {
                xtype: 'radiogroup',
                fieldLabel: '文件类型',
                items: [
                  {boxLabel: '<span>Excel文件[2007或以上版本](*.<span style="color:red;">xlsx</span>)</span>', name: 'filetype', inputValue: '1', checked: true},
                  {boxLabel: '<span>Excel文件(*.<span style="color:red;">xls</span>)</span>', name: 'filetype', inputValue: '2'}
                ]
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
