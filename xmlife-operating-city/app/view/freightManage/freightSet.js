Ext.define('XMLifeOperating.view.freightManage.freightSet', {
    extend: 'Ext.window.Window',
    xtype: 'freightSet',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 400,
    height: 240,
    resizable: false,
    layout: 'fit',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title:'运费设置',
            itemId:'dealForm',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,
            
            defaults:{
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'displayfield',
                    name: 'name',
                    fieldLabel: '城市',
                    allowBlank:false,
                    minWidth: 138,
                    maxWidth: 138,
                    labelWidth: 100,
                    labelAlign:'left'
                },
                {
                    xtype: 'textfield',
                    name: 'shipfee',
                    fieldLabel: '运费',
                    allowBlank:false,                   
                    labelAlign:'left',
                    minWidth: 138,
                    maxWidth: 138,
                    labelWidth: 100,

                },
                {
                    xtype: 'label',
                    text: '元',
                    textAlign: 'left',
                    cls: 'user-text-label'
                },{
                xtype: 'container',
                layout: 'hbox',
                cls: 'x-form-field',
                items: [{
                    flex: 1,
                    xtype: 'checkbox',
                    name: 'amount',
                    
                    //labelSeparator: '',
                    minWidth: 88,
                    maxWidth: 88,
                    labelWidth: 20,
                    allowBlank: false,
                    margin: '0 5 10 4',
                    //cls: 'user-text-field'
                }, {
                    flex: 1,
                    xtype: 'textfield',
                    name: 'deductd',
                    fieldLabel: '满',
                    labelSeparator: '',
                    labelWidth: 40,
                    minWidth: 88,
                    maxWidth: 88,
                    allowBlank: false,
                    //cls: 'user-text-field-secondary'
                }, {
                    xtype: 'label',
                    text: '免运费',
                    textAlign: 'left',

                    cls: 'user-text-label1'
                }]
                }

            ],
            buttons: [{
                text: '确定',
                itemId: 'save-addReturnTemplate-edit-btn'
            }, {
                text: '取消',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('rechargeablecardtemplatereturncardadd')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }

        
});

