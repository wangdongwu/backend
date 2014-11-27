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
    cls: 'topHeadToolbar',
    items: [{
            xtype: 'image',
            src: './resources/images/logo.png',
            itemId: 'myTestImg',
            style: {
                marginLeft: '10px',
                height: '33px'
            }
        }, {
            xtype: 'label',
            itemId: 'txtModuleTitle',
            margin: '0 20 0 20'
        }, {
            xtype: 'displayfield',
            fieldLabel: 'version',
            itemId: 'versionNum',
            labelWidth: 60,
            value: ''
        },
        '->',
        /*        {
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
                },*/
        {
            xtype: 'combobox',
            itemId: 'cmbGlobalCenter',
            store: 'ShopArea',
            fieldLabel: '中心',
            labelWidth: 40,
            editable: false,
            maxWitdh: 60,
            displayField: 'name',
            valueField: 'id',
            tooltip: 'Choose current center',
            queryMode: 'local',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            xtype: 'label',
            text: '中心',
            itemId: 'txtShopAreaName',
            margin: '0 10 0 10'
        },
        '-', {
            text: '未登录',
            itemId: 'txtUserName',
            margin: '0 10 0 10',
            menu: {
                items: [{
                        text: '修改密码',
                        itemId: 'editAdmin'
                            // iconCls: 'tasks-new'
                    },
                    '-', {
                        text: '注销',
                        itemId: 'btnSignOut'
                            // iconCls: 'tasks-new-list'
                    },
                ]
            }
        },
    ],
    listeners: {
        added: function(view) {
            var username = localStorage.getItem('username');
            var areaName = localStorage.getItem('areaName')
            if (username) {
                view.down('#txtUserName').setText(username);
            }
            if (areaName) {
                view.down('#txtShopAreaName').setText(areaName);
            }
            Ext.Ajax.request({
                url: './version.json',
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    view.down('#versionNum').setValue(obj.buildNumber);

                },
                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        }
    }
});
