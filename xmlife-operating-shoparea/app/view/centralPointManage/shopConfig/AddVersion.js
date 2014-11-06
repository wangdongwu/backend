Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.AddVersion', {
    extend: 'Ext.window.Window',
    xtype: 'AddVersion',
    alias :'widget.AddVersion',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建版本',
    width: 300,
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        layout: 'vbox',
        url : XMLifeOperating.generic.Global.URL.biz+'shopHomepage',
        bodyPadding: 8,
        defaults : {
          labelWidth: 70
        },
        style: 'line-height:22px;',
        items: [{
          xtype : 'textfield',
          name : 'version',
          fieldLabel : '版本名字'
        }],
        buttons: [{
            xtype: 'button',
            text: '确定',
            itemId: 'subNewVersion'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});