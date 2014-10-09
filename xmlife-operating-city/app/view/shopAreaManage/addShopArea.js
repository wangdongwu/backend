/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.shopAreaManage.addShopArea', {
    extend: 'Ext.window.Window',
    xtype: 'addShopArea',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
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
            style:'border:none',
            items: [{
                    xtype: 'textfield',
                    name: 'areaName',
                    fieldLabel: '中心名称',
                    labelWidth: 90,
                    allowBlank: false,
                    labelAlign: 'center'
                }, {
                    xtype: 'textfield',
                    name: 'shopAreaName',
                    fieldLabel: '中心店名称',
                    labelWidth: 90,
                    allowBlank: false,
                    labelAlign: 'center'
                },  {
                    xtype: 'textfield',
                    name: 'shopAreaName',
                    fieldLabel: '中心店电话',
                    labelWidth: 90,
                    allowBlank: false,
                    labelAlign: 'center'
                },{
                    xtype: 'textfield',
                    name: 'shopAreaAddress',
                    fieldLabel: '中心门店地址',
                    labelWidth: 90,
                    allowBlank: false,
                    labelAlign: 'center'
                }

            ],
            buttons: [{
                text: '确定',
                itemId: 'add-new-shopArea'
            }, {
                text: '取消',
                handler: function() {
                    Ext.ComponentQuery.query('generateCard')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }

});