Ext.define('XMLifeOperating.view.userManage.customer.CustomerCouponList', {
    extend: 'Ext.grid.Panel',
    id: 'customerCouponList',
    xtype: 'customerCouponList',
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
    store: 'CustomerUserCoupon',
    forceFit: true,
    layout: 'fit',
    closable: true,
    columns: [{
            xtype: 'rownumberer'
    },{
        text: '类型',
        dataIndex: 'type',
        width: 80,
        sortable: false,

        itemId: 'dealDetail',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return '<a>' + value + '</a>'
        }
    }, {
        text: '名称',
        dataIndex: 'name',
        width: 60,
        sortable: false,
    }, {
        text: '开始时间',
        dataIndex: 'startTime',
        width: 80,
        sortable: false,
        renderer: function(value) {
            var newTime = new Date(value);
            newDate = newTime.getFullYear() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getDate();
            return newDate;
        }
    }, {
        text: '结束时间',
        dataIndex: 'endTime',
        width: 80,
        sortable: false,
        renderer: function(value) {
            var newTime = new Date(value);
            newDate = newTime.getFullYear() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getDate();
            return newDate;
        }
    }, {
        text: '使用范围',
        dataIndex: 'desc',
        width: 80,
        sortable: false
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'CustomerUserCoupon',
        dock: 'bottom',
        displayInfo: true
    }]
});
