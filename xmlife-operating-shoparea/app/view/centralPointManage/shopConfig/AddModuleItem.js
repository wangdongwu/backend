Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.AddModuleItem', {
    extend: 'Ext.window.Window',
    xtype: 'AddModuleItem',
    alias :'widget.AddModuleItem',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建小积木',
    width: 500,
    layout : 'fit',
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        url : XMLifeOperating.generic.Global.URL.biz+'shopHomepage/createModuleItem',
        width : '100%',
        bodyPadding: 8,
        defaults : {
          labelWidth: 70,
          width : 450
        },
        items: [{
          xtype : 'textfield',
          name : 'name',
          fieldLabel : '名称'
        },
        {
          xtype : 'textfield',
          itemId : 'index',
          name : 'index',
          hidden : true
        },
          {
            xtype: 'textfield',
            name: 'titles',
            fieldLabel: 'titles',
        }, {
            xtype: 'combo',
            itemId : 'urlType',
            name: 'urlType',
            fieldLabel: 'url类型',
            store: 'ShopUrlType',
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
                itemId: 'shopId',
                fieldLabel: '选择',
                labelWidth: 70,
                store: 'HomePageShop',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择商铺',
                width: 175
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
            },
            {
                xtype: 'combo',
                name: 'fid',
                fieldLabel: '选择',
                labelWidth: 70,
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
            labelWidth: 70,
            hidden: true
        },{
            xtype: 'container',
            layout: 'column',
            border : 0,
            defaults : {
              labelWidth: 70
            },
            items:[{
                xtype: 'textfield',
                name: 'image',
                style : {
                  marginRight : '3px'
                },
                fieldLabel: '图片',
                itemId:'imageField',
                allowBlank: false,
                width : 230
            }, {
                xtype: 'form',
                border: false,
                items:[
                    {
                        itemId : 'imageUpload',
                        xtype: 'filefield',
                        name: 'moduleUploadfile',
                        buttonOnly: true,
                        buttonText: '选择图片',
                        hideLabel: true
                    }
                ]
            },
            {
              border :0,
              itemId : 'picSizeTip'
            }]
        }],
        buttons: [{
            xtype: 'button',
            text: '确定',
            itemId: 'subNewModuleItem'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').destroy();
            }
        }]
    }]
});