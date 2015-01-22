Ext.define('XMLifeOperating.view.dealManage.GDealReturnCheckList', {
    extend: 'Ext.grid.Panel',
    id: 'gDealReturnCheckList',
    xtype: 'gDealReturnCheckList',
    title: '退货申请查看',
    titleAlign: 'left',
    closable: true,
    forceFit: 'true',
    store: 'ReturnGoodsApplyList',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        itemId: 'pagetoll',
        store: 'ReturnGoodsApplyList',
        dock: 'bottom',
        displayInfo: true
    }],
    tbar: [
        '查询范围:', {
            xtype: 'datefield',
            itemId: 'startTime',
            name: 'startTime',
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
        },
        /*{
                    xtype: 'combobox',
                    name: 'shopAread',
                    itemId: 'shopAread',
                    store: 'ShopArea',
                    emptyText: '请选择中心',
                    editable: false,
                    fieldLabel: '中心',
                    labelWidth: 30,
                    labelAlign: 'right',
                    //queryMode:'local',
                    displayField: 'name',
                    valueField: 'id',
                    hidden: (XMLifeOperating.generic.Global.operating_type == 'center')
                },*/
        {
            xtype: 'combobox',
            name: 'check',
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
            name:'check',
            itemId: 'queryBtn',
            text: '查询'
        },
        '->', {
            xtype: 'textfield',
            emptyText: '输入搜索号码...',
            name: 'keyword',
            itemId: 'keyword',
            fieldLabel: '手机/订单号码',
            labelAlign: 'right',
            /* regex: XMLifeOperating.generic.Global.VALIDATION_CONSTANTS.PHONE,
             regexText: '请输入正确的手机号'*/
        }, {
            xtype: 'button',
            name: 'check',
            itemId: 'getReturnSearch',
            text: '搜索'
        }
    ],
    columns: [{
        xtype: 'rownumberer',
        width: 50,
        align: 'center'
    }, {
        text: '长单号',
        dataIndex: 'dealId',
        sortable: false,
        align: 'center',
        renderer: function(value, metadata, model, rowIndex, colIndex, store) {
            return value
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
        name: 'status',
        dataIndex: 'status',
        menuDisabled: true,
        sortable: false,
        align: 'center',
        renderer: function(value) {
            var str = '';
            switch (value) {
                case 0:
                    str = '待审核 <button style="cursor:pointer" name ="cancel">取消</button>'
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
