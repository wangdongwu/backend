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
    height: 240,
    resizable: false,
    layout: 'fit',
    initComponent: function() {
        this.items = [{
            xtype: 'textareafield',
            store: 'Feedback',
            items: [{
                text: '反馈意见',
                dataIndex: 'content',
                align: 'center',
                renderer:function(){
                    
                }
            }]
        }];
        this.callParent(arguments);
    }
});
