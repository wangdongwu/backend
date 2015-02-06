Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponSendRuleCreateDirect', {
  extend: 'Ext.window.Window',
  xtype: 'CouponSendRuleCreateDirect',
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
  resizable: false,
  layout: 'fit',
  title: '创建直接发放',
  items : [
    {
      xtype: 'CouponSendRuleCreateSimple'
    }
  ]
});