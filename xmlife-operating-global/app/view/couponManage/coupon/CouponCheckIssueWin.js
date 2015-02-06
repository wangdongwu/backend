Ext.define('XMLifeOperating.view.couponManage.coupon.CouponCheckIssueWin', {
    extend: 'Ext.window.Window',
    xtype: 'couponCheckIssueWin',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],

    closeAction: 'hide',
    modal: true,
    width: 350,
    height: 250,
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
                xtype: 'displayfield',
                fieldLabel: '名称',
                name: 'name'
            }, {
                xtype: 'displayfield',
                fieldLabel: '发放数量',
                name: 'sendNum',
                value: ''
            }, {
                xtype: 'displayfield',
                fieldLabel: '使用数量',
                name: 'usedNum',
                value: ''
            }],
            buttons: [{
                text: 'Save',
                itemId: 'saveBtn'
            }, {
                text: 'Cancel',
                handler: function() {
                    //关闭窗口
                    this.up('window').close();
                }
            }]
        }]
        this.callParent(arguments);
    }
});
