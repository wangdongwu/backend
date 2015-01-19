Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateDetail', {
    extend: 'Ext.window.Window',
    xtype: 'rechargeableCardTemplateDetail',
    title: '详情',
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
                xtype: 'textarea',
                name: 'simpleDesc',
                fieldLabel: '短描述'
            }, {
                xtype: 'textarea',
                name: 'desc',
                fieldLabel: '描述'
            }, {
                xtype: 'textfield',
                name: 'amount',
                fieldLabel: '面额/元'
            }, {
                xtype: 'textfield',
                name: 'newAccount',
                fieldLabel: '是否新手卡'
            }]
        }]
        this.callParent(arguments);
    }
});
