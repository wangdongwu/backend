/*
 * @class SimpleTasks.view.tasks.EditWindow
 * @extends Ext.window.Window
 */
Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductSearchEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopproductsearchedit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel',
    ],
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
                    xtype: 'textfield',
                    fieldLabel: '商品名称',
                    name: 'name',
                    labelWidth: 90,
                    border: false,
                    padding: 0,
                    readOnly: true
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
                    allowBlank: true,
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
                                fieldLabel: '每人当日限购数量',
                                labelWidth: 120,
                                labelAlign: 'left',
                                width: 180
                            }, {
                                xtype: 'textfield',
                                name: 'dayTodayLimitCount',
                                fieldLabel: '当日限购数量',
                                labelWidth: 110,
                                labelAlign: 'left',
                                width: 180
                            }]

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
                                fieldLabel: '每人累计限购数量',
                                labelWidth: 120,
                                labelAlign: 'left',
                                width: 180
                            }, {
                                xtype: 'textfield',
                                name: 'totalTodayLimitCount',
                                fieldLabel: '当日限购数量',
                                labelWidth: 110,
                                labelAlign: 'left',
                                width: 180
                            }]
                        }
                    ]
                }
            ],
            buttons: [{
                text: 'Save',
                itemId: 'editShelvesGoodsWin'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('shopproductsearchedit')[0].close();
                }
            }]
        }]
        this.callParent(arguments);

    }


});