Ext.define('XMLifeOperating.view.couponManage.couponSend.CouponSendFeedbackWin', {
    extend: 'Ext.window.Window',
    xtype: 'couponSendFeedbackWin',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
        'Ext.form.FieldSet',
        'Ext.layout.container.Column',
        'Ext.draw.Text'
    ],
    closeAction: 'hide',
    modal: true,
    width: 450,
    height: 550,
    resizable: false,
    layout: 'fit',
    title: '反馈',
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            border: false,
            items: [{
                xtype: 'container',
                layout: 'column',
                style: 'margin-top:3px;margin-bottom:5px;',
                items: [{
                            xtype: 'displayfield',
                            fieldLabel: '发放人数',
                            name: 'totalUids',
                            value: ''
                        }, {
                            xtype: 'displayfield',
                            value: '人',
                            style: 'margin:1px 0 0 5px'
                        }]
            }, {
                xtype: 'container',
                layout: 'column',
                style: 'margin-top:3px;margin-bottom:5px;',

                items: [{
                            xtype: 'displayfield',
                            fieldLabel: '成功人数',
                            name: 'successUids',
                            value: ''
                        }, {
                            xtype: 'displayfield',
                            value: '人',
                            style: 'margin:1px 0 0 5px'
                        }]
            }, {
                xtype: 'container',
                layout: 'column',
                style: 'margin-top:3px;margin-bottom:5px;',
                items: [{
                            xtype: 'displayfield',
                            fieldLabel: '失败人数',
                            name: 'failUids',
                            value: ''
                        }, {
                            xtype: 'displayfield',
                            value: '人',
                            style: 'margin:1px 0 0 5px'
                        }]
            }, {
                allowBlank: false,
                fieldLabel: '反馈列表',
                xtype: 'gridpanel',
                itemId: 'gainCouponSendFeedbackList',
                height: 300,
                /*selModel: Ext.create('Ext.selection.CheckboxModel', {
                    mode: 'MULTI'
                }),*/
                columns: [{
                    xtype: 'rownumberer'
                },{
                    text: 'uid',
                    dataIndex: 'uid'
                }, {    
                    text: '失败原因',
                    dataIndex: 'directSendFailDetails',
                    width:200,
                    renderer: function (v) {
                        return v[0].errorDesc;
                    }
                }]
            }],
            buttons: [{
                text: 'Cancel',
                handler: function(button) {
                    button.up('window').close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
