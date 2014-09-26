Ext.define('XMLifeOperating.view.centralPointManage.delivererZone.ResidentalDistrictEdit', {
    extend: 'Ext.window.Window',
    xtype: 'residentalDistrictEdit',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel'
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 550,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            frame: true,
            style: 'border:none',
            defaults: {
                anchor: '100%'
            },
            items: [{
                    xtype: 'hidden',
                    name: 'id',
                    itemId: 'shopId',
                    fieldLabel: 'shopId',
                    labelWidth: 90,
                    allowBlank: false,
                }, {
                    xtype: 'displayfield',
                    name: 'name',
                    fieldLabel: '线路名称',
                    labelWidth: 90,
                    allowBlank: false,
                    labelAlign: 'center'
                }, {
                    xtype: 'fieldset',
                    labelWidth: 90,
                    border: false,
                    padding: 0,
                    items: [{
                        layout: 'column',
                        xtype: 'fieldset',
                        border: false,
                        padding: 0,
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: '小区名称',
                            labelWidth: 90,
                            labelAlign: 'left',
                            name: 'keywordCommunity',
                            itemId: 'keywordCommunity',
                        }, {
                            xtype: 'button',
                            text: '搜索',
                            itemId: 'reseachCommunity'
                        }]
                    }]
                }, {
                    name: 'searchCommunityIds',
                    allowBlank: false,
                    fieldLabel: '小区',
                    xtype: 'gridpanel',
                    itemId: 'searchCommunityId',
                    height: 180,
                    store: Ext.create('XMLifeOperating.store.ResidentalDistrict'),
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: "SIMPLE",
                        checkOnly:true
                    }),
                    columns: [{
                        xtype: 'rownumberer'
                    }, {
                        text: 'id',
                        dataIndex: 'id'
                    }, {
                        text: '小区名称',
                        dataIndex: 'name'
                    }]
                    // ,
                    // bbar: [{
                    //     xtype: 'pagingtoolbar',
                    //     itemId: 'pagetool_search',
                    //     displayInfo: true,
                    //     style: 'border:none'
                    // }]
                }, {
                    name: 'oldCommunityIds',
                    fieldLabel: '已绑定小区',
                    xtype: 'gridpanel',
                    itemId: 'oldCommunityId',
                    height: 180,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: "SIMPLE",
                        checkOnly:true
                    }),
                    columns: [{
                        xtype: 'rownumberer',
                        resizable:true
                    }, {
                        text: 'id',
                        dataIndex: 'id'
                    }, {
                        text: '已绑定小区名称',
                        dataIndex: 'name'
                    }]
                    // ,
                    // bbar: [{
                    //     xtype: 'pagingtoolbar',
                    //     itemId: 'pagetool_has',
                    //     displayInfo: true,
                    //     style: 'border:none'
                    // }]
                }

            ],
            buttons: [{
                text: 'Save',
                itemId: 'save-bindLineWithCommunity'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('residentalDistrictEdit')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }


});