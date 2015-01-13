Ext.define('XMLifeOperating.view.damagedGoodsManage.DamagedGoodsLostWin', {
    extend: 'Ext.window.Window',
    xtype: 'damagedGoodsLostWin',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],

    closeAction: 'hide',
    modal: true,
    width: 350,
    height: 250,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [{
                xtype: 'displayfield',
                fieldLabel: '商品名称',
                name: 'productName',
                labelWidth: 80
            }, {
                xtype: 'numberfield',
                itemId: 'lostNum',
                name: 'loseCount',
                fieldLabel: '丢失数量',
                labelWidth: 80,
                labelAlign: 'left',
                emptyText: '请输入丢失数量',
                width: 140,
                minValue: 0,
                maxValue: 1000,
                allowBlank: false
            }],
            buttons: [{
                text: '确认',
                itemId: 'saveBtn'
            }, {
                text: '取消',
                handler: function() {
                    //关闭窗口
                    this.up('window').close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
