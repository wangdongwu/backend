Ext.define('XMLifeOperating.view.centralPointManage.delivererZone.LineDelivererAdd', {
    extend: 'Ext.window.Window',
    xtype: 'lineDelivererAdd',

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

            defaults: {
                anchor: '100%'
            },
            items: [{
                    xtype: 'hidden',
                    name: 'id',
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
                    items: [

                        {
                            layout: 'column',
                            xtype: 'fieldset',
                            border: false,
                            padding: 0,
                            items: [{
                                xtype: 'textfield',
                                fieldLabel: '配送员名字',
                                labelWidth: 90,
                                labelAlign: 'left',
                                name: 'keywordCourier',
                                itemId: 'keywordCourier',
                            }, {
                                xtype: 'button',
                                text: '搜索',
                                itemId: 'reseachCourier'

                            }]

                        },
                    ]
                }, {
                    name: 'searchCourierIds',
                    // store:'ResidentalDistrict',
                    allowBlank: false,
                    fieldLabel: '配送员',
                    xtype: 'gridpanel',
                    itemId: 'searchCourierId',
                    height: 150,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: 'SIMPLE'
                    }),
                    columns: [{
                        text: 'uid',
                        dataIndex: 'uid'
                    }, {
                        text: '配送员姓名',
                        dataIndex: 'name'
                    }, {
                        text: '手机号',
                        dataIndex: 'phone'
                    }],
                }, {
                    name: 'oldCourierIds',
                    store: 'Deliverer',
                    fieldLabel: '已绑定配送员',
                    xtype: 'gridpanel',
                    itemId: 'oldCourierId',
                    height: 150,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: "SIMPLE"
                    }),
                    columns: [{
                            text: 'uid',
                            dataIndex: 'uid'
                        }, {
                            text: '配送员姓名',
                            dataIndex: 'name'
                        }, {
                            text: '手机号',
                            dataIndex: 'phone'
                        },

                    ],
                }

            ],
            buttons: [{
                text: 'Save',
                itemId: 'save-bindLineWithCourier'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('lineDelivererAdd')[0].close();
                }
            }]
        }],
        this.callParent(arguments);

    }


});