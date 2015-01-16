Ext.define('XMLifeOperating.view.operationManage.dealWaitAssignShopper.DealWaitAssignShopperList', {
    extend: 'XMLifeOperating.view.general.CommonDealList',
    xtype: 'dealwaitassignshopperlist',
    title: '今日未分配买手订单',
    store: 'DealWaitAssignShopper',
    id: 'dealWaitAssignShopperList',
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
        }, {
            xtype: 'button',
            itemId: 'oneKeyDistribute',
            text: '一键分配'
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
});