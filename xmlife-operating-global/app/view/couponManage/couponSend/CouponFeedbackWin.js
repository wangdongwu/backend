Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponFeedbackWin', {
  extend: 'Ext.window.Window',
  xtype: 'couponFeedbackWin',
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
  title: '创建购物发放',
  initComponent: function () {
    var couponTypeStore = Ext.create('Ext.data.Store', {
      fields: ['value', 'type'],
      data: [
        {"value": 1, "type": '优惠券'},
        {"value": 2, "type": '卡包'}
      ]
    });
    this.items = [
      {
        xtype: 'form',
        layout: 'anchor',
        bodyPadding: 10,
        border: false,
        items: [
          {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '优惠券名称',
            width:300,
            allowBlank: false
          },
          {
            xtype: 'textfield',
            itemId: 'ruleId',
            fieldLabel: '优惠券Id',
            width:300,
            hidden:true,
            disabled:true
          },
        ],
        buttons: [
          {
            text: '创建',
            itemId: 'save'
          },
          {
            text: 'Cancel',
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