Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponSendRuleUpdateSimple', {
  extend: 'Ext.window.Window',
  xtype: 'CouponSendRuleUpdateSimple',
  alias: 'widget.CouponSendRuleUpdateSimple',
  requires: [
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Hidden',
    'Ext.form.FieldSet',
    'Ext.layout.container.Column',
    'Ext.draw.Text',
    'Ext.form.field.File'
  ],
  closeAction: 'hide',
  modal: true,
  width: 450,
  height: 550,
  resizable: false,
  layout: 'fit',
  title: '创建规则',
  items: [
    {
      xtype: 'form',
      layout: 'anchor',
      bodyPadding: 10,
      border: false,
      defaults: {
        labelWidth: 100,
        width: 400
      },
      items: [
        {
          xtype: 'textfield',
          name: 'ruleId',
          itemId: 'ruleId',
          editable: false,
          fieldLabel: '规则ID',
          allowBlank: false
        },
        {
          xtype: 'textfield',
          name: 'name',
          itemId: 'name',
          fieldLabel: '规则名称',
          allowBlank: false
        },
        {
          xtype: 'container',
          layout: 'column',
          style: 'margin-top:3px;margin-bottom:5px;',
          items: [
            {
              xtype: 'displayfield',
              value: '有效获得时间:',
              style: 'margin-right:5px'
            },
            {
              xtype: 'datefield',
              name: 'start',
              itemId: 'startTime',
              emptyText: '开始时间',
              value: new Date(),
              format: 'Y-m-d H:i:s'
            },
            {
              xtype: 'displayfield',
              value: '到',
              style: 'margin:0 5px'
            },
            {
              xtype: 'datefield',
              name: 'end',
              itemId: 'endTime',
              emptyText: '结束时间',
              format: 'Y-m-d H:i:s'
            }
          ]
        },
      ],
      buttons: [
        {
          text: '修改',
          itemId: 'update'
        },
        {
          text: 'Cancel',
          handler: function () {
            this.up('window').close();
          }
        }
      ]
    }
  ]
})
;
