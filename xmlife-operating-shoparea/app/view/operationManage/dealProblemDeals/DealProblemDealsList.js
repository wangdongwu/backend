Ext.define('XMLifeOperating.view.operationManage.dealProblemDeals.DealProblemDealsList', {
    extend: 'XMLifeOperating.view.general.CommonDealList',
    xtype: 'dealProblemDealsList',
    title: '问题订单管理',
    store: 'DealProblemDeals',
    id: 'dealProblemDealsList',
    tbar: [{
            xtype: 'combobox',
            name: 'shopArea',
            itemId: 'shopArea',
            store: 'ShopArea',
            emptyText: '请选择中心',
            margin: 10,
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {

            xtype: 'button',
            text: '刷新',
            itemId: 'update',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            xtype: 'button',
            itemId: 'refresh',
            text: '刷新'
        },
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
        }
    ],
    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
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
        text: '问题原因',
        dataIndex: 'problem',
        renderer: function(value) {
            return XMLifeOperating.controller.DealProblemDealsList.getProblemDesc(value);
        }
    }, {
        text: '',
        itemId: 'reapportion',
        menuDisabled: true,
        renderer: function() {
            return '<a href="javascript:;">重新分配</a>';
        }
    }, {
        text: '',
        itemId: 'cancellation',
        menuDisabled: true,
        renderer: function(value, metadata, model) {
            var status = model.get('status');
            return (status != 20 && status != 31) ? '取消订单' : '<a href="javascript:;">取消订单</a>';
        }
    });

    // 在买手列添加自动分配链接
    var shopperNameItem;

    Ext.Array.each(items, function(item) {
        if (item.dataIndex === 'superShopperName') {
            shopperNameItem = item;
            return false;
        }
    });

    shopperNameItem.renderer = function(v) {
        return v ? v : '<a href="javascript:;">自动分配</a>';
    };

    this.prototype.columns = columns;
});
