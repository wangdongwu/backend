Ext.define('XMLifeOperating.view.centralPointManage.homePage.ModuleDetailEdit', {
    extend: 'Ext.window.Window',
    xtype: 'moduleDetailEdit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '属性编辑',
    width: 380,
    buttonAlign: 'center',
    autoScroll: false,

    items: [{
        xtype: 'form',
        layout: 'vbox',
        bodyPadding: 12,
        //style: 'line-height:22px;',
        defaults: {
            width: '95%',
            margin: '8 0 0 0'
        },
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '名称',
            labelWidth: 60,
            labelAlign: 'right',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'titles',
            fieldLabel: 'titles',
            labelWidth: 60,
            labelAlign: 'right'
        }, {
            xtype: 'combo',
            name: 'urlType',
            fieldLabel: '类型',
            labelWidth: 60,
            labelAlign: 'right',
            store: 'HomePageUrlType',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            emptyText: '请选择类型',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'url',
            fieldLabel: 'url',
            labelWidth: 60,
            labelAlign: 'right',
            allowBlank: false
        }, {
            xtype: 'fieldset',
            layout: 'column',
            padding: 0,
            border: false,
            items:[{
                xtype: 'textfield',
                name: 'image',
                fieldLabel: '图片',
                itemId:'imageHash',
                labelWidth: 60,
                labelAlign: 'right',
                width: 262,
                allowBlank: false,
                //readOnly: true,
            }, {
                xtype: 'form',
                border: false,
                itemId:'adf',
                items:[
                    {
                        xtype: 'filefield',
                        name: 'moduleUploadfile',
                        buttonOnly: true,
                        buttonText: '选择文件',
                        hideLabel: true
                    }
                ]
            }]
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