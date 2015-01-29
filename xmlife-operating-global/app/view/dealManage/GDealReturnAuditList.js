Ext.define('XMLifeOperating.view.dealManage.GDealReturnAuditList', {
    extend: 'Ext.grid.Panel',
    id: 'gDealReturnAuditList',
    xtype: 'gDealReturnAuditList',
    title: '售后退货查看',
    titleAlign: 'left',
    closable: true,
    forceFit: 'true',
    store: 'ReturnGoodsAuditList',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'ReturnGoodsAuditList',
        dock: 'bottom',
        displayInfo: true
    }],
    tbar: [
        '查询范围', {
            xtype: 'datefield',
            itemId: 'startTime',
            name: 'beginTime',
            emptyText: '开始时间',
            minValue: (function() {
                var date = new Date();
                date.setFullYear(date.getFullYear() - 1);
                date.setDate(1);
                return date;
            })(),
            maxValue: (function() {
                var date = new Date();
                date.setDate(date.getDate());
                return date;
            })(),
            value: (function() {
                var date = new Date();
                return date;
            })(),
            format: 'Y-m-d',
            width: 100
        },
        '到', {
            xtype: 'datefield',
            itemId: 'endTime',
            name: 'endTime',
            emptyText: '结束时间',
            minValue: (function() {
                var date = new Date();
                date.setMonth(date.getMonth() - 3);
                date.setDate(1);
                return date;
            })(),
            maxValue: (function() {
                var date = new Date();
                date.setDate(date.getDate());
                return date;
            })(),
            value: (function() {
                var date = new Date();
                date.setDate(date.getDate());
                return date;
            })(),
            format: 'Y-m-d',
            width: 100
        }, {
            xtype: 'combobox',
            name: 'audit',
            itemId: 'rstatus',
            fieldLabel: '状态',
            labelWidth: 30,
            store: 'DealReturnCheckStatus',
            emptyText: '状态',
            labelAlign: 'right',
            editable: false,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value'
        }, {
            xtype: 'button',
            name: 'audit',
            itemId: 'queryBtn',
            text: '查询'
        }, {
            xtype: 'button',
            name: 'audit',
            itemId: 'batchpass',
            text: '批量通过'
        }, {
            xtype: 'button',
            name: 'refuse',
            itemId: 'batchrefuse',
            text: '批量拒绝'
        },
        '->', {
            xtype: 'textfield',
            emptyText: '输入订单号码...',
            name: 'keyword',
            itemId: 'keyword',
            fieldLabel: '订单号码',
            labelAlign: 'right',
            /* regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.PHONE,
             regexText: '请输入正确的手机号'*/
        }, {
            xtype: 'button',
            name: 'audit',
            itemId: 'getReturnSearch',
            text: '搜索'
        }
    ],
    selModel: Ext.create('Ext.selection.CheckboxModel', {
        mode: 'MULTI',
        checkOnly: true,
        allowDeselect: true,
        enableKeyNav: false,
        listeners: {
            beforeselect: function(cm, record, index, eOpts) {
                if (record.get('status') != 0) {
                    return false;
                }
            }
        }
    }),
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '长单号',
        dataIndex: 'dealId',
        itemId: 'longId',
        sortable: false,
        align: 'center',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return '<a href="javascript:void(0)">' + value + '</a>';
        }
    }, {
        text: '商品件数',
        dataIndex: 'num',
        align: 'center'
    }, {
        text: '申请提交者',
        dataIndex: 'creatorName',
        align: 'center'
    }, {
        text: '审核者',
        dataIndex: 'auditorName',
        align: 'center'
    }, {
        text: '提交时间',
        dataIndex: 'createTime',
        sortable: false,
        align: 'center',
        renderer: function(value) {
            var newTime = new Date(value);
            newDate = newTime.getFullYear() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getDate();
            return newDate;
        }
    }, {
        text: ' 状态',
        itemId: 'status',
        dataIndex: 'status',
        name: 'audit',
        menuDisabled: true,
        sortable: false,
        align: 'center',
        renderer: function(value) {
            var str = '';
            switch (value) {
                case 0:
                    str = '<button name="pass" >通过</button><button name="refuse">拒绝</button>'
                    break;
                case 1:
                    str = '已通过'
                    break;
                case 2:
                    str = '已拒绝'
                    break;
                case -1:
                    str = '已取消'
                    break;
            }
            return str;
        }
    }],
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
});
