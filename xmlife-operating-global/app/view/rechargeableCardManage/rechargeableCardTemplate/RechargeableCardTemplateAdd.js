Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateAdd', {
    extend: 'Ext.window.Window',
    xtype: 'rechargeablecardtemplateadd',
    closeAction: 'hide',
    modal: true,
    width: 400,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            layout: 'vbox',
            bodyPadding: 20,
            border: false,
            defaults: {
                labelWidth: 80,
                width: '100%'
            },
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: '名称',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'simpleDesc',
                fieldLabel: '短描述',
                allowBlank: false,
                maxLengthText: '充值成功描述最大长度为28'
            }, {
                xtype: 'textareafield',
                name: 'desc',
                fieldLabel: '描述',
                allowBlank: false,
                maxLengthText: '充值成功描述最大长度为28'
            }, {
                xtype: 'textfield',
                name: 'amount',
                fieldLabel: '面额/元',
                allowBlank: false
            }, {
                xtype: 'checkbox',
                name: 'newAccount',
                fieldLabel: '是否新手卡',
                allowBlank: false
            }],
            buttons: [{
                text: '保存',
                itemId: 'save-addCardTemplate-edit-btn'
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
