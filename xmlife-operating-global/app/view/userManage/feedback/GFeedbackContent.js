Ext.define('XMLifeOperating.view.userManage.feedback.GFeedbackContent', {
    extend: 'Ext.window.Window',
    xtype: 'gFeedbackContent',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    closeAction: 'hide',
    modal: true,
    width: 400,
    resizable: false,
    layout: 'fit',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textarea',
                fieldStyle: {
                    border: 0,
                    fontSize:'14px'
                },
                height: 100,
                itemId: 'feedback',
                align: 'center'
            }]
        }];
        this.callParent(arguments);
    }
});
