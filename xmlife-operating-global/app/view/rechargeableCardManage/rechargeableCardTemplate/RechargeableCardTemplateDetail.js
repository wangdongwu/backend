/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateDetail', {
    extend: 'Ext.window.Window',
    xtype: 'rechargeableCardTemplateDetail',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 300,
    height: 350,
    resizable: false,
    layout: 'fit',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: '名称',
                labelWidth: 90,
                allowBlank: false
            },{
                xtype: 'textarea',
                name: 'simpleDesc',
                fieldLabel: '短描述',
                labelWidth: 90,
                height: 61,
            }, {
                xtype: 'textarea',
                name: 'desc',
                fieldLabel: '描述',
                labelWidth: 90,
            }, {
                xtype: 'textfield',
                name: 'amount',
                fieldLabel: '面额/元',
                labelWidth: 90,
            }, {
                xtype: 'textfield',
                name: 'newAccount',
                fieldLabel: '是否新手卡',
            }]
        }]

        this.callParent(arguments);

    }

});