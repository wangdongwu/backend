Ext.define('XMLifeOperating.view.centralPointManage.capacity.Capacity', {
	extend: 'Ext.form.Panel',
    id: 'Capacity',
    alias: 'widget.Capacity',
	closable: false,
	xtype: 'capacity',
	title: '中心运力配置',
    store: 'Capacity',
    itemId: 'capacity',

    tbar: [{
        xtype: 'fieldcontainer',
        fieldLabel: '当前运力',
        labelWidth: 65,
        style: 'line-height:22px;',
        margin: 5,
        id: 'dayType',
        itemId: 'feedbackRadiofield',
        layout: 'hbox',
        defaults: {
            margin: '0 2'
        },
        items: [{
            xtype: 'label',
            text: '每小时配送'
        }, {
            xtype: 'textfield',
            itemId: 'capacityLimit',
            width: 100,
            readOnly: true
        }, {
            xtype: 'label',
            width: 20,
            text: '单'
        }, {
            xtype: 'button',
            text: '修改',
            width: 60,
            itemId: 'modifyCapacity'
        }]
    }]

});