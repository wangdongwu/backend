/**
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopSecondShelfAdd', {
    extend: 'Ext.window.Window',
    xtype: 'shopsecondshelfadd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 500,
    height: 350,
    resizable: false,
    layout: 'fit',
    bodyStyle: 'text-align:center;border-style: none;',
    initComponent: function() {
        var leafStore = Ext.create('Ext.data.Store', {
            fields: ['value', 'leaf'],
            data: [{
                "value": false,
                "leaf": '是'
            }, {
                "value": true,
                "leaf": '否'
            }]
        });
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [{
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '货架名称',
                    labelWidth: 90,
                    id: 'secondShelvesName',
                }, {
                    fieldLabel: '是否有子类',
                    labelWidth: 90,
                    store: leafStore,
                    name: 'leaf',
                    allowBlank: false,
                    xtype: 'combo',
                    editable: false,
                    queryMode: 'local',
                    triggerAction: 'all',
                    displayField: 'leaf',
                    valueField: 'value',
                    allowBlank: false,
                    id: 'secondShelvesLeaf'
                }

            ],
            buttons: [{
                text: 'Save',
                itemId: 'addShelvesWin'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('shopsecondshelfadd')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }


});