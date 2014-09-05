Ext.define('XMLifeOperating.view.centralPointManage.delivererZone.DelivererZoneEdit', {
    extend: 'Ext.window.Window',
    xtype: 'delivererZoneEdit',
    
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 350,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            
            defaults:{
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '线路名称',
                    labelWidth: 90,
                    allowBlank:false,
                    minLength: 2,
                    minLengthText:'姓名最小长度为2',
                    maxLength: 10,
                    maxLengthText:'姓名最大长度为10',
                }
                // {
                //     xtype: 'combobox',
                //     name: 'shopArea',
                //     fieldLabel: '中心点',
                //     allowBlank: false,
                //     blankText: '请选择中心点',
                //     labelWidth: 90,
                //     editable : false,
                //     store:'BusinessArea',
                //     displayField:'name',
                //     valueField:'id',
                //     queryMode:'local',
                //     emptyText: "请选择中心点"
                // },
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-line-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('delivererZoneEdit')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

        
});