Ext.define('XMLifeOperating.view.cityManage.SupportedCityEdit', {
    extend: 'Ext.window.Window',
    xtype: 'supportedCityEdit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    closeAction: 'hide',
    modal: true,
    width: 500,
    height: 350,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        var statueStore = Ext.create('Ext.data.Store', {
            fields: ['value','status'],
            data : [
                {"value": 1, "status": '开放'},
                {"value": 2, "status": '筹备'}
            ]
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [
                {
                    xtype: 'textfield',
                    name: 'city',
                    readOnly : true,
                    editable : false,
                    valueField: 'name',
                    queryMode:'local',
                },
                {
                    fieldLabel : '状态',
                    store : statueStore,
                    name : 'status',
                    allowBlank : false,
                    xtype : 'combo',
                    editable : false,
                    queryMode : 'local',
                    triggerAction : 'all',
                    displayField: 'status',
                    valueField: 'value'                   
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-city-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('supportedCityEdit')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

});      
