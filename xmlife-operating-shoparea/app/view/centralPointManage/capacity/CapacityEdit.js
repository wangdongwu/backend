Ext.define('XMLifeOperating.view.centralPointManage.capacity.CapacityEdit', {
    extend: 'Ext.window.Window',
    xtype: 'capacityEdit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: '配置修改',
    width: 320,
    buttonAlign: 'center',
    autoScroll: false,
    items: [{
        xtype: 'form',
        layout: 'hbox',
        bodyPadding: 15,
        style: 'line-height:22px;',
        frame: true,
        itemId: 'capacityEditForm',
        items: [{
            xtype: 'numberfield',
            fieldLabel: '每小时配送',
            labelWidth: 70,
            name: 'capacityLimit',
            itemId: 'capacityLimit',
            minValue: 0,
            allowBlank: false
        },{
            xtype: 'label',
            text: '单',
            margin: '0 5'
        }],
        buttons: [{
            xtype: 'button',
            text: '保存',
            itemId: 'saveCapacity'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                Ext.ComponentQuery.query('capacityEdit')[0].close();
            }
        }]
    }]
});