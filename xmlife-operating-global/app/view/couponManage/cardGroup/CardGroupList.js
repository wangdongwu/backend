Ext.define('XMLifeOperating.view.couponManage.cardGroup.CardGroupList', {
    extend: 'Ext.grid.Panel',
    xtype: 'cardGroupList',
    store: 'CardGroup',
    id: 'cardGroupList',
    title: '卡包管理',
    titleAlign: 'left',
    closable: true,
    forceFit: true,
    tbar: [{
        xtype: 'button',
        text: '创建卡包',
        itemId: 'add',
    }, '->', {
        xtype: 'textfield',
        itemId: 'searchKeyWords'
    }, {
        xtype: 'button',
        text: '搜索',
        itemId: 'searchBtn'
    }, {
        xtype: 'combo',
        name: 'status',
        itemId: 'statusCombo',
        queryMode: 'local',
        triggerAction: 'all',
        emptyText: '',
        displayField: 'type',
        width: 120,
        margin: '0 5 0 5',
        valueField: 'value',
        store: Ext.create('Ext.data.Store', {
            fields: ['value', 'type'],
            data: [{
                "value": '0',
                "type": '在用'
            }, {
                "value": '1',
                "type": '过期'
            }, {
                "value": '2',
                "type": '即将开启'
            }],
        })
    }],
    columns: [{
            xtype: 'rownumberer',
            width: 50,
            align: 'center'
        }, {
            text: '编号',
            dataIndex: 'id',
            width: 100,
            sortable: true,
            align: 'center',
        }, {
            text: '名称',
            dataIndex: 'name',
            width: 100,
            sortable: false,
            align: 'center',
        }, {
            text: '优惠券数',
            dataIndex: 'num',
            width: 100,
            sortable: false,
            align: 'center'
        }, {
            text: '创建日期',
            dataIndex: 'gmtCreate',
            width: 100,
            sortable: false,
            align: 'center',
            renderer: function(value) {
                var date = new Date(value);
                return Ext.util.Format.date(date, "Y-m-d H:i:s");
            }
        }, {
            text: '创建者',
            dataIndex: 'createrName',
            width: 100,
            sortable: false,
            align: 'center',
        },

    ],
    viewConfig: {
        enableTextSelection : true 
    },


});