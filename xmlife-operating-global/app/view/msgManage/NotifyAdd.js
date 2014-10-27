Ext.define('XMLifeOperating.view.msgManage.NotifyAdd', {
    extend: 'Ext.window.Window',
    xtype: 'notifyAdd',
    title: '新增/修改系统消息',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],
    closeAction: 'hide',
    modal: false,
    width: 450,
    height: 400,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: '20 25',
            defaults: {
                anchor: '98%',
                margin: '10 0'
            },
            items: [
                {
                    xtype: 'label',
                    text: '请输入消息内容（最多256个字）：'
                },
                {
                    xtype: 'textarea',
                    name: 'content',
                    maxLength: 25,
                    emptyText: '消息内容...',
                    allowBlank : false,
                    blankText: '内容不能为空',
                    margin: '10 0 15 0'
                },
                {
                    xtype: 'label',
                    text: '请输入消息发送时间：'
                },
                {
                    xtype: 'datefield',
                    itemId: 'startTime',
                    name: 'startTime',
                    format: 'Y-m-d H:i:s',
                    editable: true, 
                    minValue : new Date(),
                    allowBlank: false,
                    margin: '10 0 10 0'
                },
                {
                    xtype: 'label',
                    text: '请输入消息URL：'
                },
                {
                    xtype: 'textfield',
                    name: 'url',
                    emptyText: 'http://',
                    regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.URL,
                    regexText: '请输入正确的URL',
                    allowBlank: false,
                    margin: '10 0 20 0'
                },
                {
                    xtype: 'label',
                    text: '请上传消息发送uid：'
                },
                {
                    xtype: 'filefield',
                    name: 'file',
                    emptyText: '请选择文件...',
                    buttonText: '上传/修改',
                    //allowBlank: false
                }
            ],
            buttons: [{
                text: '确定',
                itemId: 'saveBtn'
            }, {
                text: '取消',
                handler:function(){
                    this.up('window').close();
                }
            }]
        }];

        this.callParent(arguments);
    }
    
});