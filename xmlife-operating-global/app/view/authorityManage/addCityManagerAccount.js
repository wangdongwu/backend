/**
 * @class XMLifeOperating.view.authorityManage.addCityManagerAccount
 * @extends extendsClass
 * Description
 */
Ext.define('XMLifeOperating.view.authorityManage.addCityManagerAccount', {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    xtype : 'addCityManagerAccount',
    id : 'addCityManagerAccount',
    alias : 'widget.addCityManagerAccount',
    title : '创建城市经理账号',
    width : 350,
    closeAction: 'hide',
    modal: true,
    resizable: false,
    layout: 'fit',
    items : [{
      xtype : 'form',
      url : XMLifeOperating.generic.Global.URL.biz+'admin/create/cityAdmin',
      editUrl : XMLifeOperating.generic.Global.URL.biz+'admin/update/cityAdmin',
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
          fieldLabel : '姓名',
          name : 'name'
        },
        {
          fieldLabel : '账号',
          itemId : 'accountField',
          name : 'account'
        },
        {
          fieldLabel : '密码',
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
        },{
          xtype : 'fieldcontainer',
          layout : 'fit',
          defaults : {
              labelWidth : 50,
              width : 280
            },
          items: [
          {
          fieldLabel : '省份',
          store : 'Province',
          name : 'cpro',
          itemId: 'cmbProvince',
          allowBlank : false,
          blankText: '请选择省份',
          xtype : 'combo',
          editable : false,
          mode : 'local',
          triggerAction : 'all',
          displayField: 'name',
          valueField: 'code',
          queryMode:'local'
        },
        {
            fieldLabel : '城市',
            name : 'city',
            store : 'AllCities',
            itemId: 'cmbCity',
            blankText: '请选择城市',
            allowBlank : false,
            xtype : 'combo',
            editable : false,
            mode : 'local',
            triggerAction : 'all',
            displayField: 'name',
            valueField: 'code',
            queryMode:'local',
            emptyText: "请先选择省份"
          }]
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