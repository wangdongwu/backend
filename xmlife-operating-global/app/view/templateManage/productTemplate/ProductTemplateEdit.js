Ext.define('XMLifeOperating.view.templateManage.productTemplate.ProductTemplateEdit', {
    extend: 'Ext.window.Window',
    xtype: 'productTemplateEdit',
    
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 450,
    resizable :false,
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
                this.up('productTemplateEdit').close();
            }
        }
    ],

    items:{
        xtype: 'form',
        itemId:'productTemplateForm',
        layout: 'anchor',
        bodyPadding: 10,
        border: false,
        defaults:{
            anchor: '100%'
        },
        items:[
            {
                xtype: 'textfield',
                name: 'name1',
                fieldLabel: '商品名称1',
                labelWidth: 90,
                allowBlank: false,
                maxLength: 7,
                maxLengthText:'商品名称最大长度为7',
            },
            {
                xtype: 'textfield',
                name: 'name2',
                fieldLabel: '商品名称2',
                labelWidth: 90,
                maxLength: 7,
                maxLengthText:'商品名称最大长度为7',
            },
            {
                xtype: 'textfield',
                name: 'name3',
                fieldLabel: '商品名称3',
                labelWidth: 90,
                maxLength: 7,
                maxLengthText:'商品名称最大长度为7',

            },
            {
                xtype: 'combobox',
                name: 'unit',
                fieldLabel: '商品单位',
                allowBlank: false,
                blankText: '请选择商品单位',
                labelWidth: 90,
                editable : false,
                store:'ProductUnit',
                displayField:'name',
                valueField:'id',
                queryMode:'local',
                emptyText: "请选择商品单位",
            },
            {
                xtype: 'textfield',
                name: 'barCode',
                fieldLabel: '条形码',
                labelWidth: 90,
                allowBlank: false,
                itemId:'barCodeId'
            },
            {
                xtype: 'textfield',
                name: 'skuId',
                fieldLabel: '商品编码',
                labelWidth: 90,
                allowBlank: false,
                itemId:'skuIdId'
            },
            {
                xtype: 'textfield',
                name: 'tag',
                fieldLabel: '标签',
                labelWidth: 90,
                blankText: '请输入标签，之间用空格隔开',
            },
            {
                xtype: 'fieldset',
                layout: 'column',
                padding: 0,
                border: false,
                items:[
                    {
                        xtype: 'textfield',
                        name: 'picture',
                        fieldLabel: '上传图片',
                        itemId:'picture',
                        labelWidth: 90,
                        width: 300,
                        readOnly: true,
                    },
                    {
                        xtype: 'form',
                        border: false,
                        itemId:'adf',
                        margin: '0 30 0 0',
                        items:[
                            {
                                xtype: 'filefield',
                                name: 'productTemplateUploadfile',
                                buttonOnly: true,
                                hideLabel: true,
                            },
                        ]
                    },
                ]
            },
            {
                xtype: 'textarea',
                name: 'desc',
                fieldLabel: '商品描述',
                labelWidth: 90,
                minLength: 2,
                minLengthText:'商品描述最小长度为2',
                maxLength: 100,
                maxLengthText:'商品描述最大长度为10',
            },
            
        ]
            
    }
    

        
});

