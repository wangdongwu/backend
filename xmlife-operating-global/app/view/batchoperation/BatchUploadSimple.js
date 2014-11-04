Ext.define('XMLifeOperating.view.batchoperation.BatchUploadSimple', {
  extend: 'Ext.panel.Panel',
  requires: [
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Hidden'
  ],
  xtype : 'BatchUploadSimple',
  alias : 'widget.BatchUploadSimple',
  closeAction: 'hide',
  resizable: false,
  forceFit: true,
  items : [
    {
      xtype : 'form',
      border: 0,
      edit : false,
      items : [
        {
          xtype: 'fieldcontainer',
          defaultType: 'textfield',
          defaults: {
            labelWidth: 80,
            width: 500
          },
          items: [
            {
              xtype: 'radiogroup',
              fieldLabel: '文件类型',
              items: [
                {boxLabel: 'Excel文件[2007或以上版本]', name: 'filetype', inputValue: '1', checked: true},
                {boxLabel: 'Excel文件', name: 'filetype', inputValue: '2'}
              ]
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
              fieldLabel: '提交说明'
            },
            {
              xtype: 'button',
              text: '提交',
              width: 50,
              style: 'margin-left: 430px; margin-top: 10px; color: blue;',
              itemId: 'submit'
            },
            {
              xtype: 'textareafield',
              style: 'margin-left: 85px; margin-top: 30px;',
              edit: false,
              grow: true,
              blankText: '执行结果',
              itemId: 'resultLog',
              width: 415,
              cols: 40
            }

          ]
        }
      ]
    }
  ]
});
