Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponReleaseDirect', {
  extend: 'Ext.window.Window',
  xtype: 'couponReleaseDirect',
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
  title: '直接发放',
  initComponent: function () {
    this.items = [
      {
        xtype: 'form',
        layout: 'anchor',
        bodyPadding: 10,
        border: false,
        defaults: {
          labelWidth: 100,
          width: 420
        },
        items: [
          {
            xtype: 'combo',
            itemId: 'ruleId',
            fieldLabel: '选择规则',
            name: 'sendRuleId',
            store: 'CouponSendRuleDirect',
            editable: false,
            triggerAction: 'all',
            displayField: 'name',
            valueField: 'id',
            allowBlank: false
          },
          {
            xtype: 'filefield',
            fieldLabel: '上传UID',
            name: 'file'
          }
        ],
        buttons: [
          {
            text: '发放',
            itemId: 'release'
          },
          {
            text: '关闭',
            handler: function (button) {
              button.up('window').close();
            }
          }
        ]
      }
    ]
    this.callParent(arguments);
  }
});
