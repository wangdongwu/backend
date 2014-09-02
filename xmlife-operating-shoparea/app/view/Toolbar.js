/**
 * @class SimpleTasks.view.Toolbar
 * @extends Ext.toolbar.Toolbar
 */
Ext.define('XMLifeOperating.view.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'headerToolbar',
    requires: [
        'Ext.form.Label',
        'Ext.form.field.ComboBox'
    ],
    items: [
        {
            xtype: 'label',
            itemId: 'txtModuleTitle',
            margin: '0 20 0 20'
        },
        '->',
        {
            xtype: 'combo',
            itemId: 'cmbGlobalCity',
            store: 'AssignedCity',
            fieldLabel: '城市',
            autoSelect: true,
            labelWidth: 30,
            maxWitdh: 60,
            queryMode: 'local',
            editable: false,
            mode: 'local',
            triggerAction: 'all',
            displayField: 'name',
            valueField: 'code',
            value: XMLifeOperating.generic.Global.currentCity,
            tooltip: 'Choose current city'
        },
        {
            xtype: 'combobox',
            itemId: 'cmbGlobalCenter',
            store: 'ShopArea',
            fieldLabel: '中心',
            labelWidth: 30,
            editable: false,
            maxWitdh: 60,
            displayField: 'name',
            valueField: 'id',
            tooltip: 'Choose current center',
            queryMode:'local',
            // hidden:(XMLifeOperating.generic.Global.operating_type != 'center')
        },
        '-',
        {
            text: 'admin',
            itemId: 'txtUserName',
            margin: '0 10 0 10',
            menu: {
                items: [
                    {
                        text: 'Change Password'
                        // iconCls: 'tasks-new'
                    },
                    '-',
                    {
                        text: 'Sign Out',
                        itemId: 'btnSignOut'
                        // iconCls: 'tasks-new-list'
                    },
                ]
            }
        },
    ]
});


