/*
 新建商家账号Form页面
 */
Ext.define('XMLifeOperating.view.authorityManage.AddMerchantAccount', {
  extend: 'Ext.window.Window',
  requires: [
    'Ext.form.Panel',
    'Ext.form.field.Text',
    'Ext.form.field.Hidden'
  ],
  xtype : 'AddMerchantAccount',
  id : 'AddMerchantAccount',
  alias : 'widget.AddMerchantAccount',
  title : '创建商家账号',
  width : 350,
  closeAction: 'hide',
  modal: true,
  resizable: false,
  layout: 'fit',
  items : [{
    xtype : 'form',
    url : XMLifeOperating.generic.Global.URL.biz+'admin/create/shopAdmin',
    editUrl : XMLifeOperating.generic.Global.URL.biz+'admin/update/shopAdmin',
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
            fieldLabel : '账号',
            itemId : 'accountField',
            name : 'account'
          },
          {
            fieldLabel : '密码',
            minLength : 6,
            maxLength : 32,
            maxLengthText : '最多可输入32个字符',
            minLengthText : '最少输入6个字符',
            inputType: 'password',
            validator : function(str){
              var resArr = [/[a-z]/,/[A-Z]/,/[0-9]/,/[@#$%]/],
                num = 0;
              Ext.each(resArr, function(res) {
                if(res.test(str)){
                  num++
                };
              });
              if (num >=3) {
                return true;
              }else{
                return '密码设置必须满足字母、数字、大小写、符号中至少3者组合';
              }
            },
            name : 'pwd'
          },
          {
            fieldLabel : '联系电话',
            name : 'phoneNum'
          },
          {
            xtype: 'combo',
            editable: false,
            itemId: 'city',
            store: 'SupportedCity',
            triggerAction : 'all',
            displayField: 'name',
            fieldLabel: '城市',
            valueField: 'code',
            name: 'city'
          },
          {
            xtype: 'combo',
            editable: false,
            itemId: 'shopArea',
            store: 'ShopArea',
            triggerAction : 'all',
            displayField: 'name',
            valueField: 'id',
            fieldLabel: '中心',
            name: 'areaId'
          },
          {
            xtype: 'combo',
            editable: false,
            itemId: 'shop',
            store: 'Shop',
            queryMode: 'local',
            triggerAction : 'all',
            displayField: 'name',
            valueField: 'id',
            fieldLabel: '店铺',
            name: 'shopId'
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
