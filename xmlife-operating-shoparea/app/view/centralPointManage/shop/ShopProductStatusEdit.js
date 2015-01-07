/*
 * @author:ljlong
 * @time:2015-1-5
 */
Ext.define('XMLifeOperating.view.centralPointManage.shop.ShopProductStatusEdit', {
    extend: 'Ext.window.Window',
    xtype: 'shopProductStatusEdit',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.selection.CheckboxModel',
    ],
    closeAction: 'hide',
    modal: true,
    width: 220,
    resizable: false,
    layout: 'fit',
    bodyStyle: 'text-align:center;border-style: none;',
    initComponent: function() {
        var me = this;
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        var combostore = Ext.create('Ext.data.Store', {
            fields: ['value', 'name', 'itemId', 'disabled'],
            data: [{
                'value': 0,
                'name': '上架',
                'itemId': 'onCarriage',
                'disabled': false
            }, {
                'value': 1,
                'name': '雪藏',
                'itemId': 'frozen',
                'disabled': false
            }, {
                'value': 2,
                'name': '废弃',
                'itemId': 'waste',
                'disabled': false
            }, {
                'value': 3,
                'name': '下架',
                'itemId': 'underCarriage',
                'disabled': false
            }]
        });
        Ext.applyIf(me, {
            items: [{
                xtype: 'form',
                frame: true,
                items: [{
                    xtype: 'textfield',
                    name: 'id',
                    editable: false,
                    hidden: true
                }, {
                    xtype: 'combo',
                    itemId: 'status',
                    name: 'status',
                    store: combostore,
                    queryMode: 'local',
                    fieldLabel: '状态选择',
                    labelStyle:'font-weight: bold;',
                    valueField: 'value',
                    displayField: 'name',
                    width: 180,
                    labelWidth: 60,
                    editable: false,
                    tpl: Ext.create('Ext.XTemplate', '<ul class="x-list-plain">',
                        '<tpl for=".">',
                        '<li class="x-boundlist-item"',
                        '<tpl if="disabled == true">',
                        'style="color:lightgray;background-color:whitesmoke;"',
                        '</tpl>',
                        '>{name}</li>',
                        '</tpl>', '</ul>'),
                    listeners: {
                        change: function(combo, newValue, oldValue, e) {
                            var me = this;
                            if (newValue == 0 || newValue == 2) {
                                combo.nextSibling().setDisabled(true);
                            } else {
                                combo.nextSibling().setDisabled(false);
                            }
                        },
                        beforeselect: function(combo, record, index) {
                            if (record.get('disabled')) {
                                return false
                            } else {
                                return true
                            }
                        }
                    }
                }, {
                    xtype: 'checkboxgroup',
                    fieldLabel: '修改原因（必选）',
                    labelAlign: 'top',
                    labelSeparator: '',
                    labelStyle:'width:104px;font-weight: bold;',
                    allowBlank: false,
                    afterLabelTextTpl: required,
                    vertical: true,
                    columns: 2,
                    items: [{
                        boxLabel: '商品缺货',
                        name: 'stchangereason',
                        inputValue: 1
                    }, {
                        boxLabel: '图片错误',
                        name: 'stchangereason',
                        inputValue: 10
                    }, {
                        boxLabel: '价格错误',
                        name: 'stchangereason',
                        inputValue: 100
                    }, {
                        boxLabel: '规格错误',
                        name: 'stchangereason',
                        inputValue: 1000
                    }, {
                        boxLabel: '商品名错误',
                        name: 'stchangereason',
                        inputValue: 10000
                    }, {
                        boxLabel: '条形码错误',
                        name: 'stchangereason',
                        inputValue: 100000
                    }]
                }],
                buttonAlign: 'center',
                buttons: [{
                    text: '提交',
                    itemId: 'saveStatusChange'
                }]
            }]
        });
        this.callParent(arguments);
    }
})
