Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.EditModule', {
    extend: 'Ext.window.Window',
    xtype: 'EditModule',
    alias :'widget.EditModule',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '修改模块名称',
    width: 300,
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        url : XMLifeOperating.generic.Global.URL.biz+'shopHomePage/updateModule',
        layout: 'vbox',
        bodyPadding: 8,
        defaults : {
          labelWidth: 70
        },
        items: [{
          xtype : 'textfield',
          name : 'moduleId',
          hidden : true,
          fieldLabel : '模块id'
        },{
          xtype : 'textfield',
          name : 'name',
          fieldLabel : '模块名字'
        }],
        buttons: [{
            xtype: 'button',
            text: '确定',
            itemId: 'subEditModule'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});