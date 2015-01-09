Ext.define('XMLifeOperating.view.msgManage.NotifyAdd', {
    extend: 'Ext.window.Window',
    xtype: 'notifyAdd',
    title: '新增/修改系统消息',
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
                text: '请输入消息内容（最多256个字）：'
            }, {
                xtype: 'textarea',
                name: 'content',
                maxLength: 256,
                emptyText: '消息内容...',
                allowBlank: false,
                blankText: '内容不能为空',
                margin: '10 0 15 0'
            }, {
                xtype: 'label',
                text: '请输入消息发送时间：'
            }, {
                xtype: 'datefield',
                itemId: 'startTime',
                name: 'startTime',
                format: 'Y-m-d H:i:s',
                editable: true,
                minValue: new Date(),
                allowBlank: false,
                margin: '10 0 10 0'
            }, {
                xtype: 'label',
                text: '消息链接至：'
            }, {
                xtype: 'combo',
                name: 'linkType',
                itemId: 'linkType',
                displayField: 'type',
                valueField: 'value',
                triggerAction: 'all',
                editable: false,
                store: Ext.create('Ext.data.Store', {
                    fields: ['value', 'type'],
                    data: [{
                        'value': 1,
                        'type': '无'
                    }, {
                        'value': 2,
                        'type': 'H5页面'
                    }, {
                        'value': 3,
                        'type': '内部功能'
                    }]
                })
            }, {
                xtype: 'combo',
                fieldLabel: '请选择功能页',
                name: 'internalType',
                itemId: 'internalType',
                hidden: true,
                editable: false,
                triggerAction: 'all',
                displayField: 'type',
                valueField: 'value',
                store: Ext.create('Ext.data.Store', {
                    fields: ['value', 'type'],
                    data: [{
                        'value': 4,
                        'type': '我的优惠券'
                    }, {
                        'value': 5,
                        'type': '我的钱包'
                    }]
                })
            }, {
                xtype: 'textfield',
                fieldLabel: '请输入消息URL',
                name: 'url',
                itemId: 'linkUrl',
                hidden: true,
                emptyText: 'http://',
                regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.URL,
                regexText: '请输入正确的URL',
                allowBlank: true,
                margin: '10 0 20 0'
            }, {
                xtype: 'label',
                text: '请上传消息发送uid：'
            }, {
                xtype: 'filefield',
                name: 'file',
                emptyText: '请选择文件...',
                buttonText: '上传/修改'
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
