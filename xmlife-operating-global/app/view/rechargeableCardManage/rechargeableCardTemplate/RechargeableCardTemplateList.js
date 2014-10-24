Ext.define('XMLifeOperating.view.rechargeableCardManage.rechargeableCardTemplate.RechargeableCardTemplateList', {
    extend: 'Ext.grid.Panel',
    id: 'rechargeablecardtemplatelist',
    xtype: 'rechargeablecardtemplatelist',
    title: '充值卡模板管理',
    titleAlign: 'left',
    closable: true,
    forceFit: true,
    store: 'CardTemplate',
    tbar: [{
        xtype: 'button',
        text: '添加普通充值卡模板',
        itemId: 'addCardTemplate'
    }, {
        xtype: 'button',
        text: '添加分次返还卡模板',
        itemId: 'addReturnTemplate'
    }, ],
    columns: [{
            xtype: 'rownumberer'
        }, {
            text: '编号',
            dataIndex: 'id',
            width: 100,
            sortable: false,

        }, {
            text: '名称',
            dataIndex: 'name',
            width: 180,
            sortable: false,
        }, {
            text: '类型',
            dataIndex: 'type',
            width: 130,
            sortable: false,
            renderer: function(value) {
                if (value == 0) {
                    return '普通充值卡'
                } else if (value == 2) {
                    return '分次返还充值卡'
                }
            }
        }, {
            text: '面额/元',
            dataIndex: 'amount',
            width: 130,
            sortable: false,
            renderer: function(value) {
                return value / 100;
            }
        }, {
            text: '是否新手卡',
            dataIndex: 'newAccount',
            width: 130,
            sortable: false,
            align: 'center',
            renderer: function(value) {

                if (value == true) {
                    return '是';
                } else {
                    return '否';
                }
            }
        }, {
            text: '详情',
            width: 90,
            sortable: true,
            align: 'center',
            itemId: 'showDetail',
            renderer: function() {
                return '<a href="javascript:void(0)">查看</a>'
            }
        }
    ],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag and drop to reorder'
        }
    }
});