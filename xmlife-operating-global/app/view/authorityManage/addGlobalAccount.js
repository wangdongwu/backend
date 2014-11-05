/**
 * @class XMLifeOperating.view.authorityManage.addGlobalAccount
 * @Ext.window.Windowss
 * Description
 */
Ext.define('XMLifeOperating.view.authorityManage.addGlobalAccount', {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    id : 'addGlobalAccount',
    xtype : 'addGlobalAccount',
    alias : 'widget.addGlobalAccount',
    title : '创建管理员账号',
    width : 440,
    closeAction: 'hide',
    modal: true,
    layout : 'fit',
    resizable: false,
    bodyPadding : '10 20',
    items : [{
      xtype : 'form',
      edit : false,
      url : XMLifeOperating.generic.Global.URL.biz+'admin/create/globalAdmin',
      editUrl : XMLifeOperating.generic.Global.URL.biz+'admin/update/globalAdmin',
      defaults : {
        bodyPadding : 5
      },
      items : [{
      xtype : 'fieldcontainer',
      defaultType : 'textfield',
      defaults : {
        labelWidth : 50,
        width : 380
      },
      items : [
        {
          fieldLabel : '姓名',
          name : 'name'
        },
        {
          fieldLabel : '账号',
          name : 'account',
          itemId : 'accountField'
        },
        {
          fieldLabel : '密码',
          inputType: 'password',
          minLength : 8,
          maxLength : 26,
          maxLengthText : '最多可输入26个字符',
          minLengthText : '最少输入8个字符',
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
        }
      ]
    },
    {
      xtype : 'tabpanel',
      plain: true,
      bodyPadding : '5px 0',
      itemId : 'modulesCheckbox',
      defaults :{
        height : 200,
        autoScroll: true
      }, 
      items : [
      
        {
          title : '全局权限',
          xtype :'AuthoritySelect',
          itemId : 'globalSelect'
        },
        {
          title : '城市权限',
          xtype :'AuthoritySelect',
          itemId : 'citySelect'
        },{
          title : '中心权限',
          xtype :'AuthoritySelect',
          itemId : 'shopareaSelect'
        }
      ]
    },
    {
      xtype : 'checkbox',
      boxLabel  : '城市权限管理',
      itemId : 'isHaveCities',
      name      : 'topping',
      inputValue: '2',
      listeners : {
        change : function(gird,newValue){
          var citiesCheckbox = gird.up('form').down('#citiesCheckbox'),
              citycheckboxFields = citiesCheckbox.query('checkboxfield');
          if(newValue){
            citiesCheckbox.show();
          }else{
            citiesCheckbox.hide();
            
            Ext.each(citycheckboxFields, function(checkboxfield) {
              checkboxfield.setValue(false);
            });
          }
        }
      }
      
    },
    {
      xtype : 'checkboxgroup',
      defaultType: 'checkboxfield',
      hidden : true,
      itemId : 'citiesCheckbox',
      width : 300,
      labelWidth : 60,
      columns: 2,
      vertical: true,
      items : [{
        xtype: 'checkbox',
        boxLabel  : '杭州',
        name      : 'cities',
        inputValue: '330100'
      }]
      }
    ]
    }],
    buttons : [{
      text : '取消',
      handler : function(){
        this.up('window').close();
      }
    },{
      itemId : 'submit',
      text : '确定'
    }]
});