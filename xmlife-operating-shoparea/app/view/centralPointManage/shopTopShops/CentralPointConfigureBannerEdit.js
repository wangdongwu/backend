/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shopTopShops.CentralPointConfigureBannerEdit', {
    extend: 'Ext.window.Window',
    xtype: 'centralpointconfigurebanneredit',
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 200,
    resizable: false,
    layout: 'fit',
    buttons: [
        {
            text: 'Save',
            itemId: 'btnSave'
        },
        {
            text: 'Cancel',
            itemId: 'btnCancel',
            handler:function(){
                this.up('centralpointconfigurebanneredit').close();
            }
        }
    ],
    items:{
        xtype: 'form',
        layout: 'anchor',
        bodyPadding: 10,
        border: false,
        frame: false,
        defaults:{
            anchor: '100%'
        },
        items:[
            {
                xtype: 'textfield',
                name: 'title',
                fieldLabel: 'title',
                labelWidth: 90,
                allowBlank : false,
            },
            {
                xtype: 'textfield',
                name: 'url',
                fieldLabel: 'url',
                //regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.URL,
                //regexText: '请输入正确的url地址',
                labelWidth: 90,
            },
            {
                xtype: 'fieldset',
                layout: 'column',
                padding: 0,
                border: false,
                items:[
                    {
                        xtype: 'textfield',
                        name: 'image',
                        fieldLabel: 'Avatar',
                        itemId:'banner',
                        labelWidth: 90,
                        width: 300,
                        readOnly: false,
                    },
                    {
                        xtype: 'form',
                        border: false,
                        itemId:'adf',
                        margin: '0 30 0 0',
                        items:[
                            {
                                xtype: 'filefield',
                                name: 'centralPointBannerUploadfile',
                                buttonOnly: true,
                                hideLabel: true,
                            },
                        ]
                    },
                ]
            }
        ]
            
    }      
});