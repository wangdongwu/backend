Ext.define('XMLifeOperating.view.userManage.customer.CustomerConsumePayList', {
    extend: 'Ext.grid.Panel',
    id: 'customerConsumePayList',
    xtype: 'customerConsumePayList',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden',
    ],
    tbar: [
        /*{
                 xtype: 'button',
                    text: '返回',
                    itemId: 'returnCustomerList'
            }*/
    ],
    store: 'CustomerUserCashflow',
    forceFit: true,
    layout: 'fit',
    closable: true,
    columns: [{
            xtype: 'rownumberer'
    },{
        text: '日期',
        dataIndex: 'date',
        width: 80,
        sortable: false,
        renderer: function(value) {
            var newTime = new Date(value);
            newDate = newTime.getFullYear() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getDate();
            return newDate;
        }
    }, {
        text: '详情',
        dataIndex: 'content',
        width: 60,
    }, {
        text: '金额',
        dataIndex: 'amount',
        width: 80,
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'CustomerUserCashflow',
        dock: 'bottom',
        displayInfo: true
    }]
});
