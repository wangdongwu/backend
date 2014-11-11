Ext.define('XMLifeOperating.view.centralPointManage.shopConfig.AddModuleItem', {
    extend: 'Ext.window.Window',
    xtype: 'AddModuleItem',
    alias :'widget.AddModuleItem',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '新建小积木',
    width: 450,
    layout : 'fit',
    buttonAlign: 'center',
    items: [{
        xtype: 'form',
        url : XMLifeOperating.generic.Global.URL.biz+'shopHomepage/createModuleItem',
        width : '100%',
        bodyPadding: 8,
        defaults : {
          labelWidth: 70,
          width : 400
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
                itemId: 'cid',
                store: 'HomePageCategory',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择货架',
                width: 115,
                hidden: true
            }, {
                xtype: 'combo',
                name: 'pid',
                itemId: 'pid',
                store: 'HomePageProduct',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
                emptyText: '请选择SKU',
                width: 95,
                hidden: true
            }]
        }, {
            xtype: 'textfield',
            name: 'url',
            itemId: 'urlTextField',
            fieldLabel: 'url',
            labelWidth: 70,
            allowBlank: false,
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
                this.up('window').close();
            }
        }]
    }]
});