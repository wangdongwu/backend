/*
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductAdd', {
    extend: 'Ext.window.Window',
    xtype: 'shopproductadd',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel',
    ],
    closeAction: 'hide',
    modal: true,
    width: 500,
    height: 650,
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
            bodyBorder: false,
            items: [{
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
                                fieldLabel: '商品模板',
                                labelWidth: 90,
                                labelAlign: 'left',
                                name: 'keywordProductTemplate',
                                itemId: 'keywordProductTemplate',
                            }, {
                                xtype: 'button',
                                text: '搜索',
                                itemId: 'reseachProductTemplate'

                            }]

                        }
                    ]
                }, {
                    name: 'productTemplateId',
                    store: 'ProductTemplate',
                    allowBlank: false,
                    fieldLabel: '商品模板',
                    xtype: 'gridpanel',
                    itemId: 'productTemplateId',
                    height: 150,
                    selModel: Ext.create('Ext.selection.CheckboxModel', {
                        mode: "SINGLE",
                        allowDeselect: true
                    }),
                    columns: [{
                        text: 'id',
                        dataIndex: 'id'
                    }, {
                        text: '商品名称',
                        dataIndex: 'name'
                    }]
                }, {
                    xtype: 'textfield',
                    name: 'purchasePrice',
                    fieldLabel: '进价',
                    labelWidth: 90,
                    allowBlank: false,
                    // regex: /^([0-9]{2}\.[0-9]{2})$/,
                    // regexText: '请输入如下格式111.1,11.11,1.11,只允许除了点的4位数字',
                }, {
                    xtype: 'textfield',
                    name: 'facePrice',
                    fieldLabel: '原价',
                    labelWidth: 90,
                    allowBlank: false,
                    /*regex: /^[1-9][0-9]{2}\.[0-9]|[0-9]{1-2}\.[0-9]{1-2}|[0-9]{4}$/,
                    regexText: '请输入如下格式111.1,11.11,1.11,只允许除了点的4位数字',*/
                },

                {
                    xtype: 'textfield',
                    name: 'discountPrice',
                    fieldLabel: '折扣价',
                    allowBlank: false,
                    labelWidth: 90,
                    /*regex: /^[1-9][0-9]{2}\.[0-9]|[0-9]{1-2}\.[0-9]{1-2}|[0-9]{4}$/,
                    regexText: '请输入如下格式111.1,11.11,1.11,只允许除了点的4位数字',*/
                }, {
                    xtype: 'fieldset',
                    border: false,
                    padding: 0,
                    itemId: 'limitTypeFieldset',
                    items: [

                        {
                            layout: 'column',
                            xtype: 'fieldset',
                            border: false,
                            padding: 0,
                            items: [{
                                xtype: 'radio',

                                labelAlign: 'right',
                                name: 'limitType',
                                inputValue: 1,
                                itemId: 'limitType1',

                            }, {
                                xtype: 'textfield',
                                name: 'dayLimitCount',
                                fieldLabel: '每日限购数量',

                                labelWidth: 90,
                                labelAlign: 'left',
                            }, ]

                        }, {
                            layout: 'column',
                            xtype: 'fieldset',
                            border: false,
                            padding: 0,
                            items: [{
                                xtype: 'radio',
                                labelAlign: 'right',
                                name: 'limitType',
                                inputValue: 2,
                                itemId: 'limitType2',
                            }, {
                                xtype: 'textfield',
                                name: 'totalLimitCount',
                                fieldLabel: '累计限购数量',
                                labelWidth: 90,
                                labelAlign: 'left',
                            }]
                        }
                    ]
                }
            ],
            buttons: [{
                text: 'Save',
                itemId: 'addShelvesGoodsWin'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('shopproductadd')[0].close();
                }
            }]
        }]
        this.callParent(arguments);

    }


});