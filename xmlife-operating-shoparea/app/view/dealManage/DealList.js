Ext.define('XMLifeOperating.view.dealManage.DealList', {
    extend: 'XMLifeOperating.view.general.CommonDealList',
    xtype: 'dealList',
    title: '订单管理',
    store: 'Deal',
    id: 'dealList',
    tbar: [{
            xtype: 'combobox',
            name: 'shopArea',
            itemId: 'shopArea',
            store: 'ShopArea',
            emptyText: '请选择中心',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        },
        '查询范围', {
            xtype: 'datefield',
            name: 'beginTime',
            emptyText: '开始时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 1);
                date.setDate(1);
                return date;
            })(),
            maxValue: new Date(),
            value: (function() {
                var date = new Date();
                date.setDate(date.getDate() - 6);
                return date;
            })(),
            format: 'Y-m-d'
        },
        '到', {
            xtype: 'datefield',
            name: 'endTime',
            emptyText: '结束时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 1);
                date.setDate(1);
                return date;
            })(),
            maxValue: new Date(),
            value: new Date(),
            format: 'Y-m-d'
        }, {
            xtype: 'button',
            itemId: 'getDealListByDate',
            text: '查询'
        }, {
            xtype: 'button',
            itemId: 'productInvoice',
            text: '导出商品对货单',
            hidden: true
        }, {
            xtype: 'button',
            itemId: 'paymentInvoice',
            text: '导出支付对账单',
            hidden: true
        }, {
            xtype: 'button',
            itemId: 'deallistInvoice',
            text: '导出订单',
            hidden: true
        },
        /*{
            xtype: 'button',
            itemId: 'checkUnallocatedOrder',
            text: '查看未分配订单',
        },*/
        /*        {
                    xtype: 'button',
                    itemId: 'refresh',
                    text: '刷新'
                },*/
        '->', {
            xtype: 'textfield',
            emptyText: '输入搜索号码...',
            name: 'keyword',
            itemId: 'keyword',
            fieldLabel: '手机/订单号'
        }, {
            xtype: 'button',
            itemId: 'dealSearch',
            text: '搜索'
        }, {
            xtype: 'combobox',
            name: 'status',
            itemId: 'statusSearch',
            store: 'DealStatus',
            emptyText: '状态',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value'
        }
    ],
    bbar: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetool',
        store: 'Deal',
        displayInfo: true,
        style: 'border:none'
    }],
    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopArea');
            combo.setValue(XMLifeOperating.generic.Global.current_operating);
            combo.fireEvent('select', combo);
        }
    }

}, function() {
    // this是指向类本身
    // 修改本类的columns，但是不影响父类
    var needClone = !this.prototype.hasOwnProperty('columns'),
        columns = this.prototype.columns;

    columns = needClone ? Ext.clone(columns) : columns;

    var items = columns.items;
    // 添加本类特定的列。
    items.push({
        text: '',
        itemId: 'toproblemdeal',
        menuDisabled: true,
        renderer: function(value, metadata, model) {
            var status = model.get('status');
            return (status == 7 || status == 4 || status == 6) ?
                '转问题单' : '<a href="javascript:;">转问题单</a>';
        }
    }, {
        text: '',
        itemId: 'cancalDealId',
        menuDisabled: true,
        renderer: function(value, metadata, model) {
            var status = model.get('status');
            return (status != 20 && status != 31) ? '取消订单' : '<a href="javascript:;">取消订单</a>';
        }
    });

    this.prototype.columns = columns;
});
