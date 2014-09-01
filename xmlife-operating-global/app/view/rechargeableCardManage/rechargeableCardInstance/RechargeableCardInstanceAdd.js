/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardInstance.RechargeableCardInstanceAdd', {
    extend: 'Ext.window.Window',
    xtype: 'rechargeablecardinstanceadd',
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
                    xtype: 'combo',
                    name: 'shopBannerTemplateId',
                    fieldLabel: '模板',
                    allowBlank: false,
                    blankText: '请选择模板',
                    labelWidth: 90,
                    editable : false,
                    store:'CardBatch',
                    displayField:'name',
                    valueField:'id',
                    emptyText: "请选择模板"
                },
               {
                    xtype: 'timefield',
                    name: 'onlineTime',
                    fieldLabel: '有效期开始时间',
                    labelWidth: 90,
                    format:'Y-M-D',
                    allowBlank:false,
                    
                },
                {
                    xtype: 'timefield',
                    name: 'offlineTime',
                    fieldLabel: '有效期结束时间',
                    labelWidth: 90,
                    format:'Y-M-D',
                    allowBlank:false,

                },
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '发行量',
                    labelWidth: 90,
                    allowBlank:false,
                    labelAlign:'center'
                },
               
            ],
            buttons: [
                {
                    text: 'Save',
                    itemId: 'save-generateCard-edit-btn'
                },
                {
                    text: 'Cancel',
                    handler:function(){
                        //关闭窗口
                        Ext.ComponentQuery.query('generateCard')[0].close();
                    }
                }
            ]
        }]

        this.callParent(arguments);

    }

});      
