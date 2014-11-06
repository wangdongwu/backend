Ext.define('XMLifeOperating.view.batchoperation.update.DistributionTypeUpdateBatch', {
  extend: 'Ext.panel.Panel',
  id : 'DistributionTypeUpdateBatch',
  xtype : 'DistributionTypeUpdateBatch',
  alias : 'widget.DistributionTypeUpdateBatch',
  title : '配送地址类型',
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
