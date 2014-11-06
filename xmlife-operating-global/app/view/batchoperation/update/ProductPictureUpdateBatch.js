Ext.define('XMLifeOperating.view.batchoperation.update.ProductPictureUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'ProductPictureUpdateBatch',
  xtype : 'ProductPictureUpdateBatch',
  alias : 'widget.ProductPictureUpdateBatch',
  title : '商品图片',
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
              name: 'file',
              listeners:{
                afterrender:function(cmp){
                  cmp.fileInputEl.set({
                    multiple:'multiple'
                  });
                }
              }
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
              width: 515,
              cols: 40
            }

          ]
        }
      ]
    }
  ]
});
