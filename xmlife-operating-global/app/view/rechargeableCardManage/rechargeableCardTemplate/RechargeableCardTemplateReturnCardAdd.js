Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateReturnCardAdd', {
    extend: 'Ext.window.Window',
    xtype: 'rechargeablecardtemplatereturncardadd',
    closeAction: 'hide',
    modal: true,
    width: 400,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
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
                xtype: 'textfield',
                name: 'desc',
                fieldLabel: '描述',
                height: 60,
                allowBlank: false,
                maxLengthText: '充值成功描述最大长度为28'
            }, {
                xtype: 'container',
                layout: 'column',
                style: 'margin-top:3px',
                items: [{
                    xtype: 'textfield',
                    name: 'immediatelyAmount',
                    fieldLabel: '即时到账',
                    labelWidth: 80,
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    value: '元',
                    style: 'margin-left:5px'
                }]
            }, {
                xtype: 'container',
                layout: 'column',
                style: 'margin-top:3px',
                items: [{
                    xtype: 'textfield',
                    name: 'returnAmount',
                    fieldLabel: '返还金额',
                    labelWidth: 80,
                    allowBlank: false
                }, {
                    xtype: 'displayfield',
                    value: '元',
                    style: 'margin-left:5px'
                }]
            }, {
                xtype: 'container',
                layout: 'column',
                style: 'margin-top:3px;margin-bottom:3px;',
                items: [{
                    xtype: 'textfield',
                    name: 'count',
                    fieldLabel: '返现次数',
                    labelWidth: 80,
                    allowBlank: false,
                    itemId: 'returncount'
                }, {
                    xtype: 'displayfield',
                    value: '次',
                    style: 'margin-left:5px'
                }]
            }, {
                xtype: 'container',
                layout: 'vbox',
                maxHeight: 150,
                autoScroll: true,
                width: 320,
                style: 'overflow-x:Hidden; overflow-y:scroll',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                itemId: 'returnContainer',
                items: []
            }, {
                xtype: 'checkbox',
                name: 'newAccount',
                fieldLabel: '是否新手卡',
                allowBlank: false
            }],
            buttons: [{
                text: '保存',
                itemId: 'save-addReturnTemplate-edit-btn'
            }, {
                text: '取消',
                handler: function() {
                    this.up('window').close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
