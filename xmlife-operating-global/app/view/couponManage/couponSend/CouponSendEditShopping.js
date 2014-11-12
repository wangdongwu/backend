Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponSendEditShopping', {
  extend: 'Ext.window.Window',
  xtype: 'CouponSendEditShopping',
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
            allowBlank: false
          },
          {
            xtype: 'container',
            layout: 'column',
            style: 'margin-top:3px;margin-bottom:5px;',
            items: [
              {
                xtype: 'displayfield',
                value: '购物满',
                style: 'margin-right:5px'
              },
              {
                xtype: 'textfield',
                name: 'benchMark',
                width: 50,
                allowBlank: false
              },
              {
                xtype: 'displayfield',
                value: '元',
                style: 'margin-left:5px'
              }
            ]
          },
          {
            xtype: 'displayfield',
            value: '选择城市'
          },
          {
            xtype: 'combo',
            itemId: 'curCity',
            store: 'SupportedCityCoupon',
            fieldLabel: '城市',
            autoSelect: true,
            maxWidth: 60,
            editable: false,
            triggerAction: 'all',
            displayField: 'name',
            valueField: 'code',
            value: '请选择城市',
            tooltip: 'Choose current city'

          },
          {
            xtype: 'container',
            layout: 'column',
            style: 'margin-top:3px;margin-bottom:5px;',
            items: [
              {
                xtype: 'textfield',
                fieldLabel: '',
                labelWidth: 90,
                labelAlign: 'left',
                emptyText: '搜索店铺',
                name: 'keywordShop',
                itemId: 'keywordShop',
                style: 'margin-right:10px;'
              },
              {
                xtype: 'button',
                text: '搜索',
                itemId: 'searchShop'
              }
            ]
          },
          {
            name: '',
            allowBlank: false,
            fieldLabel: '店铺',
            xtype: 'gridpanel',
            itemId: 'shopList',
            height: 100,
            selModel: Ext.create('Ext.selection.CheckboxModel', {
              mode: 'MULTI'
            }),
            columns:[{
                        xtype: 'rownumberer'
                    },{
                        text: '店铺名',
                        dataIndex: 'name',
                        width:200,
                        renderer: function(value,grid) {
                            value = grid.record.get('cityName')+'-'+value;
                            return value;
                        }
                    }]
          },
          {
            fieldLabel: '优惠券类型',
            name: 'subType',
            labelWidth: 90,
            store: couponTypeStore,
            allowBlank: false,
            xtype: 'combo',
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
            fieldLabel: '赠优惠券',
            labelWidth: 60,
            emptyText: '请输入优惠券ID或卡包ID'
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
                name: 'startTime',
                emptyText: '开始时间',
                //maxValue: new Date(),
                value: new Date(),
                format: 'Y-m-d'
              },
              {
                xtype: 'displayfield',
                value: '到',
                style: 'margin:0 5px'
              },
              {
                xtype: 'datefield',
                name: 'endTime',
                emptyText: '结束时间',
                //maxValue: new Date(),
                value: new Date(),
                format: 'Y-m-d'
              }
            ]
          }
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