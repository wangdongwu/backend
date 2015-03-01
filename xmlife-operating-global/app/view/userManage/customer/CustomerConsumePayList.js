Ext.define('XMLifeOperating.view.userManage.customer.CustomerConsumePayList', {
    extend: 'Ext.grid.Panel',
    id: 'customerConsumePayList',
    xtype: 'customerConsumePayList',
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
        renderer: XMLifeOperating.ViewUtil.dateRenderer
    }, {
        text: '类型',
        dataIndex: 'displayType',
        width: 120,
        renderer: function(value) {
            return {
                'DEAL': '消费',
                'DEAL_REFUND': '消费退款',
                'ONLINE_CHARGE': '在线充值',
                'CARD_CHARGE': '实体卡充值',
                'CHARGE_REFUND': '充值退款',
                'MANUAL_REDUCE': '余额减扣'
            }[value];
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
        store: 'CustomerUserCashflow',
        dock: 'bottom',
        displayInfo: true
    }]
});
