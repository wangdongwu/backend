Ext.define('XMLifeOperating.view.centralPointManage.homePage.ModuleDetailEdit', {
    extend: 'Ext.window.Window',
    xtype: 'moduleDetailEdit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建/编辑属性',
    width: 450,
    buttonAlign: 'center',
    autoScroll: false,

    items: [{
        xtype: 'form',
        layout: 'vbox',
        bodyPadding: 12,
        defaults: {
            width: '95%',
            margin: '8 0 0 0'
        },
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: '名称',
            labelWidth: 60,
            labelAlign: 'right'
        }, {
            xtype: 'label',
            text: '（提示: 多个titles之间用;号隔开）',
            width: '100%',
            style: 'padding-left:58px;color:#999;text-align:left;'
        }, {
            xtype: 'textfield',
            name: 'titles',
            fieldLabel: 'titles',
            labelWidth: 60,
            labelAlign: 'right'

        }, {
            xtype: 'combo',
            name: 'urlType',
            fieldLabel: 'url类型',
            labelWidth: 60,
            labelAlign: 'right',
            store: 'HomePageUrlType',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'urlType',
            emptyText: '请选择类型',
            allowBlank: false
        }, {
            xtype: 'fieldset',
            itemId: 'comboFieldset',
            layout: 'column',
            padding: 0,
            border: false,
            hidden: true,
            defaults: {
                margin: '0 2 0 0'
            },
            items:[{
                xtype: 'combo',
                name: 'shopId',
                fieldLabel: '选择',
                labelAlign: 'right',
                labelWidth: 60,
                store: 'HomePageShop',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择商铺',
                width: 165,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'cid',
                store: 'HomePageCategory',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择货架',
                width: 110,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'pid',
                store: 'HomePageProduct',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择SKU',
                width: 110,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'fid',
                fieldLabel: '选择',
                labelWidth: 60,
                labelAlign: 'right',
                store: 'HomePageFunction',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'value',
                value: 'WALLET',
                emptyText: '请选择页面',
                width: 165,
                hidden: true
            }]
        }, {
            xtype: 'textfield',
            name: 'url',
            itemId: 'urlTextField',
            fieldLabel: 'url',
            emptyText: 'http://',
            labelWidth: 60,
            labelAlign: 'right',
            hidden: true
        }, {
            xtype: 'label',
            itemId: 'picSizeTip',
            width: '100%',
            style: 'padding-left:58px;color:rgb(255, 68, 0);text-align:left;'
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
                width: 329,
                allowBlank: false,
                //readOnly: true,
            }, {
                xtype: 'form',
                border: false,
                itemId:'adf',
                items:[{
                    xtype: 'filefield',
                    name: 'moduleUploadfile',
                    buttonOnly: true,
                    buttonText: '选择文件',
                    hideLabel: true
                }]
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