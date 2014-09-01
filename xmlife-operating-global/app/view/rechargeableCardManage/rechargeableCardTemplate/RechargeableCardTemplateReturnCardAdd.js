/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateReturnCardAdd', {
    extend: 'Ext.window.Window',
    xtype: 'rechargeablecardtemplatereturncardadd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 300,
    height: 420,
    resizable: false,
    layout: 'fit',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: '名称',
                labelWidth: 90,
                allowBlank: false,
            }, {
                xtype: 'textfield',
                name: 'desc',
                fieldLabel: '充值成功描述',
                labelWidth: 90,
                height: 61,
                allowBlank: false,
                maxLength: 28,
                maxLengthText: '充值成功描述最大长度为28',
            }, {
                xtype: 'container',
                layout: 'hbox',
                cls: 'x-form-field',
                items: [{
                    flex: 1,
                    xtype: 'textfield',
                    name: 'amount',
                    fieldLabel: '面额：&nbsp充',
                    labelSeparator: '',
                    minWidth: 138,
                    maxWidth: 138,
                    labelWidth: 60,
                    allowBlank: false,
                    margin: '0 5 10 4',
                    cls: 'user-text-field'
                }, {
                    flex: 1,
                    xtype: 'textfield',
                    name: 'immediatelyAmount',
                    fieldLabel: '元，返',
                    labelSeparator: '',
                    labelWidth: 40,
                    minWidth: 88,
                    maxWidth: 88,
                    allowBlank: false,
                    cls: 'user-text-field-secondary'
                }, {
                    xtype: 'label',
                    text: '元',
                    textAlign: 'left',
                    cls: 'user-text-label'
                }]
            }, {
                xtype: 'textfield',
                name: 'count',
                fieldLabel: '返还次数',
                labelWidth: 90,
                allowBlank: false,
                itemId: 'returncount'

            }, {
                xtype: 'container',
                layout: 'vbox',
                maxHeight: 150,
                autoScroll:true,
                style:'overflow-x:visiable; overflow-y:scroll',
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
                //labelWidth: 90,
                allowBlank: false,
            }, ],
            buttons: [{
                text: 'Save',
                itemId: 'save-addReturnTemplate-edit-btn'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('rechargeablecardtemplatereturncardadd')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }

});