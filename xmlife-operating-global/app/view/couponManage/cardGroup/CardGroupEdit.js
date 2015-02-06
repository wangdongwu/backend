Ext.define('XMLifeOperating.view.couponManage.cardGroup.CardGroupEdit', {
    extend: 'Ext.window.Window',
    xtype: 'cardGroupEdit',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    closeAction: 'hide',
    modal: true,
    width: 370,
    height: 450,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        /*var  genderStore= Ext.create('Ext.data.Store', {
            fields: ['value','gender'],
            data : [
                {"value": 0, "gender": '男'},
                {"value": 1, "gender": '女'}
            ],
        });*/
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            id: 'cardGroupEditId',
            items: [{
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: '卡包名称',
                    labelWidth: 90,
                    allowBlank: false,
                    labelAlign: 'right'

                }, {
                    xtype: 'container',
                    layout: 'vbox',
                    id: 'carIdList',
                    padding: 0,
                    border: false,
                    margin: '0',
                    maxHeight: 200,
                    autoScroll: true,
                    style: 'overflow-x:hidden;',
                    scrollable: {
                        direction: 'vertical',
                        directionLock: true
                    },
                    items: [{
                        xtype: 'textfield',
                        name: 'coupons',
                        fieldLabel: '输入优惠券ID',
                        labelAlign: 'right',
                        itemId: 'buyerAvater',
                        labelWidth: 90,
                        readOnly: false,
                        allowBlank: false,
                        labelAlign: 'right'
                    }]
                }, {
                    xtype: 'button',
                    text: '添加',
                    scale: "small",
                    margin: '0 0 10px 100px',
                    labelAlign: 'right',
                    handler: function() {
                        var toolbar = Ext.getCmp('carIdList');
                        toolbar.insert(2, {
                            xtype: 'fieldset',
                            layout: 'column',
                            padding: 0,
                            border: false,
                            height: 25,
                            margin: '0',
                            items: [{
                                xtype: 'textfield',
                                name: 'coupons',
                                fieldLabel: '输入优惠券ID',
                                labelAlign: 'right',
                                labelWidth: 90,
                                readOnly: false,
                                allowBlank: false,
                            }, {
                                xtype: 'button',
                                text: '删除',
                                margin: '0 0 0 10px',
                                handler: function(grid) {
                                    var toolbar = Ext.getCmp('carIdList');
                                    toolbar.remove(this.ownerCt);
                                }
                            }, ]
                        });
                    }
                }, {
                    xtype: 'fieldset',
                    layout: 'column',
                    padding: 0,
                    border: false,
                    items: [{
                        xtype: 'textfield',
                        name: 'value',
                        fieldLabel: '卡包价值',
                        itemId: 'buyerAvater',
                        labelAlign: 'right',
                        labelWidth: 90,
                        readOnly: false,
                        allowBlank: false,
                    }, ]
                }
            ],
            buttons: [{
                text: 'Save',
                itemId: 'save-cardGroup-btn'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    Ext.ComponentQuery.query('cardGroupEdit')[0].close();
                }
            }]
        }]

        this.callParent(arguments);

    }


});