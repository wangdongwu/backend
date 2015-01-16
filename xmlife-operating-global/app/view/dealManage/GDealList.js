Ext.define('XMLifeOperating.view.dealManage.GDealList', {
    extend: 'XMLifeOperating.view.general.CommonDealList',
    id: 'gDealList',
    xtype: 'gDealList',
    title: '订单管理',
    titleAlign: 'left',
    closable: true,
    store: 'Deal',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'Deal',
        dock: 'bottom',
        displayInfo: true
    }],
    tbar: [
        '查询范围', {
            xtype: 'datefield',
            name: 'beginTime',
            emptyText: '开始时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 3);
                date.setDate(1);
                return date;
            })(),
            maxValue: new Date(),
            value: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 3);
                return date;
            })(),
            format: 'Y-m-d',
            width: 100
        },
        '到', {
            xtype: 'datefield',
            name: 'endTime',
            emptyText: '结束时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 3);
                date.setDate(1);
                return date;
            })(),
            maxValue: new Date(),
            value: new Date(),
            format: 'Y-m-d',
            width: 100
        }, {
            xtype: 'button',
            itemId: 'getDealListByDate',
            text: '查询'
        }, {
            xtype: 'combobox',
            name: 'shopAread',
            itemId: 'shopAread',
            store: 'ShopArea',
            emptyText: '请选择中心',
            editable: false,
            displayField: 'name',
            valueField: 'id',
            hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
        }, {
            xtype: 'combobox',
            name: 'status',
            itemId: 'statusSearch',
            fieldLabel: '状态',
            labelWidth: 50,
            store: 'DealStatus',
            emptyText: '状态',
            labelAlign: 'right',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value'
        },
        '->', {
            xtype: 'textfield',
            emptyText: '输入搜索号码...',
            name: 'keyword',
            itemId: 'keyword',
            fieldLabel: '手机/订单号码',
            labelAlign: 'right'
        }, {
            xtype: 'button',
            itemId: 'dealSearch',
            text: '搜索'
        }
    ],
    viewConfig: {
        enableTextSelection: true
    },
    listeners: {
        onShowView: function(view, viewName) {
            if (XMLifeOperating.generic.Global.operating_type != 'center') {
                return;
            }
            if (XMLifeOperating.generic.Global.current_operating == -1) {
                alert('请先在右上角选择中心');
                return;
            }
            var combo = view.down('#shopAread');
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
        renderer: function() {
            return '<a href="javascript:;">转为问题订单</a>';
        }
    }, {
        text: '',
        itemId: 'showReturnProductBtn',
        menuDisabled: true,
        renderer: function(value, metadata, model) {
            return model.get('status') != 4 ? '--' : '<a href="javascript:;">退货</a>';
        }
    });

    this.prototype.columns = columns;
});
