var consumePayCount = 1;
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
    }, {
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
        renderer: function(value) {
            return value / 100;
        }
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        id: 'paging',
        itemId: 'pagetoll',
        store: 'CustomerUserCashflow',
        dock: 'bottom',
        displayInfo: true,
        hidden: true
    }, {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            /*{
                        id: 'first',
                        text: '第一页',
                        handler: function() {
                            var toolbar = Ext.getCmp('paging');
                            toolbar.moveFirst();
                            var currentpage = toolbar.store.currentPage;
                        }
                    },*/
            {
                id: 'up',
                text: '上一页',
                handler: function() {
                    var toolbar = Ext.getCmp('paging');
                    consumePayCount--;
                    var start = consumePayCount * 25;
                    toolbar.store.reload({
                        start: start,
                        limit: 25
                    });
                    payMark = 'prev';
                    if (consumePayCount == 0) {
                        consumePayCount = 1;
                    }
                }
            }, {
                text: '下一页',
                handler: function() {
                    var toolbar = Ext.getCmp('paging'),
                        pageSize = toolbar.store.getCount();
                    if (pageSize < 25) {
                        return;
                    }
                    var start = consumePayCount * 25;
                    consumePayCount++;
                    toolbar.store.reload({
                        start: start,
                        limit: 25
                    });
                }
            }
            /*, {
                        id: 'last',
                        text: '最后一页',
                        handler: function() {
                            var toolbar = Ext.getCmp('paging');
                            toolbar.moveLast();
                        }
                    }, {
                        text: '刷新',
                        handler: function() {
                            var toolbar = Ext.getCmp('paging');
                            toolbar.doRefresh();
                        }
                    }*/
        ]
    }]
});
