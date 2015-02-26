Ext.define('XMLifeOperating.view.centralPointManage.homePage.VersionEnable', {
    extend: 'Ext.window.Window',
    xtype: 'versionEnable',
    title: '版本启用',
    closeAction: 'hide',
    width: 300,
    autoScroll: false,

    items: [{
        xtype: 'form',
        bodyPadding: 15,
        defaults: {
            margin: '5 0'
        },
        items: [{
            xtype: 'radiogroup',
            layout: 'column',
            defaults: {
                margin: '0 15 0 30'
            },
            items: [{
                boxLabel: '立即启用',
                name: 'type',
                inputValue: 0,
                checked: true
            }, {
                boxLabel: '定时启用',
                name: 'type',
                itemId: 'timeEnable',
                inputValue: 1
            }]
        }, {
            xtype: 'datefield',
            name: 'startTime',
            fieldLabel: '启用时间',
            labelAlign: 'right',
            labelWidth: 65,
            width: '95%',
            format: 'Y-m-d H:i:s',
            minValue: new Date(),
            editable: true,
            emptyText: '请选择...',
            allowBlank: false,
            hidden: true
        }, {
            xtype: 'datefield',
            name: 'endTime',
            fieldLabel: '结束时间',
            labelAlign: 'right',
            labelWidth: 65,
            width: '95%',
            format: 'Y-m-d H:i:s',
            minValue: new Date(),
            editable: true,
            emptyText: '请选择...',
            allowBlank: false,
            hidden: true
        }],
        buttons: [{
            xtype: 'button',
            text: '确定',
            itemId: 'save'
        }, {
            xtype: 'button',
            text: '取消',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});
