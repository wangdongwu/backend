/*
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.sProductManage.SShopProductEdit', {
    extend: 'Ext.window.Window',
    xtype: 'sShopProductEdit',
    itemId:'sShopProductEdit',
    closeAction: 'hide',
    modal: true,
    width: 450,
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
            frame: true,
            align: 'center',
            items: [{
                xtype: 'numberfield',
                name: 'purchasePrice',
                fieldLabel: '进价',
                labelWidth: 90,
                step: 0.1,
                allowBlank: false,
            }, {
                xtype: 'numberfield',
                name: 'facePrice',
                fieldLabel: '原价',
                labelWidth: 90,
                step: 0.1,
                allowBlank: false
            }, {
                xtype: 'numberfield',
                name: 'discountPrice',
                fieldLabel: '折扣价',
                allowBlank: true,
                step: 0.1,
                labelWidth: 90
            }],
            buttons: [{
                text: 'Save',
                itemId: 'saveEditBtn'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('sShopProductEdit')[0].close();
                }
            }]
        }]
        this.callParent(arguments);

    }


});