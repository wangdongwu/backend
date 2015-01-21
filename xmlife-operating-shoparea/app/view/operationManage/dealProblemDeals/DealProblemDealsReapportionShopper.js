Ext.define('XMLifeOperating.view.operationManage.dealProblemDeals.DealProblemDealsReapportionShopper', {
    extend: 'Ext.window.Window',
    xtype: 'reapportionDealTasksShopper',
    closeAction: 'hide',
    modal: true,
    width: 520,
    maxHeight: 500,
    autoScroll: true,
    resizable: false,
    layout: 'fit',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            title: '重新分配买手',
            layout: 'anchor',
            bodyPadding: 5,
            border: false,

            defaults: {
                anchor: '100%'
            },

            items: [{
                name: 'reapportionShoppers',
                store: 'SuperShopper',
                fieldLabel: '重新分配买手',
                xtype: 'gridpanel',
                itemId: 'reapportionShoppers',
                columns: [{
                    text: '买手姓名',
                    dataIndex: 'name'
                }, {
                    text: '联系电话',
                    dataIndex: 'phone'
                }, {
                    text: '店铺',
                    dataIndex: 'shopName',
                    sortable: false
                }, {
                    text: '当值',
                    dataIndex: 'online',
                    width: 40,
                    renderer: function(value) {
                        return value ? '是' : '否';
                    }
                }, {
                    text: '当前订单数',
                    align: 'center',
                    dataIndex: 'activeTaskNum'
                }, {
                    text: '操作',
                    sortable: false,
                    align: 'center',
                    width: 56,
                    itemId: 'putReapportionShopper',
                    renderer: function(value, metadata, model) {
                        return model.get('online') ? '<a href="javascript:;">分单</a>' : '分单';
                    }
                }, ],
            }, ],
        }];

        this.callParent(arguments);
    }
});
