Ext.define('XMLifeOperating.view.centralPointManage.homePage.VersionAdd', {
    extend: 'Ext.window.Window',
    xtype: 'versionAdd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建版本',
    width: 300,
    buttonAlign: 'center',
    autoScroll: false,

    items: [{
        xtype: 'form',
        layout: 'hbox',
        bodyPadding: 15,
        items: [{
            xtype: 'textfield',
            name: 'version',
            itemId: 'version',
            fieldLabel: '版本名称',
            labelWidth: 65,
            allowBlank: false
        }],
        buttons: [{
            xtype: 'button',
            text: '保存',
            itemId: 'save'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});