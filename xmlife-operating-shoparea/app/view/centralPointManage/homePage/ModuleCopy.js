Ext.define('XMLifeOperating.view.centralPointManage.homePage.ModuleCopy', {
    extend: 'Ext.window.Window',
    xtype: 'moduleCopy',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '拷贝已有积木',
    width: 300,
    autoScroll: false,

    items: [{
        xtype: 'form',
        layout: 'vbox',
        bodyPadding: 15,
        items: [{
            xtype: 'combo',
            name: 'layoutId',
            itemId: 'versionCombo',
            fieldLabel: '版本',
            labelWidth: 55,
            labelAlign: 'center',
            store: 'HomePage',
            queryMode: 'local',
            displayField: 'version',
            valueField: 'id',
            emptyText: '请选择版本',
            allowBlank: false
        }, {
            xtype: 'combo',
            name: 'moduleId',
            itemId: 'moduleCombo',
            fieldLabel: '积木',
            labelWidth: 55,
            labelAlign: 'center',
            store: 'HomePageModuleCopy',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            emptyText: '请选择大积木',
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