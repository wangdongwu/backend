Ext.define('XMLifeOperating.view.dealManage.ReturnProductForm', {
  extend: 'Ext.window.Window',
  requires: [
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Hidden'
  ],
  xtype : 'ReturnProductForm',
  id : 'ReturnProductForm',
  alias : 'widget.ReturnProductForm',
  title : '退货管理',
  width : 350,
  closeAction: 'hide',
  modal: true,
  resizable: false,
  layout: 'fit',
  items : [{
    xtype : 'form',
    url : XMLifeOperating.generic.Global.URL.biz+'admin/create/shopAdmin',
    bodyPadding : '10 20',
    defaults : {
      bodyPadding : 5
    },
    items : [
      {
        xtype : 'fieldcontainer',
        defaultType : 'textfield',
        defaults : {
          labelWidth : 50,
          width : 280
        },
        items : [
          {
            xtype: 'combo',
            editable: false,
            itemId: 'DealItems',
            store: 'DealItems',
            triggerAction : 'all',
            displayField: 'name',
            fieldLabel: '商品',
            valueField: 'dealBackendId',
            queryMode: 'local',
            name: 'item'
          },
          {
            fieldLabel : '数量',
            itemId: 'DealItemsNumber',
            name : 'number'
          }
        ]
      }
    ],
    buttons : [{
      text : '取消',
      handler : function(){
        this.up('window').close();
      }
    },{
      itemId : 'submit',
      text : '确定'
    }]
  }]
});
