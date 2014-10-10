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
                }

                ]
        }]

        this.callParent(arguments);

    }

        
});

