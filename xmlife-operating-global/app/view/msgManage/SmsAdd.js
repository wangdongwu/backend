Ext.define('XMLifeOperating.view.msgManage.SmsAdd', {
    extend: 'Ext.window.Window',
    xtype: 'smsAdd',
    title: '新增/修改短信',
    modal: true,
    width: 450,
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
            items: [{
                xtype: 'label',
                text: '请输入短信内容（最多256字）：'
            }, {
                xtype: 'textarea',
                name: 'content',
                maxLength: 256,
                emptyText: '短信内容...',
                allowBlank: false,
                blankText: '内容不能为空',
                margin: '10 0 15 0'
            }, {
                xtype: 'label',
                text: '请输入短信发送时间：'
            }, {
                xtype: 'datefield',
                itemId: 'startTime',
                name: 'startTime',
                format: 'Y-m-d H:i:s',
                editable: true,
                minValue: new Date(),
                allowBlank: false,
                margin: '10 0 15 0'
            }, {
                xtype: 'label',
                text: '请上传短信发送uid：'
            }, {
                xtype: 'filefield',
                name: 'file',
                emptyText: '请选择文件...',
                buttonText: '上传/修改',
                //allowBlank: false
            }],
            buttons: [{
                text: '确定',
                itemId: 'saveBtn'
            }, {
                text: '取消',
                handler: function() {
                    this.up('window').close();
                }
            }]
        }];

        this.callParent(arguments);
    }

});
