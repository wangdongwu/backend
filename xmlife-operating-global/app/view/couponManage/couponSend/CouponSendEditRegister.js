Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponSendEditRegister', {
  extend: 'Ext.window.Window',
  xtype: 'CouponSendEditRegister',

  requires: [
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Hidden',
    'Ext.form.FieldSet',
    'Ext.layout.container.Column',
    'Ext.draw.Text'
  ],
  closeAction: 'hide',
  modal: true,
  width: 450,
  height: 550,
  resizable: false,
  layout: 'fit',
  title: '创建注册发放',
  items : [
    {
      xtype : 'CouponSendRuleCreateSimple'
    }
  ]
});