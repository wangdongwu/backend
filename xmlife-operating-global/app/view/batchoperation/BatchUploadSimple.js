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
            width: 600
          },
          items: [
            {
              xtype: 'radiogroup',
              fieldLabel: '文件类型',
              items: [
                {boxLabel: '<span>Excel文件[2007或以上版本](*.<span style="color:red;">xlsx</span>)</span>', name: 'filetype', inputValue: '1', checked: true},
                {boxLabel: '<span>Excel文件(*.<span style="color:red;">xls</span>)</span>', name: 'filetype', inputValue: '2'}
              ]
            },
            {
              xtype: 'filefield',
              fieldLabel: '文件路径',
              emptyText: '从svn中选择上传',
              name: 'file'
            },{
              xtype:'textfield',
              name:'filename',
              hidden:true
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
              width: 515,
              cols: 40
            }

          ]
        }
      ]
    }
  ]
});
