Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponSendRuleCreateSimple', {
  extend: 'Ext.panel.Panel',
  xtype: 'CouponSendRuleCreateSimple',
  alias: 'widget.CouponSendRuleCreateSimple',
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
        defaults: {
          labelWidth: 100,
          width: 420
        },
        items: [
          {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '规则名称',
            allowBlank: false
          },
          {
            xtype: 'combo',
            fieldLabel: '优惠券类型',
            store: couponTypeStore,
            name: 'subType',
            allowBlank: false,
            editable: false,
            queryMode: 'local',
            triggerAction: 'all',
            displayField: 'type',
            valueField: 'value',
            allowBlank: false
          },
          {
            xtype: 'textfield',
            name: 'couponId',
            fieldLabel: '选择优惠券',
            emptyText: '请输入优惠券ID或卡包ID',
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
                width: 100,
                style: 'margin-right:5px'
              },
              {
                xtype: 'datefield',
                name: 'startTime',
                emptyText: '开始时间',
                value: new Date(),
                width: 145,
                format: 'Y-m-d H:i:s'
              },
              {
                xtype: 'displayfield',
                value: '到',
                style: 'margin:0 5px'
              },
              {
                xtype: 'datefield',
                name: 'endTime',
                width: 145,
                emptyText: '结束时间',
                format: 'Y-m-d H:i:s'
              }
            ]
          },
        ],
        buttons: [
          {
            text: '创建',
            itemId: 'save'
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
    this.callParent(arguments);
  }
});
