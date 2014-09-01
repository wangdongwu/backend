/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateAdd', {
    extend: 'Ext.window.Window',
    xtype: 'rechargeablecardtemplateadd',
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
            frame: true,
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '名称',
                    labelWidth: 90,
                    allowBlank:false,
                },
                {
                    xtype: 'textareafield',
                    name: 'desc',
                    fieldLabel: '充值成功描述',
                    labelWidth: 90,
                    allowBlank:false,
                    maxLength: 28,
                    maxLengthText:'充值成功描述最大长度为28',
                },
                {
                    xtype: 'textfield',
                    name: 'amount',
                    fieldLabel: '面额/元',
                    labelWidth: 90,
                    allowBlank:false,  
                }
                
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-addCardTemplate-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('rechargeablecardtemplateadd')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

});      