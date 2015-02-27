var consumePayCount = 1,
    consumePayMark = '',
    isFirstConsumePay = false;
Ext.define('XMLifeOperating.view.userManage.customer.CustomerConsumePayList', {
    extend: 'Ext.grid.Panel',
    id: 'customerConsumePayList',
    xtype: 'customerConsumePayList',
    statics: {
        typeDescs: {
            'DEAL': '消费',
            'DEAL_REFUND': '消费退款',
            'ONLINE_CHARGE': '在线充值',
            'CARD_CHARGE': '实体卡充值',
            'CHARGE_REFUND': '充值退款',
            'MANUAL_REDUCE': '余额减扣'
        }
    },
    store: 'CustomerUserCashflow',
    layout: 'fit',
    closable: true,
    columns: [{
        xtype: 'rownumberer',
        width: 30,
        align: 'center'
    }, {
        text: '日期',
        dataIndex: 'date',
        width: 80,
        renderer: function(value) {
            return Ext.util.Format.date(new Date(value), "Y.m.d");
        }
    }, {
        text: '类型',
        dataIndex: 'displayType',
        width: 120,
        renderer: function(value) {
            return this.self.typeDescs[value];
        }
    }, {
        text: '详情',
        dataIndex: 'content',
        width: 300
    }, {
        text: '金额',
        dataIndex: 'amount',
        width: 80,
        renderer: function(value) {
            return value / 100;
        }
    }, {
        text: '操作',
        width: 80,
        itemId: 'refund',
        renderer: function(value, md, record) {
            var type = record.get('displayType');
            return type === 'ONLINE_CHARGE' ? '<input type="button" value="退款" />' : '';
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
        items: [{
            id: 'up',
            text: '上一页',
            handler: function() {
                var toolbar = Ext.getCmp('paging');
                if (consumePayMark == 'next') {
                    consumePayCount--;
                }
                consumePayCount--;
                var start = consumePayCount * 25;
                toolbar.store.reload({
                    start: start,
                    limit: 25
                });
                if (consumePayCount == 0) {
                    consumePayCount = 1;
                    isFirstConsumePay = true;
                }
                consumePayMark = 'prev';
            }
        }, {
            text: '下一页',
            handler: function() {
                var toolbar = Ext.getCmp('paging'),
                    pageSize = toolbar.store.getCount();
                if (pageSize < 25) {
                    return;
                }
                if (consumePayMark == 'prev') {
                    if (isFirstConsumePay) {
                        consumePayCount = 1;
                        isFirstConsumePay = false;
                    } else {
                        consumePayCount++;
                    }
                }
                var start = consumePayCount * 25;
                consumePayCount++;
                toolbar.store.reload({
                    start: start,
                    limit: 25
                });
                consumePayMark = 'next';
            }
        }]
    }]
});
